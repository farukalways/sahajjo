"use server";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "@/auth";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function registerUser(formData) {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim().toLowerCase();
  const password = formData.get("password")?.toString();
  const confirmPassword = formData.get("confirmPassword")?.toString();

  if (!name || !email || !password || !confirmPassword) {
    redirect("/register?error=missing");
  }
  if (password !== confirmPassword) {
    redirect("/register?error=mismatch");
  }
  if (password.length < 6) {
    redirect("/register?error=weak");
  }

  await dbConnect();

  const existing = await User.findOne({ email });
  if (existing) {
    redirect("/register?error=exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userNameParam = name ? encodeURIComponent(name) : "User";
  const defaultImage = `https://ui-avatars.com/api/?name=${userNameParam}&background=random&color=fff&size=256`;

  await User.create({
    name,
    email,
    password: hashedPassword,
    image: defaultImage,
  });
  let isSignInSuccessful = false;

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false, // 👈 Next-Auth এর অটো রিডাইরেক্ট বন্ধ করলাম
    });
    isSignInSuccessful = true;
  } catch (error) {
    // এখানে শুধু অথেন্টিকেশন এরর হ্যান্ডেল হবে
    redirect("/register?registered=1");
  }

  // 👈 try-catch ব্লকের বাইরে এসে সাকসেসফুল রিডাইরেক্ট করুন
  if (isSignInSuccessful) {
    redirect("/");
  }
}

export async function credentialsLogin(formData) {
  const email = formData.get("email")?.toString().trim().toLowerCase();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    redirect("/login?error=missing");
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      redirect("/login?error=invalid");
    }
    throw error;
  }
}

export async function handleSignOut() {
  "use server";
  await signOut({ redirectTo: "/" });
}

export async function oauthSignIn(provider) {
  await signIn(provider, { redirectTo: "/" });
}

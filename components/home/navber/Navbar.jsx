import { auth } from "@/auth";
import NavbarClient from "./NavbarClient";
import { handleSignOut } from "@/app/actions/authActions";

export default async function Navbar() {
  const session = await auth();
  // console.log(session);

  return (
    <NavbarClient user={session?.user || null} signOutAction={handleSignOut} />
  );
}

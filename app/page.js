import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
// import ActiveCases from "@/components/home/ActiveCases";
// import TransparencySection from "@/components/home/TransparencySection";
// import ImpactStats from "@/components/home/ImpactStats";
// import StoriesSection from "@/components/home/StoriesSection";
// import TestimonialsSection from "@/components/home/TestimonialsSection";
// import TrustSafety from "@/components/home/TrustSafety";
// import AboutSection from "@/components/home/AboutSection";
// import ContactSection from "@/components/home/ContactSection";
// import Footer from "@/components/home/Footer";

export const metadata = {
  title: "সাহায্য — আপনার ছোট সাহায্য বদলে দিতে পারে একটি জীবন",
  description:
    "অসহায় ও অসুস্থ মানুষদের জন্য স্বচ্ছ ও বিশ্বস্ত ফান্ড সংগ্রহ প্ল্যাটফর্ম",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      {/*<ActiveCases />
      <TransparencySection />
      <ImpactStats />
      <StoriesSection />
      <TestimonialsSection />
      <TrustSafety />
      <AboutSection />
      <ContactSection />
      <Footer /> */}
    </main>
  );
}

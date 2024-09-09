'use client'
import HeroSection from "@/components/HeroSection";
import WhyGlobalRoots from "@/components/WhyGlobalRoots";
import InteractiveGiftMatcher from "@/components/InteractiveGiftMatcher";
import FeatureHighlights from "@/components/FeatureHighlights";
import FeaturedContent from "@/components/FeaturedContent";
// import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white dark:bg-white dark:text-black">
      <HeroSection />
      <WhyGlobalRoots />
      <InteractiveGiftMatcher />
      {/* <CulturalEasterEggs /> */}
      <FeatureHighlights />
      <FeaturedContent />
      {/* <CallToAction /> */}
      <Footer />
    </div>
  );
}

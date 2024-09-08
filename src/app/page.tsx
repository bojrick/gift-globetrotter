'use client'
import HeroSection from "@/components/HeroSection";
import InteractiveWorldMap from "@/components/InteractiveWorldMap";
import FeatureHighlights from "@/components/FeatureHighlights";
import TestimonialSection from "@/components/TestimonialSection";
import FeaturedContent from "@/components/FeaturedContent";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white dark:bg-white dark:text-black">
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <InteractiveWorldMap />
      </div>
      <FeatureHighlights />
      <TestimonialSection />
      <FeaturedContent />
      <CallToAction />
      <Footer />
    </div>
  );
}

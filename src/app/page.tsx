import HeroSection from "@/components/HeroSection";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import GiftFinderQuiz from "@/components/GiftFinderQuiz";
import InteractiveWorldMap from "@/components/InteractiveWorldMap";
import FeaturedGifts from "@/components/FeaturedGifts";
import UserReviews from "@/components/UserReviews";
import TopCountriesPopup from "@/components/TopCountriesPopup";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedDestinations />
      <GiftFinderQuiz />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Gifts Around the World</h2>
        <InteractiveWorldMap />
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/gifts">Explore All Gift Ideas</Link>
          </Button>
        </div>
        <FeaturedGifts />
        <UserReviews />
      </div>
      <TopCountriesPopup />
    </div>
  );
}

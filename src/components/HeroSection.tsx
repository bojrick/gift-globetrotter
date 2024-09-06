import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to GiftGlobeTrotter</h1>
        <p className="text-xl mb-8">Your Passport to Perfect Presents</p>
        <Button size="lg" asChild>
          <Link href="/surprise-gift">Embark on Your Gift Quest</Link>
        </Button>
      </div>
      {/* Add an animated globe here */}
    </div>
  );
}
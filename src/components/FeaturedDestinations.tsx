import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

const destinations = [
  { name: 'Paris', slogan: "Eiffel in Love with Parisian Gifts?", image: "/images/paris.jpg" },
  { name: 'Tokyo', slogan: "Tech or Tradition, Tokyo Has It All!", image: "/images/tokyo.jpg" },
  { name: 'New York', slogan: "Big Apple Bites: Gifts That Never Sleep", image: "/images/newyork.jpg" },
];

export default function FeaturedDestinations() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Destinations</h2>
      <div className="flex overflow-x-auto space-x-4 p-4">
        {destinations.map((dest) => (
          <div key={dest.name} className="flex-none w-80 h-64 relative rounded-lg overflow-hidden">
            <Image src={dest.image} alt={dest.name} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-bold">{dest.name}</h3>
              <p className="text-white mb-2">{dest.slogan}</p>
              <Button asChild>
                <Link href={`/destination/${dest.name.toLowerCase()}`}>Explore {dest.name}</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
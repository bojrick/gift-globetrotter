import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

// Mock data for countries and their regions
const countries = [
  {
    name: "Japan",
    regions: ["Tokyo", "Kyoto", "Osaka", "Hokkaido"],
    mapCoordinates: { longitude: 138.2529, latitude: 36.2048 },
    gifts: [
      { name: "Kimono", region: "Kyoto" },
      { name: "Sake Set", region: "Tokyo" },
      { name: "Hokkaido Milk Cookies", region: "Hokkaido" },
    ]
  },
  {
    name: "Italy",
    regions: ["Rome", "Florence", "Venice", "Sicily"],
    mapCoordinates: { longitude: 12.5674, latitude: 41.8719 },
    gifts: [
      { name: "Murano Glass", region: "Venice" },
      { name: "Tuscan Olive Oil", region: "Florence" },
      { name: "Sicilian Ceramics", region: "Sicily" },
    ]
  },
  // Add more countries as needed
];

export default function GlobalGiftingGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Global Gifting Guide</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          Understanding cultural nuances is key to meaningful gift-giving. This guide will help you navigate the intricacies of gifting across different cultures and regions.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Country Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <div key={country.name} className="border p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">{country.name}</h3>
              <p className="mb-4">Explore gifting etiquette and regional specialties in {country.name}.</p>
              <Button asChild>
                <Link href={`/global-gifting-guide/${country.name.toLowerCase()}`}>Read More</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">General Gifting Tips</h2>
        <ul className="list-disc pl-5">
          <li>Research the cultural significance of colors and numbers</li>
          <li>Consider the occasion and your relationship with the recipient</li>
          <li>Be mindful of religious and cultural taboos</li>
          <li>When in doubt, opt for consumables or practical items</li>
        </ul>
      </section>
    </div>
  );
}
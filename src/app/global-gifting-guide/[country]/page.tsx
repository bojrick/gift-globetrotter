import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import InteractiveWorldMap from "@/components/InteractiveWorldMap";

// Mock data for countries and their regions (same as in the main page)
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

export default function CountryGiftingGuide({ params }: { params: { country: string } }) {
  const country = countries.find(c => c.name.toLowerCase() === params.country.toLowerCase());

  if (!country) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/global-gifting-guide" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Global Gifting Guide
      </Link>

      <h1 className="text-4xl font-bold mb-8">Gifting Guide: {country.name}</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Regional Overview</h2>
        <div className="h-[50vh] w-full mb-4">
          <InteractiveWorldMap 
            initialViewState={{
              longitude: country.mapCoordinates.longitude,
              latitude: country.mapCoordinates.latitude,
              zoom: 4
            }}
            markers={country.regions.map(region => ({
              name: region,
              longitude: country.mapCoordinates.longitude,
              latitude: country.mapCoordinates.latitude,
            }))}
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Regional Gift Guide</h2>
        {country.regions.map((region) => (
          <div key={region} className="mb-8">
            <h3 className="text-xl font-medium mb-2">{region}</h3>
            <ul className="list-disc pl-5">
              {country.gifts.filter(gift => gift.region === region).map((gift, index) => (
                <li key={index}>{gift.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Gifting Etiquette in {country.name}</h2>
        <p>
          When giving gifts in {country.name}, it&apos;s important to consider...
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Popular Gift Ideas</h2>
        <ul className="list-disc pl-5">
          {country.gifts.map((gift, index) => (
            <li key={index}>{gift.name} - popular in {gift.region}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
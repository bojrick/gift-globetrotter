"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const topCountries = [
  { name: 'China', population: '1,439,323,776', slug: 'china' },
  { name: 'India', population: '1,380,004,385', slug: 'india' },
  { name: 'United States', population: '331,002,651', slug: 'usa' },
  { name: 'Indonesia', population: '273,523,615', slug: 'indonesia' },
  { name: 'Pakistan', population: '220,892,340', slug: 'pakistan' },
  { name: 'Brazil', population: '212,559,417', slug: 'brazil' },
  { name: 'Nigeria', population: '206,139,589', slug: 'nigeria' },
  { name: 'Bangladesh', population: '164,689,383', slug: 'bangladesh' },
  { name: 'Russia', population: '145,934,462', slug: 'russia' },
  { name: 'Mexico', population: '128,932,753', slug: 'mexico' },
];

const TopCountriesPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="fixed bottom-4 right-4 z-50">
        Top 10 Countries
      </Button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Top 10 Countries by Population</CardTitle>
              <Button onClick={() => setIsOpen(false)} className="absolute top-2 right-2">
                Close
              </Button>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {topCountries.map((country) => (
                  <li key={country.slug} className="flex justify-between items-center">
                    <Link href={`/country/${country.slug}`} className="hover:underline">
                      {country.name}
                    </Link>
                    <span className="text-sm text-gray-500">{country.population}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default TopCountriesPopup;
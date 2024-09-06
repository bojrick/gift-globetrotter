"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

// Mock data for gifts
const giftIdeas = [
  { id: 1, name: "Japanese Tea Set", country: "Japan", city: "Tokyo", relationship: "Friend", occasion: "Birthday", price: 50 },
  { id: 2, name: "Eiffel Tower Model", country: "France", city: "Paris", relationship: "Partner", occasion: "Anniversary", price: 30 },
  { id: 3, name: "New York Yankees Cap", country: "USA", city: "New York", relationship: "Sibling", occasion: "Christmas", price: 25 },
  // Add more gift ideas...
];

const countries = ["Japan", "France", "USA", "Italy", "Germany"];
const cities = ["Tokyo", "Paris", "New York", "Rome", "Berlin"];
const relationships = ["Friend", "Partner", "Sibling", "Parent", "Colleague"];
const occasions = ["Birthday", "Anniversary", "Christmas", "Wedding", "Graduation"];

export default function GiftIdeas() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState({
    country: searchParams.get('country') || '',
    city: searchParams.get('city') || '',
    relationship: searchParams.get('relationship') || '',
    occasion: searchParams.get('occasion') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
  });

  const filteredGifts = giftIdeas.filter(gift => 
    (!filters.country || gift.country === filters.country) &&
    (!filters.city || gift.city === filters.city) &&
    (!filters.relationship || gift.relationship === filters.relationship) &&
    (!filters.occasion || gift.occasion === filters.occasion) &&
    (!filters.minPrice || gift.price >= Number(filters.minPrice)) &&
    (!filters.maxPrice || gift.price <= Number(filters.maxPrice))
  );

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gift Ideas</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 space-y-4">
          <Select onValueChange={(value) => handleFilterChange('country', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map(country => (
                <SelectItem key={country} value={country}>{country}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => handleFilterChange('city', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent>
              {cities.map(city => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => handleFilterChange('relationship', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Relationship" />
            </SelectTrigger>
            <SelectContent>
              {relationships.map(rel => (
                <SelectItem key={rel} value={rel}>{rel}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => handleFilterChange('occasion', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Occasion" />
            </SelectTrigger>
            <SelectContent>
              {occasions.map(occ => (
                <SelectItem key={occ} value={occ}>{occ}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input 
            type="number" 
            placeholder="Min Price" 
            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
          />
          <Input 
            type="number" 
            placeholder="Max Price" 
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
          />
        </div>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGifts.map(gift => (
              <Card key={gift.id}>
                <CardHeader>
                  <CardTitle>{gift.name}</CardTitle>
                  <CardDescription>{gift.city}, {gift.country}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>For: {gift.relationship}</p>
                  <p>Occasion: {gift.occasion}</p>
                  <p className="font-bold mt-2">Price: ${gift.price}</p>
                  <Button className="mt-4" asChild>
                    <Link href={`/gift/${gift.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
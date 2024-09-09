'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for travel tales
const travelTales = [
  { id: 1, title: "A Unexpected Gift in Marrakech", excerpt: "When Sarah visited the bustling markets of Marrakech...", category: "Cultural Exchange", region: "Africa" },
  { id: 2, title: "The Perfect Souvenir from Paris", excerpt: "John's quest for the ideal Parisian memento led him to...", category: "City Adventure", region: "Europe" },
  { id: 3, title: "Handcrafted Memories in Bali", excerpt: "Emma discovered the art of traditional Balinese crafts...", category: "Artisan Crafts", region: "Asia" },
  // Add more tales as needed
];

const categories = ["All", "Cultural Exchange", "City Adventure", "Artisan Crafts", "Nature Exploration"];
const regions = ["All", "Africa", "Europe", "Asia", "North America", "South America", "Oceania"];

export default function TravelTales() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredTales = travelTales.filter(tale => 
    tale.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "All" || tale.category === selectedCategory) &&
    (selectedRegion === "All" || tale.region === selectedRegion)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Travel Tales</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar for navigation and filtering */}
        <aside className="w-full md:w-1/4">
          <Input 
            placeholder="Search tales..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          <Select onValueChange={setSelectedCategory} defaultValue={selectedCategory}>
            <SelectTrigger className="mb-4">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={setSelectedRegion} defaultValue={selectedRegion}>
            <SelectTrigger className="mb-4">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map(region => (
                <SelectItem key={region} value={region}>{region}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </aside>

        {/* Main content area */}
        <main className="flex-1">
          {filteredTales.map(tale => (
            <div key={tale.id} className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{tale.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{tale.excerpt}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{tale.category}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{tale.region}</span>
                </div>
                <Button asChild>
                  <Link href={`/travel-tales/${tale.id}`}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* Submit Your Story */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Share Your Story</h2>
        <p className="mb-4">Have a unique travel gift experience? We&apos;d love to hear about it!</p>
        <Button asChild>
          <Link href="/submit-story">Submit Your Story</Link>
        </Button>
      </section>
    </div>
  );
}
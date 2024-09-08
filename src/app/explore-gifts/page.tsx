"use client"

import { useState, useEffect } from 'react';
import GiftFilter from '@/components/GiftFilter';
import GiftCard from '@/components/GiftCard';
import { Button } from "@/components/ui/button";

type Gift = {
  id: string;
  name: string;
  description: string;
  category: string;
  origin: string;
  price: number;
  image: string;
  relationship: string;
};

type FilterItem = {
  id: string;
  label: string;
};

export default function ExploreGifts() {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [filteredGifts, setFilteredGifts] = useState<Gift[]>([]);
  const [categories, setCategories] = useState<FilterItem[]>([]);
  const [origins, setOrigins] = useState<FilterItem[]>([]);
  const [relationships, setRelationships] = useState<FilterItem[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
  const [selectedRelationships, setSelectedRelationships] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetch('/gifts.json')
      .then(response => response.json())
      .then((data: Gift[]) => {
        setGifts(data);
        setFilteredGifts(data);
        setCategories(Array.from(new Set(data.map(gift => gift.category))).map(category => ({ id: category, label: category })));
        setOrigins(Array.from(new Set(data.map(gift => gift.origin))).map(origin => ({ id: origin, label: origin })));
        setRelationships(Array.from(new Set(data.map(gift => gift.relationship))).map(relationship => ({ id: relationship, label: relationship })));
      });
  }, []);

  useEffect(() => {
    const newFilteredGifts = gifts.filter(gift => 
      (selectedCategories.length === 0 || selectedCategories.includes(gift.category)) &&
      (selectedOrigins.length === 0 || selectedOrigins.includes(gift.origin)) &&
      (selectedRelationships.length === 0 || selectedRelationships.includes(gift.relationship))
    );
    setFilteredGifts(newFilteredGifts);
  }, [selectedCategories, selectedOrigins, selectedRelationships, gifts]);

  const handleFilterChange = (type: string, value: string) => {
    const updateFilter = (current: string[]) => 
      current.includes(value) ? current.filter(item => item !== value) : [...current, value];

    switch (type) {
      case 'category':
        setSelectedCategories(updateFilter(selectedCategories));
        break;
      case 'origin':
        setSelectedOrigins(updateFilter(selectedOrigins));
        break;
      case 'relationship':
        setSelectedRelationships(updateFilter(selectedRelationships));
        break;
    }
  };

  return (
    <div className="container mx-auto py-6 px-4 sm:py-12 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Explore Unique Gifts</h1>
      <Button 
        className="mb-4 sm:hidden w-full" 
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </Button>
      <div className="flex flex-col sm:flex-row">
        <div className={`w-full sm:w-64 mb-4 sm:mb-0 sm:mr-8 ${showFilters ? '' : 'hidden sm:block'}`}>
          <GiftFilter 
            title="Filter by Category" 
            items={categories} 
            selected={selectedCategories} 
            onChange={(value) => handleFilterChange('category', value)} 
          />
          <GiftFilter 
            title="Filter by Origin" 
            items={origins} 
            selected={selectedOrigins} 
            onChange={(value) => handleFilterChange('origin', value)} 
          />
          <GiftFilter 
            title="Filter by Relationship" 
            items={relationships} 
            selected={selectedRelationships} 
            onChange={(value) => handleFilterChange('relationship', value)} 
          />
        </div>
        <div className="flex-1">
          {filteredGifts.length === 0 ? (
            <p className="text-center text-lg">No gifts match your current filters. Try adjusting your selection.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredGifts.map((gift) => (
                <GiftCard key={gift.id} {...gift} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
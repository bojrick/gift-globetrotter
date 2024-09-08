import { useState, useEffect } from 'react';

export type Gift = {
  id: string;
  name: string;
  description: string;
  category: string;
  origin: string;
  price: number;
  image: string;
  relationship: string;
};

export function useGifts() {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [filteredGifts, setFilteredGifts] = useState<Gift[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [origins, setOrigins] = useState<string[]>([]);
  const [relationships, setRelationships] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
  const [selectedRelationships, setSelectedRelationships] = useState<string[]>([]);

  useEffect(() => {
    fetch('/gifts.json')
      .then(response => response.json())
      .then((data: Gift[]) => {
        setGifts(data);
        setFilteredGifts(data);
        setCategories(Array.from(new Set(data.map(gift => gift.category))));
        setOrigins(Array.from(new Set(data.map(gift => gift.origin))));
        setRelationships(Array.from(new Set(data.map(gift => gift.relationship))));
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
        setSelectedCategories(updateFilter);
        break;
      case 'origin':
        setSelectedOrigins(updateFilter);
        break;
      case 'relationship':
        setSelectedRelationships(updateFilter);
        break;
    }
  };

  return {
    gifts,
    filteredGifts,
    categories,
    origins,
    relationships,
    selectedCategories,
    selectedOrigins,
    selectedRelationships,
    handleFilterChange,
  };
}
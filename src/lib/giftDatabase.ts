export type Gift = {
  id: string;
  name: string;
  description: string;
  price: number;
  region: string;
  category: string;
  uniquenessScore: number;
  size: number;
};

export const mockGiftDatabase: Gift[] = [
  {
    id: "1",
    name: "Japanese Tea Set",
    description: "A traditional Japanese tea set with matcha whisk",
    price: 80,
    region: "Asia",
    category: "Home & Kitchen",
    uniquenessScore: 4,
    size: 3,
  },
  {
    id: "2",
    name: "Australian Boomerang",
    description: "Hand-painted authentic Australian boomerang",
    price: 40,
    region: "Oceania",
    category: "Sports & Outdoors",
    uniquenessScore: 5,
    size: 2,
  },
  // Add more gift items here...
];

export function searchGifts(query: string): Gift[] {
  return mockGiftDatabase.filter(gift => 
    gift.name.toLowerCase().includes(query.toLowerCase()) ||
    gift.description.toLowerCase().includes(query.toLowerCase())
  );
}
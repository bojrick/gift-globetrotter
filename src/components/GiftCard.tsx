'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { PlusCircle, ExternalLink } from 'lucide-react'
import Link from 'next/link';

type GiftProps = {
  id: string;
  name: string;
  description: string;
  category: string;
  origin: string;
  price: number;
  minPrice?: number;
  maxPrice?: number;
  image: string;
  relationship: string;
};

// This is a mock function. Replace it with actual implementation to add to list.
const addToList = (giftId: string, listName: string) => {
  console.log(`Added gift ${giftId} to list: ${listName}`);
  // Implement actual logic here
};

export default function GiftCard({ id, name, description, price, minPrice, maxPrice, image, origin, category, relationship }: GiftProps) {
  const [isOpen, setIsOpen] = useState(false);

  const lists = ['Wishlist', 'Gift Ideas', 'Favorites']; // Replace with actual lists

  const renderPrice = () => {
    if (minPrice !== undefined && maxPrice !== undefined) {
      return `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;
    }
    return `$${price.toFixed(2)}`;
  };

  return (
    <Card className="h-full overflow-hidden transition-transform hover:scale-105">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative h-48">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-3 flex flex-col flex-grow">
          <h3 className="font-semibold text-base mb-1 line-clamp-2">{name}</h3>
          <p className="text-xs text-gray-600 mb-2 line-clamp-2 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-1 mb-2">
            <Badge variant="secondary" className="text-xs">{category}</Badge>
            <Badge variant="outline" className="text-xs">{origin}</Badge>
            <Badge className="text-xs">{relationship}</Badge>
          </div>
          <div className="flex justify-between items-center mt-auto">
            <p className="font-bold text-base">{renderPrice()}</p>
            <div className="flex items-center space-x-2">
              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(true);
                    }}
                  >
                    <PlusCircle size={16} className="mr-1" /> Add
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Add to List</h4>
                    {lists.map((list) => (
                      <Button 
                        key={list} 
                        variant="ghost" 
                        className="w-full justify-start"
                        onClick={() => {
                          addToList(id, list);
                          setIsOpen(false);
                        }}
                      >
                        {list}
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              <Link href={`/product/${id}`} passHref>
                <Button size="sm" variant="outline">
                  <ExternalLink size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
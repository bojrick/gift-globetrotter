'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

const gifts = [
  {
    id: 1,
    name: "Handcrafted Wooden Puzzle Box",
    category: "Home Decor",
    origin: "Japan",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
    relationship: "Friend"
  },
  {
    id: 2,
    name: "Artisanal Chocolate Collection",
    category: "Food & Beverage",
    origin: "Belgium",
    price: 34.95,
    image: "/placeholder.svg?height=200&width=200",
    relationship: "Family"
  },
  {
    id: 3,
    name: "Hand-painted Silk Scarf",
    category: "Fashion",
    origin: "India",
    price: 79.99,
    image: "/placeholder.svg?height=200&width=200",
    relationship: "Partner"
  },
  {
    id: 4,
    name: "Vintage Leather-bound Journal",
    category: "Stationery",
    origin: "Italy",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=200",
    relationship: "Colleague"
  },
  {
    id: 5,
    name: "Aromatherapy Essential Oil Set",
    category: "Wellness",
    origin: "France",
    price: 54.95,
    image: "/placeholder.svg?height=200&width=200",
    relationship: "Self"
  },
  {
    id: 6,
    name: "Handblown Glass Vase",
    category: "Home Decor",
    origin: "Czech Republic",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
    relationship: "Friend"
  }
]

const categories = Array.from(new Set(gifts.map(gift => gift.category)))
const origins = Array.from(new Set(gifts.map(gift => gift.origin)))
const relationships = Array.from(new Set(gifts.map(gift => gift.relationship)))

export default function GiftPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([])
  const [selectedRelationships, setSelectedRelationships] = useState<string[]>([])

  const filteredGifts = gifts.filter(gift => 
    (selectedCategories.length === 0 || selectedCategories.includes(gift.category)) &&
    (selectedOrigins.length === 0 || selectedOrigins.includes(gift.origin)) &&
    (selectedRelationships.length === 0 || selectedRelationships.includes(gift.relationship))
  )

  const FilterSection = ({ title, items, selected, setSelected }: {
    title: string;
    items: string[];
    selected: string[];
    setSelected: (items: string[]) => void;
  }) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {items.map(item => (
        <div key={item} className="flex items-center space-x-2 mb-1">
          <Checkbox 
            id={item} 
            checked={selected.includes(item)}
            onCheckedChange={(checked) => {
              setSelected(
                checked
                  ? [...selected, item]
                  : selected.filter(i => i !== item)
              )
            }}
          />
          <Label htmlFor={item}>{item}</Label>
        </div>
      ))}
    </div>
  )

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Explore Unique Gifts</h2>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-64 mb-8 md:mb-0 md:mr-8">
          <FilterSection title="Filter by Category" items={categories} selected={selectedCategories} setSelected={setSelectedCategories} />
          <FilterSection title="Filter by Origin" items={origins} selected={selectedOrigins} setSelected={setSelectedOrigins} />
          <FilterSection title="Filter by Relationship" items={relationships} selected={selectedRelationships} setSelected={setSelectedRelationships} />
        </div>

        {/* Main content */}
        <div className="flex-1">
          {filteredGifts.length === 0 ? (
            <p className="text-center text-lg">No gifts match your current filters. Try adjusting your selection.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGifts.map((gift) => (
                <Link href={`/product/${gift.id}`} key={gift.id} className="no-underline">
                  <Card className="h-full overflow-hidden transition-transform hover:scale-105">
                    <CardContent className="p-0">
                      <div className="relative h-48">
                        <Image
                          src={gift.image}
                          alt={gift.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{gift.name}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary">{gift.category}</Badge>
                          <Badge variant="outline">{gift.origin}</Badge>
                          <Badge>{gift.relationship}</Badge>
                        </div>
                        <p className="font-bold text-lg">${gift.price.toFixed(2)}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
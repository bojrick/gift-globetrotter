"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gift } from "@/lib/giftDatabase";

const mockFavorites: Gift[] = [
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
  // Add more mock favorites
];

const mockSearchHistory = [
  "Gifts for mom who loves gardening",
  "Unique souvenirs from France",
  // Add more mock search history items
];

export default function Dashboard() {
  const [favorites] = useState<Gift[]>(mockFavorites);
  const [searchHistory] = useState<string[]>(mockSearchHistory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
      <Tabs defaultValue="favorites">
        <TabsList>
          <TabsTrigger value="favorites">Favorite Gifts</TabsTrigger>
          <TabsTrigger value="history">Search History</TabsTrigger>
        </TabsList>
        <TabsContent value="favorites">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((gift) => (
              <Card key={gift.id}>
                <CardHeader>
                  <CardTitle>{gift.name}</CardTitle>
                  <CardDescription>From {gift.region}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{gift.description}</p>
                  <p className="font-bold mt-2">Price: ${gift.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Recent Searches</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {searchHistory.map((search, index) => (
                  <li key={index}>{search}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
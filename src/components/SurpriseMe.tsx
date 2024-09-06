"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "@/lib/giftDatabase";

const SurpriseMe = () => {
  const [surprise, setSurprise] = useState<Gift | null>(null);
  const [loading, setLoading] = useState(false);

  const generateSurprise = () => {
    setLoading(true);
    // Simulating an API call
    setTimeout(() => {
      const surpriseGift: Gift = {
        id: "surprise1",
        name: "Mystery Box from Tokyo",
        description: "A curated box of unique items from the heart of Tokyo",
        price: 50,
        region: "Asia",
        category: "Mystery",
        uniquenessScore: 5,
        size: 3,
      };
      setSurprise(surpriseGift);
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Surprise Me!</CardTitle>
        <CardDescription>Get a random gift suggestion from around the world</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={generateSurprise} className="w-full mb-4" disabled={loading}>
          {loading ? "Generating Surprise..." : "Generate Surprise Gift"}
        </Button>
        {surprise && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">{surprise.name}</h3>
            <p className="text-sm text-gray-600">{surprise.description}</p>
            <p className="mt-2 font-bold">Price: ${surprise.price}</p>
            <p>Region: {surprise.region}</p>
            <p>Uniqueness: {surprise.uniquenessScore}/5</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SurpriseMe;
"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { searchGifts, Gift } from '@/lib/giftDatabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Gift[]>([]);

  useEffect(() => {
    setResults(searchGifts(query));
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Results for "{query}"</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((gift) => (
          <Link href={`/gift/${gift.id}`} key={gift.id}>
            <Card>
              <CardHeader>
                <CardTitle>{gift.name}</CardTitle>
                <CardDescription>From {gift.region}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{gift.description}</p>
                <p className="font-bold mt-2">Price: ${gift.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      {results.length === 0 && (
        <p>No results found. Try a different search term.</p>
      )}
    </div>
  );
}
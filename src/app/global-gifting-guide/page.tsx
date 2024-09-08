import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function GlobalGiftingGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Global Gifting Guide</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          Understanding cultural nuances is key to meaningful gift-giving. This guide will help you navigate the intricacies of gifting across different cultures.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Country Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example country guide card */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Japan</h3>
            <p className="mb-4">Gift-giving etiquette in Japan...</p>
            <Button asChild>
              <Link href="/global-gifting-guide/japan">Read More</Link>
            </Button>
          </div>
          {/* Add more country guide cards here */}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">General Gifting Tips</h2>
        <ul className="list-disc pl-5">
          <li>Research the cultural significance of colors and numbers</li>
          <li>Consider the occasion and your relationship with the recipient</li>
          <li>Be mindful of religious and cultural taboos</li>
          <li>When in doubt, opt for consumables or practical items</li>
        </ul>
      </section>
    </div>
  );
}
import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function TravelTales() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Travel Tales</h1>

      {/* Featured Story */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Story</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-2">A Unexpected Gift in Marrakech</h3>
          <p className="mb-4">When Sarah visited the bustling markets of Marrakech...</p>
          <Button asChild>
            <Link href="/travel-tales/unexpected-gift-marrakech">Read More</Link>
          </Button>
        </div>
      </section>

      {/* Story Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">More Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example story card */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2">The Perfect Souvenir from Paris</h3>
            <p className="mb-4">John&apos;s quest for the ideal Parisian memento led him to...</p>
            <Button asChild variant="outline">
              <Link href="/travel-tales/perfect-souvenir-paris">Read Story</Link>
            </Button>
          </div>
          {/* Add more story cards here */}
        </div>
      </section>

      {/* Submit Your Story */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Share Your Story</h2>
        <p className="mb-4">Have a unique travel gift experience? We&apos;d love to hear about it!</p>
        <Button asChild>
          <Link href="/submit-story">Submit Your Story</Link>
        </Button>
      </section>
    </div>
  );
}
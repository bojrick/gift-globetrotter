import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

// Mock data for a single travel tale
const travelTale = {
  id: 1,
  title: "A Unexpected Gift in Marrakech",
  author: "Sarah Thompson",
  date: "June 15, 2023",
  content: `
    <p>When I first stepped into the bustling souks of Marrakech, I was overwhelmed by the vibrant colors, the aromatic spices, and the constant hum of activity. Little did I know that this sensory overload would lead me to one of the most meaningful gifts I've ever received.</p>
    
    <p>As I wandered through the narrow alleys, my eyes were drawn to a small shop tucked away in a corner. The owner, an elderly man named Hassan, greeted me with a warm smile. His shop was filled with intricate metalwork and beautiful lanterns.</p>
    
    <p>Hassan noticed my interest in a particular lantern, its delicate filigree casting mesmerizing shadows. He began to tell me the story of how his grandfather taught him the art of metalworking, passing down techniques that had been in their family for generations.</p>
    
    <p>Touched by his story and the beauty of the lantern, I decided to purchase it. But as Hassan carefully wrapped it, he paused and reached for something on a high shelf. It was a small, unassuming metal box.</p>
    
    <p>"This," he said, placing it in my hands, "is a gift. It was the first piece my grandfather helped me create. I've been waiting for the right person to give it to – someone who appreciates the story behind the craft."</p>
    
    <p>I was speechless. This unexpected gift, carrying years of family history and craftsmanship, was more valuable than anything I could have bought. It serves as a constant reminder of the connections we can make across cultures and generations, all through the simple act of sharing our stories and traditions.</p>
    
    <p>Now, whenever I light the lantern and open that small metal box, I'm transported back to that hidden corner of Marrakech, reminded of the unexpected gifts that travel can bring – not just in objects, but in the stories and connections we make along the way.</p>
  `,
  image: "/images/marrakech-gift.jpg",
  category: "Cultural Exchange",
  region: "Africa"
};

export default function TravelTalePage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the tale based on the ID
  // For this example, we'll just use our mock data
  if (params.id !== '1') {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/travel-tales" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Travel Tales
      </Link>
      
      <article className="prose lg:prose-xl dark:prose-invert mx-auto">
        <h1>{travelTale.title}</h1>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <span>{travelTale.author}</span>
          <span className="mx-2">•</span>
          <span>{travelTale.date}</span>
        </div>
        
        <Image 
          src={travelTale.image} 
          alt={travelTale.title}
          width={800}
          height={400}
          className="rounded-lg mb-6"
        />
        
        <div dangerouslySetInnerHTML={{ __html: travelTale.content }} />
        
        <div className="mt-6">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{travelTale.category}</span>
          <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{travelTale.region}</span>
        </div>
      </article>
      
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4">Inspired by this story?</h2>
        <p className="mb-4">Share your own unique travel gift experience with our community.</p>
        <Button asChild>
          <Link href="/submit-story">Submit Your Story</Link>
        </Button>
      </div>
    </div>
  );
}
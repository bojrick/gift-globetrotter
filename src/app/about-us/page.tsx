import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Global Roots</h1>

      {/* Mission Statement */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          At Global Roots, we believe that every gift tells a story. Our mission is to connect 
          people across cultures through the art of thoughtful gifting. We aim to inspire 
          global understanding, one unique present at a time.
        </p>
      </section>

      {/* Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example team member */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image 
                src="/path-to-image.jpg" 
                alt="Team Member Name" 
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-medium">Jane Doe</h3>
            <p>Founder & Cultural Explorer</p>
          </div>
          {/* Add more team members here */}
        </div>
      </section>

      {/* Philosophy */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
        <p className="mb-4">
          We believe that gifting is a universal language of love and appreciation. By 
          sharing unique gifts from around the world, we hope to foster cultural 
          exchange, promote global artisans, and create lasting connections between 
          people of diverse backgrounds.
        </p>
      </section>
    </div>
  );
}
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "I found the perfect gift for my family back home, and it felt like I brought a piece of my journey to them!",
    author: "Maria",
    role: "Traveler",
    avatar: "/images/avatars/maria.jpg",
    twitter: "@maria_traveler"
  },
  {
    quote: "Global Roots helped me discover unique gifts that truly represent the cultures I've experienced.",
    author: "John",
    role: "Digital Nomad",
    avatar: "/images/avatars/john.jpg",
    twitter: "@john_nomad"
  },
  {
    quote: "The gifting guide was a lifesaver when I needed to find appropriate gifts for my international colleagues.",
    author: "Sarah",
    role: "Business Executive",
    avatar: "/images/avatars/sarah.jpg",
    twitter: "@sarah_exec"
  }
];

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-black text-white dark:bg-white dark:text-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="relative h-48 sm:h-40">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center text-xl italic absolute w-full"
            >
              &quot;{testimonials[currentTestimonial].quote}&quot;
              <footer className="text-sm mt-2 text-gray-300 dark:text-gray-700">
                - {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].role}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <motion.div 
          className="absolute top-4 right-4 flex items-center space-x-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={testimonials[currentTestimonial].avatar}
            alt={testimonials[currentTestimonial].author}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-sm">{testimonials[currentTestimonial].twitter}</span>
        </motion.div>
      </div>
      <div className="absolute inset-0 opacity-5 bg-[url('/images/starfield.png')]"></div>
    </section>
  );
}
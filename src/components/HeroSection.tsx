"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const mainPhrases = [
  "From Earth to Everywhere, One Gift at a Time",
  "Connecting Cultures Through Thoughtful Gifts",
  "Bridging Worlds with Meaningful Presents",
  "Exploring Global Traditions, One Gift at a Time",
  "Uniting Hearts Across Borders with Unique Gifts"
];

const subPhrases = [
  "From Every Corner of Earth, Gifts That Tell a Story.",
  "Bringing the World's Wonders to Your Doorstep.",
  "Gifts That Travel, Memories That Last.",
  "Connect Cultures, One Gift at a Time.",
  "Discover the World, One Gift at a Time.",
  "Gifts That Speak a Thousand Languages.",
  "From Distant Lands, Gifts That Bind.",
  "Explore, Gift, Repeat.",
  "A World of Gifts at Your Fingertips.",
  "Gift the World, One Culture at a Time."
];

export default function HeroSection() {
  const [currentMainPhrase, setCurrentMainPhrase] = useState(0);
  const [currentSubPhrase, setCurrentSubPhrase] = useState(0);

  useEffect(() => {
    const mainInterval = setInterval(() => {
      setCurrentMainPhrase((prev) => (prev + 1) % mainPhrases.length);
    }, 5000);

    const subInterval = setInterval(() => {
      setCurrentSubPhrase((prev) => (prev + 1) % subPhrases.length);
    }, 5000);

    return () => {
      clearInterval(mainInterval);
      clearInterval(subInterval);
    };
  }, []);

  return (
    <div className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentMainPhrase}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {mainPhrases[currentMainPhrase]}
          </motion.h1>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={currentSubPhrase}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {subPhrases[currentSubPhrase]}
          </motion.p>
        </AnimatePresence>
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
          <Button size="lg" asChild className="bg-white text-black hover:bg-gray-200">
            <Link href="/explore-gifts">Explore Gifts</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black">
            <Link href="/submit-gift">Submit a Gift Idea</Link>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black dark:to-white opacity-50"></div>
    </div>
  );
}
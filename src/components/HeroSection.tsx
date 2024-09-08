"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SubmitGiftForm from './SubmitGiftForm';

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
    <div className="relative min-h-[70vh] flex items-center justify-center bg-black text-white dark:bg-white dark:text-black py-8">
      <div className="text-center z-10 px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentMainPhrase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-bold mb-4"
          >
            {mainPhrases[currentMainPhrase]}
          </motion.h1>
        </AnimatePresence>
        <div className="h-20 mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSubPhrase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-2xl text-gray-300 dark:text-gray-700"
            >
              {subPhrases[currentSubPhrase]}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" asChild className="bg-white text-black border-2 border-white hover:bg-gray-100 dark:bg-black dark:text-white dark:border-black dark:hover:bg-gray-900">
            <Link href="/explore-gifts">Start Exploring</Link>
          </Button>
          <SubmitGiftForm />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black dark:to-white opacity-50"></div>
    </div>
  );
}
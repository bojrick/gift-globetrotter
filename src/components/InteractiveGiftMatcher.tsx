'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Gift {
  name: string;
  culture: string;
  description: string;
  icon: string;
}

const gifts: Gift[] = [
  { name: "Traditional Tea Set", culture: "Japan", description: "Experience the serenity of a Japanese tea ceremony.", icon: "🍵" },
  { name: "Hand-woven Poncho", culture: "Peru", description: "Wrap yourself in the vibrant colors of Peruvian textiles.", icon: "🧵" },
  { name: "Carved Wooden Mask", culture: "Africa", description: "Display the rich storytelling tradition of African art.", icon: "🎭" },
  { name: "Matryoshka Doll", culture: "Russia", description: "Discover the charm of nested Russian dolls.", icon: "🪆" },
];

export default function InteractiveGiftMatcher() {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleGiftSelect = (gift: Gift) => {
    setSelectedGift(gift);
    setIsRevealed(false);
  };

  const revealCulture = () => {
    setIsRevealed(true);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-teal-50 to-teal-100 text-teal-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-8 text-center">Discover Cultural Treasures</h2>
        <p className="text-xl mb-12 text-center text-teal-700 max-w-3xl mx-auto leading-relaxed">
          Explore our curated selection of global gifts and guess their cultural origins. Each item tells a unique story from around the world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {gifts.map((gift) => (
            <motion.div
              key={gift.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-6 rounded-lg cursor-pointer ${
                selectedGift === gift ? 'bg-teal-200 shadow-lg' : 'bg-white shadow'
              }`}
              onClick={() => handleGiftSelect(gift)}
            >
              <div className="text-4xl mb-4">{gift.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{gift.name}</h3>
              <p className="text-sm text-teal-600">{gift.description}</p>
            </motion.div>
          ))}
        </div>
        {selectedGift && (
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">You selected: {selectedGift.name}</h3>
            {isRevealed ? (
              <p className="text-xl mb-4">
                This gift originates from <span className="font-bold">{selectedGift.culture}</span>!
              </p>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 text-white px-6 py-3 rounded-full font-semibold"
                onClick={revealCulture}
              >
                Reveal Origin
              </motion.button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
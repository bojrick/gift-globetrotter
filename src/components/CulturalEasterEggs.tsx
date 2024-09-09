'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const culturalFacts = [
  { icon: "🎁", fact: "In Japan, the art of wrapping gifts is as important as the gift itself. It's like unwrapping a piece of art!", country: "Japan" },
  { icon: "🍷", fact: "In France, bringing wine to a dinner party might imply the host's wine isn't good enough. Stick to flowers or chocolates!", country: "France" },
  { icon: "🧧", fact: "Red gifts in China? That's not just color; it's an invitation for good fortune!", country: "China" },
];

export default function CulturalEasterEggs() {
  const [visibleFact, setVisibleFact] = useState<number | null>(null);
  // const [score, setScore] = useState(0);
  const [discoveredFacts, setDiscoveredFacts] = useState<number[]>([]);

  useEffect(() => {
    if (visibleFact !== null && !discoveredFacts.includes(visibleFact)) {
      setDiscoveredFacts(prevFacts => [...prevFacts, visibleFact]);
      // setScore(prevScore => prevScore + 1);
    }
  }, [visibleFact, discoveredFacts]);

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-600 dark:text-purple-300">Cultural Gift Explorer</h2>
        <div className="flex justify-center space-x-8 mb-8">
          {culturalFacts.map((item, index) => (
            <motion.div
              key={index}
              className="text-6xl cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-full shadow-lg relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setVisibleFact(index)}
              onHoverEnd={() => setVisibleFact(null)}
            >
              {item.icon}
              <AnimatePresence>
                {visibleFact === index && (
                  <motion.div
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    !
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {visibleFact !== null && (
            <motion.div
              className="mt-8 flex items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-2xl">
                <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-300">{culturalFacts[visibleFact].country}</h3>
                <p className="text-lg text-purple-700 dark:text-purple-300 mb-4">{culturalFacts[visibleFact].fact}</p>
                <motion.div 
                  className="text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Fact discovered! +1 point
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* <div className="mt-8 text-center">
          <p className="text-xl font-bold text-purple-600 dark:text-purple-300">Cultural Explorer Score: {score}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Discover all facts to become a Gift Giving Master!</p>
        </div> */}
      </div>
    </section>
  );
}
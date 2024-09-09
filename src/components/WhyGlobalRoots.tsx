'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

interface Reason {
  title: string;
  description: string;
  icon: string;
}

const reasons: Reason[] = [
  {
    title: "Thoughtful Selection",
    description: "Curated gifts that reflect the depth of your affection.",
    icon: "🔍"
  },
  {
    title: "Cultural Connection",
    description: "Each gift is a window into another culture's beauty.",
    icon: "🌍"
  },
  {
    title: "Memorable Experiences",
    description: "Gifts that create lasting memories and conversations.",
    icon: "💖"
  },
  {
    title: "Ease and Convenience",
    description: "World's most thoughtful gifts at your fingertips.",
    icon: "🖱️"
  },
  {
    title: "Sustainability",
    description: "Support artisans and local economies worldwide.",
    icon: "🌱"
  },
  {
    title: "Personalization",
    description: "Tailor each gift to the recipient's unique tastes.",
    icon: "✨"
  }
];

const GiftBox = ({ title, description, icon }: Reason) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="relative w-full h-48 cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden"
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      >
        <span className="text-6xl">{icon}</span>
      </motion.div>
      <motion.div
        className="absolute inset-0 p-6 flex flex-col justify-center bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      >
        <h4 className="text-xl font-semibold mb-2 text-teal-800">{title}</h4>
        <p className="text-sm text-teal-600">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default function WhyGlobalRoots() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-b from-teal-50 to-teal-100 text-teal-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 sm:mb-8 text-center">Why Global Roots?</h2>
        <p className="text-lg sm:text-xl mb-10 sm:mb-12 text-center text-teal-700 max-w-3xl mx-auto leading-relaxed">
          In a world where gifting has become routine, Global Roots brings back the essence of thoughtfulness, connection, and love. We&apos;re not just a platform; we&apos;re a bridge connecting hearts across continents, solving the dilemma of finding that perfect, culturally rich gift.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GiftBox {...reason} />
            </motion.div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-teal-800">The Gift of Connection</h3>
          <p className="text-base sm:text-lg text-center text-teal-700 leading-relaxed">
            At Global Roots, we believe in the power of gifts to transcend borders, languages, and cultures. We&apos;re here to help you find that perfect item that fills hearts with joy, understanding, and a touch of the world&apos;s magic. Because every gift should be a story, connecting us more deeply to each other.
          </p>
        </div>
      </div>
    </section>
  );
}
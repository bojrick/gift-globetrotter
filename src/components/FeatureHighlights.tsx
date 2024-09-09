import { useState } from 'react';
import { Globe, Briefcase, Gift } from 'lucide-react';
import { Button } from './ui/button';

export default function FeatureHighlights() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Globe,
      title: "Cultural Curio Corner",
      description: "Explore unique gifts from around the globe. Discover handcrafted treasures, local delicacies, and one-of-a-kind items that represent diverse cultures.",
      link: "/explore",
      buttonText: "Start Exploring",
    },
    {
      icon: Briefcase,
      title: "Traveler's Tale",
      description: "Read inspiring stories of gifts that crossed borders. Learn about the emotional journeys behind meaningful presents and the connections they create.",
      link: "/stories",
      buttonText: "Read Stories",
    },
    {
      icon: Gift,
      title: "Global Gifting Guide",
      description: "Master the art of gifting across cultures. Get expert advice on gift-giving etiquette, cultural significance, and choosing the perfect present for any occasion.",
      link: "/guide",
      buttonText: "View Guide",
    },
  ];

  return (
    <section className="py-12 bg-secondary/10 text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Feature Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-background rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${
                hoveredFeature === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <feature.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
              <p className="text-foreground mb-6">{feature.description}</p>
              <Button 
                variant="default" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {feature.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
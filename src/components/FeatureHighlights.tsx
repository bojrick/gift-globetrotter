import { Globe, Briefcase, Gift } from 'lucide-react';

export default function FeatureHighlights() {
  return (
    <section className="py-12 bg-black text-white dark:bg-white dark:text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Feature Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-6 bg-gray-900 dark:bg-gray-100 rounded-lg shadow-lg">
            <Globe className="w-16 h-16 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-4">Cultural Curio Corner</h3>
            <p className="text-gray-300 dark:text-gray-700 mb-4">Explore unique gifts from around the globe. Discover handcrafted treasures, local delicacies, and one-of-a-kind items that represent diverse cultures.</p>
            <a href="/explore" className="text-blue-500 hover:underline">Start Exploring</a>
          </div>
          <div className="text-center p-6 bg-gray-900 dark:bg-gray-100 rounded-lg shadow-lg">
            <Briefcase className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-4">Traveler&apos;s Tale</h3>
            <p className="text-gray-300 dark:text-gray-700 mb-4">Read inspiring stories of gifts that crossed borders. Learn about the emotional journeys behind meaningful presents and the connections they create.</p>
            <a href="/stories" className="text-green-500 hover:underline">Read Stories</a>
          </div>
          <div className="text-center p-6 bg-gray-900 dark:bg-gray-100 rounded-lg shadow-lg">
            <Gift className="w-16 h-16 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-4">Global Gifting Guide</h3>
            <p className="text-gray-300 dark:text-gray-700 mb-4">Master the art of gifting across cultures. Get expert advice on gift-giving etiquette, cultural significance, and choosing the perfect present for any occasion.</p>
            <a href="/guide" className="text-purple-500 hover:underline">View Guide</a>
          </div>
        </div>
      </div>
    </section>
  );
}
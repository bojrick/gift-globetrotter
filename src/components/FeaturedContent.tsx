import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const featuredArticles = [
  { id: 1, title: "A Surprising Gift from Tokyo", excerpt: "How a simple origami set became a symbol of friendship..." },
  { id: 2, title: "The Art of Gifting in Middle Eastern Cultures", excerpt: "Understanding the nuances of gift-giving in the Arab world..." },
  // Add more articles as needed
];

const giftingGuides = [
  { id: 1, title: "Choosing the Perfect Gift for Your Host Family", link: "/guide/host-family-gifts" },
  { id: 2, title: "Corporate Gifting Across Cultures", link: "/guide/corporate-gifting" },
  // Add more guides as needed
];

export default function FeaturedContent() {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">Featured Content</h2>
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Traveler&apos;s Tales</h3>
            {featuredArticles.map((article) => (
              <Card key={article.id} className="mb-4 border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-gray-800">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600">{article.excerpt}</p>
                  <Link href={`/stories/${article.id}`} className="text-blue-600 hover:text-blue-800 mt-2 inline-block text-sm sm:text-base">
                    Read more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Gifting Guides</h3>
            <ul className="space-y-2">
              {giftingGuides.map((guide) => (
                <li key={guide.id}>
                  <Link href={guide.link} className="text-blue-600 hover:text-blue-800 text-sm sm:text-base">
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
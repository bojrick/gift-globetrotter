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
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Traveler&apos;s Tales</h3>
            {featuredArticles.map((article) => (
              <Card key={article.id} className="mb-4">
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{article.excerpt}</p>
                  <Link href={`/stories/${article.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
                    Read more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Gifting Guides</h3>
            <ul className="space-y-2">
              {giftingGuides.map((guide) => (
                <li key={guide.id}>
                  <Link href={guide.link} className="text-blue-500 hover:underline">
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
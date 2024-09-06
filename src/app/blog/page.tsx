import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "The Perfect Gift from Japan",
    excerpt: "How I found the ideal souvenir for my tech-savvy brother in Tokyo's Akihabara district.",
    author: "Travel Enthusiast",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Gifting Etiquette Around the World",
    excerpt: "Learn about gift-giving customs in different cultures to avoid faux pas on your travels.",
    author: "Cultural Expert",
    date: "2023-06-02",
  },
  // Add more blog posts here
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Travel Gift Stories & Tips</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date} by {post.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
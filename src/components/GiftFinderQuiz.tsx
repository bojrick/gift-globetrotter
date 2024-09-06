import { Button } from "@/components/ui/button";
import Link from 'next/link';

const quizOptions = [
  { name: "For the Foodie", description: "Savor the World's Flavors" },
  { name: "For the Fashionista", description: "Style That Travels" },
  { name: "For the Bookworm", description: "Stories from Every Corner" },
  { name: "For the Gadget Guru", description: "Tech from the Future" },
];

export default function GiftFinderQuiz() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Who Are You Gifting Today?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quizOptions.map((option) => (
            <Button key={option.name} variant="outline" className="h-auto py-4 flex flex-col items-center">
              <span className="font-bold">{option.name}</span>
              <span className="text-sm">{option.description}</span>
            </Button>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button size="lg" asChild>
            <Link href="/gift-finder-quiz">Take the Quiz</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
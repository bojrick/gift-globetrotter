import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-12 bg-black text-white dark:bg-white dark:text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Gift Journey?</h2>
        <Button size="lg" asChild className="bg-white text-black border-2 border-white hover:bg-gray-100 dark:bg-black dark:text-white dark:border-black dark:hover:bg-gray-900">
          <Link href="/explore-gifts">Start Exploring</Link>
        </Button>
      </div>
    </section>
  );
}
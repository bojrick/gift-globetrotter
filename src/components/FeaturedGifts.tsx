import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featuredGifts = [
  { id: '1', name: 'Japanese Tea Set', price: 79.99, image: '/images/gifts/japanese-tea-set.jpg' },
  { id: '2', name: 'Italian Leather Wallet', price: 59.99, image: '/images/gifts/italian-wallet.jpg' },
  { id: '3', name: 'Australian Opal Necklace', price: 129.99, image: '/images/gifts/opal-necklace.jpg' },
];

const FeaturedGifts = () => {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Gifts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredGifts.map((gift) => (
          <Card key={gift.id}>
            <CardHeader>
              <Image src={gift.image} alt={gift.name} width={300} height={200} className="rounded-t-lg" />
            </CardHeader>
            <CardContent>
              <CardTitle>{gift.name}</CardTitle>
              <CardDescription>${gift.price.toFixed(2)}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/gift/${gift.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGifts;
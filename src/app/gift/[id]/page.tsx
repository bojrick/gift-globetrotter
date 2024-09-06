import { notFound } from 'next/navigation';
import { mockGiftDatabase, Gift } from '@/lib/giftDatabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GiftDetails({ params }: { params: { id: string } }) {
  const gift: Gift | undefined = mockGiftDatabase.find(g => g.id === params.id);

  if (!gift) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{gift.name}</CardTitle>
          <CardDescription>From {gift.region}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{gift.description}</p>
          <p className="font-bold">Price: ${gift.price}</p>
          <p>Category: {gift.category}</p>
          <p>Uniqueness Score: {gift.uniquenessScore}/5</p>
          <p>Size: {gift.size}/5</p>
        </CardContent>
      </Card>
    </div>
  );
}
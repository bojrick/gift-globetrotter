"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Review = {
  id: number;
  user: string;
  content: string;
  rating: number;
};

const initialReviews: Review[] = [
  { id: 1, user: "JohnD", content: "Great gift idea! My friend loved it.", rating: 5 },
  { id: 2, user: "TravelLover", content: "Unique and thoughtful. Highly recommend!", rating: 4 },
];

export default function UserReviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newReview, setNewReview] = useState("");

  const handleSubmitReview = () => {
    if (newReview.trim()) {
      const review: Review = {
        id: reviews.length + 1,
        user: "CurrentUser", // In a real app, this would be the logged-in user
        content: newReview,
        rating: 5, // For simplicity, we're setting a default rating
      };
      setReviews([...reviews, review]);
      setNewReview("");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">User Reviews</h2>
      {reviews.map((review) => (
        <Card key={review.id}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${review.user}`} />
                <AvatarFallback>{review.user.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <CardTitle>{review.user}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p>{review.content}</p>
            <CardDescription className="mt-2">Rating: {review.rating}/5</CardDescription>
          </CardContent>
        </Card>
      ))}
      <div>
        <Textarea
          placeholder="Write your review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          className="mb-4"
        />
        <Button onClick={handleSubmitReview}>Submit Review</Button>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const GiftJourney = () => {
  const [journeyData, setJourneyData] = useState({
    origin: "",
    destination: "",
    interests: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Journey completed:", journeyData);
    // Here you would typically send the data to your backend or process it
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-secondary dark:bg-secondary">
      <CardHeader>
        <CardTitle className="text-3xl text-center">Gift Journey</CardTitle>
        <CardDescription className="text-center">Discover the perfect gift as you travel the world</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Origin</label>
              <Select onValueChange={(value) => setJourneyData({ ...journeyData, origin: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your origin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usa">USA</SelectItem>
                  <SelectItem value="uk">UK</SelectItem>
                  <SelectItem value="japan">Japan</SelectItem>
                  {/* Add more countries */}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Destination</label>
              <Select onValueChange={(value) => setJourneyData({ ...journeyData, destination: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="france">France</SelectItem>
                  <SelectItem value="italy">Italy</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                  {/* Add more countries */}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Interests</label>
            <Input
              placeholder="Enter interests (e.g., cooking, sports)"
              value={journeyData.interests}
              onChange={(e) => setJourneyData({ ...journeyData, interests: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Budget</label>
            <Input
              type="number"
              placeholder="Enter your budget"
              value={journeyData.budget}
              onChange={(e) => setJourneyData({ ...journeyData, budget: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full">Find Gifts</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default GiftJourney;
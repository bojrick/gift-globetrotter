"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import InteractiveWorldMap from "@/components/InteractiveWorldMap";
import SurpriseGiftHeader from "@/components/SurpriseGiftHeader";
import { Gift } from "@/lib/giftDatabase";

const SurpriseGift = () => {
  const [formData, setFormData] = useState({
    recipient: "",
    relationship: "",
    interests: "",
    fromCountry: "",
    toCountry: "",
  });
  const [surprise, setSurprise] = useState<Gift | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountrySelect = (country: string) => {
    setFormData((prev) => ({ ...prev, toCountry: country }));
    // Optionally, you can scroll to the form or show a notification that a country was selected
  };

  const generateSurprise = () => {
    setLoading(true);
    // Simulating an API call
    setTimeout(() => {
      const surpriseGift: Gift = {
        id: "surprise1",
        name: `Unique Gift from ${formData.toCountry}`,
        description: `A special gift for ${formData.recipient} inspired by ${formData.toCountry}'s culture`,
        price: Math.floor(Math.random() * 100) + 20,
        region: formData.toCountry,
        category: "Surprise",
        uniquenessScore: 5,
        size: 3,
      };
      setSurprise(surpriseGift);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Surprise Gift Generator</h1>
      <SurpriseGiftHeader />
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Explore the World for Gift Ideas</CardTitle>
          <CardDescription>Click on a country to select it as your gift destination</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractiveWorldMap onCountrySelect={handleCountrySelect} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Tell us about your gift recipient</CardTitle>
          <CardDescription>We'll use this information to generate a unique gift idea</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            name="recipient"
            placeholder="Recipient's name"
            value={formData.recipient}
            onChange={handleInputChange}
          />
          <Select onValueChange={handleSelectChange("relationship")}>
            <SelectTrigger>
              <SelectValue placeholder="Relationship to recipient" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="family">Family</SelectItem>
              <SelectItem value="friend">Friend</SelectItem>
              <SelectItem value="colleague">Colleague</SelectItem>
            </SelectContent>
          </Select>
          <Input
            name="interests"
            placeholder="Recipient's interests (e.g., cooking, sports)"
            value={formData.interests}
            onChange={handleInputChange}
          />
          <Select onValueChange={handleSelectChange("fromCountry")}>
            <SelectTrigger>
              <SelectValue placeholder="Your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usa">USA</SelectItem>
              <SelectItem value="uk">UK</SelectItem>
              <SelectItem value="japan">Japan</SelectItem>
              {/* Add more countries */}
            </SelectContent>
          </Select>
          <Input
            name="toCountry"
            placeholder="Destination country (or click on the map)"
            value={formData.toCountry}
            onChange={handleInputChange}
            readOnly
          />
          <Button onClick={generateSurprise} className="w-full" disabled={loading}>
            {loading ? "Generating Surprise..." : "Generate Surprise Gift"}
          </Button>
        </CardContent>
      </Card>
      {surprise && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Your Surprise Gift Suggestion</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold">{surprise.name}</h3>
            <p className="text-sm text-gray-600">{surprise.description}</p>
            <p className="mt-2 font-bold">Price: ${surprise.price}</p>
            <p>Region: {surprise.region}</p>
            <p>Uniqueness: {surprise.uniquenessScore}/5</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SurpriseGift;
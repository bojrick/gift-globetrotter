import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SurpriseGiftHeader = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">The Great Gift Globetrotter Conundrum!</CardTitle>
        <CardDescription>Where in the world do you find the perfect gift?</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-4">
          Picture this: You're jet-setting across the globe, living your best life, when suddenly you remember... 
          It's your best friend's birthday next week! 😱
        </p>
        <p className="text-lg mb-4">
          Do you grab another "I ❤️ [Insert City]" t-shirt? Or risk it all on a mysterious street market trinket?
        </p>
        <p className="text-lg font-semibold">
          Fear not, intrepid traveler! Our Surprise Gift Generator is here to rescue you from the perils of 
          last-minute airport gift shops and questionable souvenir stands.
        </p>
      </CardContent>
    </Card>
  );
};

export default SurpriseGiftHeader;
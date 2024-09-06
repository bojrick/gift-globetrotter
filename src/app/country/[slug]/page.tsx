import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const topCountries = [
  { name: 'China', population: '1,439,323,776', slug: 'china' },
  { name: 'India', population: '1,380,004,385', slug: 'india' },
  { name: 'United States', population: '331,002,651', slug: 'usa' },
  { name: 'Indonesia', population: '273,523,615', slug: 'indonesia' },
  { name: 'Pakistan', population: '220,892,340', slug: 'pakistan' },
  { name: 'Brazil', population: '212,559,417', slug: 'brazil' },
  { name: 'Nigeria', population: '206,139,589', slug: 'nigeria' },
  { name: 'Bangladesh', population: '164,689,383', slug: 'bangladesh' },
  { name: 'Russia', population: '145,934,462', slug: 'russia' },
  { name: 'Mexico', population: '128,932,753', slug: 'mexico' },
];

export default function CountryPage({ params }: { params: { slug: string } }) {
  const country = topCountries.find(c => c.slug === params.slug);

  if (!country) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{country.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Population: {country.population}</p>
          <p className="mt-4">This is a dummy page for {country.name}. In a real application, this page would contain gift ideas and products specific to {country.name}.</p>
        </CardContent>
      </Card>
    </div>
  );
}
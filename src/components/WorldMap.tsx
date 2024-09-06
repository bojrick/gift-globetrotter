"use client";

import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from 'next/link';

const WorldMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    { id: "northAmerica", name: "North America", d: "M52,90 l100,0 l50,-30 l70,0 l-20,30 l0,80 l-180,0 l0,-80 Z" },
    { id: "southAmerica", name: "South America", d: "M130,200 l80,0 l0,100 l-60,60 l-60,-60 l0,-70 l40,-30 Z" },
    { id: "europe", name: "Europe", d: "M300,70 l80,0 l40,40 l-20,50 l-100,0 l0,-90 Z" },
    { id: "africa", name: "Africa", d: "M300,170 l100,0 l0,100 l-60,60 l-80,-60 l40,-100 Z" },
    { id: "asia", name: "Asia", d: "M400,50 l150,0 l0,150 l-150,100 l-50,-50 l0,-150 l50,-50 Z" },
    { id: "oceania", name: "Oceania", d: "M550,250 l80,0 l0,60 l-80,0 l0,-60 Z" },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4">Explore Gifts by Region</h2>
      <svg viewBox="0 0 800 400" className="w-full h-auto">
        {regions.map((region) => (
          <TooltipProvider key={region.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={`/search?region=${region.name}`}>
                  <path
                    id={region.id}
                    d={region.d}
                    fill={selectedRegion === region.name ? "#4a90e2" : "#d1d5db"}
                    stroke="#fff"
                    strokeWidth="2"
                    onMouseEnter={() => setSelectedRegion(region.name)}
                    onMouseLeave={() => setSelectedRegion(null)}
                    className="cursor-pointer transition-colors duration-200 hover:fill-blue-400"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Explore gifts from {region.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </svg>
    </div>
  );
};

export default WorldMap;
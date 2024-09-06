"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const GiftCustomization = () => {
  const [budget, setBudget] = useState([50]);
  const [size, setSize] = useState([3]);
  const [uniqueness, setUniqueness] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="budget">Budget (USD)</Label>
        <Slider
          id="budget"
          min={10}
          max={500}
          step={10}
          value={budget}
          onValueChange={setBudget}
        />
        <p className="text-sm text-muted-foreground mt-1">Selected: ${budget}</p>
      </div>

      <div>
        <Label htmlFor="size">Size (1-5)</Label>
        <Slider
          id="size"
          min={1}
          max={5}
          step={1}
          value={size}
          onValueChange={setSize}
        />
        <p className="text-sm text-muted-foreground mt-1">Selected: {size}</p>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="uniqueness"
          checked={uniqueness}
          onCheckedChange={setUniqueness}
        />
        <Label htmlFor="uniqueness">Prefer unique gifts</Label>
      </div>
    </div>
  );
};

export default GiftCustomization;
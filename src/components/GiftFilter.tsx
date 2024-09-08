'use client'

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type FilterItem = {
  id: string;
  label: string;
};

type GiftFilterProps = {
  title: string;
  items: FilterItem[];
  selected: string[];
  onChange: (item: string) => void;
};

export default function GiftFilter({ title, items, selected, onChange }: GiftFilterProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center">
            <Checkbox
              id={item.id}
              onCheckedChange={() => onChange(item.id)}
              checked={selected.includes(item.id)}
            />
            <Label
              htmlFor={item.id}
              className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
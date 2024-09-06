"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navigation() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logos/larana_camping-removebg-preview.png"
            alt="GiftGlobeTrotter Logo"
            width={40}
            height={40}
          />
          <span className="text-2xl font-bold">GiftGlobeTrotter</span>
        </Link>
        <div className="space-x-4 flex items-center">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/gifts">Gift Ideas</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/blog">Blog</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/surprise-gift">Surprise Gift</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/auth">Sign In / Sign Up</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
      </div>
    </nav>
  );
}
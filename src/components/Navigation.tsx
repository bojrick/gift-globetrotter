"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/explore-gifts", label: "Explore Gifts" },
    { href: "/travel-tales", label: "Travel Tales" },
    { href: "/global-gifting-guide", label: "Unique Gifts" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white text-black p-4 shadow-md dark:bg-black dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logos/larana_camping_clean-removebg-preview.png"
            alt="Global Roots Logo"
            width={100}
            height={100}
          />
          <span className="text-4xl font-extrabold text-gray-600 dark:text-gray-400">Global Roots</span>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <Button 
              key={item.href} 
              variant="ghost" 
              asChild 
              className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-lg"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>
        <Button className="md:hidden" variant="ghost" onClick={toggleMenu}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white dark:bg-black rounded-lg p-4 shadow-lg">
          {navItems.map((item) => (
            <Button 
              key={item.href} 
              variant="ghost" 
              asChild 
              className="w-full text-left mb-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-lg"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
}
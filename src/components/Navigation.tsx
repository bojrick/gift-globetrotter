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
    { href: "/global-gifting-guide", label: "Gifting Guide" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logos/larana_camping_clean-removebg-preview.png"
            alt="Global Roots Logo"
            width={60}
            height={60}
          />
          <span className="text-xl font-bold">Global Roots</span>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" asChild className="text-black hover:text-gray-600 transition-colors">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>
        <Button className="md:hidden" variant="ghost" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg p-4 shadow-lg">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" asChild className="w-full text-left mb-2 text-black hover:text-gray-600 transition-colors">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
}
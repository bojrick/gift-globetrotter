import Link from 'next/link';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/explore-gifts" className="hover:underline">Explore Gifts</Link></li>
              <li><Link href="/travel-tales" className="hover:underline">Travel Tales</Link></li>
              <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Gift Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/handmade" className="hover:underline">Handmade Crafts</Link></li>
              <li><Link href="/category/local-food" className="hover:underline">Local Delicacies</Link></li>
              <li><Link href="/category/traditional" className="hover:underline">Traditional Wear</Link></li>
              <li><Link href="/category/modern-art" className="hover:underline">Modern Art</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-500"><Facebook /></Link>
              <Link href="#" className="hover:text-gray-500"><Twitter /></Link>
              <Link href="#" className="hover:text-gray-500"><Instagram /></Link>
              <Link href="#" className="hover:text-gray-500"><Linkedin /></Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Rooted</h3>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Your email" />
              <Button type="submit" variant="outline">Subscribe to Newsletter</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col items-center">
          <Image
            src="/images/logos/larana_camping_clean-removebg-preview.png"
            alt="Global Roots Logo"
            width={60}
            height={60}
          />
          <p className="text-sm mt-4 text-center">&copy; 2023 Global Roots. All rights reserved.</p>
        </div>
        <div className="mt-4 text-center">
          <ul className="flex flex-wrap justify-center space-x-4 text-sm">
            <li className="mb-2"><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li className="mb-2"><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
            <li className="mb-2"><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li className="mb-2"><Link href="/sitemap" className="hover:underline">Sitemap</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
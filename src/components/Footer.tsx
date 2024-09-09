import Link from 'next/link';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 mt-12 py-8 sm:py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-600 transition-colors text-sm sm:text-base">Home</Link></li>
              <li><Link href="/explore-gifts" className="hover:text-blue-600 transition-colors">Explore Gifts</Link></li>
              <li><Link href="/travel-tales" className="hover:text-blue-600 transition-colors">Travel Tales</Link></li>
              <li><Link href="/about-us" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Gift Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/handmade" className="hover:text-blue-400 transition-colors">Handmade Crafts</Link></li>
              <li><Link href="/category/local-food" className="hover:text-blue-400 transition-colors">Local Delicacies</Link></li>
              <li><Link href="/category/traditional" className="hover:text-blue-400 transition-colors">Traditional Wear</Link></li>
              <li><Link href="/category/modern-art" className="hover:text-blue-400 transition-colors">Modern Art</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Stay Connected</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-400 transition-colors"><Facebook /></Link>
              <Link href="#" className="hover:text-blue-400 transition-colors"><Twitter /></Link>
              <Link href="#" className="hover:text-blue-400 transition-colors"><Instagram /></Link>
              <Link href="#" className="hover:text-blue-400 transition-colors"><Linkedin /></Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Stay Rooted</h3>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Your email" className="bg-white border-gray-300 text-gray-900" />
              <Button type="submit" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                Subscribe to Newsletter
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-200 flex flex-col items-center">
          <Image
            src="/images/logos/larana_camping_clean-removebg-preview.png"
            alt="Global Roots Logo"
            width={80}
            height={80}
          />
          <p className="text-xs sm:text-sm mt-4 text-center">&copy; 2024 Global Roots. All rights reserved.</p>
        </div>
        <div className="mt-4 text-center">
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
            <li className="mb-2"><Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
            <li className="mb-2"><Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            <li className="mb-2"><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
            <li className="mb-2"><Link href="/sitemap" className="hover:text-blue-400 transition-colors">Sitemap</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
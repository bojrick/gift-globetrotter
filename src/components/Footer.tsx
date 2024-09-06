import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About GiftGlobeTrotter</h3>
            <p className="text-sm">Discover unique gifts from around the world for your loved ones.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link href="/blog" className="text-sm hover:underline">Blog</Link></li>
              <li><Link href="/search" className="text-sm hover:underline">Search</Link></li>
              <li><Link href="/auth" className="text-sm hover:underline">Sign In / Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: info@giftglobetrotter.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm">&copy; 2023 GiftGlobeTrotter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
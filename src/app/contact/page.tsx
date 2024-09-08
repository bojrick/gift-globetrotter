import React from 'react';
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea id="message" rows={4} className="w-full p-2 border rounded" required></textarea>
        </div>
        <Button type="submit">Send Message</Button>
      </form>
      
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
        <p>Email: info@globalroots.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <div className="mt-4">
          {/* Add social media icons/links here */}
        </div>
      </div>
    </div>
  );
}
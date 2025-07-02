import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-black text-sm font-semibold">&copy; {new Date().getFullYear()} Makova. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="/" className="text-black text-sm hover:text-primary transition-colors">Home</a>
          <a href="/train" className="text-black text-sm hover:text-primary transition-colors">Train</a>
          <a href="/pricing" className="text-black text-sm hover:text-primary transition-colors">Pricing</a>
          <a href="/about" className="text-black text-sm hover:text-primary transition-colors">About</a>
          <a href="/impact" className="text-black text-sm hover:text-primary transition-colors">Impact</a>
          <a href="/contact" className="text-black text-sm hover:text-primary transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  );
} 
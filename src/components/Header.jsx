import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Train', to: '/train' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'About', to: '/about' },
  { name: 'Impact', to: '/impact' },
  { name: 'Contact', to: '/contact' },
];

const Header = () => {
  const location = useLocation();
  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/public/images/MAKOVA.png" alt="Makova Logo" className="h-10 w-auto object-contain" style={{ maxHeight: '40px' }} />
            </Link>
          </div>
          {/* Navigation */}
          <div className="flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.to}
                className={`text-base font-medium text-black hover:text-primary transition-colors${location.pathname === link.to ? ' text-primary font-bold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header; 
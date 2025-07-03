import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={closeMobileMenu}>
              <img
                src="/images/MAKOVA.png"
                alt="Makova Logo"
                className="h-8 sm:h-10 w-auto object-contain"
                style={{ maxHeight: '40px' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.to}
                className={`text-base font-medium text-black hover:text-blue-600 transition-colors${location.pathname === link.to ? ' text-blue-600 font-bold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={closeMobileMenu}
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"></div>
          </div>
        )}

        {/* Mobile Menu Sidebar */}
        <div className={`fixed top-0 left-0 z-50 h-full w-80 bg-gradient-to-b from-white to-gray-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link to="/" onClick={closeMobileMenu}>
              <img
                src="/images/MAKOVA.png"
                alt="Makova Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="py-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={closeMobileMenu}
                className={`block px-6 py-4 text-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 hover:border-r-4 hover:border-blue-600 ${
                  location.pathname === link.to
                    ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600 font-bold'
                    : 'text-gray-700'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Empowering teens worldwide</p>
              <div className="flex justify-center space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                </div>
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header; 
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu, X, Plus } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="bg-black text-white border-b border-gray-700 sticky top-0 z-40 w-full shadow-sm">
        <nav className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/TRHRD_logo.png"
              alt="Top Rated Home Remodel & Design Logo"
              width={150}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
                >
                {link.label}
              </Link>
            ))}
            {/* Contact Info (Phone & Email) */}
            <div className="flex items-center space-x-4">
              <a href="tel:8883118899" className="text-sm text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5 inline mr-1" />
                (888) 311-8899
              </a>
              <a href="mailto:info@topratedhrd.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5 inline mr-1" />
                info@topratedhrd.com
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile FAB Button */}
      <button
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform hover:scale-110"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
      </button>

      {/* Full-Screen Mobile Navigation Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center p-6">
          {/* Close button inside overlay */}
          <button
              className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
          >
              <X className="h-7 w-7" />
          </button>

          {/* Logo at the top of the overlay */}
          <div className="mb-12"> {/* Add margin below the logo */}
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/images/TRHRD_logo.png"
                alt="Top Rated Home Remodel & Design Logo"
                width={180} // Slightly larger logo for the overlay
                height={48}
                priority
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <nav className="flex flex-col items-center space-y-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-2xl font-medium text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Contact Info in Overlay */}
          <div className="mt-12 pt-6 border-t border-gray-700 w-full max-w-xs text-center space-y-4">
              <a
                href="tel:8883118899"
                className="flex items-center justify-center text-lg text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-5 w-5 mr-2" />
                (888) 311-8899
              </a>
              <a
                href="mailto:info@topratedhrd.com"
                className="flex items-center justify-center text-lg text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail className="h-5 w-5 mr-2" />
                info@topratedhrd.com
              </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
"use client";

import Link from 'next/link';
import { Phone, Mail, Menu, X } from 'lucide-react';
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
    <header className="bg-background/90 backdrop-blur-md border-b border-border sticky top-0 z-50 w-full shadow-sm">
      <nav className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        {/* Logo / Brand Name */}
        <Link href="/" className="font-bold text-xl tracking-tight text-foreground hover:text-primary transition-colors">
          TopRatedHRD
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {/* Contact Info (Phone & Email) */}
          <div className="flex items-center space-x-4">
            <a href="tel:8883118899" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-5 w-5 inline mr-1" />
              (888) 311-8899
            </a>
            <a href="mailto:info@topratedhrd.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5 inline mr-1" />
              info@topratedhrd.com
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border py-4">
          <div className="container mx-auto max-w-5xl px-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile Contact Info */}
            <div className="mt-4 space-y-2">
              <a href="tel:8883118899" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-5 w-5 inline mr-1" />
                (888) 311-8899
              </a>
              <a href="mailto:info@topratedhrd.com" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5 inline mr-1" />
                info@topratedhrd.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
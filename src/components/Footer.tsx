import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <footer className="border-t border-border mt-16 py-8 bg-background">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} TopRatedHRD. All rights reserved. | LIC. #1090146
          </p>
          <div className="flex space-x-2">
            <a
              href="https://www.instagram.com/topratedhrd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61566323230947"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/topratedhrd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';

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
    <footer 
      className="border-t border-gray-800 py-12 bg-black text-white" 
      style={{ backgroundColor: '#000000' }}
    >
      <div className="container mx-auto max-w-5xl px-4">
        {/* Main Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/TRHRD_logo.png"
            alt="Top Rated HRD Logo"
            width={150}
            height={50}
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-8">
          <p className="text-sm text-gray-400">
            © {currentYear} TopRatedHRD. All rights reserved. | LIC. #1090146
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/topratedhrd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61566323230947"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/topratedhrd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="flex justify-center items-center space-x-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500 mr-4">Partners:</p>
          <a href="https://www.owenscorning.com/en-us/roofing" target="_blank" rel="noopener noreferrer">
             <Image
               src="/images/owenscorning.png"
               alt="Owens Corning Logo"
               width={120}
               height={40}
               className="opacity-80 hover:opacity-100 transition-opacity"
             />
          </a>
          <a href="https://www.gethearth.com/" target="_blank" rel="noopener noreferrer">
             <Image
               src="/images/hearth.png"
               alt="Hearth Logo"
               width={100}
               height={40}
               className="opacity-80 hover:opacity-100 transition-opacity"
             />
           </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
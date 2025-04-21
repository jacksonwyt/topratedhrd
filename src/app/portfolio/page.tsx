// /Users/tywestbrook/topratedhrd/src/app/portfolio/page.tsx
"use client"; // Required for state and event handlers

import React, { useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic
import { Button } from '@/components/ui/button';
import { X, Loader2 } from 'lucide-react'; // Import Loader2 for loading state

// Dynamically import PortfolioGallery3D with SSR turned off

const PortfolioGallery3D = dynamic(
  () => import('@/components/PortfolioGallery3D'),
  {
    ssr: false,
    loading: () => (
      // Optional: Add a loading indicator
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <Loader2 className="h-12 w-12 animate-spin text-white" />
      </div>
    ),
  }
);


// Portfolio Page Component
export default function PortfolioPage() {
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  return (
    // Using Tailwind classes for background and text colors from your theme
    <div className="bg-background text-foreground">

      {/* Page Header Section */}
      {/* Updated to Gold Gradient - REMOVED */} 
      <section className="py-20 md:py-28 lg:py-32"> {/* Removed gradient classes */}
        <div className="container mx-auto max-w-4xl px-4 text-center">
          {/* h1 already uses text-primary, which is now gold */}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Explore examples of our completed projects and craftsmanship.
          </p>
          {/* Button to trigger fullscreen mode - uses primary color */}
          <div className="mt-8">
            <Button onClick={() => setIsFullscreenOpen(true)}>View Fullscreen Gallery</Button>
          </div>
        </div>
      </section>

      {/* Main Content Section - REMOVED Inline Gallery Preview */}
      {/* This section is intentionally left empty or can contain other content */}
      {/* <section className={`py-16 md:py-24 ${isFullscreenOpen ? 'hidden' : ''}`}> ... </section> */}

      {/* --- Fullscreen Gallery Overlay --- */}
      {/* Conditionally rendered when isFullscreenOpen is true */}
      {isFullscreenOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center">
          {/* Close Button for the overlay */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFullscreenOpen(false)}
            className="absolute top-4 right-4 z-[51] text-white hover:bg-white/20"
            aria-label="Close fullscreen gallery"
          >
            <X className="h-6 w-6" />
          </Button>
          {/* Container for the fullscreen gallery */}
          {/* The Canvas inside PortfolioGallery3D will expand to fill this */}
          <div className="w-full h-full">
            {/* The updated PortfolioGallery3D component is used here */}
            <PortfolioGallery3D />
          </div>
        </div>
      )}
    </div>
  );
}

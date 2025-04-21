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
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-violet-950/30">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Explore examples of our completed projects and craftsmanship.
          </p>
          {/* Button to trigger fullscreen mode */}
          <div className="mt-8">
            <Button onClick={() => setIsFullscreenOpen(true)}>View Fullscreen Gallery</Button>
          </div>
        </div>
      </section>

      {/* Main Content Section - Inline Gallery Preview */}
      {/* This section is hidden when the fullscreen overlay is active */}
      <section className={`py-16 md:py-24 ${isFullscreenOpen ? 'hidden' : ''}`}>
        <div className="container mx-auto max-w-6xl px-4 space-y-12">
          {/* Gallery Section */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">
              Project Showcase Preview
            </h2>
            {/* Container for the inline gallery preview */}
            {/* Ensure this container provides the necessary height for the Canvas */}
            {/* The background gradient will show through if the Canvas is transparent */}
            <div className="h-[70vh] w-full bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden relative">
              {/* The updated PortfolioGallery3D component fits right here */}
              <PortfolioGallery3D />
            </div>
          </div>
        </div>
      </section>

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
            {/* The updated PortfolioGallery3D component is used here as well */}
            {/* Note: This renders a second instance of the 3D gallery, which is less performant */}
            {/* than reusing the instance, but simpler to implement with this structure. */}
            <PortfolioGallery3D />
          </div>
        </div>
      )}
    </div>
  );
}

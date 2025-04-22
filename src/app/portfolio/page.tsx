// /Users/tywestbrook/topratedhrd/src/app/portfolio/page.tsx
"use client"; // Required for state and event handlers

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic
// import Head from 'next/head'; // No longer using next/head here
// import Script from 'next/script'; // Removed Script import
import { Button } from '@/components/ui/button';
import { X, Loader2 } from 'lucide-react'; // Import Loader2 for loading state
// Import portfolio data and types
import { portfolioItems, getPortfolioCategories, PortfolioItem } from '@/lib/portfolioData';
// Import the new Swiper component
import PortfolioSwiperCarousel from '@/components/PortfolioSwiperCarousel'; 

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
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredImages, setFilteredImages] = useState<PortfolioItem[]>(portfolioItems);
  const categories = getPortfolioCategories();

  // Effect to filter images when category changes
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredImages(portfolioItems);
    } else {
      setFilteredImages(portfolioItems.filter(item => item.category === selectedCategory));
    }
    // Note: We need to manually re-initialize or force re-render the carousel JS if items change dynamically
    // For simplicity, we'll rely on key change or a different approach if direct manipulation is needed.
  }, [selectedCategory]);

  return (
    <>
      {/* Removed direct Bootstrap CSS <link> tag */}
      {/* <link ... /> */}

      {/* Main page content */}
      <div className="bg-background text-foreground">
        <section className="py-10 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
              Our Portfolio
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Explore examples of our completed projects and craftsmanship.
            </p>

            {/* --- Category Filter Buttons --- */}
            <div className="my-8 flex justify-center gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'} 
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'border-primary' : 'border-border'} 
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* --- Swiper Carousel --- */}
            <div key={selectedCategory} className="container mx-auto max-w-4xl px-4 mb-8">
             {filteredImages.length > 0 ? (
               <PortfolioSwiperCarousel images={filteredImages} /> 
             ) : (
               <p className="text-muted-foreground italic">No images found for the selected category.</p>
             )}
            </div>
            {/* --- End Swiper Carousel --- */}

            {/* Button to trigger fullscreen mode */}
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

      {/* Removed Bootstrap JS Bundle <Script> tag */}
      {/* <Script ... /> */}
    </>
  );
}

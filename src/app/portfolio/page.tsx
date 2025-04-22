// /Users/tywestbrook/topratedhrd/src/app/portfolio/page.tsx
"use client"; // Required for state and event handlers

import React, { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic'; // REMOVED - No longer needed
// import Head from 'next/head'; // No longer using next/head here
// import Script from 'next/script'; // Removed Script import
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react'; // REMOVED Loader2 - No longer needed
// Import portfolio data and types
import { portfolioItems, getPortfolioCategories, PortfolioItem } from '@/lib/portfolioData';
// Import the new Swiper component
import PortfolioSwiperCarousel from '@/components/PortfolioSwiperCarousel'; 

// Dynamically import PortfolioGallery3D with SSR turned off
// REMOVE DYNAMIC IMPORT FOR PortfolioGallery3D
/*
const PortfolioGallery3D = dynamic(
  () => import('@/components/PortfolioGallery3D'),
  {
    ssr: false,
    loading: () => (
      // Optional: Add a loading indicator - Keep white on black overlay
      (<div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <Loader2 className="h-12 w-12 animate-spin text-white" /> 
      </div>)
    ),
  }
);
*/

// Portfolio Page Component
export default function PortfolioPage() {
  // Rename state for clarity (optional, but good practice)
  const [isSwiperFullscreenOpen, setIsSwiperFullscreenOpen] = useState(false);
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

      {/* Main page content - Apply black bg and amber text */}
      <div className="bg-black text-amber-100 min-h-screen"> 
        <section className="py-10 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>
              Our Portfolio
            </h1>
            <p className="mt-4 text-lg md:text-xl text-amber-100/80" style={{ WebkitTextFillColor: '#fef3c7' }}>
              Explore examples of our completed projects and craftsmanship.
            </p>

            {/* --- Category Filter Buttons - Updated Styling --- */}
            <div className="my-8 flex justify-center gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  // Use amber for the active (default) state, outline for inactive
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-colors duration-200 
                    ${selectedCategory === category 
                      ? 'bg-amber-300 text-black hover:bg-amber-400 border-amber-300' 
                      : 'bg-black border-amber-200 text-amber-300 hover:bg-amber-300/10 hover:text-amber-200 hover:border-amber-400'}`}
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
               <p className="text-amber-100/70 italic">No images found for the selected category.</p> 
             )}
            </div>
            {/* --- End Swiper Carousel --- */}

            {/* Button to trigger fullscreen mode - Updated Styling */}
            <div className="mt-8">
              <Button 
                onClick={() => setIsSwiperFullscreenOpen(true)}
                variant="outline" 
                className="border-amber-200 bg-black text-amber-300 hover:bg-amber-300 hover:text-black transition-colors duration-200"
              >
                View Fullscreen Gallery
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content Section - REMOVED Inline Gallery Preview */}
        {/* This section is intentionally left empty or can contain other content */}
        {/* <section className={`py-16 md:py-24 ${isFullscreenOpen ? 'hidden' : ''}`}> ... </section> */}

        {/* --- Fullscreen Gallery Overlay --- */}
        {/* Keep dark overlay and white close button for contrast */}
        {isSwiperFullscreenOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8">
            {/* Close Button for the overlay */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSwiperFullscreenOpen(false)}
              className="absolute top-4 right-4 z-[51] text-white hover:bg-white/20"
              aria-label="Close fullscreen gallery"
            >
              <X className="h-6 w-6" />
            </Button>
            {/* Container for the fullscreen gallery - Render Swiper here */}
            {/* Adjust container width/height/styling as needed for Swiper */}
            <div className="w-full max-w-5xl h-auto max-h-[80vh] bg-black/50 rounded-lg overflow-hidden relative">
              {/* PortfolioGallery3D should handle its own theme or inherit if possible */}
              {/* <PortfolioGallery3D /> RENDER SWIPER INSTEAD */}
              <PortfolioSwiperCarousel images={filteredImages} />
            </div>
          </div>
        )}
      </div>

      {/* Removed Bootstrap JS Bundle <Script> tag */}
      {/* <Script ... /> */}
    </>
  );
}

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
import Link from 'next/link';

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

      {/* Main page content - Apply white bg and gray text */}
      <div className="bg-white text-gray-600 min-h-screen"> 
        <section className="py-10 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black">
              Our Portfolio
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
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
                      ? 'bg-amber-200 text-black hover:bg-amber-300 border-amber-200' 
                      : 'bg-white border-amber-200 text-gray-700 hover:bg-amber-50 hover:text-black hover:border-amber-300'}`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* --- Swiper Carousel --- */}
            <div key={selectedCategory} className="container mx-auto max-w-6xl px-2 mb-8">
             {filteredImages.length > 0 ? (
               <PortfolioSwiperCarousel images={filteredImages} /> 
             ) : (
               <p className="text-gray-500 italic">No images found for the selected category.</p> 
             )}
            </div>
            {/* --- End Swiper Carousel --- */}

            {/* Button to trigger fullscreen mode - Updated Styling */}
            <div className="mt-8">
              <Button 
                onClick={() => setIsSwiperFullscreenOpen(true)}
                variant="outline" 
                className="border-amber-200 bg-white text-gray-700 hover:bg-amber-200 hover:text-black transition-colors duration-200"
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
        {isSwiperFullscreenOpen && (
          <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
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
            {/* Container for the fullscreen gallery */}
            <div className="w-full h-screen flex items-center justify-center">
              <PortfolioSwiperCarousel images={filteredImages} isFullscreen={true} />
            </div>
          </div>
        )}

        {/* CTA Section with amber background */}
        <section className="w-full py-16 bg-amber-200">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-700 md:text-lg mb-8">
              Let&apos;s bring your vision to life. Contact us today to start your project.
            </p>
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </div>

      {/* Removed Bootstrap JS Bundle <Script> tag */}
      {/* <Script ... /> */}
    </>
  );
}

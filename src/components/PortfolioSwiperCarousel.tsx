"use client";

import React from 'react';
import Image from 'next/image'; // Import the Image component
// Core Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { PortfolioItem } from '@/lib/portfolioData'; // Import the type

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PortfolioSwiperCarouselProps {
  images: PortfolioItem[];
  isFullscreen?: boolean;
}

export default function PortfolioSwiperCarousel({ images, isFullscreen = false }: PortfolioSwiperCarouselProps) {
  return (
    <div className={`relative group ${isFullscreen ? 'h-full w-full' : ''}`}>
      <Swiper
        // Install modules
        modules={[Navigation, Pagination]}
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Show one slide at a time
        navigation={{
          nextEl: '.swiper-button-next-custom', // Use custom classes for Tailwind styling
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          // Custom render function for pagination bullets to allow Tailwind styling
          renderBullet: function (index, className) {
            // Base classes + conditional active class
            return `<span class="${className} inline-block w-3 h-3 rounded-full mx-1 cursor-pointer bg-gray-500 hover:bg-primary"></span>`;
          },
        }}
        className={`portfolio-swiper rounded-lg overflow-hidden shadow-lg ${
          isFullscreen ? 'h-full' : 'aspect-video'
        }`}
        style={{
          // Set Swiper CSS variables for theme colors (gold)
          // @ts-expect-error // Use expect-error instead of ignore
          '--swiper-pagination-color': 'var(--primary)', // Active pagination bullet color
          '--swiper-navigation-color': 'var(--primary)', // Default arrow color (will be overridden by custom elements)
        } as React.CSSProperties}
      >
        {images.map((item) => (
          <SwiperSlide key={item.src} className={isFullscreen ? 'h-full' : ''}>
            <div className={`relative ${isFullscreen ? 'h-full' : 'aspect-video'}`}>
              <Image // Use next/image component
                src={item.src}
                alt={item.alt}
                // Decide on fill or width/height. Fill is often good for carousels.
                fill // Use fill to cover the slide area
                style={{ objectFit: 'contain' }} // Keep object-fit
                className={`d-block w-full ${isFullscreen ? 'object-contain' : 'object-cover'}`}
                // Removed loading="lazy" as next/image handles it
                // Add sizes for optimization if known, otherwise use defaults
                sizes={isFullscreen ? '100vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
                priority={images.indexOf(item) === 0} // Prioritize the first image for LCP
              />
              {/* Optional: Add captions within the SwiperSlide if needed */}
              {/* <div className="absolute bottom-0 left-0 bg-black/50 text-white p-4">{item.alt}</div> */}
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons - Styled with Tailwind */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-black/30 hover:bg-black/60 rounded-full transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--primary)" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-black/30 hover:bg-black/60 rounded-full transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--primary)" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </Swiper>

      {/* Add some specific overrides for the pagination bullets if needed */}
      <style jsx global>{`
        .portfolio-swiper .swiper-pagination-bullet-active {
          background-color: var(--primary) !important; // Gold color for active bullet
          opacity: 1;
        }
      `}</style>
    </div>
  );
} 
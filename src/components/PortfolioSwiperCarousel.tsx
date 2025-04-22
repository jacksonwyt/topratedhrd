"use client";

import React from 'react';
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
}

export default function PortfolioSwiperCarousel({ images }: PortfolioSwiperCarouselProps) {
  return (
    <div className="relative group"> {/* Added relative and group for custom navigation */}
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
        className="portfolio-swiper rounded-lg overflow-hidden shadow-lg" // Add a class for potential global overrides + base styling
        style={{
          // Set Swiper CSS variables for theme colors (gold)
          // @ts-ignore // Ignore TS warning for CSS variable assignment
          '--swiper-pagination-color': 'var(--primary)', // Active pagination bullet color
          '--swiper-navigation-color': 'var(--primary)', // Default arrow color (will be overridden by custom elements)
        }}
      >
        {images.map((item) => (
          <SwiperSlide key={item.src}>
            <img
              src={item.src}
              className="d-block w-full" // Use w-full instead of w-100
              style={{ maxHeight: '500px', objectFit: 'cover' }}
              alt={item.alt}
              loading="lazy" // Add lazy loading
            />
            {/* Optional: Add captions within the SwiperSlide if needed */}
            {/* <div className="absolute bottom-0 left-0 bg-black/50 text-white p-4">{item.alt}</div> */}
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons - Styled with Tailwind */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-black/30 hover:bg-black/60 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--primary)" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-black/30 hover:bg-black/60 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
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
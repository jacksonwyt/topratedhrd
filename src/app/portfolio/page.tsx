// /Users/tywestbrook/topratedhrd/src/app/portfolio/page.tsx
"use client"; // Required for state and event handlers

import React, { useState } from 'react'; // Import useState
import PortfolioGallery3D from '@/components/PortfolioGallery3D'; // Import the separated component
// Assuming Shadcn Button is installed, adjust if needed
import { Button } from '@/components/ui/button'; 
import { X } from 'lucide-react'; // Icon for close button

// Remove gallery-specific imports, constants, interfaces, ProjectItem, Gallery
// -
// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   ScrollControls,
//   Scroll,
//   useScroll,
//   Text,
//   Preload,
// } from "@react-three/drei";
// import * as THREE from "three";
// import { useLoader } from "@react-three/fiber";
// import { TextureLoader } from "three";
// import type { Group } from "three";
// -
// const projectsData = [ ... ];
// const IMAGE_WIDTH = 9;
// const IMAGE_HEIGHT = 6;
// const GAP = 1.5;
// const TOTAL_IMAGES = projectsData.length;
// interface ProjectItemProps { ... }
// function ProjectItem({ ... }) { ... }
// function Gallery() { ... }
// -

// Portfolio Page Component
export default function PortfolioPage() {
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  return (
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
          {/* Add Button Here */} 
          <div className="mt-8">
            <Button onClick={() => setIsFullscreenOpen(true)}>View Fullscreen Gallery</Button>
          </div>
        </div>
      </section>

      {/* Main Content Section - Inline Gallery Preview */} 
      {/* Hide this section when fullscreen is open */} 
      <section className={`py-16 md:py-24 ${isFullscreenOpen ? 'hidden' : ''}`}> 
        <div className="container mx-auto max-w-6xl px-4 space-y-12"> 
          {/* Gallery Section */} 
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">
              Project Showcase Preview
            </h2>
            {/* Container for the inline gallery */} 
            <div className="h-[70vh] w-full bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden relative">
              <PortfolioGallery3D />
            </div>
          </div>
        </div>
      </section>

      {/* --- Fullscreen Gallery Overlay --- */}
      {isFullscreenOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center">
          {/* Close Button */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsFullscreenOpen(false)}
            className="absolute top-4 right-4 z-[51] text-white hover:bg-white/20"
            aria-label="Close fullscreen gallery"
          >
            <X className="h-6 w-6" />
          </Button>
          {/* Gallery Component fills this container */}
          <div className="w-full h-full">
            <PortfolioGallery3D />
          </div>
        </div>
      )}
    </div>
  );
}

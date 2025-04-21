"use client";

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  useScroll,
  Text,
  Preload,
} from "@react-three/drei";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import type { Group } from "three";

// --- Configuration Constants ---
const projectsData = [
  { url: "/images/kitchen2.jpg", title: "Modern Kitchen Concept" },
  { url: "/images/kitchen1.jpg", title: "Minimalist Kitchen Design" },
  { url: "/images/bath2.jpg", title: "Luxury Bathroom Suite" },
  { url: "/images/bath1.jpg", title: "Compact Bathroom Renovation" },
  { url: "/images/roof6.jpg", title: "Terrace Design VI" },
  { url: "/images/roof5.jpg", title: "Green Roof Initiative" },
  { url: "/images/roof4.jpg", title: "Roof Deck Entertainment Area" },
  { url: "/images/roof3.jpg", title: "Solar Panel Integration" },
  { url: "/images/roof1.jpg", title: "Classic Roof Restoration" },
  { url: "/images/roof2.jpg", title: "Contemporary Roof Design" },
];

// Dimensions & Layout
const IMAGE_WIDTH = 9;
const IMAGE_HEIGHT = 6;
const GAP_MULTIPLIER = 1.5; // Multiplier for spacing based on image width
const IMAGE_TOTAL_WIDTH = IMAGE_WIDTH * GAP_MULTIPLIER; // Effective width including gap
const TOTAL_IMAGES = projectsData.length;

// Animation & Interaction Tuning
const SCROLL_DAMPING = 0.5;       // Higher = less springy scroll (more "solid"). Default: 0.25
const LERP_FACTOR = 0.18;         // Higher = faster interpolation (less "fluid"). Default: 0.1
const FOCUS_DISTANCE_FACTOR = 0.8;// How close to center triggers full focus effect
const FOCUS_SCALE_MULTIPLIER = 0.1; // How much item scales when focused (1 + value)
const FOCUS_OPACITY_MIN = 0.4;    // Opacity of blurred items
const FOCUS_OPACITY_MAX = 1.0;    // Opacity of focused item
const FOCUS_FRAME_COLOR_THRESHOLD = 0.95; // Focus level required for bright frame
const FOCUS_TEXT_COLOR_THRESHOLD = 0.8; // Focus level required for bright text

// Colors
const FRAME_COLOR_FOCUSED = new THREE.Color("#e0f2fe"); // Light blue/white
const FRAME_COLOR_BLURRED = new THREE.Color("#4b5563"); // Gray
const TEXT_COLOR_FOCUSED = new THREE.Color("#ffffff");  // White
const TEXT_COLOR_BLURRED = new THREE.Color("#6b7280");  // Darker Gray

// --- Gallery Logic ---

// Define prop types
interface ProjectItemProps {
  url: string;
  title: string;
  position: [number, number, number]; // [x, y, z]
  imageTotalWidth: number; // Pass calculated width down
}

// Individual Project Item Component
function ProjectItem({ url, title, position, imageTotalWidth }: ProjectItemProps) {
  const ref = useRef<Group>(null);
  // Using `any` for textRef is often pragmatic if drei doesn't export a specific ref type
  // or if you don't need stricter typing for its methods/properties here.
  const textRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();
  const texture = useLoader(TextureLoader, url) as THREE.Texture;

  useFrame(() => { // delta can be used for frame-rate independent animations if needed
    if (!ref.current || !textRef.current) return;

    // Calculate the target X position based on scroll offset
    // The total scrollable width is (TOTAL_IMAGES - 1) * imageTotalWidth
    const groupScrollOffset = scroll.offset * (TOTAL_IMAGES - 1) * imageTotalWidth;
    const targetX = position[0] - groupScrollOffset;

    // Interpolate position for smooth movement (using LERP_FACTOR for speed)
    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      targetX,
      LERP_FACTOR
    );

    // --- Focus Effect Calculations ---
    const distanceFromCenter = Math.abs(ref.current.position.x);
    const focusRange = IMAGE_WIDTH * FOCUS_DISTANCE_FACTOR;
    // Clamp focus between 0 (far away) and 1 (centered)
    const focus = Math.max(0, 1 - distanceFromCenter / focusRange);

    const frameMesh = ref.current.children[0] as THREE.Mesh | undefined;
    const imageMesh = ref.current.children[1] as THREE.Mesh | undefined;

    // Image Opacity interpolation
    if (imageMesh?.material) {
      const targetOpacity = FOCUS_OPACITY_MIN + focus * (FOCUS_OPACITY_MAX - FOCUS_OPACITY_MIN);
      (imageMesh.material as THREE.MeshStandardMaterial).opacity = THREE.MathUtils.lerp(
        (imageMesh.material as THREE.MeshStandardMaterial).opacity,
        targetOpacity,
        LERP_FACTOR // Use consistent lerp factor
      );
    }

    // Frame Color interpolation
    if (frameMesh?.material) {
      const targetFrameColor = focus > FOCUS_FRAME_COLOR_THRESHOLD
        ? FRAME_COLOR_FOCUSED
        : FRAME_COLOR_BLURRED;
      (frameMesh.material as THREE.MeshStandardMaterial).color.lerp(
        targetFrameColor,
        LERP_FACTOR // Use consistent lerp factor
      );
    }

    // Text Color interpolation
    if (textRef.current?.material) {
      const targetTextColor = focus > FOCUS_TEXT_COLOR_THRESHOLD
        ? TEXT_COLOR_FOCUSED
        : TEXT_COLOR_BLURRED;
      (textRef.current.material as THREE.MeshStandardMaterial).color.lerp(
        targetTextColor,
        LERP_FACTOR // Use consistent lerp factor
      );
    }

    // Scale interpolation
    const targetScale = 1 + focus * FOCUS_SCALE_MULTIPLIER;
    ref.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, 1),
      LERP_FACTOR // Use consistent lerp factor
    );
  });

  return (
    <group ref={ref} position={position}>
      {/* Frame */}
      <mesh position={[0, 0, -0.01]}> {/* Slightly behind image */}
        <planeGeometry args={[IMAGE_WIDTH + 0.2, IMAGE_HEIGHT + 0.2]} />
        {/* Start with blurred color */}
        <meshStandardMaterial
            color={FRAME_COLOR_BLURRED}
            roughness={0.5}
            metalness={0.5}
        />
      </mesh>
      {/* Image */}
      <mesh>
        <planeGeometry args={[IMAGE_WIDTH, IMAGE_HEIGHT]} />
        {/* Start with minimum opacity */}
        <meshStandardMaterial
            map={texture}
            roughness={0.2}
            metalness={0}
            transparent
            opacity={FOCUS_OPACITY_MIN}
        />
      </mesh>
      {/* Text */}
      <Text
        ref={textRef}
        position={[0, -IMAGE_HEIGHT / 2 - 0.5, 0.1]} // Adjusted spacing slightly
        fontSize={0.35} // Slightly larger font
        color={TEXT_COLOR_BLURRED} // Start with blurred color
        anchorX="center"
        anchorY="top"
        maxWidth={IMAGE_WIDTH * 0.9} // Allow slightly wider text
        textAlign="center"
        font="/fonts/Inter-Regular.woff" // Example: Specify a font for consistency
      >
        {title}
      </Text>
    </group>
  );
}

// Gallery Scene Component
function Gallery() {
  // Calculate total width and initial offset once
  const totalGalleryWidth = TOTAL_IMAGES * IMAGE_TOTAL_WIDTH;
  // Start with the first image centered (or slightly offset if preferred)
  // This calculation centers the *scrollable area*, not necessarily the first image initially.
  // To center the first image, the offset needs adjustment. Let's keep the original logic
  // which centers the group based on its total width.
  const initialXOffset = totalGalleryWidth / 2 - IMAGE_TOTAL_WIDTH / 2;

  return (
    // The <Scroll> component provides the scrollable content area
    <Scroll>
      {/* Group containing all project items */}
      {/* The position adjustment here helps center the entire gallery */}
      <group position={[initialXOffset, 0, 0]}>
        {projectsData.map((project, index) => (
          <ProjectItem
            key={project.url} // Key should be unique
            url={project.url}
            title={project.title}
            // Position items relative to the group's origin, spaced by IMAGE_TOTAL_WIDTH
            position={[-index * IMAGE_TOTAL_WIDTH, 0, -1]} // Position along negative X
            imageTotalWidth={IMAGE_TOTAL_WIDTH} // Pass down calculated width
          />
        ))}
      </group>
    </Scroll>
  );
}

// --- Main Export Component ---
export default function PortfolioGallery3D() {
  return (
    // Ensure the Canvas container has definite dimensions in your CSS/Tailwind
    <Canvas
      camera={{ position: [0, 0, 12], fov: 60 }} // Pull camera back slightly, adjust FOV
      gl={{ antialias: true, alpha: false }} // Disable alpha if no transparency needed behind canvas for potential perf gain
      className="absolute top-0 left-0 w-full h-full"
      // Consider adding dpr={[1, 2]} for performance tuning on high-res displays
      // dpr={[1, 2]} // Use device pixel ratio up to 2x
    >
      {/* Lighting setup */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 10]} intensity={0.8} />
      {/* Optional: Add a subtle point light for more dynamic highlights */}
      {/* <pointLight position={[-10, -10, -10]} intensity={0.3} color="lightblue" /> */}

      {/* Suspense for asynchronous loading (like textures) */}
      <Suspense fallback={null}>
        {/* ScrollControls wraps the scrollable content */}
        <ScrollControls
          pages={TOTAL_IMAGES - 1} // Total scroll distance in "pages"
          damping={SCROLL_DAMPING}  // ** ADJUSTED DAMPING **
          horizontal                 // Enable horizontal scrolling
          // infinite // Uncomment for infinite looping scroll (requires more complex position logic)
        >
          <Gallery />
        </ScrollControls>
        {/* Preload assets for smoother experience */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
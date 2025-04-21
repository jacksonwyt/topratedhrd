"use client";

import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  useScroll,
  Text,
  Preload,
} from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import type { Group, Mesh } from "three"; // Import specific types

// --- Configuration Constants ---
// Data remains the same
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

// Simplified Dimensions & Layout
const IMAGE_WIDTH = 8; // Slightly smaller? Adjust as needed
const IMAGE_HEIGHT = 5.5;
const GAP_MULTIPLIER = 1.4; // Adjust spacing
const IMAGE_TOTAL_WIDTH = IMAGE_WIDTH * GAP_MULTIPLIER;
const TOTAL_IMAGES = projectsData.length;

// Simplified Animation & Interaction Tuning
const SCROLL_DAMPING = 0.3;       // Slightly less damping for a bit more responsiveness
const LERP_FACTOR = 0.15;         // Interpolation speed
const FOCUS_DISTANCE_FACTOR = 0.7;// How close to center triggers focus
const FOCUS_SCALE_AMOUNT = 0.08;  // How much item scales (added to 1)
const TILT_AMOUNT = 0.05;         // How much items tilt away when unfocused
const HOVER_SCALE_AMOUNT = 0.05;  // Extra scale on hover

// Colors (Simplified - No frame colors needed)
const TEXT_COLOR_FOCUSED = new THREE.Color("#f0f0f0"); // Brighter white
const TEXT_COLOR_BLURRED = new THREE.Color("#888888"); // Medium Gray

// --- Simplified Gallery Logic ---

interface ProjectItemProps {
  url: string;
  title: string;
  position: [number, number, number];
  imageTotalWidth: number; // Still needed for scroll calculation
}

function ProjectItem({ url, title, position, imageTotalWidth }: ProjectItemProps) {
  const groupRef = useRef<Group>(null);
  const textRef = useRef<Mesh>(null); // Use Mesh type if Text forwards ref to it
  const scroll = useScroll();
  const texture = useLoader(TextureLoader, url) as THREE.Texture;
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (!groupRef.current || !textRef.current) return;

    // --- Scroll Position Calculation ---
    const groupScrollOffset = scroll.offset * (TOTAL_IMAGES - 1) * imageTotalWidth;
    const targetX = position[0] - groupScrollOffset;

    // Interpolate position smoothly
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      LERP_FACTOR
    );

    // --- Focus & Effects Calculation ---
    const distanceFromCenter = Math.abs(groupRef.current.position.x);
    const focusRange = IMAGE_WIDTH * FOCUS_DISTANCE_FACTOR;
    // Focus: 1 when centered, 0 when outside focusRange
    const focus = Math.max(0, 1 - distanceFromCenter / focusRange);
    // Inverse focus (0 when centered, 1 when far) for effects like tilt
    const unfocus = 1 - focus;

    // Get direct references to materials (assuming structure)
    const textMaterial = textRef.current.material as THREE.MeshStandardMaterial;

    // 2. Scale (Group - affects image and text together)
    const hoverScale = isHovered ? HOVER_SCALE_AMOUNT : 0;
    const targetScale = 1 + focus * FOCUS_SCALE_AMOUNT + hoverScale;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, 1),
      LERP_FACTOR
    );

    // 3. Rotation/Tilt (Group) - Tilt away when *not* focused
    // Use position.x sign to determine tilt direction
    const tiltDirection = Math.sign(groupRef.current.position.x);
    // targetRotationY = 0 when focused, TILT_AMOUNT * direction when unfocused
    const targetRotationY = unfocus * TILT_AMOUNT * tiltDirection * -1; // Tilt opposite direction of movement
     groupRef.current.rotation.y = THREE.MathUtils.lerp(
       groupRef.current.rotation.y,
       targetRotationY,
       LERP_FACTOR
     );
     // Optional: Add a slight X-axis tilt too?
     // groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, unfocus * TILT_AMOUNT * 0.2 , LERP_FACTOR);


    // 4. Text Color
    if (textMaterial) {
        textMaterial.color.lerp(
            focus > 0.5 ? TEXT_COLOR_FOCUSED : TEXT_COLOR_BLURRED, // Simple threshold for color change
            LERP_FACTOR
        );
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation(); // Prevent events bubbling up incorrectly
        setIsHovered(true);
        document.body.style.cursor = 'pointer'; // Change cursor on hover
      }}
      onPointerOut={() => {
        setIsHovered(false);
        document.body.style.cursor = 'auto'; // Reset cursor
      }}
    >
      {/* Image (No frame needed) */}
      <mesh>
        <planeGeometry args={[IMAGE_WIDTH, IMAGE_HEIGHT]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.3} // Slightly less rough
          metalness={0.1} // Tiny bit of metalness for sheen
          transparent // Needed for opacity changes
          opacity={1} // Start with minimum opacity -> CHANGE THIS to 1
          side={THREE.DoubleSide} // Render both sides if it tilts significantly
        />
      </mesh>
      {/* Text */}
      <Text
        ref={textRef}
        position={[0, -IMAGE_HEIGHT / 2 - 0.4, 0.1]} // Position below the image
        fontSize={0.3} // Adjust size as needed
        color={TEXT_COLOR_BLURRED} // Start blurred
        anchorX="center"
        anchorY="top"
        maxWidth={IMAGE_WIDTH * 0.85}
        textAlign="center"
      >
        {title}
      </Text>
    </group>
  );
}

// Gallery Scene Component (Largely unchanged, calculates layout)
function Gallery() {
  const totalGalleryWidth = TOTAL_IMAGES * IMAGE_TOTAL_WIDTH;
  // Center the entire scrollable group initially
  const initialXOffset = totalGalleryWidth / 2 - IMAGE_TOTAL_WIDTH / 2;

  return (
    <Scroll>
      <group position={[initialXOffset, 0, 0]}>
        {projectsData.map((project, index) => (
          <ProjectItem
            key={project.url}
            url={project.url}
            title={project.title}
            // Position items sequentially along negative X
            position={[-index * IMAGE_TOTAL_WIDTH, 0, -1]} // Move slightly back on Z
            imageTotalWidth={IMAGE_TOTAL_WIDTH}
          />
        ))}
      </group>
    </Scroll>
  );
}

// --- Main Export Component ---
export default function PortfolioGallery3D() {
  return (
    // Ensure Canvas container fills its parent (e.g., using Tailwind below)
    <Canvas
      camera={{ position: [0, 0, 10], fov: 65 }} // Adjusted camera slightly
      gl={{ antialias: true, alpha: true }} // Keep alpha if background shows through
      dpr={[1, 1.5]} // Clamp device pixel ratio for performance on high-res screens
      className="absolute top-0 left-0 w-full h-full bg-transparent" // Example: Ensure parent has size
    >
      {/* Slightly brighter ambient light */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 8, 10]} intensity={1.0} />
      {/* Optional: Rim light for subtle edge highlighting */}
      <directionalLight position={[-5, 0, -10]} intensity={0.2} color="lightblue" />

      <Suspense fallback={null}>
        <ScrollControls
          pages={TOTAL_IMAGES - 1} // Scroll distance based on image count
          damping={SCROLL_DAMPING}
          horizontal
          // infinite // Keep commented unless implementing looping logic
        >
          <Gallery />
        </ScrollControls>
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
"use client";

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import type { Mesh } from "three"; // Import Mesh type

// --- Simple Spinning Box ---
function SpinningBox() {
  const meshRef = useRef<Mesh>(null!); // Use non-null assertion or check in useFrame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

// --- Main Export Component (Simplified) ---
export default function PortfolioGallery3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }} // Simplified camera
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      className="absolute top-0 left-0 w-full h-full bg-transparent"
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 8, 5]} intensity={1.0} />

      <Suspense fallback={null}>
        <SpinningBox />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
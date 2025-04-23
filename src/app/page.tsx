"use client"

import React from 'react';
import { Award, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import ImageCarousel from '@/components/ImageCarousel';
import Image from 'next/image';

// Define the image paths
const carouselImages = [
  '/images/kitchen1.jpg',
  '/images/kitchen2.jpg',
  '/images/bath1.JPG',
  '/images/bath2.jpg',
  '/images/bath3.JPG',
  '/images/bath4.JPG',
  '/images/roof1.jpg',
  '/images/roof2.jpg',
  '/images/roof3.jpg',
  '/images/roof4.jpg',
  '/images/roof5.jpg',
  '/images/roof6.jpg',
];

export default function Home() {
  return (
    <>
      {/* Hero Section - White BG, Black Text */}
      <section 
        className="relative w-full py-24 md:py-32 lg:py-40 xl:py-48 bg-white"
      >
        <div className="container relative mx-auto max-w-5xl px-4 text-center z-20 flex flex-col items-center">
          <h1 
            className="relative text-4xl font-bold tracking-tighter leading-tight sm:text-5xl md:text-6xl lg:text-7xl text-black pb-4 mb-4 z-20"
          >
            Transforming Homes, Modernizing Lives
          </h1>
          <p 
            className="relative mx-auto max-w-[700px] text-gray-600 md:text-xl mt-0 mb-0 z-20"
          >
            Expert home remodeling with a focus on quality craftsmanship and innovative design. Let&apos;s build your dream space.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-3 text-lg font-medium bg-amber-200 text-black hover:bg-amber-100 transition-colors duration-200 rounded-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Image Carousel Section - White */}
      <section className="w-full py-8 md:py-12 bg-black border-t border-amber-200">
        <ImageCarousel imagePaths={carouselImages} />
      </section>

      {/* Why TopRated? Section - White */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-black">
            Why Choose TopRatedHRD?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1: Quality */}
            <div className="flex flex-col items-center text-center">
              <Award className="h-10 w-10 mb-4 text-amber-200"/>
              <h3 className="text-xl font-semibold mb-2 text-black">Uncompromising Quality</h3>
              <p className="text-sm text-gray-600">
                We use premium materials and meticulous craftsmanship for lasting results.
              </p>
            </div>
            {/* Feature 2: Customer Focus */}
            <div className="flex flex-col items-center text-center">
              <Users className="h-10 w-10 mb-4 text-amber-200"/>
              <h3 className="text-xl font-semibold mb-2 text-black">Client-Centric Approach</h3>
              <p className="text-sm text-gray-600">
                Your vision is our priority. We collaborate closely from concept to completion.
              </p>
            </div>
            {/* Feature 3: Timeliness */}
            <div className="flex flex-col items-center text-center">
              <Clock className="h-10 w-10 mb-4 text-amber-200"/>
              <h3 className="text-xl font-semibold mb-2 text-black">Reliable & On Time</h3>
              <p className="text-sm text-gray-600">
                We respect your time and stick to agreed schedules, ensuring a smooth process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - White */}
      <section id="services" className="w-full py-12 md:py-24 bg-white border-t border-amber-200">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-black relative z-20">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kitchen Remodeling Card */}
            <Link
              href="/services/kitchen-remodeling"
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/kitchen1.jpg"
                  alt="Kitchen Remodeling"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Kitchen Remodeling</h3>
                <p className="text-amber-200">Transform your kitchen into a modern masterpiece</p>
              </div>
            </Link>

            {/* Bathroom Remodeling Card */}
            <Link
              href="/services/bathroom-remodeling"
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/bath2.jpg"
                  alt="Bathroom Remodeling"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Bathroom Remodeling</h3>
                <p className="text-amber-200">Create your perfect bathroom sanctuary</p>
              </div>
            </Link>

            {/* Roofing Card */}
            <Link
              href="/services/roofing"
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/roof1.jpg"
                  alt="Roofing Services"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Roofing Services</h3>
                <p className="text-amber-200">Expert roofing solutions for your home</p>
              </div>
            </Link>

            {/* ADU/Home Addition Card */}
            <Link
              href="/services/adu-addition"
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/kitchen2.jpg"
                  alt="ADU & Home Additions"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">ADU & Home Additions</h3>
                <p className="text-amber-200">Expand your living space beautifully</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Amber */}
      <section className="w-full py-16 md:py-24 bg-amber-200 border-t border-amber-300">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-700 md:text-lg mb-8">
            Let&apos;s discuss your vision and make it a reality.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 text-lg font-medium bg-black text-amber-200 hover:bg-gray-800 transition-colors duration-200 rounded-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}

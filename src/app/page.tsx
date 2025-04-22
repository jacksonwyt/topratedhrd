"use client"

import React from 'react';
import { Award, Users, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { servicesData, ServiceData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import ImageCarousel from '@/components/ImageCarousel';

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
      {/* Hero Section - Updated: Black BG, Gold Text */}
      <section 
        className="relative w-full py-24 md:py-32 lg:py-40 xl:py-48 bg-black"
      >
        {/* Removed semi-transparent black overlay */}
        {/* <div className="absolute inset-0 bg-black/50" /> */}
        <div className="container relative mx-auto max-w-5xl px-4 text-center z-10 flex flex-col items-center">
          <h1 
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-amber-200 pb-4 mb-4"
          >
            Transforming Homes, Modernizing Lives
          </h1>
          <p 
            className="mx-auto max-w-[700px] text-amber-100 md:text-xl mt-0 mb-0"
          >
            Expert home remodeling with a focus on quality craftsmanship and innovative design. Let&apos;s build your dream space.
          </p>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="w-full py-8 md:py-12 bg-black">
        <ImageCarousel imagePaths={carouselImages} />
      </section>

      {/* Services Section - Now Dynamic, Minimal Links with Icons */}
      <section id="services" className="w-full py-12 md:py-24 bg-black">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-amber-200">
            Our Services
          </h2>
          <div className="flex flex-col items-center space-y-4">
            {servicesData.map((service: ServiceData) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-center space-x-3 text-xl text-amber-300 hover:text-amber-100 transition-colors duration-200 group"
              >
                <ChevronRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                <span>{service.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why TopRated? Section - Icon Restored */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Why Choose TopRatedHRD?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1: Quality - Restored Award Icon */}
            <div className="flex flex-col items-center text-center">
              <Award className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Uncompromising Quality</h3>
              <p className="text-sm text-muted-foreground">
                We use premium materials and meticulous craftsmanship for lasting results.
              </p>
            </div>
            {/* Feature 2: Customer Focus - Unchanged */}
            <div className="flex flex-col items-center text-center">
              <Users className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Client-Centric Approach</h3>
              <p className="text-sm text-muted-foreground">
                Your vision is our priority. We collaborate closely from concept to completion.
              </p>
            </div>
            {/* Feature 3: Timeliness - Unchanged */}
            <div className="flex flex-col items-center text-center">
              <Clock className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Reliable & On Time</h3>
              <p className="text-sm text-muted-foreground">
                We respect your time and stick to agreed schedules, ensuring a smooth process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Call to Action Section */}
      <section className="w-full py-16 md:py-28 bg-primary/10 dark:bg-primary/5">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Let us know what you have in mind. Select a service below or contact us for a general inquiry.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {
              [
                { slug: 'kitchen-remodeling', title: 'Kitchens' },
                { slug: 'bathroom-remodeling', title: 'Bathrooms' },
                { slug: 'adu-room-addition', title: 'ADUs / Additions' },
                { slug: 'roofing', title: 'Roofing' },
              ].map(service => (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`} 
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {service.title}
                </Link>
              ))
            }
          </div>
          <p className="text-sm text-muted-foreground mb-4">Not sure where to start?</p>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              General Contact
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { Award, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import { servicesData, ServiceData } from '@/lib/data';
import { AnimatedServiceCard } from '@/components/AnimatedServiceCard';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative w-full py-24 md:py-32 lg:py-40 xl:py-48 bg-[url('/skyline.jpg')] bg-cover bg-center"
      >
        {/* White Overlay for text readability */}
        <div className="absolute inset-0 bg-white/70" /> 
        <div className="container relative mx-auto max-w-5xl px-4 text-center z-10">
          {/* Revert text colors */}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-primary pb-2">
            Transforming Homes, Modernizing Lives
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Expert home remodeling with a focus on quality craftsmanship and innovative design. Let&apos;s build your dream space.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              {/* Revert button variant */}
              <Button size="lg">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Now Dynamic */}
      <section id="services" className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Our Services
          </h2>
          <div className="space-y-16">
            {servicesData.map((service: ServiceData, index: number) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="block group">
                <AnimatedServiceCard
                  slug={service.slug}
                  title={service.title}
                  description={service.description}
                  features={service.features ?? []}
                  index={index}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why TopRated? Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Why Choose TopRatedHRD?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1: Quality */}
            <div className="flex flex-col items-center text-center">
              <Award className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Uncompromising Quality</h3>
              <p className="text-sm text-muted-foreground">
                We use premium materials and meticulous craftsmanship for lasting results.
              </p>
            </div>
            {/* Feature 2: Customer Focus */}
            <div className="flex flex-col items-center text-center">
              <Users className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Client-Centric Approach</h3>
              <p className="text-sm text-muted-foreground">
                Your vision is our priority. We collaborate closely from concept to completion.
              </p>
            </div>
            {/* Feature 3: Timeliness */}
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

      {/* Call to Action Section */}
      <section className="w-full py-16 md:py-28 bg-primary">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Contact us today for a free consultation and quote.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { Award, Users, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData, ServiceData } from '@/lib/data';
import { AnimatedServiceCard } from '@/components/AnimatedServiceCard';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-violet-950/30">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 pb-2">
            Transforming Homes, Modernizing Lives
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Expert home remodeling with a focus on quality craftsmanship and innovative design. Let&apos;s build your dream space.
          </p>
          <div className="mt-8">
            <Link href="/contact">
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

      {/* Portfolio Sneak Peek Section */}
      <section className="w-full py-12 md:py-24 bg-muted/40">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder Project 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Image 
                src="https://placehold.co/600x400/e2e8f0/64748b?text=Project+1" 
                alt="Placeholder Project 1" 
                width={600} height={400} 
                className="object-cover w-full h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-semibold">Kitchen Transformation</h3>
                <p className="text-sm opacity-80">Modern and Functional</p>
              </div>
            </div>
            {/* Placeholder Project 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Image 
                src="https://placehold.co/600x400/cbd5e1/475569?text=Project+2" 
                alt="Placeholder Project 2" 
                width={600} height={400} 
                className="object-cover w-full h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-semibold">Bathroom Oasis</h3>
                <p className="text-sm opacity-80">Spa-like Retreat</p>
              </div>
            </div>
            {/* Placeholder Project 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Image 
                src="https://placehold.co/600x400/e2e8f0/334155?text=Project+3" 
                alt="Placeholder Project 3" 
                width={600} height={400} 
                className="object-cover w-full h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-semibold">ADU Addition</h3>
                <p className="text-sm opacity-80">Seamless Integration</p>
              </div>
            </div>
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
      <section className="w-full py-16 md:py-28 bg-gradient-to-r from-blue-600 to-violet-600">
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

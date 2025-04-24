'use client'; // Add this at the top for client-side interaction

import React from 'react';
import { servicesData, ServiceData, ServiceDetail, ServiceFeature, ServiceFAQ } from '@/lib/data';
import { notFound } from 'next/navigation';
// Metadata removed or handled differently for client components
// import { Metadata } from 'next';
// Keep Image import if needed by PortfolioSwiperCarousel or fallback, otherwise remove
// import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, HelpCircle } from 'lucide-react'; // Or appropriate icons
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Import PortfolioSwiperCarousel
import PortfolioSwiperCarousel from '@/components/PortfolioSwiperCarousel';
import type { PortfolioItem } from '@/lib/portfolioData'; // Import PortfolioItem type

// Remove direct Swiper imports
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// Find service data by slug
function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug);
}

// Remove Metadata export
// const service = getServiceBySlug('bathroom-remodeling');
// export const metadata: Metadata = { ... };

// The Service Page Component
export default function BathroomRemodelingPage() {
  const service = getServiceBySlug('bathroom-remodeling');

  if (!service) {
    notFound();
  }

  // Prepare images for PortfolioSwiperCarousel
  const galleryItems: PortfolioItem[] = (service.galleryImages && service.galleryImages.length > 0
    ? service.galleryImages
    : [service.cardImageUrl] // Use cardImageUrl as fallback if gallery is empty
  ).map((img, index) => ({
    src: img,
    // Generate alt text, potentially using a different alt if it's the fallback image
    alt: `${service.title} ${service.galleryImages && service.galleryImages.length > 0 ? 'gallery image ' + (index + 1) : 'service image'}`,
    category: 'Bathroom' // Add the correct category
  }));

  return (
    <div className="bg-black text-amber-100 min-h-screen">
      {/* Standardized Header Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-black">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-amber-200 pb-2" style={{ WebkitTextFillColor: '#fde68a' }}>
            {service.title}
          </h1>
          <p className="mx-auto max-w-[700px] text-amber-100/80 md:text-lg mt-4" style={{ WebkitTextFillColor: '#fef3c7' }}>
            {service.description}
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="outline" className="border-amber-300 bg-black text-amber-300 hover:bg-amber-300 hover:text-black">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Image Section uses PortfolioSwiperCarousel */}
      <section className="w-full py-8 md:py-12 bg-black">
        <div className="container mx-auto max-w-5xl px-4">
           {/* Render the carousel with the prepared items */}
           <PortfolioSwiperCarousel images={galleryItems} />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full pt-8 pb-12 md:pt-12 md:pb-20 bg-black">
        <div className="container mx-auto max-w-5xl px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left/Main Column (Service Details) */}
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>What We Offer</h2>
            {service.serviceDetails && service.serviceDetails.length > 0 ? (
              <ul className="space-y-4">
                {service.serviceDetails.map((detail: ServiceDetail, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 text-amber-300 flex-shrink-0" style={{ WebkitTextFillColor: '#fcd34d' }} />
                    <div>
                      <h3 className="font-semibold text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>{detail.title}</h3>
                      <p className="text-sm text-amber-100/80" style={{ WebkitTextFillColor: '#fef3c7' }}>{detail.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-amber-100/70 italic">Detailed service offerings coming soon.</p>
            )}
          </div>

          {/* Right/Side Column (Features/Why Us) */}
          <div className="space-y-6 rounded-lg bg-neutral-900 p-6 border border-amber-800/60">
            <h3 className="text-xl font-semibold border-b border-amber-700/50 pb-2 mb-4 text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>Key Features</h3>
            {service.features && service.features.length > 0 ? (
              <ul className="space-y-3">
                {service.features.map((feature: ServiceFeature, index: number) => (
                  <li key={index} className="flex items-center text-sm text-amber-100/90" style={{ WebkitTextFillColor: '#fef3c7' }}>
                    <CheckCircle className="h-4 w-4 mr-2 text-amber-300 flex-shrink-0" style={{ WebkitTextFillColor: '#fcd34d' }} />
                    {feature.title}
                  </li>
                ))}
              </ul>
            ) : (
               <p className="text-sm text-amber-100/70 italic">Highlights coming soon.</p>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="w-full py-12 md:py-20 bg-neutral-900">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10 text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {service.faqs.map((faq: ServiceFAQ, index: number) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-amber-800/50">
                  <AccordionTrigger className="text-left hover:no-underline text-amber-100 hover:text-amber-200">
                    <div className="flex items-center text-lg">
                      <HelpCircle className="h-5 w-5 mr-3 text-amber-300 flex-shrink-0" style={{ WebkitTextFillColor: '#fcd34d' }} />
                      {faq.q}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-amber-100/80 pl-8" style={{ WebkitTextFillColor: '#fef3c7' }}>
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-amber-200 text-black">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Ready for Your Dream Bathroom?
          </h2>
          <p className="mx-auto max-w-[600px] md:text-lg mb-8 opacity-90">
            Elevate your home with a stunning bathroom remodel by Top Rated HRD. Contact us for a free consultation.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-black text-amber-200 hover:bg-neutral-800">
            <Link href="/contact">Request Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 
'use client';

import React from 'react';
import { servicesData, ServiceData, ServiceDetail, ServiceFeature, ServiceFAQ } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Import PortfolioSwiperCarousel
import PortfolioSwiperCarousel from '@/components/PortfolioSwiperCarousel';
import type { PortfolioItem } from '@/lib/portfolioData';

function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export default function AduRoomAdditionPage() {
  const service = getServiceBySlug('adu-room-addition');

  if (!service) {
    notFound();
  }

  // Prepare images for PortfolioSwiperCarousel
  const galleryItems: PortfolioItem[] = (service.galleryImages && service.galleryImages.length > 0
    ? service.galleryImages
    : [service.cardImageUrl] // Fallback for ADU
  ).map((img, index) => ({
    src: img,
    alt: `${service.title} ${service.galleryImages && service.galleryImages.length > 0 ? 'gallery image ' + (index + 1) : 'service image'}`,
    category: 'ADU'
  }));

  return (
    <div className="bg-black text-amber-100 min-h-screen">
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
              <Link href="/contact">Discuss Your ADU Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 bg-black">
        <div className="container mx-auto max-w-5xl px-4">
          <PortfolioSwiperCarousel images={galleryItems} />
        </div>
      </section>

      <section className="w-full pt-8 pb-12 md:pt-12 md:pb-20 bg-black">
        <div className="container mx-auto max-w-5xl px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          
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
            Expand Your Home with an ADU or Addition
          </h2>
          <p className="mx-auto max-w-[600px] md:text-lg mb-8 opacity-90">
            Add value and functionality to your property. Contact Top Rated HRD to explore your ADU and room addition options.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-black text-amber-200 hover:bg-neutral-800">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 
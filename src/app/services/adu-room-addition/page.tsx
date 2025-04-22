import { servicesData, ServiceData, ServiceDetail, ServiceFeature, ServiceFAQ } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, HelpCircle } from 'lucide-react';

function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug);
}

const service = getServiceBySlug('adu-room-addition');
export const metadata: Metadata = {
  title: `${service?.title || 'Service'} — Top Rated HRD`,
  description: service?.metaDescription || 'Service description.',
};

export default function AduRoomAdditionPage() {
  const service = getServiceBySlug('adu-room-addition');

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      {/* Standardized Header Section */}
      <section className="w-full py-12 md:py-20 border-b">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary pb-2">
            {service.title}
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg mt-4">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Image Section */}
      <section className="w-full py-8 md:py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={service.heroImagePlaceholder}
              alt={`${service.title} service image`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full pt-0 pb-12 md:pt-0 md:pb-20">
        <div className="container mx-auto max-w-5xl px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left/Main Column (Service Details) */}
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">What We Offer</h2>
            {service.serviceDetails && service.serviceDetails.length > 0 ? (
              <ul className="space-y-4">
                {service.serviceDetails.map((detail: ServiceDetail, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{detail.title}</h3>
                      <p className="text-sm text-muted-foreground">{detail.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">Detailed service offerings coming soon.</p>
            )}
          </div>

          {/* Right/Side Column (Features/Why Us) */}
          <div className="space-y-6">
             <h3 className="text-xl font-semibold border-b pb-2 mb-4">Key Features</h3>
            {service.features && service.features.length > 0 ? (
              <ul className="space-y-3">
                {service.features.map((feature: ServiceFeature, index: number) => (
                  <li key={index} className="flex items-center text-sm">
                     <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                     {feature.title}
                  </li>
                ))}
              </ul>
            ) : (
               <p className="text-sm text-muted-foreground">Highlights coming soon.</p>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="w-full py-12 md:py-20 bg-muted/40">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq: ServiceFAQ, index: number) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                     <div className="flex items-center">
                        <HelpCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                        {faq.q}
                     </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pl-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}
    </div>
  );
} 
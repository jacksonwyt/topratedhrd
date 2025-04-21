import { servicesData, ServiceData, ServiceDetail, ServiceFeature, ServiceFAQ } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata /*, ResolvingMetadata*/ } from 'next';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, HelpCircle } from 'lucide-react'; // Or appropriate icons

// Define props interface
interface ServicePageProps {
  params: {
    slug: string;
  };
  // searchParams?: { [key: string]: string | string[] | undefined }; // Include if you use searchParams
}

// Generate static paths for each service
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Find service data by slug
function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug);
}

// Generate dynamic metadata
export async function generateMetadata(
  { params }: ServicePageProps,
  // parent: ResolvingMetadata // Removed unused parameter
): Promise<Metadata> {
  const slug = params.slug;
  const service = getServiceBySlug(slug);

  if (!service) {
    // Metadata for not found page can be handled globally or here
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} — Top Rated HRD`,
    description: service.metaDescription,
    // openGraph: { // Optional: Add Open Graph data if needed
    //   title: service.title,
    //   description: service.metaDescription,
    //   images: [service.heroImagePlaceholder],
    // },
  };
}

// The Service Page Component
export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound(); // Trigger 404 page
  }

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-center bg-muted overflow-hidden">
        <Image
          src={service.heroImagePlaceholder}
          alt={`${service.title} hero image`}
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-30"
          priority // Load hero image faster
        />
        <div className="relative z-10 container mx-auto max-w-5xl px-4">
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 pb-2">
            {service.headline}
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg mt-4">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-12 md:py-20">
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
                     {/* Optional: Add description as tooltip or below */}
                     {/* <p className="text-xs text-muted-foreground">{feature.description}</p> */}
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

      {/* Optional: Add a CTA section here */}

    </div>
  );
} 
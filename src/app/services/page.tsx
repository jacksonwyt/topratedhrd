import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import { servicesData } from '@/lib/data'; // Assuming this contains your service details
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Wrench, Award, MessageSquare, DraftingCompass, Construction, CheckSquare } from 'lucide-react'; // Example icons

export const metadata: Metadata = {
  title: 'Expert Home Remodeling & Construction Services | Top Rated HRD',
  description: 'Discover Top Rated HRD\'s premier home remodeling services: kitchens, bathrooms, roofing, ADUs, and more. Quality craftsmanship and exceptional service.',
};

export default function ServicesListPageReimagined() {
  return (
    <div className="bg-black text-amber-100">
      {/* === Hero Section === */}
      <section className="w-full py-16 md:py-24 lg:py-32  bg-black">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-amber-200 mb-4" style={{ WebkitTextFillColor: '#fde68a' }}>
            Transform Your Home
          </h1>
          <p className="mx-auto max-w-[700px] text-amber-100 md:text-xl mb-8" style={{ WebkitTextFillColor: '#fef3c7' }}>
            Top Rated HRD delivers exceptional craftsmanship and personalized service across a range of remodeling and construction projects.
          </p>
          <Button asChild size="lg" variant="outline" className="border-amber-300 bg-black text-amber-300 hover:bg-amber-300 hover:text-black">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
      {/* === Our Services Section === */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-black">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {servicesData.map((service) => (
              <Card key={service.slug} className="flex flex-col overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border border-amber-800/60 hover:border-amber-300/80 rounded-lg bg-neutral-900 text-amber-100">
                <div className="relative w-full h-60">
                  <Image
                    src={service.cardImageUrl}
                    alt={`${service.title} service image`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl lg:text-2xl">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-amber-200 hover:text-amber-300 transition-colors duration-200 group-hover:text-amber-300 stretched-link"
                      style={{ WebkitTextFillColor: '#fde68a' }}
                      >
                      {service.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-6 pt-0">
                  <CardDescription className="line-clamp-3 text-base text-amber-100/80" style={{ WebkitTextFillColor: '#fef3c7' }}>
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-2">
                  <Button asChild variant="outline" size="sm" className="transition-all duration-300 border-amber-600 text-amber-300 group-hover:bg-amber-300 group-hover:text-black group-hover:border-amber-300">
                    <Link href={`/services/${service.slug}`}>
                      <span>
                        Learn More
                        <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* === Why Choose Us Section === */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-neutral-900/50">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>
            Why Partner with Top Rated HRD?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <Award className="h-12 w-12 text-amber-300 mb-4" style={{ WebkitTextFillColor: '#fcd34d' }} />
              <h3 className="text-lg font-semibold mb-2 text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>Quality Craftsmanship</h3>
              <p className="text-amber-100/80 text-sm" style={{ WebkitTextFillColor: '#fef3c7' }}>
                We use premium materials and meticulous techniques for lasting results.
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Users className="h-12 w-12 text-amber-300 mb-4" style={{ WebkitTextFillColor: '#fcd34d' }} />
              <h3 className="text-lg font-semibold mb-2 text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>Experienced Team</h3>
              <p className="text-amber-100/80 text-sm" style={{ WebkitTextFillColor: '#fef3c7' }}>
                Our skilled professionals bring years of expertise to every project.
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <CheckCircle className="h-12 w-12 text-amber-300 mb-4" style={{ WebkitTextFillColor: '#fcd34d' }} />
              <h3 className="text-lg font-semibold mb-2 text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>Reliable & Transparent</h3>
              <p className="text-amber-100/80 text-sm" style={{ WebkitTextFillColor: '#fef3c7' }}>
                We prioritize clear communication and dependable project execution.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* === Our Process Section === */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-black">
        <div className="container mx-auto max-w-5xl px-4">
           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>
            Our Simple Process
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
            <div className="flex flex-col items-center text-center w-full md:w-1/4">
                <div className="bg-amber-300 text-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>1. Consultation</h3>
                <p className="text-amber-100/80 text-sm" style={{ WebkitTextFillColor: '#fef3c7' }}>Discuss your vision & needs.</p>
            </div>
            <div className="hidden md:block text-amber-700/50 transform rotate-90 md:rotate-0">→</div>
             <div className="flex flex-col items-center text-center w-full md:w-1/4">
                <div className="bg-amber-300 text-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <DraftingCompass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>2. Design & Plan</h3>
                <p className="text-amber-100/80 text-sm" style={{ WebkitTextFillColor: '#fef3c7' }}>Finalize design & scope.</p>
            </div>
            <div className="hidden md:block text-amber-700/50 transform rotate-90 md:rotate-0">→</div>
             <div className="flex flex-col items-center text-center w-full md:w-1/4">
                <div className="bg-amber-300 text-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Construction className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>3. Build & Manage</h3>
                <p className="text-amber-100/80 text-sm" style={{ WebkitTextFillColor: '#fef3c7' }}>Execute the project.</p>
            </div>
            <div className="hidden md:block text-amber-700/50 transform rotate-90 md:rotate-0">→</div>
             <div className="flex flex-col items-center text-center w-full md:w-1/4">
                <div className="bg-amber-300 text-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <CheckSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>4. Completion</h3>
                <p className="text-amber-100/80 text-sm" style={{ WebkitTextFillColor: '#fef3c7' }}>Final walkthrough & handover.</p>
            </div>
          </div>
        </div>
      </section>
      {/* === Testimonial Snippet === */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-neutral-900/30 to-black">
        <div className="container mx-auto max-w-3xl px-4 text-center">
           <Wrench className="h-10 w-10 text-amber-300 mx-auto mb-4" style={{ WebkitTextFillColor: '#fcd34d' }}/>
          <blockquote className="text-xl md:text-2xl font-medium italic text-amber-100 mb-4" style={{ WebkitTextFillColor: '#fef3c7' }}>
            Top Rated HRD transformed our outdated kitchen into a modern masterpiece. Their team was professional, communicative, and the quality of work exceeded our expectations!
          </blockquote>
          <p className="text-base font-semibold text-amber-200/80" style={{ WebkitTextFillColor: '#fde68a' }}>— Sarah & Tom P., Happy Homeowners</p>
        </div>
      </section>
      {/* === Call to Action Section === */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-amber-200 text-black">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto max-w-[600px] md:text-lg mb-8 opacity-90">
            Let&apos;s discuss how Top Rated HRD can bring your home renovation dreams to life. Contact us today for a free, no-obligation consultation.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-black text-amber-200 hover:bg-neutral-800">
            <Link href="/contact">Request Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
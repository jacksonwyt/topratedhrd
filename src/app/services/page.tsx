import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Wrench, Award } from 'lucide-react';
import { ScrollingLottieSection } from '@/components/ScrollingLottieSection';

export const metadata: Metadata = {
  title: 'Expert Home Remodeling & Construction Services | Top Rated HRD',
  description: 'Discover Top Rated HRD\'s premier home remodeling services: kitchens, bathrooms, roofing, ADUs, and more. Quality craftsmanship and exceptional service.',
};

export default function ServicesListPageReimagined() {
  return (
    <div className="bg-white text-black">
      {/* === Hero Section === */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-black mb-4">
            Transform Your Home
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mb-8">
            Top Rated HRD delivers exceptional craftsmanship and personalized service across a range of remodeling and construction projects.
          </p>
          <Button asChild size="lg" variant="outline" className="border-amber-200 bg-white text-amber-200 hover:bg-amber-200 hover:text-black">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* === Scrolling Lottie Animations Section === */}
      <ScrollingLottieSection />

      {/* === Why Choose Us Section === */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-white border-t border-amber-200">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-black">
            Why Partner with Top Rated HRD?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg border border-amber-200">
              <Award className="h-12 w-12 text-amber-200 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-black">Quality Craftsmanship</h3>
              <p className="text-gray-600 text-sm">
                We use premium materials and meticulous techniques for lasting results.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg border border-amber-200">
              <Users className="h-12 w-12 text-amber-200 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-black">Experienced Team</h3>
              <p className="text-gray-600 text-sm">
                Our skilled professionals bring years of expertise to every project.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg border border-amber-200">
              <CheckCircle className="h-12 w-12 text-amber-200 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-black">Reliable & Transparent</h3>
              <p className="text-gray-600 text-sm">
                We prioritize clear communication and dependable project execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Testimonial Snippet === */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto max-w-3xl px-4 text-center">
           <Wrench className="h-10 w-10 text-amber-200 mx-auto mb-4" />
          <blockquote className="text-xl md:text-2xl font-medium italic text-gray-800 mb-4">
            Top Rated HRD transformed our outdated kitchen into a modern masterpiece. Their team was professional, communicative, and the quality of work exceeded our expectations!
          </blockquote>
          <p className="text-base font-semibold text-amber-200">— Sarah & Tom P., Happy Homeowners</p>
        </div>
      </section>

      {/* === Call to Action Section === */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white border-t border-amber-200">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-black">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto max-w-[600px] md:text-lg mb-8 text-gray-600">
            Let&apos;s discuss how Top Rated HRD can bring your home renovation dreams to life. Contact us today for a free, no-obligation consultation.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-amber-200 text-black hover:bg-amber-100">
            <Link href="/contact">Request Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import { servicesData } from '@/lib/data'; // Assuming this contains your service details
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Wrench, Award, MessageSquare, DraftingCompass, Construction, CheckSquare } from 'lucide-react'; // Example icons

export const metadata: Metadata = {
  title: 'Expert Home Remodeling & Construction Services | Top Rated HRD', // Slightly more engaging title
  description: 'Discover Top Rated HRD\'s premier home remodeling services: kitchens, bathrooms, roofing, ADUs, and more. Quality craftsmanship and exceptional service.', // More detailed description
};

export default function ServicesListPageReimagined() {
  return (
    <div className="bg-background text-foreground">

      {/* === Hero Section === */}
      <section className="w-full py-16 md:py-24 lg:py-32 border-b bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-4">
            Transform Your Home
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-8">
            Top Rated HRD delivers exceptional craftsmanship and personalized service across a range of remodeling and construction projects.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* === Our Services Section === */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Our Core Services
          </h2>
          {/* Adjusted grid for potentially 4 services - looks more balanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {servicesData.map((service) => (
              <Card key={service.slug} className="flex flex-col overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border border-border hover:border-primary/80 rounded-lg bg-card">
                <div className="relative w-full h-60"> {/* Increased image height */}
                  <Image
                    src={service.cardImageUrl}
                    alt={`${service.title} service image`}
                    fill // Use fill instead of layout="fill"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" // Add sizes prop for optimization
                    style={{ objectFit: 'cover' }} // Use style prop for objectFit
                    className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-300"></div> {/* Subtle overlay */}
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl lg:text-2xl">
                    <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors duration-200 group-hover:text-primary stretched-link"> {/* Ensure link covers card? Or keep button */}
                      {service.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-6 pt-0">
                  <CardDescription className="line-clamp-3 text-base"> {/* Slightly larger description */}
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-2">
                  {/* Use variant="link" for a less intrusive "learn more" or keep outline */}
                  <Button asChild variant="outline" size="sm" className="transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                    <Link href={`/services/${service.slug}`}>Learn More <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* === Why Choose Us Section === */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-muted/50">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Why Partner with Top Rated HRD?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quality Craftsmanship</h3>
              <p className="text-muted-foreground text-sm">
                We use premium materials and meticulous techniques for lasting results.
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Experienced Team</h3>
              <p className="text-muted-foreground text-sm">
                Our skilled professionals bring years of expertise to every project.
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Reliable & Transparent</h3>
              <p className="text-muted-foreground text-sm">
                We prioritize clear communication and dependable project execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Our Process Section === */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-5xl px-4">
           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16"> {/* Increased bottom margin */}
            Our Simple Process
          </h2>
          {/* Using flexbox for a horizontal or stacked layout */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center w-full md:w-1/4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-1">1. Consultation</h3>
                <p className="text-muted-foreground text-sm">Discuss your vision & needs.</p>
            </div>
             {/* Arrow/Separator (optional visual) */}
            <div className="hidden md:block text-muted-foreground/50 transform rotate-90 md:rotate-0">→</div>
            {/* Step 2 */}
             <div className="flex flex-col items-center text-center w-full md:w-1/4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <DraftingCompass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-1">2. Design & Plan</h3>
                <p className="text-muted-foreground text-sm">Finalize design & scope.</p>
            </div>
             {/* Arrow/Separator */}
            <div className="hidden md:block text-muted-foreground/50 transform rotate-90 md:rotate-0">→</div>
             {/* Step 3 */}
             <div className="flex flex-col items-center text-center w-full md:w-1/4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Construction className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-1">3. Build & Manage</h3>
                <p className="text-muted-foreground text-sm">Execute the project.</p>
            </div>
             {/* Arrow/Separator */}
            <div className="hidden md:block text-muted-foreground/50 transform rotate-90 md:rotate-0">→</div>
             {/* Step 4 */}
             <div className="flex flex-col items-center text-center w-full md:w-1/4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <CheckSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-1">4. Completion</h3>
                <p className="text-muted-foreground text-sm">Final walkthrough & handover.</p>
            </div>
          </div>
        </div>
      </section>

       {/* === Testimonial Snippet === */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-3xl px-4 text-center">
           <Wrench className="h-10 w-10 text-primary mx-auto mb-4" /> {/* Or a quote icon */}
          <blockquote className="text-xl md:text-2xl font-medium italic text-foreground mb-4">
            Top Rated HRD transformed our outdated kitchen into a modern masterpiece. Their team was professional, communicative, and the quality of work exceeded our expectations!
          </blockquote>
          <p className="text-base font-semibold text-muted-foreground">— Sarah & Tom P., Happy Homeowners</p>
          {/* Optional: Link to more testimonials */}
          {/* <Button variant="link" asChild className="mt-6">
             <Link href="/testimonials">Read More Success Stories</Link>
          </Button> */}
        </div>
      </section>

       {/* === Call to Action Section === */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto max-w-[600px] md:text-lg mb-8 opacity-90">
            Let&apos;s discuss how Top Rated HRD can bring your home renovation dreams to life. Contact us today for a free, no-obligation consultation.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
            <Link href="/contact">Request Your Free Quote</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
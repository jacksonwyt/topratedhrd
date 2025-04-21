import Link from 'next/link';
import { Metadata } from 'next';
import { servicesData } from '@/lib/data';
import { Button } from '@/components/ui/button'; // Assuming you might want a button
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'; // Using Card for layout

export const metadata: Metadata = {
  title: 'Our Services — Top Rated HRD',
  description: 'Explore the range of remodeling and construction services offered by Top Rated HRD, including kitchen and bathroom remodeling, roofing, ADUs, and more.',
};

export default function ServicesListPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Page Header */}
      <section className="w-full py-12 md:py-20 border-b">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary pb-2">
            Our Services
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg mt-4">
            Discover how Top Rated HRD can transform your home with our comprehensive range of expert services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <Card key={service.slug} className="flex flex-col">
                <CardHeader>
                  <CardTitle>
                     {/* Make the title a link */}
                    <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                      {service.title}
                    </Link>
                   </CardTitle>
                   <CardDescription className="line-clamp-3"> {/* Limit description lines */}
                     {service.description}
                   </CardDescription>
                </CardHeader>
                 <CardContent className="flex-grow">
                   {/* You could add a small image or icon here if available */}
                   {/* <img src={service.thumbnailUrl} alt="" className="aspect-video object-cover rounded-md mb-4" /> */}
                 </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/services/${service.slug}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
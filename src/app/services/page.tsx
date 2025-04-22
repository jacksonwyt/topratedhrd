import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
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
              <Card key={service.slug} className="flex flex-col overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 border border-border hover:border-primary rounded-lg">
                <div className="relative w-full h-48">
                  <Image
                    src={service.cardImageUrl}
                    alt={`${service.title} service image`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle>
                    <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors group-hover:text-primary">
                      {service.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <CardDescription className="line-clamp-3">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4">
                  <Button asChild variant="outline" size="sm" className="transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
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
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServiceData } from '@/lib/data'; // Assuming ServiceData is exported from data

interface ServicesGridProps {
  services: ServiceData[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      {services.map((service) => (
        <motion.div
          key={service.slug}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <Card
            key={service.slug} // Keep key on the outer motion.div
            className="flex flex-col h-full overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 border border-border hover:border-primary rounded-lg"
          >
            <div className="relative w-full h-48">
              <Image
                src={service.heroImagePlaceholder}
                alt={`${service.title} service`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle>
                <Link href={`/services/${service.slug}`} className="group-hover:text-primary transition-colors">
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
        </motion.div>
      ))}
    </motion.div>
  );
} 
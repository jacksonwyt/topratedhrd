'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceFeature } from '@/lib/data'; // Only need ServiceFeature type now
import { 
  Paintbrush, Gem, Workflow, ShieldCheck, CheckCircle, Home, Building, Hammer, 
  Square, Rows, CookingPot, Lamp,
} from 'lucide-react';

// Icon mapping
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Paintbrush,
  Gem,
  Workflow,
  ShieldCheck,
  CheckCircle,
  Home,
  Building,
  Hammer,
  Square,
  Rows,
  CookingPot,
  Lamp,
};

// Update props to accept decomposed data
interface AnimatedServiceCardProps {
  slug: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  index: number;
}

export function AnimatedServiceCard({  title, description, features, index }: AnimatedServiceCardProps) {
  // No need for: const features = service.features ?? [];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1, // Stagger animation based on index
      },
    },
  };

  return (
    <motion.div
      className="p-8 border border-border rounded-lg shadow-sm bg-card overflow-hidden" // Added overflow-hidden for visual consistency during animation
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible, only once
    >
      <h3 className="text-2xl font-semibold mb-4 text-primary">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      {features.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature: ServiceFeature, idx: number) => {
               // Note: Ensure icon component type is handled correctly if icons are used here.
               // If feature.icon is a component:
              const IconComponent = iconMap[feature.icon]; // Get component from map using string name
              return (
                <div key={idx} className="flex items-start space-x-3">
                  {IconComponent && <IconComponent className="h-6 w-6 mt-1 text-primary flex-shrink-0" />}
                  <div>
                    <h5 className="font-medium">{feature.title}</h5>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* Optionally add link */}
      {/* <Link href={`/contact?service=${slug}`}> */}
      {/*   <span className="text-primary hover:underline">Get a Quote for {title}</span> */}
      {/* </Link> */}
    </motion.div>
  );
} 
import React from 'react';
import { Building, Users, Handshake, Target } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Page Header Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-violet-950/30">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            About TopRatedHRD
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Building Dreams, Transforming Homes in San Diego
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 space-y-12">
          {/* Our Story */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-4 flex items-center">
              <Building className="h-6 w-6 mr-3 text-primary" />
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At TopRated Home Remodel & Design, we&apos;re driven by a passion for transforming houses into dream homes. Based in San Diego, we are committed to delivering exceptional quality, unparalleled client satisfaction, and innovative design solutions. We strive to be your trusted partner, guiding you through every step of the remodeling journey with expertise and care.
            </p>
          </div>

          {/* Our Team */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-4 flex items-center">
              <Users className="h-6 w-6 mr-3 text-primary" />
              Our Experienced Team
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our strength lies in our dedicated team. We bring together a wealth of [Confirm Experience Level - e.g., decades of] collective experience in the home remodeling industry. Each member is skilled in their craft and committed to bringing your unique vision to life with precision and attention to detail. We believe that collaboration is key to achieving outstanding results.
            </p>
            {/* Placeholder for team photos/bios if added later */}
          </div>

          {/* Our Values */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center">
              <Handshake className="h-6 w-6 mr-3 text-primary" />
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-primary">✓</div>
                <div>
                  <h3 className="font-medium">Integrity</h3>
                  <p className="text-sm text-muted-foreground">Honesty and transparency in every interaction and phase of your project.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-primary">✓</div>
                <div>
                  <h3 className="font-medium">Craftsmanship</h3>
                  <p className="text-sm text-muted-foreground">Commitment to high-quality materials and meticulous workmanship.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-primary">✓</div>
                <div>
                  <h3 className="font-medium">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">Working closely with you to ensure your vision is realized perfectly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-primary">✓</div>
                <div>
                  <h3 className="font-medium">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Utilizing modern techniques and designs to create functional, beautiful spaces.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-4 flex items-center">
              <Target className="h-6 w-6 mr-3 text-primary" />
              Our Process
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We follow a streamlined process to ensure your project runs smoothly from start to finish:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li><span className="font-medium text-foreground">Consultation:</span> Understanding your needs, vision, and budget.</li>
              <li><span className="font-medium text-foreground">Design:</span> Developing detailed plans and material selections.</li>
              <li><span className="font-medium text-foreground">Execution:</span> Skilled construction and project management.</li>
              <li><span className="font-medium text-foreground">Completion:</span> Final walkthrough and ensuring your total satisfaction.</li>
            </ol>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Ready to Start Your Transformation?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how we can bring your home remodeling ideas to life. Contact us today to schedule your initial consultation.
            </p>
            <Link href="/contact">
              <span className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Get In Touch
              </span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

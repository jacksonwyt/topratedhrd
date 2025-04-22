import React from 'react';
import { Building, Users, Handshake, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-black text-amber-100">
      {/* Page Header Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-black">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>
            About TopRatedHRD
          </h1>
          <p className="mt-4 text-lg md:text-xl text-amber-100/80" style={{ WebkitTextFillColor: '#fef3c7' }}>
            Building Dreams, Transforming Homes in San Diego
          </p>
        </div>
      </section>
      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto max-w-4xl px-4 space-y-12">
          {/* Our Story */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-4 flex items-center text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>
              <Building className="h-6 w-6 mr-3 text-amber-300" style={{ WebkitTextFillColor: '#fcd34d' }} />
              Our Story
            </h2>
            <p className="text-amber-100/80 leading-relaxed mb-6" style={{ WebkitTextFillColor: '#fef3c7' }}>
              At TopRated Home Remodel & Design, we&apos;re driven by a passion for transforming houses into dream homes. Based in San Diego, we are committed to delivering exceptional quality, unparalleled client satisfaction, and innovative design solutions. We strive to be your trusted partner, guiding you through every step of the remodeling journey with expertise and care.
            </p>
            <div className="my-8 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/kitchen1.jpg" 
                alt="Modern kitchen remodel example by TopRatedHRD"
                width={800}
                height={500}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Our Team */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-4 flex items-center text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>
              <Users className="h-6 w-6 mr-3 text-amber-300" style={{ WebkitTextFillColor: '#fcd34d' }} />
              Our Experienced Team
            </h2>
            <p className="text-amber-100/80 leading-relaxed" style={{ WebkitTextFillColor: '#fef3c7' }}>
              Our strength lies in our dedicated team. We bring together a wealth of [Confirm Experience Level - e.g., decades of] collective experience in the home remodeling industry. Each member is skilled in their craft and committed to bringing your unique vision to life with precision and attention to detail. We believe that collaboration is key to achieving outstanding results.
            </p>
            <div className="my-8 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/bath2.jpg" 
                alt="Stylish bathroom renovation example by TopRatedHRD"
                width={800}
                height={500}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Our Values */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>
              <Handshake className="h-6 w-6 mr-3 text-amber-300" style={{ WebkitTextFillColor: '#fcd34d' }} />
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-amber-300" style={{ WebkitTextFillColor: '#fcd34d' }}>✓</div>
                <div>
                  <h3 className="font-medium text-amber-100" style={{ WebkitTextFillColor: '#fef3c7' }}>Integrity</h3>
                  <p className="text-sm text-amber-100/70" style={{ WebkitTextFillColor: '#fef3c7' }}>Honesty and transparency in every interaction and phase of your project.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-amber-300" style={{ WebkitTextFillColor: '#fcd34d' }}>✓</div>
                <div>
                  <h3 className="font-medium text-amber-100" style={{ WebkitTextFillColor: '#fef3c7' }}>Craftsmanship</h3>
                  <p className="text-sm text-amber-100/70" style={{ WebkitTextFillColor: '#fef3c7' }}>Commitment to high-quality materials and meticulous workmanship.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-amber-300" style={{ WebkitTextFillColor: '#fcd34d' }}>✓</div>
                <div>
                  <h3 className="font-medium text-amber-100" style={{ WebkitTextFillColor: '#fef3c7' }}>Collaboration</h3>
                  <p className="text-sm text-amber-100/70" style={{ WebkitTextFillColor: '#fef3c7' }}>Working closely with you to ensure your vision is realized perfectly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-amber-300" style={{ WebkitTextFillColor: '#fcd34d' }}>✓</div>
                <div>
                  <h3 className="font-medium text-amber-100" style={{ WebkitTextFillColor: '#fef3c7' }}>Innovation</h3>
                  <p className="text-sm text-amber-100/70" style={{ WebkitTextFillColor: '#fef3c7' }}>Utilizing modern techniques and designs to create functional, beautiful spaces.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-4 flex items-center text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>
              <Target className="h-6 w-6 mr-3 text-amber-300" style={{ WebkitTextFillColor: '#fcd34d' }} />
              Our Process
            </h2>
            <p className="text-amber-100/80 leading-relaxed mb-6" style={{ WebkitTextFillColor: '#fef3c7' }}>
              We follow a streamlined process to ensure your project runs smoothly from start to finish:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-amber-100/80" style={{ WebkitTextFillColor: '#fef3c7' }}>
              <li><span className="font-medium text-amber-100" style={{ WebkitTextFillColor: '#fef3c7' }}>Consultation:</span> Understanding your needs, vision, and budget.</li>
              <li><span className="font-medium text-amber-100" style={{ WebkitTextFillColor: '#fef3c7' }}>Design:</span> Developing detailed plans and material selections.</li>
              <li><span className="font-medium text-amber-100" style={{ WebkitTextFillColor: '#fef3c7' }}>Execution:</span> Skilled construction and project management.</li>
              <li><span className="font-medium text-amber-100" style={{ WebkitTextFillColor: '#fef3c7' }}>Completion:</span> Final walkthrough and ensuring your total satisfaction.</li>
            </ol>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-amber-200" style={{ WebkitTextFillColor: '#fde68a' }}>Ready to Start Your Transformation?</h2>
            <p className="text-amber-100/80 mb-6 max-w-2xl mx-auto" style={{ WebkitTextFillColor: '#fef3c7' }}>
              Let&apos;s discuss how we can bring your home remodeling ideas to life. Contact us today to schedule your initial consultation.
            </p>
            <Link href="/contact" legacyBehavior>
              <span className="inline-flex h-11 items-center justify-center rounded-md bg-amber-300 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 cursor-pointer">
                Get In Touch
              </span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

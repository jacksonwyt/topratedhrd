import React from 'react';
import { Building, Users, Handshake, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-600">
      {/* Page Header Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black">
            About TopRatedHRD
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Building Dreams, Transforming Homes in San Diego
          </p>
        </div>
      </section>
      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4 ">
          {/* Our Story */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-4 flex items-center text-black">
              <Building className="h-6 w-6 mr-3 text-amber-200" />
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
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
            <h2 className="text-3xl font-semibold tracking-tight mb-4 flex items-center text-black">
              <Users className="h-6 w-6 mr-3 text-amber-200" />
              Our Experienced Team
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our strength lies in our dedicated team. We bring together a wealth of over 100 years of collective experience in the home remodeling industry. Each member is skilled in their craft and committed to bringing your unique vision to life with precision and attention to detail. We believe that collaboration is key to achieving outstanding results.
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
            <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center text-black">
              <Handshake className="h-6 w-6 mr-3 text-amber-200" />
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-amber-200">✓</div>
                <div>
                  <h3 className="font-medium text-black">Integrity</h3>
                  <p className="text-sm text-gray-600">Honesty and transparency in every interaction and phase of your project.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-amber-200">✓</div>
                <div>
                  <h3 className="font-medium text-black">Craftsmanship</h3>
                  <p className="text-sm text-gray-600">Commitment to high-quality materials and meticulous workmanship.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-amber-200">✓</div>
                <div>
                  <h3 className="font-medium text-black">Collaboration</h3>
                  <p className="text-sm text-gray-600">Working closely with you to ensure your vision is realized perfectly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-amber-200">✓</div>
                <div>
                  <h3 className="font-medium text-black">Innovation</h3>
                  <p className="text-sm text-gray-600">Utilizing modern techniques and designs to create functional, beautiful spaces.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-4 flex items-center text-black">
              <Target className="h-6 w-6 mr-3 text-amber-200" />
              Our Process
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We follow a streamlined process to ensure your project runs smoothly from start to finish:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li><span className="font-medium text-black">Consultation:</span> Understanding your needs, vision, and budget.</li>
              <li><span className="font-medium text-black">Design:</span> Developing detailed plans and material selections.</li>
              <li><span className="font-medium text-black">Execution:</span> Skilled construction and project management.</li>
              <li><span className="font-medium text-black">Completion:</span> Final walkthrough and ensuring your total satisfaction.</li>
            </ol>
          </div>

          {/* Call to Action */}
          <div className="text-center py-12 px-4 bg-amber-200 rounded-lg">
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-black">Ready to Start Your Transformation?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how we can bring your home remodeling ideas to life. Contact us today to schedule your initial consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

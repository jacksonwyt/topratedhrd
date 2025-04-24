// Define the structure for service data
export interface ServiceFeature {
  title: string;
  description: string;
  icon: string; // Keep the icon string type, the imported components were unused
}

export interface ServiceDetail {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  metaDescription: string;
  headline: string;
  description: string;
  heroImagePlaceholder: string;
  cardImageUrl: string;
  galleryImages?: string[];
  features?: ServiceFeature[];
  serviceDetails?: ServiceDetail[];
  faqs?: ServiceFAQ[];
}

// Data store
export const servicesData: ServiceData[] = [
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    metaDescription: 'Transform your kitchen with Top Rated Home Remodel and Design, Trusted kitchen remodeling experts. We design, supply, and build quality kitchens. Book your free consultation today!',
    headline: 'Quality Kitchen Remodeling: From Design to Installation',
    description: 'Trusted San Diego County expert with 100+ years combined team experience, specializing in comprehensive, tailored kitchen transformations. We cover all phases, ensuring a space that reflects your style and needs.',
    heroImagePlaceholder: 'https://placehold.co/1200x500/e2e8f0/64748b?text=Modern+Kitchen',
    cardImageUrl: '/images/kitchen/kitchen1.jpg',
    galleryImages: ['/images/kitchen/kitchen1.jpg', '/images/kitchen/kitchen2.jpg'],
    features: [
      { title: '100+ Years Combined Experience', description: 'Leveraging decades of expertise for your project.', icon: 'Gem' },
      { title: 'Client-Centric Approach', description: 'Focused on clear communication and your satisfaction.', icon: 'Workflow' },
      { title: 'Design & Build Expertise', description: 'Handling everything from concept to completion.', icon: 'Paintbrush' },
      { title: 'Quality Guarantee', description: 'Dedicated to delivering exceptional results.', icon: 'ShieldCheck' },
    ],
    serviceDetails: [
      { title: 'Surface Updates', description: 'Refreshing countertops, backsplashes, and more.', icon: 'Square' },
      { title: 'Flooring Installation', description: 'Durable and stylish options for your kitchen floor.', icon: 'Square' },
      { title: 'Custom Cabinetry', description: 'Tailored storage solutions for beauty and function.', icon: 'Rows' },
      { title: 'Kitchen Islands', description: 'Adding workspace and focal points to your kitchen.', icon: 'CookingPot' },
      { title: 'Lighting Design', description: 'Ambient, task, and accent lighting.', icon: 'Lamp' },
      { title: 'Appliance Integration', description: 'Seamlessly incorporating modern appliances.', icon: 'CookingPot' },
    ],
    faqs: [
      { q: 'How long does a typical kitchen remodel take?', a: 'Timelines vary, but typically range from 4 to 12 weeks depending on complexity.' },
      { q: 'Do you help with the design process?', a: 'Yes, we offer design assistance, including 3D renderings to visualize your new kitchen.' },
      { q: 'Can I stay in my home during the remodel?', a: 'Mostly, yes. We work to minimize disruption, but access to the kitchen area will be limited.' },
    ]
  },
  {
    slug: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    metaDescription: 'Expert bathroom remodeling services in San Diego by Top Rated HRD. All-inclusive design and build for luxurious, functional bathrooms.',
    headline: 'Expert Bathroom Remodeling Services in San Diego',
    description: 'Transform your bathroom into a luxurious and functional retreat with Top Rated HRD. Our all-inclusive approach, backed by 100+ years of combined team experience, ensures a seamless remodel from concept to completion.',
    heroImagePlaceholder: 'https://placehold.co/1200x500/a5f3fc/0891b2?text=Modern+Bathroom',
    cardImageUrl: '/images/bath/bath1.jpg',
    galleryImages: ['/images/bath/bath1.jpg', '/images/bath/bath2.jpg', '/images/bath/bath3.JPG', '/images/bath/bath4.JPG', '/images/bath/bath5.JPG', '/images/bath/bath6.JPG', '/images/bath/bath7.JPG', '/images/bath/bath8.JPG', '/images/bath/bath9.JPG', '/images/bath/bath10.JPG'],
    features: [
      { title: 'All-Inclusive Service', description: 'From initial design consultation to final installation.', icon: 'CheckCircle' },
      { title: 'Expert Guidance', description: 'Navigating material choices and design options.', icon: 'Gem' },
      { title: 'Client-Centric Focus', description: 'Prioritizing communication, satisfaction, and trust.', icon: 'Workflow' },
      { title: 'Quality Craftsmanship', description: 'Ensuring a beautiful and lasting result.', icon: 'ShieldCheck' },
    ],
    serviceDetails: [
      { title: 'Custom Design', description: 'Tailored bathroom layouts and aesthetics.' },
      { title: 'High-Quality Fixtures & Materials', description: 'Sourcing and installing premium components.' },
      { title: 'Expert Installation', description: 'Meticulous installation of tile, vanities, showers, etc.' },
      { title: 'Project Management', description: 'Overseeing every step for a smooth process.' },
    ],
    faqs: [
      { q: 'What is the average timeline for a bathroom remodel?', a: 'On average, a bathroom remodel takes 4-6 weeks, depending on scope.' },
      { q: 'Do you offer custom bathroom designs?', a: 'Yes, we specialize in creating custom designs tailored to your preferences and needs.' },
      { q: 'What services are included in a bathroom remodel?', a: 'Our services cover everything from concept development and design to material selection, installation, and finishing touches.' },
    ]
  },
  {
    slug: 'roofing',
    title: 'Roofing Services',
    metaDescription: 'Reliable roofing services in San Diego. Top Rated HRD offers roof installation, repair, maintenance, and replacement with expert craftsmanship. Free estimate!',
    headline: 'Professional Roofing Services in San Diego',
    description: 'Top Rated HRD provides comprehensive roofing solutions in San Diego, including installation, repair, maintenance, and replacement. We ensure expert craftsmanship and use quality materials for lasting protection.',
    heroImagePlaceholder: 'https://placehold.co/1200x500/fecaca/991b1b?text=Roofing+Project',
    cardImageUrl: '/images/roof/roof1.jpg',
    galleryImages: ['/images/roof/roof1.jpg', '/images/roof/roof2.jpg', '/images/roof/roof3.jpg', '/images/roof/roof4.jpg', '/images/roof/roof5.jpg', '/images/roof/roof6.jpg'],
    features: [
      { title: 'Residential & Commercial Expertise', description: 'Protecting homes and businesses with tailored roofing solutions.', icon: 'Building' },
      { title: 'Emergency Repair & Custom Design', description: 'Ready for urgent repairs and crafting unique roof designs.', icon: 'Wrench' },
      { title: 'Quality Materials & Skilled Team', description: 'Using top-notch materials installed by licensed and insured professionals.', icon: 'ShieldCheck' },
      { title: 'Local & Transparent Service', description: 'San Diego experts offering clear pricing and guaranteed satisfaction.', icon: 'MapPin' },
    ],
    serviceDetails: [
      { title: 'New Roof Installation', description: 'Expert installation for new constructions or replacements.' },
      { title: 'Roof Repair', description: 'Addressing leaks, missing shingles, and other damage.' },
      { title: 'Roof Maintenance', description: 'Preventative care to extend roof lifespan.' },
      { title: 'Roof Replacement', description: 'Complete roof replacement using quality materials.' },
      { title: 'Energy-Efficient Options', description: 'Consultation on materials that improve energy efficiency.' },
    ],
    faqs: [
      { q: 'What is the average lifespan of a roof?', a: 'Lifespan varies by material: Asphalt shingles typically last 20-30 years, while tile or metal roofs can last 50+ years.' },
      { q: 'What are common signs that my roof needs attention?', a: 'Signs include water leaks, missing or damaged shingles, sagging, and visible wear and tear.' },
      { q: 'Do you offer energy-efficient roofing options?', a: 'Yes, we can discuss various energy-efficient materials and solutions.' },
      { q: 'Are there warranties available for roofing work?', a: 'Yes, we offer warranties on both materials and workmanship.' },
      { q: 'How long does a roof replacement typically take?', a: 'Most residential roof replacements can be completed within a few days, weather permitting.' },
    ]
  },
  {
    slug: 'adu-room-addition',
    title: 'ADU & Room Additions',
    metaDescription: 'Expand your living space with custom ADU (Accessory Dwelling Unit) and room addition services from Top Rated HRD in San Diego.',
    headline: 'Expand Your Home with ADUs & Room Additions',
    description: 'Whether you need an Accessory Dwelling Unit (ADU) for rental income or family, or simply want to add more space to your home, Top Rated HRD offers expert design and construction services for seamless additions.',
    heroImagePlaceholder: 'https://placehold.co/1200x500/d1fae5/065f46?text=Home+Addition',
    cardImageUrl: '/images/addition/addition1.JPG',
    galleryImages: ['/images/addition/addition1.JPG'],
    features: [
      { title: 'Custom Design Solutions', description: 'Tailoring additions to match your home\'s style and needs.', icon: 'Home' },
      { title: 'Permitting Assistance', description: 'Navigating the permit process for ADUs and additions.', icon: 'Building' },
      { title: 'Seamless Integration', description: 'Ensuring additions blend perfectly with your existing structure.', icon: 'Workflow' },
      { title: 'Quality Construction', description: 'Building durable and beautiful new spaces.', icon: 'Hammer' },
    ],
  },
]; 
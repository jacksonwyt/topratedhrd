"use client";

import { useEffect, useRef, useState, forwardRef } from 'react';
// import Lottie from 'lottie-react';  // Remove static import
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic'; // Import dynamic

// Dynamically import Lottie component with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface AnimationStep {
  title: string;
  description: string;
  animationPath: string;
}

interface LottieAsset {
  id: string;
  w: number;
  h: number;
  u: string;
  p: string;
  e: number;
}

interface LottieLayer {
  ddd: number;
  ind: number;
  ty: number;
  nm: string;
  sr: number;
  ks: Record<string, unknown>;
  ao: number;
  ip: number;
  op: number;
  st: number;
  bm: number;
}

interface LottieAnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: LottieAsset[];
  layers: LottieLayer[];
}

const animationSteps: AnimationStep[] = [
  {
    title: "1. Initial Consultation",
    description: "On-site visit to assess your project, take measurements, discuss design options, and provide an initial estimate aligned with your budget.",
    animationPath: "/animations/Carpenter Worker-2.json"
  },
  {
    title: "2. Design Presentation",
    description: "Review our detailed 3D CAD designs, project timeline, and material selections to visualize your transformed space.",
    animationPath: "/animations/Furniture Worker.json"
  },
  {
    title: "3. Project Planning",
    description: "Finalize design modifications, material selections, and establish concrete start and completion dates.",
    animationPath: "/animations/Plumber Bath Sink Water Repair.json"
  },
  {
    title: "4. Construction Management",
    description: "Dedicated project management with constant communication to ensure your complete satisfaction throughout the build.",
    animationPath: "/animations/Color Painting Wall Service.json"
  }
];

const AnimationBlock = forwardRef<HTMLDivElement, {
  step: AnimationStep;
  index: number;
  isActive: boolean;
  setActiveStep: (index: number) => void;
}>(({ step, index, isActive, setActiveStep }, ref) => {
  const [animationData, setAnimationData] = useState<LottieAnimationData | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const { ref: inViewRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setActiveStep(index);
      }
    }
  });

  // Merge the refs
  const setRefs = (element: HTMLDivElement | null) => {
    if (typeof ref === 'function') {
      ref(element);
    } else if (ref) {
      ref.current = element;
    }
    inViewRef(element);
  };

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(step.animationPath);
        if (!response.ok) throw new Error('Failed to load animation');
        const data = await response.json();
        setAnimationData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load animation');
      }
    };

    loadAnimation();
  }, [step.animationPath]);

  if (error) {
    return (
      <div ref={setRefs} className="text-red-600 text-center p-8">
        Error loading animation: {error}
      </div>
    );
  }

  if (!animationData) {
    return (
      <div ref={setRefs} className="text-gray-600 text-center p-8">
        Loading animation...
      </div>
    );
  }

  return (
    <div
      ref={setRefs}
      className={`lottie-animation transition-opacity duration-500 ${
        isActive ? 'opacity-100' : 'opacity-30'
      }`}
    >
      <div className="aspect-square max-w-2xl mx-auto">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-full h-full"
        />
      </div>
      <div className="mobile-caption lg:hidden mt-4 text-center">
        <h3 className="text-xl font-semibold text-black mb-2">
          {step.title}
        </h3>
        <p className="text-gray-600">
          {step.description}
        </p>
      </div>
    </div>
  );
});

AnimationBlock.displayName = 'AnimationBlock';

export function ScrollingLottieSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToAnimation = (index: number) => {
    if (animationRefs.current[index]) {
      animationRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white border-t border-amber-200" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-black">
          Our Expertise in Action
        </h2>
        <div className="scroll-section flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Text Sidebar */}
          <div className="text-sidebar-wrapper lg:w-2/5 lg:sticky lg:top-32 lg:self-start">
            <div className="text-sidebar space-y-8">
              {animationSteps.map((step, index) => (
                <div
                  key={index}
                  className={`step-item cursor-pointer transition-all duration-300 p-6 rounded-lg ${
                    activeStep === index
                      ? 'bg-amber-50 border border-amber-200'
                      : 'hover:bg-amber-50/50'
                  }`}
                  onClick={() => {
                    setActiveStep(index);
                    scrollToAnimation(index);
                  }}
                >
                  <h3 
                    className={`text-xl font-semibold mb-2 ${
                      activeStep === index ? 'text-black' : 'text-gray-700'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className={`text-gray-600 ${
                      activeStep === index ? 'opacity-100' : 'opacity-70'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Animations Area */}
          <div className="gifs-area lg:w-3/5 space-y-32">
            {animationSteps.map((step, index) => (
              <AnimationBlock
                key={index}
                step={step}
                index={index}
                isActive={activeStep === index}
                setActiveStep={setActiveStep}
                ref={(el) => {
                  animationRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
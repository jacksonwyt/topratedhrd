"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

interface ImageCarouselProps {
  imagePaths: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imagePaths }) => {
  return (
    <div className="w-full overflow-hidden"> {/* Container to manage overflow */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16} // Add a small gap between slides
        slidesPerView={2} // Base number of slides (mobile)
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 24
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 32
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 6,
            spaceBetween: 32
          }
        }}
        loop={true}
        autoplay={{
          delay: 0, // Continuous scroll, no delay between transitions
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Optional: pause on hover
        }}
        speed={20000} // Even slower transition speed (20 seconds)
        className="mySwiper image-carousel" // Add a class for potential custom styling
        style={{
            // @ts-expect-error - Workaround for CSS variable type issue
           "--swiper-wrapper-transition-timing-function": "linear", 
         }}
      >
        {imagePaths.map((path, index) => (
          <SwiperSlide key={index}> {/* Remove !w-auto */}
            <div className="relative h-48"> {/* Remove w-auto */}
              <Image
                src={path}
                alt={`Carousel image ${index + 1}`}
                fill // Use the fill prop
                sizes="(max-width: 768px) 50vw, 33vw" // Add sizes prop
                className="object-cover" // Changed from object-contain
                priority={index < 5} // Prioritize loading initial images
                unoptimized // Keep if intended
              />
            </div>
          </SwiperSlide>
        ))}
        {/* Duplicate slides for smoother looping with linear transition */}
        {imagePaths.map((path, index) => (
          <SwiperSlide key={`duplicate-${index}`}> {/* Remove !w-auto */}
             <div className="relative h-48"> {/* Remove w-auto */}
                <Image
                    src={path}
                    alt={`Carousel image ${index + 1} (duplicate)`}
                    fill // Use the fill prop
                    sizes="(max-width: 768px) 50vw, 33vw" // Add sizes prop
                    className="object-cover" // Changed from object-contain
                    priority={false} 
                    unoptimized // Keep if intended
                 />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel; 
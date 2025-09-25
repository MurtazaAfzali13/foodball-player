'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Football player images - using available images from assets
import ronaldoImg from '@/assets/ronaldo5.jpg';
import messiImg from '@/assets/messi2.jpg';
import mbappeImg from '@/assets/mbappa2.jpg';
import vitinyaImg from '@/assets/vitinya.jpg';
import ibrahimImg from '@/assets/ibrahim.jpg';
import yamalImg from '@/assets/yamal.jpg';
import haalandImg from '@/assets/haland2.jpg';
import mohammadImg from '@/assets/mohammad2.jpg';
import modricImg from '@/assets/ronaldo4.jpg';

import debruyneImg from '@/assets/de.jpg';
// Football player images array
const images = [
  { image: ronaldoImg, alt: 'Cristiano Ronaldo during a match' },
  { image: messiImg, alt: 'Lionel Messi celebrating a goal' },
  { image: mbappeImg, alt: 'Kylian Mbappé sprinting past defenders' },
  { image: haalandImg, alt: 'Erling Haaland scoring a header' },
  { image: mohammadImg, alt: 'Mohammad showing his dribbling skills' }, // Previously 'Neymar'
  { image: vitinyaImg, alt: 'Vitinha orchestrating the midfield' },
  { image: ibrahimImg, alt: 'Zlatan Ibrahimović posing confidently' },
  { image: yamalImg, alt: 'Lamine Yamal breaking into attack' },
  { image: modricImg, alt: 'Luka Modrić controlling the midfield' },
  { image: debruyneImg, alt: 'Kevin De Bruyne making a key pass' },
];


export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
            index === currentImageIndex 
              ? 'opacity-100 scale-100 translate-x-0 rotate-0 z-10' 
              : 'opacity-0 scale-110 -translate-x-4 -rotate-6'
          }`}
          alt={image.alt}
          width={400}
          height={300}
          priority={index === 0}
        />
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Previous/Next buttons */}
      <button
        onClick={() => setCurrentImageIndex(prev => 
          prev === 0 ? images.length - 1 : prev - 1
        )}
        className="absolute w-8 h-8 sm:w-10 sm:h-10 left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
        aria-label="Previous image"
      >
        <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentImageIndex(prev => 
          prev === images.length - 1 ? 0 : prev + 1
        )}
        className="absolute w-8 h-8 sm:w-10 sm:h-10 right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
        aria-label="Next image"
      >
        <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}


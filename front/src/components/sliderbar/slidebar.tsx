"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

function Slidebar() {
    const images = [
        "/assets/Imagem-slider1.jpg",
        "/assets/Imagem-slider2.jpg",
        "/assets/Imagem-slider3.jpg",
        "/assets/Imagem-slider4.jpg",
        "/assets/Imagem-slider5.jpg",
        "/assets/Imagem-slider6.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div id="indicators-carousel" className="relative w-screen h-screen">
            <div className="relative w-full h-full overflow-hidden">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            layout="fill"
                            objectFit="cover" 
                        />
                    </div>
                ))}
            </div>
            {/* Indicadores */}
            <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-current={index === currentIndex}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
            {/* Botón Anterior */}
            <button
                type="button"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
                onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
            >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            {/* Botón Siguiente */}
            <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
                onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
            >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}

export default Slidebar;

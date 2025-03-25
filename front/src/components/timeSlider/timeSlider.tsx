'use client';

import { useState } from 'react';
import Image from 'next/image';

const timelineData = [
  {
    year: 1960,
    text: '1960: The Birth of LuxoraAt the 1960 Copenhagen Salon, Philippe and François Luxora, along with Patrick and Jean-Claude Triner, discover Scandinavian furniture and decide to import it to Paris. They launch their first catalog and create a franchise network. In 1961, their successful campaign in Elle boosts sales and solidifies the Luxora brand.',
    images: ['/assets/1960-1.jpg', '/assets/1960-2.jpg', '/assets/1960-3.jpg'],
  },
  {
    year: 1980,
    text: '1970-1990: The Evolution of LuxoraIn the 1970s, television transforms homes, making the sofa an essential part of Luxora’s "The Contemporaries" collection. In the 1980s, the brand expands its offerings with "The Provincials," reinterpreting French furniture. In the 1990s, it responds to the trend of cultural fusion with "The Travels" collection, inspired by ethnic furniture. Luxora establishes itself as a global brand with a unique style tailored to its customers.',
    images: ['/assets/1980-1.jpg', '/assets/1980-2.jpg', '/assets/1980-3.jpg'],
  },
  {
    year: 2000,
    text: 'Luxora in the 21st CenturyLuxora expands its global presence with new stores in iconic cities, from the historic Lupari Palace in Bologna to avant-garde buildings in Montreal. Additionally, it strengthens collaborations with designers and architects to create innovative and functional pieces, maintaining its vision of design meant to be lived.',
    images: ['/assets/2000-1.jpg', '/assets/2000-2.jpg', '/assets/2000-3.jpg'],
  },
  {
    year: 2010,
    text: 'Luxora in the 21st CenturyLuxora expands its global presence with new stores in iconic cities, from the historic Lupari Palace in Bologna to avant-garde buildings in Montreal. Additionally, it strengthens collaborations with designers and architects to create innovative and functional pieces, maintaining its vision of design meant to be lived.',
    images: ['/assets/2010-1.jpg', '/assets/2010-2.jpg', '/assets/2010-3.jpg'],
  },
  {
    year: 2020,
    text: '50 Years of Innovation and Design with LuxoraLuxora celebrates half a century of creativity, collaborations with renowned designers, architects, and fashion experts, and global expansion. To mark this occasion, it presents "Bombom," a vibrant collection of sofas and accessories designed by artist Joana Vasconcelos, reflecting its commitment to creativity and craftsmanship. The brand advances in digitalization, allowing customers to customize products and visualize how they fit into their spaces. Additionally, it continues its responsible approach with eco-designed collections and improvements in production sustainability.',
    images: ['/assets/2020-1.jpg', '/assets/2020-2.jpg', '/assets/2020-3.jpg'],
  },
];


function TimelineSlider() {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-6">
      
     
      <h1 className="text-4xl font-bold text-center mb-8">History:</h1>

      
      <h2 className="text-3xl font-bold mb-6">{timelineData[index].year}</h2>

     
      <p className="text-lg mt-2 max-w-2xl text-center mb-4">{timelineData[index].text}</p>

      
      <div className="flex space-x-4 overflow-hidden rounded-lg mt-6">
        {timelineData[index].images.map((img, i) => (
          <div key={i} className="relative rounded-lg overflow-hidden shadow-lg">
            <Image src={img} alt={`Imagen ${i + 1}`} width={300} height={300} className="object-cover" />
          </div>
        ))}
      </div>

   
      <div className="relative flex flex-col items-center mt-8 w-full max-w-lg">
        
        <div className="flex justify-between w-full">
          {timelineData.map((item, i) => (
            <span key={i} className="text-sm font-semibold">{item.year}</span>
          ))}
        </div>

        <div className="relative flex items-center w-full mt-2">
          <div className="absolute left-0 right-0 h-1 bg-gray-300" />
          {timelineData.map((item, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-6 h-6 rounded-full mx-auto z-10 transition-all ${
                index === i ? 'bg-black' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default TimelineSlider;

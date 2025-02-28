'use client';

import { useState } from 'react';
import Image from 'next/image';

const timelineData = [
  {
    year: 1960,
    text: '1960: El nacimiento de LuxoraEn el Salón de Copenhague de 1960, Philippe y François luxora, junto con Patrick y Jean-Claude triner, descubren el mobiliario escandinavo y deciden importarlo a París. Lanzan su primer catálogo y crean una red de franquicias. En 1961, su exitosa campaña en Elle impulsa las ventas y consolida la marca Luxora.',
    images: ['/assets/1960-1.jpg', '/assets/1960-2.jpg', '/assets/1960-3.jpg'],
  },
  {
    year: 1980,
    text: '1970-1990: La evolución de LuxoraEn los años 70, la televisión transforma los hogares, y el sofá se vuelve esencial en la colección Los Contemporáneos de Luxora. En los 80, la marca amplía su oferta con Los Provinciales, reinterpretando el mobiliario francés. En los 90, responde a la tendencia del mestizaje con la colección Los Viajes, inspirada en el mobiliario étnico. Luxora se consolida como una marca global con un estilo único y adaptado a sus clientes.',
    images: ['/assets/1980-1.jpg', '/assets/1980-2.jpg', '/assets/1980-3.jpg'],
  },
  {
    year: 2000,
    text: 'Luxora en el siglo XXI Luxora expande su presencia global con nuevas tiendas en ciudades icónicas, desde el antiguo palacio Lupari en Bolonia hasta edificios vanguardistas en Montreal. Además, fortalece su colaboración con diseñadores y arquitectos para crear piezas innovadoras y funcionales, manteniendo su visión de un diseño pensado para vivirse..',
    images: ['/assets/2000-1.jpg', '/assets/2000-2.jpg', '/assets/2000-3.jpg'],
  },
  {
    year: 2010,
    text: 'Luxora en el siglo XXI Luxora expande su presencia global con nuevas tiendas en ciudades icónicas, desde el antiguo palacio Lupari en Bolonia hasta edificios vanguardistas en Montreal. Además, fortalece su colaboración con diseñadores y arquitectos para crear piezas innovadoras y funcionales, manteniendo su visión de un diseño pensado para vivirse..',
    images: ['/assets/2010-1.jpg', '/assets/2010-2.jpg', '/assets/2010-3.jpg'],
  },
  {
    year: 2020,
    text: '50 años de innovación y diseño con LuxoraLuxora celebra medio siglo de creatividad, colaboraciones con grandes nombres del diseño, la arquitectura y la moda, y una expansión global. Para esta ocasión, presenta Bombom, una vibrante colección de sofás y accesorios diseñados por la artista Joana Vasconcelos, reflejando su compromiso con la creatividad y la artesanía. La marca avanza en la digitalización, permitiendo a los clientes personalizar sus productos y visualizar cómo encajan en su entorno. Además, continúa su enfoque responsable con colecciones ecodiseñadas y mejoras en la sostenibilidad de su producción.',
    images: ['/assets/2020-1.jpg', '/assets/2020-2.jpg', '/assets/2020-3.jpg'],
  },
];

function TimelineSlider() {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-6">
      
     
      <h1 className="text-4xl font-bold text-center mb-8">Historia</h1>

      
      <h2 className="text-3xl font-bold mb-6">{timelineData[index].year}</h2>

     
      <p className="text-lg mt-2 max-w-2xl text-center mb-4">{timelineData[index].text}</p>

      
      <div className="flex space-x-4 overflow-hidden rounded-lg mt-6">
        {timelineData[index].images.map((img, i) => (
          <div key={i} className="relative rounded-lg overflow-hidden shadow-lg">
            <Image src={img} alt={`Imagen ${i + 1}`} width={300} height={300} className="object-cover" />
          </div>
        ))}
      </div>

      {/* Línea de tiempo */}
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

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Visualizador Principal */}
      <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] bg-black border border-zinc-800 overflow-hidden group">
        <img
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
         
          className="w-full h-full object-contain p-2 transition-opacity duration-500 ease-in-out"
        />
        
        {/* Controles Overlay (Aparecen al hacer hover) */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={prevImage} 
            className="bg-black/60 hover:bg-cyan-500/20 text-zinc-300 hover:text-cyan-400 p-3 backdrop-blur-sm border border-zinc-700 hover:border-cyan-500 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextImage} 
            className="bg-black/60 hover:bg-cyan-500/20 text-zinc-300 hover:text-cyan-400 p-3 backdrop-blur-sm border border-zinc-700 hover:border-cyan-500 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Barra de Progreso Tech */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800">
          <div 
            className="h-full bg-cyan-500 transition-all duration-500 ease-out" 
            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }} 
          />
        </div>
        
        {/* Contador */}
        <div className="absolute top-4 right-4 bg-black/80 border border-zinc-800 px-3 py-1 font-mono text-[10px] tracking-widest text-cyan-400 backdrop-blur-md">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Miniaturas Navegables */}
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory custom-scrollbar">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`relative flex-shrink-0 w-32 md:w-48 aspect-video snap-start overflow-hidden border bg-black transition-all duration-300 ${
              currentIndex === i 
                ? "border-cyan-500 opacity-100 ring-1 ring-cyan-500/50" 
                : "border-zinc-800 opacity-40 hover:opacity-100 hover:border-zinc-500"
            }`}
          >
            {/* THUMBNAILS ALSO USE object-contain */}
            <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-contain p-1" />
          </button>
        ))}
      </div>
    </div>
  );
}
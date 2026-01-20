"use client";
import { useRevealTexts } from "@/hooks/useRevealTexts";

export default function Autopromo() {
    const containerRef = useRevealTexts<HTMLDivElement>("h2");

  return (
    <div className="relative bg-[url('/img/Autopromo.png')] bg-cover bg-center bg-no-repeat h-[600px]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Contenido */}
      <div 
      ref={containerRef}
      className="relative z-10 px-6 py-6 md:py-16 md:px-16 flex flex-col justify-end h-full max-w-[1500px] mx-auto text-white font-lexend">
        <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
          Máxima <span className="font-playfair italic">Eficiencia,</span>
        </h2>
        <h2 className="text-4xl md:text-6xl lg:text-7xl">
          Mínimo <span className="font-playfair italic">Impacto</span>
        </h2>
        <span className="text-md md:text-xl font-light max-w-3xl">
          Viviendas equipadas con paneles solares de última generación para un
          consumo eficiente y autosuficiente.
        </span>
      </div>
    </div>
  );
}

"use client";
import { useRevealTexts } from "@/hooks/useRevealTexts";

export default function Header() {
  const containerRef = useRevealTexts<HTMLDivElement>("h1");

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/video-montaje.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/img/postevideo.png"
      />

      {/* Overlay opcional para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-end font-dmsans">
        <div
          ref={containerRef}
          className="px-6 py-6 md:py-16 md:px-16 flex flex-col text-white"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter lg:leading-[100px] opacity-0">
            Casas <br /> <span className="font-playfair italic">modulares</span>
          </h1>
          <span className="text-lg md:text-xl font-light">
            Ecoeficientes y energéticamente sostenibles.
          </span>
        </div>
      </div>
    </section>
  );
}

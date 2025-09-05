"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function MaintenancePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const words = [
    "Ensamblando módulos",
    "Pintando paredes",
    "Montando ventanas",
    "Ajustando detalles",
    "Optimizando espacios"
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Logo animación
      tl.fromTo(
        ".logo",
        { opacity: 0, scale: 0.7, filter: "blur(12px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2 }
      );

      // Texto principal
      tl.fromTo(
        ".title",
        { opacity: 0, y: 40, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 },
        "-=0.5"
      );

      // Texto secundario
      tl.fromTo(
        ".text",
        { opacity: 0, y: 20, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, stagger: 0.2 },
        "-=0.3"
      );

      // Barra de progreso animada
      gsap.to(progressRef.current, {
        width: "90%",
        duration: 4,
        ease: "power1.inOut",
        onUpdate: function () {
          setPercentage(Math.round(this.progress() * 90));
        }
      });
    }, containerRef);

    // Cambio de palabras con blur
    const wordInterval = setInterval(() => {
      const wordEl = document.querySelector(".changing-word");
      if (!wordEl) return;

      // Animación de salida
      gsap.to(wordEl, { opacity: 0, filter: "blur(4px)", duration: 0.3, onComplete: () => {
        setWordIndex(prev => (prev + 1) % words.length);
        // Animación de entrada
        gsap.fromTo(wordEl, { opacity: 0, filter: "blur(4px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.4 });
      }});
    }, 1500);

    return () => {
      ctx.revert();
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `
          url('img/fondo-header.webp'),
          radial-gradient(circle, #FAF4E8 0%, #F6F4F0 43%, #DDD2BE 100%)
        `,
        backgroundBlendMode: "overlay",
      }}
    >
      <div
        ref={containerRef}
        className="max-w-[1300px] flex flex-col items-center justify-center mx-auto px-4 md:px-0 min-h-screen"
      >
        <img
          src="/img/logo-domubox.svg"
          alt="logo domubox"
          className="logo w-40 md:w-80 mb-10"
        />
        <h1 className="title text-4xl md:text-6xl font-bold text-center text-tipo mb-10">
          Muy pronto... <br/> el futuro de la <span className="font-playfair italic text-secundario">vivienda</span>
        </h1>
        <p className="text text-lg md:text-xl text-gray-600 mb-6 text-center flex flex-col md:flex-row items-center gap-2">
          Dando forma a los últimos detalles:{" "}
          <span className="changing-word font-bold">{words[wordIndex]}</span>
        </p>

        {/* Barra de progreso con porcentaje */}
        <div className="w-full md:w-1/2 h-3 bg-gray-300 rounded-full overflow-hidden flex items-center mb-6">
          <div
            ref={progressRef}
            className="h-full bg-secundario rounded-full w-0"
          ></div>
        </div>
        <span className="ml-3 text-tipo font-bold text-2xl">{percentage}%</span>

        <p className="text text-sm text-gray-400 mt-10">
          © {new Date().getFullYear()} DOMUBOX IMPORT
        </p>
      </div>
    </div>
  );
}

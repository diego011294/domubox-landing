"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRevealTexts } from "@/hooks/useRevealTexts";

gsap.registerPlugin(ScrollTrigger);

export default function Whyus() {
  const containerRef = useRevealTexts<HTMLDivElement>(["h2"]);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".card");

    gsap.from(cards, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2, // cada card entra 0.2s después de la anterior
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%", // cuando el contenedor entra al 80% de la pantalla
        toggleActions: "play none none", 
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full px-4 py-20 mx-auto bg-[radial-gradient(circle,_#FAF4E8_0%,_#F6F4F0_43%,_#DDD2BE_100%)]"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* TÍTULO */}
        <div className="flex lg:flex-row items-start lg:items-center flex-col justify-between w-full gap-10">
          <h2 className="text-4xl lg:text-5xl font-bold font-dmsans text-tipo w-full opacity-0">
            Por qué <br />{" "}
            <span className="font-playfair text-secundario italic">
              elegirnos
            </span>
          </h2>
          <p className="text-md text-tipoclara w-full lg:w-[900px]">
            La creciente demanda de casas modulares refleja una nueva forma de
            habitar. Nuestra trayectoria y compromiso nos posicionan como un
            referente confiable en el sector.
          </p>
        </div>

        {/* CONTENEDOR CARDS */}
        <div
          ref={cardsRef}
          className="flex lg:justify-center items-stretch gap-10 mt-10 py-10 overflow-x-auto lg:overflow-hidden scrollbar-hide snap-x snap-mandatory"
        >
          {/* CARD 1 */}
          <div className="card flex flex-col gap-6 min-w-[280px] lg:min-w-0 flex-1 h-96 snap-start border-r border-separator pr-5">
            <img src="img/w1.png" alt="Icono diseño" className="w-24 h-24" />
            <h3 className="font-lexend text-2xl font-bold text-tipo">
              Diseño Personalizado y Escalable
            </h3>
            <p className="text-md text-tipoclara">
              Cada modelo se adapta a tu estilo de vida. Puedes personalizar
              acabados, distribución y ampliar tu hogar en el futuro gracias al
              diseño modular inteligente.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="card flex flex-col gap-6 min-w-[280px] lg:min-w-0 flex-1 h-96 snap-start border-r border-separator pr-5">
            <img src="img/w2.png" alt="Icono diseño" className="w-24 h-24" />
            <h3 className="font-lexend text-2xl font-bold text-tipo">
              Calidad en Cada Detalle
            </h3>
            <p className="text-md text-tipoclara">
              Utilizamos materiales seleccionados por su durabilidad, eficiencia
              energética y estética. Construimos con estándares altos para que
              tengas un hogar sólido, moderno y funcional.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="card flex flex-col gap-6 min-w-[280px] lg:min-w-0 flex-1 h-96 snap-start border-r border-separator pr-5">
            <img src="img/w3.png" alt="Icono diseño" className="w-24 h-24" />
            <h3 className="font-lexend text-2xl font-bold text-tipo">
              Rapidez y Eficiencia Constructiva
            </h3>
            <p className="text-md text-tipoclara">
              Gracias al sistema modular, reducimos los tiempos de obra sin
              comprometer la calidad. Entregamos tu casa en tiempo récord, lista
              para vivir.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="card flex flex-col gap-6 min-w-[280px] lg:min-w-0 flex-1 h-96 snap-start pr-5">
            <img src="img/w4.png" alt="Icono diseño" className="w-24 h-24" />
            <h3 className="font-lexend text-2xl font-bold text-tipo">
              Compromiso con la Sostenibilidad
            </h3>
            <p className="text-md text-tipoclara">
              Nuestras casas están diseñadas para reducir el impacto ambiental:
              menor consumo energético, menos residuos y opciones de materiales
              eco-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useRevealTexts } from "@/hooks/useRevealTexts";

export default function Materiales() {
    const containerRef = useRevealTexts<HTMLDivElement>("h2");

  return (
    <div ref={containerRef} className="w-full px-4 py-20">
      <div className="max-w-[1300px] mx-auto">
      {/* TÍTULO */}
      <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-center font-dmsans text-tipo w-full opacity-0">
        Descubre nuestros <br />{" "}
        <span className="font-playfair font-semibold text-secundario italic">materiales</span>
      </h2>

      <div className="flex flex-col gap-8 pt-10">
        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-dmsans">
          {/* CARD 1 */}
          <div className="flex flex-col items-center md:flex-row bg-[#FAFAFA]  border border-teal-300 rounded-md overflow-hidden">
            <img
              src="img/suelo-mat.png"
              alt="Suelo"
              className="w-60 sm:w-[40%] h-auto object-contain"
            />
            <div className="w-full flex flex-col gap-4 p-6">
              <h3 className="font-dmsans text-lg md:text-2xl font-bold text-tipo">
                Suelo
              </h3>
              <ol className="list-disc text-sm space-y-1 text-tipoclara">
                <li>Base ignífuga de magnesio 20 mm</li>
                <li>Alas laterales bambú 18 mm</li>
                <li>Pavimento vinílico 2 mm</li>
                <li>Solidez para una vivienda permanente</li>
              </ol>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center md:flex-row bg-[#FAFAFA]  border border-teal-300 rounded-md overflow-hidden">
            <img
              src="img/techo-mat.png"
              alt="Suelo"
              className="w-60 sm:w-[40%] h-auto object-contain"
            />
            <div className="w-full flex flex-col gap-4 p-6">
              <h3 className="font-dmsans text-lg md:text-2xl font-bold text-tipo">
                Techo
              </h3>
              <ol className="list-disc text-sm space-y-1 text-tipoclara">
                <li>Chapa ondulada tipo 980</li>
                <li>Panel integrado grafeno + bambú 50 mm</li>
                <li>Falso techo interior de fibra de bambú</li>
                <li>Ideal para climas humedos y costeros</li>
              </ol>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-center md:flex-row bg-[#FAFAFA] rounded-md  border border-teal-300 overflow-hidden">
            <img
              src="img/murosext-mat.png"
              alt="Suelo"
              className="w-60 sm:w-[40%] h-auto object-contain"
            />
            <div className="w-full flex flex-col gap-4 p-6">
              <h3 className="font-dmsans text-lg md:text-2xl font-bold text-tipo">
                Muros exteriores
              </h3>
              <ol className="list-disc text-sm space-y-1 text-tipoclara">
                <li>Panel integrado de grafeno + bambú</li>
                <li>Espesor 65 mm</li>
                <li>Estructura totalmente galvanizada</li>
                <li>Cerramiento industrial continuo</li>
                <li>Tecnología, comfort y durabilidad</li>
              </ol>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="flex flex-col items-center md:flex-row bg-[#FAFAFA]  border border-teal-300 rounded-md overflow-hidden">
            <img
              src="img/murosint-mat.png"
              alt="Suelo"
              className="w-60 sm:w-[40%] h-auto object-contain"
            />
            <div className="w-full flex flex-col gap-4 p-6">
              <h3 className="font-dmsans text-lg md:text-2xl font-bold text-tipo">
                Muros interiores
              </h3>
              <ol className="list-disc text-sm space-y-1 text-tipoclara">
                <li>Panel integrado de grafeno + fibra de bambú</li>
                <li>Espesor 50 mm</li>
                <li>Sistema monolítico (no multicapa OSB/lana)</li>
                <li>Más moderno, eficiente y con mayor comportamiento térmico real.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

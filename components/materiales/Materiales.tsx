import React from "react";

export default function Materiales() {
  return (
    <div className="w-full px-4 py-20">
      <div className="max-w-[1300px] mx-auto">
      {/* TÍTULO */}
      <h2 className="text-4xl text-center font-bold font-dmsans text-tipo w-full">
        Descubre nuestros <br />{" "}
        <span className="font-playfair text-secundario italic">materiales</span>
      </h2>

      <div className="flex flex-col gap-8 pt-10">
        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CARD 1 */}
          <div className="flex flex-col items-center md:flex-row bg-[#FAFAFA]  border border-teal-300 rounded-md overflow-hidden">
            <img
              src="img/suelo-mat.png"
              alt="Suelo"
              className="w-auto sm:w-[40%] h-auto object-fit"
            />
            <div className="w-full flex flex-col gap-4 p-5">
              <h3 className="font-lexend text-2xl font-bold text-tipo">
                Suelo
              </h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Marco de metal</li>
                <li>Tarima SPC rígida de 8 mm</li>
                <li>Inyectado de 90mm. Espuma PU a alta presión</li>
                <li>Armadura de acero</li>
                <li>Conducto metal KBG para cableado</li>
                <li>Chapa de acero sellada</li>
                <li>Flejes de acero</li>
                <li>
                  <strong>Grosor total:</strong> 100mm
                </li>
              </ol>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center md:flex-row bg-[#FAFAFA]  border border-teal-300 rounded-md overflow-hidden">
            <img
              src="img/techo-mat.png"
              alt="Suelo"
              className="w-auto sm:w-[40%] h-auto object-fit"
            />
            <div className="w-full flex flex-col gap-4 p-5">
              <h3 className="font-lexend text-2xl font-bold text-tipo">
                Techo
              </h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Marco de metal</li>
                <li>Chapa de acero sellada</li>
                <li>Inyectado de 80mm. Espuma PU a alta presión</li>
                <li>tablero de fibras de bambú de 9mm</li>
                <li>Armadura acero</li>
                <li>Flejes de acero</li>
                <li>Conducto metal KBG para cableado</li>
                <li>
                  <strong>Grosor total:</strong> 90/120mm
                </li>
              </ol>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-center md:flex-row bg-[#FAFAFA]  border border-teal-300 overflow-hidden">
            <img
              src="img/murosext-mat.png"
              alt="Suelo"
              className="w-auto sm:w-[40%] h-auto object-fit"
            />
            <div className="w-full flex flex-col gap-4 p-5">
              <h3 className="font-lexend text-2xl font-bold text-tipo">
                Muros exteriores
              </h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Marco de metal</li>
                <li>Conducto metal KBG para cableado</li>
                <li>Flejes de acero</li>
                <li>Tablero de fibras de bambú de 9mm</li>
                <li>Inyectado de 90mm. Espuma PU a alta presión</li>
                <li>Tablero de lamas metalicas con PU de 27mm</li>
                <li>
                  <strong>Grosor total:</strong> 90mm
                </li>
              </ol>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="flex flex-col items-center md:flex-row bg-[#FAFAFA]  border border-teal-300 rounded-md overflow-hidden">
            <img
              src="img/murosint-mat.png"
              alt="Suelo"
              className="w-auto sm:w-[40%] h-auto object-fit"
            />
            <div className="w-full flex flex-col gap-4 p-5">
              <h3 className="font-lexend text-2xl font-bold text-tipo">
                Muros interiores
              </h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Armadura de acero</li>
                <li>Tablero OSB de 9mm</li>
                <li>Tablero de fibras de bambú de 9mm</li>
                <li>Conducto metal KBG para cableado</li>
                <li>50mm de aislante de lana de vidrio</li>
                <li>Tablero OSB de 9mm</li>
                <li>Tablero de fibras de bambú de 9mm</li>
                <li>
                  <strong>Grosor total:</strong> 85mm
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

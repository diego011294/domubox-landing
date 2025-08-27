
export default function Whyus() {
  return (
    <div className="w-full px-4 py-20 mx-auto bg-[radial-gradient(circle,_#FAF4E8_0%,_#F6F4F0_43%,_#DDD2BE_100%)]">
      <div className="max-w-[1300px] mx-auto">
      {/* TÍTULO */}
      <div className="flex lg:flex-row items-start lg:items-center flex-col justify-between w-full gap-10">
        <h2 className="text-4xl font-bold font-dmsans text-tipo w-full">
          Por qué <br />{" "}
          <span className="font-playfair text-secundario italic">elegirnos</span>
        </h2>
        <p className="text-md text-tipoclara w-full lg:w-[900px]">
          La creciente demanda de casas modulares refleja una nueva forma de
          habitar. Nuestra trayectoria y compromiso nos posicionan como un
          referente confiable en el sector.
        </p>
      </div>

      {/* CONTENEDOR CARDS */}
      <div className="flex lg:justify-center items-stretch gap-10 mt-10 py-10 overflow-x-auto lg:overflow-x-hidden lg:overflow-y-hidden scrollbar-hide snap-x snap-mandatory">
        {/* CARD 1 */}
        <div className="flex flex-col gap-6 min-w-[280px] lg:min-w-0 flex-1 h-96 snap-start border-r border-separator pr-5">
          <img src="img/icon1.svg" alt="Icono diseño" className="w-16 h-16" />
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
        <div className="flex flex-col gap-6 min-w-[280px] lg:min-w-0 flex-1 h-96 snap-start border-r border-separator pr-5">
          <img src="img/icon4.svg" alt="Icono diseño" className="w-16 h-16" />
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
        <div className="flex flex-col gap-6 min-w-[280px] lg:min-w-0 flex-1 h-96 snap-start border-r border-separator pr-5">
          <img src="img/icon2.svg" alt="Icono diseño" className="w-16 h-16" />
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
        <div className="flex flex-col gap-6 min-w-[280px] lg:min-w-0 flex-1 h-96 snap-start pr-5">
          <img src="img/icon3.svg" alt="Icono diseño" className="w-16 h-16" />
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

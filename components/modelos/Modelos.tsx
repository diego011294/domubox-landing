"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useRevealTexts } from "@/hooks/useRevealTexts";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Modelos({
  openModal,
  openExtensiones,
}: {
  openModal: () => void;
  openExtensiones: () => void;
}) {
  const containerRef = useRevealTexts<HTMLDivElement>("h2");
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const dragStartX = useRef<number | null>(null);

  const models = [
    {
      name: "01. Canary",
      hasExtensions: true,
      images: [
        "/img/Canary/canary5.jpeg",
        "/img/Canary/canary7.jpeg",
        "/img/Canary/canary2.jpeg",
        "/img/Canary/canary3.jpeg",
        "/img/Canary/canary4.jpeg",
      ],
      accordion: [
        {
          title: "Descripción",
          content:
            "La Canary es una solución de vivienda moderna, tipo contenedor desplegable, diseñada para la máxima portabilidad. Con un atractivo acabado exterior que combina paneles de efecto madera rústica y marcos estructurales oscuros, esta casa modular destaca por su amplia fachada acristalada central que asegura luminosidad. Ideal para usos rápidos como cabaña, oficina o alojamiento temporal. La Canary ofrece un montaje sencillo, estética cuidada y la libertad de ser totalmente transportable a cualquier ubicación.",
        },
        {
          title: "Características",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Desplegada (Vivienda): 5.900 × 6.300 × 2.480 mm</li>
              <li>Plegada (Transporte): 5.900 × 2.200 × 2.480 mm</li>
              <li>
                Terraza (Opcional): 6.300 × 2.000 mm (*Ver extensiones
                opcionales*)
              </li>
              <li>37 m2 interiores</li>
              <li>2–4 Personas</li>
              <li>
                2 Dormitorios, 1 baño equipado (separación seca/húmeda), salón y
                cocina con encimera de mármol. Estructura de acero galvanizado
                con aislamiento de fibra de bambú y grafeno.
              </li>
            </ul>
          ),
        },
        {
          title: "Plano de la casa",
          content:
            <img
                src="/img/Canary/canary1.jpeg"
                alt=""
                className="w-80"
              />
        },
      ],
    },
    {
      name: "02. Family",
      hasExtensions: false,
      images: [
        "/img/Family/family1.png",
        "/img/Family/family6.png",
        "/img/Family/family2.png",
        "/img/Family/family3.png",
        "/img/Family/family5.png",
      ],
      accordion: [
        {
          title: "Descripción",
          content:
            "Esta casa modular adaptable ofrece un diseño tradicional y acogedor. El modelo destaca por su tejado a dos aguas y su gran puerta corrediza de cristal central, que facilita la conexión con el entorno. Incluye un espacio exterior cubierto (pérgola o porche), perfecto para el esparcimiento al aire libre. Es la opción ideal para quienes buscan la rapidez de la construcción modular con el aspecto atemporal de una vivienda familiar permanente.",
        },
        {
          title: "Características",
          content:
            <ul className="list-disc pl-5 space-y-1">
              <li>10.800 × 8.230 × 4.252 mm</li>
              <li>2 habitaciones, salón, cocina ybaño</li>
              <li>
                89 m2
              </li>
              <li>4 personas</li>
            </ul>
        },
        {
          title: "Plano de la casa",
          content:
            <img
                src="/img/Family/family4.jpeg"
                alt=""
                className="w-80"
              />
        },
      ],
    },
    {
      name: "03. Apple",
      hasExtensions: false,
      images: [
        "/img/Apple/apple5.jpeg",
        "/img/Apple/apple6.jpeg",
        "/img/Apple/apple2.jpeg",
        "/img/Apple/apple3.jpeg",
        "/img/Apple/apple4.jpeg",
      ],
      accordion: [
        {
          title: "Descripción",
          content:
            "Este módulo ofrece un diseño futurista y vanguardista, caracterizado por sus líneas curvas suaves y su estética limpia en color blanco. Destaca su amplia terraza frontal cubierta, enmarcada por lamas de madera clara, y una escalera exterior flotante que lleva a una terraza superior (rooftop). La gran fachada de cristal asegura máxima luminosidad. Ideal para proyectos de glamping de lujo o alojamientos vacacionales que buscan un impacto visual único y moderno.",
        },
        {
          title: "Características",
          content:
            <ul className="list-disc pl-5 space-y-1">
              <li>10.000 × 5.500 × 3.200 mm (cabina + terraza)</li>
              <li>Cabina: 10.000 × 3.500 × 3.200 mm</li>
              <li>
                Terraza: 10.000 × 2.000 × 3.200 mm
              </li>
              <li>55 m2</li>
              <li>4–8 personas</li>
            </ul>
        },
        {
          title: "Plano de la casa",
          content:
            <img
                src="/img/Apple/apple1.jpeg"
                alt=""
                className="w-80"
              />
        },
      ],
    },

    {
      name: "04. Nordic",
      hasExtensions: false,
      images: [
        "/img/Nordic/nordic5.jpeg",
        "/img/Nordic/nordic6.jpeg",
        "/img/Nordic/nordic2.jpeg",
        "/img/Nordic/nordic3.jpeg",
        "/img/Nordic/nordic4.jpeg",
      ],
      accordion: [
        {
          title: "Descripción",
          content:
            "El modelo Nordic presenta un diseño modular minimalista con un imponente tejado a dos aguas que se integra en una fachada de cristal de doble altura, garantizando vistas espectaculares. Su revestimiento en chapa metálica oscura aporta una estética moderna, industrial y escandinava.",
        },
        {
          title: "Características",
          content:
            <ul className="list-disc pl-5 space-y-1">
              <li>11.000 × 4.800 × 4.500 mm (cabina +terraza)</li>
              <li>1 habitación, salón, cocina y baño</li>
              <li>
                52,8 m2
              </li>
              <li>2 personas</li>
            </ul>
        },
        {
          title: "Plano de la casa",
          content:
            <img
                src="/img/Nordic/nordic1.jpeg"
                alt=""
                className="w-80"
              />
        },
      ],
    },
    {
      name: "05. Capsule",
      hasExtensions: false,
      images: [
        "/img/Capsule/capsule2.png",
        "/img/Capsule/capsule1.jpeg",
        "/img/Capsule/capsule6.jpeg",
        "/img/Capsule/capsule5.png",
        "/img/Capsule/capsule3.png",
      ],
      accordion: [
        {
          title: "Descripción",
          content:
            "Capsule es una casa modular de diseño futurista con líneas suaves y aerodinámicas. Se caracteriza por sus enormes ventanales panorámicos en los extremos y una llamativa iluminación LED integrada que resalta su aspecto de alta tecnología. Ideal para glamping de lujo o alojamientos que buscan un impacto visual vanguardista y memorable.",
        },
        {
          title: "Características",
          content:
            <ul className="list-disc pl-5 space-y-1">
              <li>11.500 × 3.300 × 3.300 mm</li>
              <li>Consumo máximo de energía: 12 kW</li>
              <li>
                55 m2
              </li>
              <li>4–8 personas</li>
            </ul>
        },
        {
          title: "Plano de la casa",
          content:
            <img
                src="/img/Capsule/capsule4.jpeg"
                alt=""
                className="w-80"
              />
        },
      ],
    },
  ];

  const activeModel = models[activeModelIndex];
  const totalImages = activeModel.images.length;

  const prevImage = () =>
    setSelectedImageIndex((i) => (i === 0 ? totalImages - 1 : i - 1));

  const nextImage = () =>
    setSelectedImageIndex((i) => (i === totalImages - 1 ? 0 : i + 1));

  /* 👉 Drag / Swipe */
  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - e.clientX;
    if (delta > 50) nextImage();
    if (delta < -50) prevImage();
    dragStartX.current = null;
  };

  return (
    <div className="max-w-[1500px] py-20 mx-auto px-4 md:px-20 font-dmsans">
      <div
        ref={containerRef}
        className="flex lg:flex-row flex-col justify-between gap-10"
      >
        <h2 className="text-4xl font-medium tracking-tight lg:text-5xl text-tipo opacity-0">
          Encuentra tu
          <br />
          <span className="font-playfair font-semibold italic text-secundario">
            modelo ideal
          </span>
        </h2>
        <p className="text-md text-tipoclara w-full lg:w-[600px]">
          Explora nuestra colección de casas modulares y elige el diseño que
          mejor se adapta a tu estilo de vida. Cada modelo está pensado para
          ofrecerte confort, funcionalidad y una estética moderna, con la
          posibilidad de personalizar cada detalle.
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-10">
        {/* Botones modelos */}
        <div className="flex gap-4 overflow-x-auto scrollbar-none pr-8 bg-[#F6F6F3] rounded-md lg:w-fit p-2">
          {models.map((model, idx) => (
            <Button
              key={model.name}
              variant={activeModelIndex === idx ? "default" : "link"}
              className="shrink-0 text-md cursor-pointer"
              onClick={() => {
                setActiveModelIndex(idx);
                setSelectedImageIndex(0);
              }}
            >
              {model.name}
            </Button>
          ))}
        </div>

        {/* Galería + Acordeón */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
          {/* Galería */}
          <div className="flex flex-col-reverse xl:flex-row gap-4">
            {/* Miniaturas */}
            <div className="flex xl:flex-col gap-2 overflow-x-auto scrollbar-none">
              {activeModel.images.map((img, idx) => (
                <div
                  key={img}
                  className={`w-20 h-20 shrink-0 rounded overflow-hidden cursor-pointer border-2 ${
                    selectedImageIndex === idx
                      ? "border-brand"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Imagen principal */}
            <div
              className="relative w-full lg:w-[600px] h-[300px] md:h-[480px] rounded-md overflow-hidden select-none"
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
            >
              <img
                src={activeModel.images[selectedImageIndex]}
                alt=""
                className="w-full h-full object-cover"
                draggable={false}
              />

              {/* Flechas */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Acordeón */}
          <div className="flex-1">
            <Accordion type="single" collapsible defaultValue="item-0">
              {activeModel.accordion.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-lg font-bold">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-tipoclara">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="flex flex-col lg:flex-row gap-4 mt-10">
              <Button className="text-md" onClick={openModal}>
                ¡Me interesa!
              </Button>
              {activeModel.hasExtensions && (
                <Button
                  onClick={openExtensiones}
                  variant="secondary"
                  className="bg-[#f0f0f0]"
                >
                  Ver extensiones opcionales
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

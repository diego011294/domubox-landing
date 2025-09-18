"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useRevealTexts } from "@/hooks/useRevealTexts";


export default function Modelos({ openModal, openExtensiones }: { openModal: () => void, openExtensiones: () => void }) {
    const containerRef = useRevealTexts<HTMLDivElement>("h2");
    const [activeModelIndex, setActiveModelIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const models = [
  {
    name: "Apple Cabin",
    images: [
      "/img/apple1.webp",
      "/img/apple2.webp",
      "/img/apple3.webp",
    ],
    accordion: [
      { title: "Descripción", content: "Apple Cabin es una solución moderna y funcional que ofrece un espacio habitable cómodo y de rápida instalación. Con un diseño compacto y elegante, se adapta a distintos entornos como alternativa práctica y sostenible. Con hasta 28 m² de superficie útil, resulta ideal como pequeña vivienda, oficina independiente, estudio creativo o cabaña turística. Su estética contemporánea y versatilidad la convierten en una opción perfecta para quienes buscan combinar diseño, confort y eficiencia." },
      { title: "Características", content: "*Por definir | Ponte en contacto y solicita más información" },
    ],
  },
  {
    name: "Contenedor plegable",
    images: [
      "/img/contenedor1.webp",
      "/img/contenedor2.webp",
      "/img/contenedor3.webp",
    ],
    accordion: [
      { title: "Descripción", content: "Diseño inteligente, instalación rápida y máxima funcionalidad. Estos contenedores ofrecen un sistema extensible que permite ampliar su espacio interior en pocas horas. Son una solución práctica para alojar trabajadores de obra, habilitar oficinas temporales o crear espacios modulares que se pueden agrupar según las necesidades del proyecto." },
      { title: "Características", content: "*Por definir | Ponte en contacto y solicita más información" },
    ],
  },
  {
    name: "Space Capsule",
    images: [
      "/img/capsula1.webp",
      "/img/capsula2.webp",
      "/img/capsula3.webp",
    ],
    accordion: [
      { title: "Descripción", content: "Una vivienda modular futurista, sostenible y totalmente personalizable. Con un diseño innovador y materiales de alta resistencia, la Space Capsule ofrece un espacio habitable moderno, confortable y de rápida instalación. Su estética vanguardista y su flexibilidad la convierten en una opción ideal para quienes buscan una vivienda temporal o permanente que combine estilo, funcionalidad y eficiencia." },
      { title: "Características", content: "*Por definir | Ponte en contacto y solicita más información" },
    ],
  },
];


  const activeModel = models[activeModelIndex];
  return (
    <div  className='max-w-[1300px] py-20 mx-auto px-4 font-dmsans'>
      <div ref={containerRef} className='flex lg:flex-row items-start lg:items-center flex-col justify-between w-full gap-10'>
        <h2 className='text-4xl lg:text-5xl font-bold font-dmsans text-tipo w-full opacity-0'>
            Encuentra tu<br/> <span className='font-playfair text-secundario italic'>modelo ideal</span>
        </h2>
        <p className='text-md text-tipoclara w-full lg:w-[900px]'>
            Explora nuestra colección de casas modulares y elige el diseño que mejor se adapta a tu estilo de vida. Cada modelo está pensado para ofrecerte confort, funcionalidad y una estética moderna, con la posibilidad de personalizar cada detalle. Descubre hogares eficientes, sostenibles y diseñados para crecer contigo.
        </p>
      </div>
      {/* COMIENZO DEL MÓDULO */}
       <div className="flex flex-col gap-6 mt-10">
      {/* Botones de modelos */}
<div className="relative">
  <div className="flex gap-4 overflow-x-auto scrollbar-none pr-8">
    {models.map((model, idx) => (
      <Button
        key={model.name}
        variant={activeModelIndex === idx ? "default" : "outline"}
        className="border-brand cursor-pointer shrink-0"
        onClick={() => {
          setActiveModelIndex(idx);
          setSelectedImageIndex(0); // reset de la imagen seleccionada
        }}
      >
        {model.name}
      </Button>
    ))}
  </div>

  {/* Degradado lateral derecho */}
  <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent" />
</div>


      {/* Galería + Acordeón */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
        {/* Galería */}
        <div className="flex flex-col-reverse xl:flex-row gap-4">
          <div className="flex xl:flex-col gap-2">
            {activeModel.images.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={activeModel.name}
                className={`w-20 h-20 object-cover cursor-pointer rounded ${
                  selectedImageIndex === idx ? "border-2 border-brand" : ""
                }`}
                onClick={() => setSelectedImageIndex(idx)}
              />
            ))}
          </div>
          <div className="flex-1">
            <img
              src={activeModel.images[selectedImageIndex]}
              alt={activeModel.name}
              className="w-full lg:w-[600px] h-[200px] md:h-[400px] object-cover rounded-md"
            />
          </div>
        </div>

        {/* Acordeón */}
        <div className="flex-1">
          <Accordion type="single" collapsible defaultValue="item-0">
            {activeModel.accordion.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-tipo text-lg font-bold">{item.title}</AccordionTrigger>
                <AccordionContent className="text-tipoclara">{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {/* Btns de acciones */}
          <div className="flex flex-col lg:flex-row gap-4 mt-10">
            <Button
            onClick={openModal} 
            variant="default" 
            className="text-md">
              ¡Me interesa!
            </Button>
            <Button 
            onClick={openExtensiones} 
            variant="secondary" className="bg-[#f0f0f0] text-md text-tipoclara">
              Ver extensiones opcionales
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function Modelos() {
    const [activeModelIndex, setActiveModelIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const models = [
  {
    name: "Modelo A",
    images: [
      "/img/casa-modeloa-1.jpg",
      "/img/casa-modeloa-2.jpg",
      "/img/casa-modeloa-3.jpg",
    ],
    accordion: [
      { title: "Descripción", content: "Modelo A, casa moderna con 3 habitaciones..." },
      { title: "Características", content: "Piscina, jardín, garaje..." },
    ],
  },
  {
    name: "Modelo B",
    images: [
      "/img/casa-modelob-1.jpg",
      "/img/casa-modelob-2.jpg",
      "/img/casa-modelob-3.jpg",
    ],
    accordion: [
      { title: "Descripción", content: "Modelo B, casa minimalista con 2 habitaciones..." },
      { title: "Características", content: "Terraza, garaje..." },
    ],
  },
  {
    name: "Modelo C",
    images: [
      "/img/casa-modeloc-1.jpg",
      "/img/casa-modeloc-2.jpg",
      "/img/casa-modeloc-3.jpg",
    ],
    accordion: [
      { title: "Descripción", content: "Modelo C, casa familiar con 4 habitaciones..." },
      { title: "Características", content: "Jardín grande, piscina..." },
    ],
  },
];


  const activeModel = models[activeModelIndex];
  return (
    <div className='w-full xl:max-w-[1720px] px-5 sm:px-6 md:px-10 lg:px-[125px] py-20 mx-auto'>
      <div className='flex lg:flex-row items-start lg:items-center flex-col justify-between w-full gap-10'>
        <h2 className='text-4xl font-bold font-dmsans text-tipo w-full'>
            Encuentra tu modelo <br/> <span className='font-playfair text-secundario italic'>perfecto</span>
        </h2>
        <p className='text-md text-tipoclara w-full lg:w-[900px]'>
            Explora nuestra colección de casas modulares y elige el diseño que mejor se adapta a tu estilo de vida. Cada modelo está pensado para ofrecerte confort, funcionalidad y una estética moderna, con la posibilidad de personalizar cada detalle. Descubre hogares eficientes, sostenibles y diseñados para crecer contigo.
        </p>
      </div>
      {/* COMIENZO DEL MÓDULO */}
       <div className="flex flex-col gap-6 mt-10">
      {/* Botones de modelos */}
      <div className="flex gap-4 overflow-x-auto scrollbar-none">
        {models.map((model, idx) => (
          <Button
            key={model.name}
            variant={activeModelIndex === idx ? "default" : "outline"}
            className="border-brand"
            onClick={() => {
              setActiveModelIndex(idx);
              setSelectedImageIndex(0); // reset de la imagen seleccionada
            }}
          >
            {model.name}
          </Button>
        ))}
      </div>

      {/* Galería + Acordeón */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
        {/* Galería */}
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          <div className="flex lg:flex-col gap-2">
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
              className="w-full h-[400px] object-cover rounded-md"
            />
          </div>
        </div>

        {/* Acordeón */}
        <div className="flex-1">
          <Accordion type="single" collapsible defaultValue="item-0">
            {activeModel.accordion.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {/* Btns de acciones */}
          <div className="flex flex-col gap-4 mt-10">
            <Button variant="default" className="text-md">
              ¡Estoy interesado!
            </Button>
            <Button variant="secondary" className="bg-[#f0f0f0] text-md text-tipoclara">
              Ver extensiones opcionales
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

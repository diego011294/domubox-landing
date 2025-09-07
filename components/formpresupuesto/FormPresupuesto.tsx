"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRevealTexts } from "@/hooks/useRevealTexts";
import { useFormSubmit } from "@/hooks/useFormSubmit";

export default function FormPresupuesto() {
  const containerRef = useRevealTexts<HTMLDivElement>("h2");

  // Hook de envío
  const { handleSubmit, sending, statusMessage } = useFormSubmit({ endpoint: "/api/contact" });

  return (
    <div
      ref={containerRef}
      className="max-w-[1300px] mx-auto flex flex-col lg:flex-row py-20 lg:py-40 px-4 items-center justify-between gap-20"
    >
      <div className="flex flex-col w-full gap-5">
        <h2 className="text-4xl lg:text-5xl font-bold font-dmsans text-tipo w-full opacity-0">
          Diseñamos <br /> tu hogar a{" "}
          <span className="font-playfair text-secundario italic">medida</span>
        </h2>
        <p className="text-tipoclara">
          Solicita información y descubre cómo podemos crear un espacio único
          para ti, con la calidad y rapidez que nos caracteriza.
        </p>
      </div>

      <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Nombre completo"
          className="bg-white p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-2">
          <input
            name="phone"
            type="tel"
            placeholder="Teléfono"
            className="bg-white w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="bg-white w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
          />
        </div>
        <textarea
          name="message"
          placeholder="Mensaje"
          rows={3}
          className="bg-white p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <Button className="w-auto self-start" type="submit" disabled={sending}>
          {sending ? "Enviando..." : "Enviar"}
        </Button>

        {statusMessage && (
          <p className="mt-2 text-sm text-gray-700">{statusMessage}</p>
        )}
      </form>
    </div>
  );
}

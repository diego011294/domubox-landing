"use client";
import React, { useRef, useEffect } from "react";
import { Button } from "../ui/button";
import gsap from "gsap";

interface ModalPresupuestoProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalPresupuesto({ isOpen, onClose }: ModalPresupuestoProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isOpen && overlayRef.current && modalRef.current) {
      // Entrada overlay y modal
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        modalRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const closeModal = () => {
    if (overlayRef.current && modalRef.current) {
      // Salida modal y overlay
      gsap.to(modalRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: onClose,
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black/60 flex items-end md:items-center justify-center px-4"
      onClick={closeModal}
    >
      <div
        ref={modalRef}
        className="bg-[radial-gradient(circle,_#FAF4E8_0%,_#F6F4F0_43%,_#DDD2BE_100%)] rounded-t-xl sm:rounded-xl w-full md:w-3/4 max-w-3xl flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen izquierda solo desktop */}
        <div className="hidden md:block md:w-[600px]">
          <img
            src="img/galeria1.jpg"
            alt="Presupuesto"
            className="w-full h-full object-cover"
          />
        </div>

        {/* formulario */}
        <div className="w-full md:w-[800px] p-6 md:p-8 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-tipo">
            Solicita tu presupuesto ahora
          </h2>

          <form className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Nombre completo"
              className="bg-white p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-2">
              <input
                type="tel"
                placeholder="Teléfono"
                className="bg-white w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-white w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
              />
            </div>
            <textarea
              placeholder="Mensaje"
              rows={3}
              className="bg-white p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <Button type="submit">Enviar</Button>
          </form>

          <button
            onClick={closeModal}
            className="mt-4 text-gray-500 hover:text-gray-700 text-sm self-end cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

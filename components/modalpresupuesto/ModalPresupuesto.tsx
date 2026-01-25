"use client";
import React, { useRef, useEffect } from "react";
import { Button } from "../ui/button";
import gsap from "gsap";
import { useFormSubmit } from "@/hooks/useFormSubmit"; // importamos el hook

interface ModalPresupuestoProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalPresupuesto({ isOpen, onClose }: ModalPresupuestoProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Usamos el hook con nuestro endpoint
  const { handleSubmit, sending, statusMessage } = useFormSubmit({ endpoint: "/api/contact" });

  useEffect(() => {
    if (isOpen && overlayRef.current && modalRef.current) {
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
      className="fixed inset-0 z-50 bg-black/60 flex items-end md:items-center justify-center"
      onClick={closeModal}
    >
      <div
        ref={modalRef}
        className="bg-[radial-gradient(circle,_#FAF4E8_0%,_#F6F4F0_43%,_#DDD2BE_100%)] rounded-t-xl sm:rounded-xl w-full md:w-3/4 max-w-3xl flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hidden md:block md:w-[600px]">
          <img
            src="img/img-promologo.webp"
            alt="Presupuesto"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-[800px] p-6 md:p-8 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-tipo">
            Solicita tu presupuesto ahora
          </h2>

          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Nombre completo*"
              className="bg-white p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-2">
              <input
                name="phone"
                type="tel"
                placeholder="Teléfono*"
                className="bg-white w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
              />
              <input
                name="email"
                type="email"
                placeholder="Email*"
                className="bg-white w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
              />
            </div>
            <textarea
              name="message"
              placeholder="Mensaje*"
              rows={3}
              className="bg-white p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <Button type="submit" disabled={sending}>
              {sending ? "Enviando..." : "Enviar"}
            </Button>
          </form>

          {statusMessage && (
            <p className="mt-2 text-center text-sm text-gray-700">{statusMessage}</p>
          )}

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

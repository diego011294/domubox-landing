"use client";
import React, { useRef, useEffect } from "react";
import { Button } from "../ui/button";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface ModalExtensionesProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalExtensiones({
  isOpen,
  onClose,
}: ModalExtensionesProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && overlayRef.current && modalRef.current) {
      // Animación de entrada
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

      // Hacer draggable el modal hacia abajo
      Draggable.create(modalRef.current, {
        type: "y",
        bounds: { minY: 0, maxY: window.innerHeight },
        inertia: true,
        onDragEnd: function () {
          if (this.y > 150) {
            // si lo arrastra >150px hacia abajo => cerrar
            closeModal();
          } else {
            gsap.to(modalRef.current, { y: 0, duration: 0.3, ease: "power3.out" });
          }
        },
      });
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
      className="fixed inset-0 z-50 bg-black/60 flex items-end justify-center"
      onClick={closeModal}
    >
      <div
        ref={modalRef}
        className="bg-[radial-gradient(circle,_#FAF4E8_0%,_#F6F4F0_43%,_#DDD2BE_100%)]
                   rounded-t-2xl w-full md:max-w-5xl p-6 shadow-xl cursor-grab active:cursor-grabbing"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra de drag visual */}
        <div className="w-12 h-1.5 bg-gray-400/60 rounded-full mx-auto mb-6"></div>

        {/* Cards horizontales */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-white rounded-xl shadow-md p-6 flex-1 text-center">
            <h3 className="text-xl font-bold mb-2 text-tipo">Extensión Básica</h3>
            <p className="text-sm text-gray-600 mb-4">
              Una solución sencilla para ampliar tu espacio.
            </p>
            <Button>Seleccionar</Button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex-1 text-center">
            <h3 className="text-xl font-bold mb-2 text-tipo">Extensión Estándar</h3>
            <p className="text-sm text-gray-600 mb-4">
              El equilibrio perfecto entre diseño y confort.
            </p>
            <Button>Seleccionar</Button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex-1 text-center">
            <h3 className="text-xl font-bold mb-2 text-tipo">Extensión Premium</h3>
            <p className="text-sm text-gray-600 mb-4">
              Todo incluido para un hogar de ensueño.
            </p>
            <Button>Seleccionar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

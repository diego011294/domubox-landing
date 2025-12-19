"use client";
import React, { useRef, useEffect } from "react";
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
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

      // Draggable solo para cerrar arrastrando hacia abajo
      Draggable.create(modalRef.current, {
        type: "y",
        bounds: { minY: 0, maxY: window.innerHeight },
        inertia: true,
        onDragEnd: function () {
          if (this.y > 100) {
            closeModal();
          } else {
            gsap.to(modalRef.current, {
              y: 0,
              duration: 0.3,
              ease: "power3.out",
            });
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
                    w-full  shadow-xl cursor-grab active:cursor-grabbing max-h-[90vh] p-4 md:p-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra de drag */}
        <div className="w-12 h-1.5 bg-gray-400/60 rounded-full mx-auto mb-4"></div>

        {/* Contenido scrollable */}
        <div className="overflow-y-auto flex-1">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="bg-white w-full rounded-xl shadow-md p-2 md:flex-col flex text-start md:text-center gap-2">
              <img
                src="img/extension1.webp"
                alt="Extension terraza"
                className="w-32 h-auto md:w-50 object-contain md:mx-auto"
              />
              <div className="flex flex-col gap-2 md:gap-4 justify-center">
                <h3 className="text-md md:text-2xl font-bold mb-2 text-tipo">Terraza</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Una solución sencilla para ampliar tu espacio.
                </p>
              </div>
            </div>

            <div className="bg-white w-full rounded-xl shadow-md p-2 md:flex-col flex text-start md:text-center gap-2">
              <img
                src="img/extension2.webp"
                alt="Extension terraza"
                className="w-32 md:w-50 h-auto object-contain md:mx-auto"
              />
              <div className="flex flex-col gap-2 md:gap-4 justify-center">
                <h3 className="text-md md:text-2xl font-bold mb-2 text-tipo">
                  Techo terraza
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  El equilibrio perfecto con tu terraza para cubrirte los días
                  de lluvia.
                </p>
              </div>
            </div>

            <div className="bg-white w-full rounded-xl shadow-md p-2 md:flex-col flex text-start md:text-center gap-2">
              <img
                src="img/extension3.webp"
                alt="Extension terraza"
                className="w-32 md:w-50 h-auto object-contain md:mx-auto"
              />
              <div className="flex flex-col gap-2 md:gap-4 justify-center">
                <h3 className="text-md md:text-2xl font-bold mb-2 text-tipo">Techo</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tejado a dos aguas que facilita el desagüe y evita
                  acumulaciones de agua o suciedad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

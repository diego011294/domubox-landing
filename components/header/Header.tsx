"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Button } from "../ui/button";

export default function Header({ openModal }: { openModal: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (headerRef.current) {
      const h2 = headerRef.current.querySelector("h2");
      const video = videoRef.current;
      const bottomEls = headerRef.current.querySelectorAll("h1, p, button");
      const spanHoy = headerRef.current.querySelector("h1 span");

      // 🔹 h2
      if (h2) {
        tl.fromTo(
          h2,
          { opacity: 0, y: 30, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
          "intro"
        );
      }

      // 🔹 video (entra casi seguido)
      if (video) {
        tl.fromTo(
          video,
          { opacity: 0, scale: 0.7, y: 60, rotate: -6, borderRadius: "9999px" },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.6)",
          },
          "intro+=0.3"
        );

        // hover
        video.addEventListener("mouseenter", () => {
          gsap.to(video, {
            scale: 2.3,
            boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
            duration: 0.6,
            borderRadius: "10px",
            ease: "power3.out",
          });
        });
        video.addEventListener("mouseleave", () => {
          gsap.to(video, {
            scale: 1,
            boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            duration: 0.7,
            borderRadius: "99999px",
            ease: "back.out(1.7)",
          });
        });
      }

      // 🔹 bloque inferior (h1, p, button)
      if (bottomEls.length > 0) {
        tl.fromTo(
          bottomEls,
          { opacity: 0, y: 30, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.15, // más rápido
          },
          "intro+=0.8" // entra casi pegado al video
        );
      }

      // 🔹 span "hoy" con efecto extra
      if (spanHoy) {
        tl.fromTo(
          spanHoy,
          { opacity: 0, scale: 0.7, y: 15 },
          {
            opacity: 1,
            scale: 1.5,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1,0.5)",
          },
          "intro+=1.2"
        );
      }
    }
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `
          url('img/fondo-header.png'),
          radial-gradient(circle, #FAF4E8 0%, #F6F4F0 43%, #DDD2BE 100%)
        `,
        backgroundBlendMode: "overlay",
      }}
    >
      <div
        ref={headerRef}
        className="flex flex-col items-center justify-center px-5 md:px-0 min-h-screen"
      >
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center w-full md:w-auto">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-dmsans font-bold text-center text-tipo tracking-tighter">
            El futuro
          </h2>
          <video
            ref={videoRef}
            className="w-full z-10 h-32 rounded-full lg:w-80 lg:h-32 sm:w-80 object-cover shadow-lg lg:rounded-[9999px]"
            src="/video/video-montaje.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-dmsans font-bold text-center text-tipo tracking-tighter">
            de la vivienda,{" "}
            <span className="font-playfair italic text-secundario tracking-tighter">
              hoy
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-center font-dmsans text-tipo tracking-tighter my-4">
            Diseña, adapta y disfruta
          </p>
          <div className="block lg:hidden">
            <Button
            onClick={openModal}>
              Solicita presupuesto
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

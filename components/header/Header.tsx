"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return; // no hacemos nada en móvil

    gsap.fromTo(
      videoRef.current,
      { y: 0, scale: 1, xPercent: 0, borderRadius: "9999px" },
      {
        y: 525,
        scale: 3,
        xPercent: -77, // centrado horizontalmente
        borderRadius: "5px",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      }
    );
  }, []);

  return (
    <div className="bg-[radial-gradient(circle,_#FAF4E8_0%,_#F6F4F0_43%,_#DDD2BE_100%)] h-auto lg:h-[150vh] py-10 lg:py-0">
      <div className="h-screen flex flex-col items-center justify-center pt-0 lg:pt-10 px-5 md:px-0">
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center w-full md:w-auto">
          <h2 className="text-7xl lg:text-9xl font-dmsans font-bold text-center text-tipo tracking-tighter">
            El futuro
          </h2>
          <video
            ref={videoRef}
            className="w-full h-72 lg:w-80 lg:h-32 sm:w-80 object-cover shadow-lg rounded-md lg:rounded-[9999px]"
            src="/video/video-montaje.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-dmsans font-bold text-center text-tipo tracking-tighter">
            de la vivienda,{" "}
            <span className="font-playfair italic text-secundario tracking-tighter">
              hoy
            </span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-5xl text-center font-dmsans text-tipo tracking-tighter my-4">
            Diseña, adapta y disfruta
          </p>
          <div className="block lg:hidden">
          <Button>Solicita presupuesto</Button>
        </div>
        </div>
      </div>
    </div>
  );
}

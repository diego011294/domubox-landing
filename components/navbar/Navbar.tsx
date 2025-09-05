"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll.current && currentScroll > 80) {
        // scroll hacia abajo → ocultar
        gsap.to(nav, {
          y: "-100%",
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        // scroll hacia arriba → mostrar
        gsap.to(nav, {
          y: "0%",
          duration: 0.4,
          ease: "power2.out",
        });
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-full fixed top-0 left-0 z-50 bg-[#F6F4F0] border-b border-separator"
    >
      <div className="max-w-[1300px] px-4 py-2 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src="img/logo-domubox.svg"
              alt="logo domubox"
              className="w-20 md:w-full"
            />
          </a>
        </div>

        {/* Links desktop */}
        <div className="hidden text-lg md:flex space-x-6 text-tipo">
          <Link scroll={false} href="#modelos" className="hover:text-secundario">
            Modelos
          </Link>
          <Link scroll={false} href="#galeria" className="hover:text-secundario">
            Galería
          </Link>
          <Link scroll={false} href="#materiales" className="hover:text-secundario">
            Materiales
          </Link>
          <Link scroll={false} href="#whyus" className="hover:text-secundario">
            Por qué elegirnos
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden lg:block bg-[#4f5516] text-white rounded-sm shadow-xs hover:bg-[#272A0B] text-lg cursor-pointer px-5 py-1">
          <a href="#formpresupuesto">Solicita presupuesto</a>
        </div>

        {/* Botón mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`
          text-lg md:hidden bg-[#F6F4F0] shadow-md absolute z-20 w-full px-10 py-5 transition-all duration-300 ease-in-out
          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }
        `}
      >
        <Link scroll={false} onClick={() => setOpen(false)} href="#modelos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          Modelos
        </Link>
        <Link scroll={false} onClick={() => setOpen(false)} href="#galeria" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          Galería
        </Link>
        <Link scroll={false} onClick={() => setOpen(false)} href="#materiales" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          Materiales
        </Link>
        <Link scroll={false} onClick={() => setOpen(false)} href="#whyus" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          Por qué elegirnos
        </Link>
      </div>
    </nav>
  );
}

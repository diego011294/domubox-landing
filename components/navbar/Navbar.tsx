"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-[#F6F4F0] border-b-1 border-separator">
      <div className="max-w-[1300px] px-4 py-2 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img src="img/logo-domubox.svg" alt="logo domubox" className="w-20 md:w-full" />
          </Link>
        </div>
        <div className="hidden text-lg md:flex space-x-6 text-tipo">
          <Link href="#modelos" className=" hover:text-secundario">
            Modelos
          </Link>
          <Link href="#galeria" className=" hover:text-secundario">
            Galería
          </Link>
          <Link href="#materiales" className=" hover:text-secundario">
            Materiales
          </Link>
          <Link href="#por-que" className="hover:text-secundario">
            Por qué elegirnos
          </Link>
        </div>
        <div className="hidden lg:block">
          <Button>Solicita presupuesto</Button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú móvil con animación */}
      <div
        className={`
          text-lg md:hidden bg-[#F6F4F0] shadow-md absolute z-20 w-full px-10 py-5 transition-all duration-300 ease-in-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        <Link
          href="#modelos"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Modelos
        </Link>
        <Link
          href="#galeria"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Galería
        </Link>
        <Link
          href="#materiales"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Materiales
        </Link>
        <Link
          href="#por-que"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Por qué elegirnos
        </Link>
      </div>
    </nav>
  );
}

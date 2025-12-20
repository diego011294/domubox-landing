"use client"

import { useEffect, useRef, useState } from "react"
import { Menu, X, Phone, Instagram, Facebook } from "lucide-react"
import gsap from "gsap"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navRef = useRef<HTMLElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)
  const logoRef = useRef<HTMLImageElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)

  /* ================================
     SCROLL BEHAVIOUR (PRO)
  ================================= */
  useEffect(() => {
    const nav = navRef.current
    const inner = innerRef.current
    const logo = logoRef.current

    if (!nav || !inner || !logo) return

    const handleScroll = () => {
      const scrolled = window.scrollY > 80
      setIsScrolled(scrolled)

      gsap.to(nav, {
        backgroundColor: scrolled ? "#F6F4F0" : "transparent",
        boxShadow: scrolled
          ? "0 4px 20px rgba(0,0,0,0.05)"
          : "0 0 0 rgba(0,0,0,0)",
        duration: 0.35,
        ease: "power2.out",
      })

      gsap.to(inner, {
        paddingTop: scrolled ? "1.2rem" : "2.5rem",
        paddingBottom: scrolled ? "1.2rem" : "2.5rem",
        duration: 0.35,
        ease: "power2.out",
      })

      if (window.innerWidth >= 768) {
        gsap.to(logo, {
          scale: scrolled ? 1 : 1.25,
          duration: 0.35,
          ease: "power2.out",
        })
      }
    }

    window.addEventListener("scroll", handleScroll)

    // 🔥 Solo evaluamos, NO animamos desde cero
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  /* ================================
     SIDE MENU
  ================================= */
  useEffect(() => {
    if (!menuRef.current) return

    gsap.to(menuRef.current, {
      x: open ? "0%" : "-100%",
      duration: open ? 0.6 : 0.45,
      ease: open ? "power4.out" : "power4.in",
    })
  }, [open])

  const handleScrollTo = (id: string) => {
    setOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }, 400)
  }

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-colors ${
          isScrolled ? "text-black" : "text-white"
        }`}
      >
        {/* 👇 ESTADO INICIAL DEFINIDO POR CSS */}
        <div
          ref={innerRef}
          className="
            w-full mx-auto px-4 md:px-20
            py-10 md:py-10
            flex items-center justify-between
            relative font-dmsans
          "
        >
          {/* IZQUIERDA */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 uppercase text-xs md:text-sm tracking-wide cursor-pointer"
          >
            <Menu size={22} />
            <span>Menú</span>
          </button>

          {/* LOGO */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2"
          >
            {/* 👇 LOGO GRANDE POR DEFECTO */}
            <img
              ref={logoRef}
              src={
                isScrolled
                  ? "/img/logo-domubox.svg"
                  : "/img/logo-domubox-white.svg"
              }
              alt="Domubox"
              className="
                w-16 md:w-24
                scale-[1.25]
                origin-center
              "
            />
          </Link>

          {/* DERECHA */}
          <div className="hidden xl:flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>(+34) 603 894 725</span>
            </div>

            <button
              onClick={() => handleScrollTo("formpresupuesto")}
              className={`px-5 py-2 rounded-sm transition cursor-pointer ${
                isScrolled
                  ? "bg-[#4f5516] text-white hover:bg-[#272A0B]"
                  : "border border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              Solicita presupuesto
            </button>
          </div>
        </div>
      </nav>

      {/* SIDE MENU */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-[#F6F4F0] z-[999] -translate-x-full text-black font-dmsans"
      >
        <div className="flex justify-end items-center px-6 py-4">
          <button className="cursor-pointer" onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="h-full flex flex-col justify-center items-start gap-8 px-10 text-3xl md:text-4xl font-medium">
          <button onClick={() => handleScrollTo("modelos")}>Modelos</button>
          <button onClick={() => handleScrollTo("galeria")}>Galería</button>
          <button onClick={() => handleScrollTo("materiales")}>Materiales</button>
          <button onClick={() => handleScrollTo("whyus")}>Por qué elegirnos</button>

          <div className="flex gap-4 pt-6">
            <a href="https://www.instagram.com/domubox/" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61584719714932" target="_blank" rel="noreferrer">
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

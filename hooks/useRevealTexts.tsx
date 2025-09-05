"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useRevealTexts<T extends HTMLElement>(
  selectors: string | string[] = "h2" // por defecto anima h2
) {
  const ref = useRef<T>(null);
  const playedRef = useRef(false); // evita repetir la animación

  // siempre será un string estable, no un array nuevo en cada render
  const selectorsString = Array.isArray(selectors)
    ? selectors.join(",")
    : selectors;

  useEffect(() => {
    if (playedRef.current) return; // ya se ejecutó

    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(selectorsString);
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playedRef.current = true;

          gsap.fromTo(
            targets,
            { opacity: 0, y: 30, filter: "blur(8px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1,
              ease: "power3.out",
              stagger: 0.15,
              onComplete: () => {
                // elimina la clase de Tailwind para no quedar en opacity-0
                targets.forEach((t) => t.classList?.remove("opacity-0"));
              },
            }
          );

          observer.disconnect(); // se corta del todo
        }
      });
    }, { threshold: 0.2 });

    observer.observe(el);

    return () => observer.disconnect();
  }, [selectorsString]); // dependemos de un string estable, no de un array nuevo

  return ref;
}

"use client";

import { useRef, useCallback, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  { label: "Ресепшен", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=450&fit=crop" },
  { label: "Кабинет терапии", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=800&fit=crop" },
  { label: "Панорамный снимок", img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=450&fit=crop" },
  { label: "Зона ожидания", img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=450&fit=crop" },
  { label: "Хирургический кабинет", img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=800&fit=crop" },
  { label: "Стерилизация", img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=450&fit=crop" },
  { label: "Современное оборудование", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=450&fit=crop" },
  { label: "Улыбка пациента", img: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=600&h=800&fit=crop" },
];

export default function About() {
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  // Smooth mouse follow loop
  useEffect(() => {
    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.08;
      current.current.y += (mouse.current.y - current.current.y) * 0.08;

      if (gridRef.current) {
        gridRef.current.style.transform = `
          rotateX(${current.current.y}deg)
          rotateY(${current.current.x}deg)
        `;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const rect = wrapper.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouse.current.x = x * 20;  // max ±10 degrees
    mouse.current.y = y * -15; // max ±7.5 degrees, inverted
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouse.current.x = 0;
    mouse.current.y = 0;
  }, []);

  // Scroll-driven parallax on individual cards
  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const cards = grid.querySelectorAll<HTMLElement>("[data-photo]");
    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        const speed = [60, -40, 80, -30, 50, -60, 70, -50][i % 8];
        gsap.fromTo(
          card,
          { y: speed },
          {
            y: -speed,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Text */}
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <p className="font-[var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-blue-600">
            О клинике
          </p>
          <h2 className="mt-4 text-fluid-h1 font-[var(--font-heading)] font-bold leading-[1.1] tracking-tight text-gray-900">
            Современная стоматология
            <br className="hidden sm:block" />
            {" "}в&nbsp;центре города
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg max-w-xl mx-auto">
            <p>
              Клиника{" "}
              <span className="font-semibold text-gray-900">IQ&nbsp;Dental</span>{" "}
              переехала по новому адресу —{" "}
              <span className="font-medium text-gray-900">просп.&nbsp;Мира,&nbsp;34</span>.
              Мы создали пространство, где передовые технологии сочетаются
              с&nbsp;комфортной атмосферой.
            </p>
          </div>
        </div>

        {/* 3D Interactive Grid */}
        <div
          ref={wrapperRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative"
          style={{ perspective: "1000px" }}
        >
          <div
            ref={gridRef}
            className="grid gap-3 sm:gap-4"
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
              transition: "none",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "200px 200px 200px",
            }}
          >
            {photos.map((photo, idx) => {
              // Bento layout: card 0 spans 2 rows, card 4 spans 2 cols
              const spanClass =
                idx === 0
                  ? "row-span-2"
                  : idx === 4
                    ? "col-span-2"
                    : "";

              return (
              <div
                key={idx}
                data-photo
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${spanClass}`}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                {/* Photo */}
                <img
                  src={photo.img}
                  alt={photo.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Label overlay */}
                <div className="absolute inset-0 flex items-end p-4 sm:p-5">
                  <div className="translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-block rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-lg">
                      {photo.label}
                    </span>
                  </div>
                </div>

                {/* Shine on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

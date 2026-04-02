"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Calendar } from "lucide-react";

const ToothScene = dynamic(() => import("./ToothScene"), { ssr: false });

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.15,
      });

      tl.to(".hero-bg-text", {
        y: 0, opacity: 1, duration: 0.8,
      });

      tl.to(".hero-tooth-wrapper", {
        y: 0, opacity: 1, duration: 1.6, ease: "power2.out",
      }, 0.1);

      tl.to(".hero-cta", {
        y: 0, opacity: 1, stagger: 0.08, duration: 0.5,
      }, "-=1.0");
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(to top, #1c1f26 0%, #2a3040 12%, #4a5268 28%, #8b93a8 45%, #c8d0e0 60%, #e4e8f0 75%, #f5f6f9 90%, #ffffff 100%)",
      }}
    >
      {/* Gradient orbs */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-[15%] -top-[10%] h-[800px] w-[800px] rounded-full bg-[#b8c5db] opacity-35 blur-[140px]" />
        <div className="absolute -bottom-[15%] -right-[10%] h-[700px] w-[700px] rounded-full bg-[#a8b8d4] opacity-30 blur-[130px]" />
        <div className="absolute left-[60%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#c0cce0] opacity-25 blur-[110px]" />
        <div className="absolute left-[20%] top-[60%] h-[400px] w-[400px] rounded-full bg-[#b0bfd8] opacity-20 blur-[100px]" />
      </div>

      {/* ── "Стоматология нового поколения" + IQ DENTAL ── */}
      <div
        className="hero-bg-text pointer-events-none absolute inset-x-0 top-[22%] z-[1] flex flex-col items-center select-none"
        style={{ opacity: 0, transform: "translateY(60px)" }}
      >
        <span className="mb-4 font-[var(--font-mono)] text-sm uppercase tracking-[0.2em] text-[#2a3250]/35">
          Стоматология нового поколения
        </span>
        <h1
          className="whitespace-nowrap font-[var(--font-heading)] font-bold uppercase leading-none tracking-tight"
          style={{
            fontSize: "clamp(6rem, 18vw, 20rem)",
            color: "rgba(42, 50, 80, 0.35)",
          }}
        >
          IQ DENTAL
        </h1>
      </div>

      {/* ── 3D Tooth ── */}
      <div
        className="hero-tooth-wrapper absolute inset-x-0 z-[2]"
        style={{ top: "25%", bottom: "-55%", opacity: 0, transform: "translateY(15%)" }}
      >
        <ToothScene />
      </div>

      {/* ── Buttons — left & right of the tooth ── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[28%] z-[3] flex items-center justify-between px-10 sm:px-16 lg:px-24 xl:px-32 [&_a]:pointer-events-auto">
        <a
          href="#booking"
          className="hero-cta inline-flex h-12 items-center gap-2 rounded-full bg-[#2a3250] px-7 text-sm font-semibold text-white transition-all hover:bg-[#1d2440] active:scale-[0.97]"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <Calendar className="h-4 w-4" />
          Записаться
        </a>
        <a
          href="#about"
          className="hero-cta inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.97]"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          Подробнее
        </a>
      </div>
    </section>
  );
}

"use client";

import { cn } from "@/lib/utils";

const photoCards = [
  { label: "Интерьер клиники", rotate: "-rotate-2", translate: "translate-x-4" },
  { label: "Кабинет врача", rotate: "rotate-1", translate: "-translate-x-3" },
  { label: "Зона ресепшен", rotate: "-rotate-1", translate: "translate-x-2" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===== Asymmetric 2-column layout ===== */}
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">

          {/* ---- LEFT: Text ---- */}
          <div>
            {/* Section label */}
            <p
              className="font-[var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-blue-600"
            >
              О клинике
            </p>

            {/* Heading */}
            <h2
              className="mt-4 text-fluid-h1 font-[var(--font-heading)] font-bold leading-[1.1] tracking-tight text-gray-900"
            >
              Современная стоматология
              <br className="hidden sm:block" />
              {" "}в&nbsp;центре города
            </h2>

            {/* Description */}
            <div className="mt-8 space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              <p>
                Клиника{" "}
                <span className="font-semibold text-gray-900">IQ&nbsp;Dental</span>{" "}
                переехала по новому адресу —{" "}
                <span className="font-medium text-gray-900">просп.&nbsp;Мира,&nbsp;34</span>.
                Мы создали пространство, где передовые технологии сочетаются
                с&nbsp;комфортной атмосферой.
              </p>
              <p>
                Каждый кабинет оснащён новейшим оборудованием для точной
                диагностики и&nbsp;безболезненного лечения. Наша команда
                профессионалов заботится о&nbsp;здоровье вашей улыбки, используя
                только проверенные материалы и&nbsp;современные методики.
              </p>
            </div>
          </div>

          {/* ---- RIGHT: Photo gallery (vertical stack with offsets) ---- */}
          <div className="relative flex flex-col items-center gap-6 py-4 lg:pt-8">
            {photoCards.map((card, idx) => (
              <div
                key={idx}
                className={cn(
                  "w-full max-w-sm aspect-[4/3] rounded-2xl",
                  "bg-gray-100 border border-gray-200",
                  "flex items-center justify-center",
                  "text-sm font-medium text-gray-400 select-none",
                  "transition-transform duration-300 hover:scale-[1.02]",
                  card.rotate,
                  card.translate
                )}
              >
                {card.label}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

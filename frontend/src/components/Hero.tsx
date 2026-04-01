"use client";

import { motion } from "motion/react";
import { Calendar, Users, Award, HeartPulse } from "lucide-react";

const stats = [
  { icon: Award, label: "15+ лет опыта" },
  { icon: Users, label: "7 специалистов" },
  { icon: HeartPulse, label: "10 000+ пациентов" },
  { icon: Calendar, label: "Бесплатная консультация" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f0f7ff 40%, #dbeafe 70%, #eff6ff 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large soft circle top-right */}
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        {/* Small circle bottom-left */}
        <div className="absolute -bottom-24 -left-24 h-[350px] w-[350px] rounded-full bg-primary/10 blur-3xl" />
        {/* Subtle cross pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-5 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Стоматология нового поколения
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-heading mt-8 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            Ваша улыбка —{" "}
            <span className="text-primary">наша забота</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            Мы переехали! Встречаем вас по новому адресу на{" "}
            <span className="font-semibold text-foreground">
              проспекте Мира, 34
            </span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          >
            <a
              href="#booking"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
            >
              <Calendar className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Записаться на приём
            </a>
            <a
              href="#about"
              className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-white/70 px-8 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-md active:scale-[0.98]"
            >
              Узнать больше
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white/60 p-5 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + i * 0.1,
                  ease: "easeOut",
                }}
              >
                <stat.icon className="h-6 w-6 text-primary" />
                <span className="text-center text-sm font-medium text-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-10 flex flex-col items-center gap-2 text-xs text-muted-foreground sm:flex-row sm:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          >
            <span>Лицензия ЛО-77-01-020835</span>
            <span className="hidden sm:inline">|</span>
            <span>Работаем с 2019 года</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

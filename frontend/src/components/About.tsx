"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import {
  Shield,
  Clock,
  CreditCard,
  Award,
  Sparkles,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";

const photos = [
  "Фото клиники 1",
  "Фото клиники 2",
  "Фото клиники 3",
  "Фото клиники 4",
  "Фото клиники 5",
];

const advantages = [
  {
    icon: Shield,
    title: "Лицензированная клиника",
    description:
      "Все виды деятельности лицензированы. Мы работаем в полном соответствии с требованиями законодательства.",
  },
  {
    icon: Clock,
    title: "Работаем без выходных",
    description:
      "Удобный график работы без выходных, чтобы вы могли записаться в любое удобное время.",
  },
  {
    icon: CreditCard,
    title: "Удобная оплата",
    description:
      "Принимаем наличные, банковские карты и предлагаем возможность оплаты в рассрочку.",
  },
  {
    icon: Award,
    title: "Опытные специалисты",
    description:
      "Наши врачи регулярно повышают квалификацию и применяют передовые методики лечения.",
  },
  {
    icon: Sparkles,
    title: "Современное оборудование",
    description:
      "Клиника оснащена новейшим оборудованием для точной диагностики и комфортного лечения.",
  },
  {
    icon: Heart,
    title: "Индивидуальный подход",
    description:
      "Мы составляем персональный план лечения, учитывая особенности и пожелания каждого пациента.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function About() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            О клинике
          </h2>
          <p className="mt-3 text-lg text-blue-600">
            Современная стоматология в Набережных Челнах
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={1}
          className="mx-auto mt-10 max-w-3xl text-center text-gray-600 leading-relaxed"
        >
          <p>
            Клиника <span className="font-semibold text-gray-900">IQ Dental</span>{" "}
            — это современный стоматологический центр, расположенный по новому адресу:{" "}
            <span className="font-medium text-gray-900">просп. Мира, 34</span>.
            Мы создали пространство, в котором передовое оборудование сочетается
            с комфортной атмосферой, чтобы каждый визит к стоматологу был приятным
            и эффективным. Наша команда профессионалов заботится о здоровье вашей
            улыбки, используя только проверенные материалы и новейшие технологии.
          </p>
        </motion.div>

        {/* Photo gallery — horizontal scroll */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={2}
          className="mt-14"
        >
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-none"
          >
            {photos.map((label, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex-shrink-0 snap-center",
                  "h-56 w-72 sm:h-64 sm:w-80 md:h-72 md:w-96",
                  "flex items-center justify-center rounded-2xl",
                  "bg-gray-100 border border-gray-200",
                  "text-gray-400 text-sm font-medium select-none"
                )}
              >
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Advantages grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={idx}
                className={cn(
                  "flex items-start gap-4 rounded-2xl border border-gray-100",
                  "bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                )}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

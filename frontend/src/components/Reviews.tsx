"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Анна Соколова",
    date: "12 марта 2026",
    rating: 5,
    text: "Прекрасная клиника! Делала виниры в IQ Dental — результат превзошёл все ожидания. Врачи внимательные, всё объясняют на каждом этапе. Теперь улыбаюсь без стеснения!",
  },
  {
    id: 2,
    name: "Дмитрий Кузнецов",
    date: "28 февраля 2026",
    rating: 4,
    text: "Обратился с острой болью — приняли в тот же день. Лечение прошло быстро и безболезненно. Очень доволен сервисом и профессионализмом персонала IQ Dental.",
  },
  {
    id: 3,
    name: "Елена Васильева",
    date: "15 февраля 2026",
    rating: 5,
    text: "Проходила профессиональную чистку и отбеливание. Эффект потрясающий — зубы стали на несколько тонов светлее. Рекомендую IQ Dental всем знакомым!",
  },
  {
    id: 4,
    name: "Михаил Петров",
    date: "3 февраля 2026",
    rating: 4,
    text: "Ставил имплант в IQ Dental. Процедура прошла комфортно, хотя я очень боялся. Врач подробно рассказал план лечения и поддерживал на каждом этапе. Спасибо!",
  },
  {
    id: 5,
    name: "Ольга Новикова",
    date: "20 января 2026",
    rating: 5,
    text: "Лечим всей семьёй зубы только в IQ Dental. Детский стоматолог — просто волшебница, ребёнок идёт на приём с удовольствием. Современное оборудование и уютная атмосфера.",
  },
  {
    id: 6,
    name: "Артём Лебедев",
    date: "10 января 2026",
    rating: 4,
    text: "Исправлял прикус с помощью элайнеров. За полгода зубы встали ровно, как и обещали. Клиника IQ Dental оправдывает своё название — действительно умный подход к стоматологии.",
  },
];

function StarRating({
  rating,
  interactive = false,
  onRate,
}: {
  rating: number;
  interactive?: boolean;
  onRate?: (value: number) => void;
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "h-5 w-5 transition-colors",
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200",
            interactive && "cursor-pointer hover:text-yellow-400"
          )}
          onClick={() => interactive && onRate?.(star)}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [formName, setFormName] = useState("");
  const [formRating, setFormRating] = useState(0);
  const [formText, setFormText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 380;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formRating || !formText) return;
    setSubmitted(true);
    setFormName("");
    setFormRating(0);
    setFormText("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="reviews" className="bg-blue-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Отзывы наших пациентов
          </h2>
          <p className="mt-3 text-lg text-blue-600 font-medium">
            Рейтинг 4.0 на ПроДокторов
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-blue-100"
            aria-label="Прокрутить влево"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-blue-100"
            aria-label="Прокрутить вправо"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>

          {/* Cards Container */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="min-w-[350px] max-w-[350px] flex-shrink-0 snap-center rounded-2xl bg-white p-6 shadow"
              >
                <StarRating rating={review.rating} />
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {review.text}
                </p>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Review Submission Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 max-w-2xl rounded-2xl bg-white p-8 shadow"
        >
          <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
            Оставьте свой отзыв
          </h3>

          {submitted && (
            <div className="mb-6 rounded-lg bg-green-50 p-4 text-center text-green-700">
              Спасибо за ваш отзыв!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="review-name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Ваше имя
              </label>
              <input
                id="review-name"
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="Иван Иванов"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                required
              />
            </div>

            <div>
              <span className="mb-2 block text-sm font-medium text-gray-700">
                Ваша оценка
              </span>
              <StarRating
                rating={formRating}
                interactive
                onRate={setFormRating}
              />
            </div>

            <div>
              <label
                htmlFor="review-text"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Текст отзыва
              </label>
              <textarea
                id="review-text"
                value={formText}
                onChange={(e) => setFormText(e.target.value)}
                placeholder="Расскажите о вашем опыте..."
                rows={4}
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              Отправить отзыв
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

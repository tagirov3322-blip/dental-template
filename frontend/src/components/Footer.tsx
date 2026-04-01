"use client";

import Link from "next/link";
import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "О клинике", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Специалисты", href: "#specialists" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2C9.5 2 7 3 7 6c0 2-2 4-2 7 0 3.5 1.5 6 3 8 .5.7 1.2 1 2 1s1.3-.5 2-1.5c.7 1 1.2 1.5 2 1.5s1.5-.3 2-1c1.5-2 3-4.5 3-8 0-3-2-5-2-7 0-3-2.5-4-5-4z" />
    </svg>
  );
}

function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) {
  e.preventDefault();
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ---------- Contact info items ---------- */

const contactItems = [
  {
    icon: MapPin,
    title: "Адрес",
    content: (
      <p className="text-slate-600">
        просп. Мира, 34, Набережные Челны,
        <br />
        Республика Татарстан
      </p>
    ),
  },
  {
    icon: Phone,
    title: "Телефон",
    content: (
      <div className="flex flex-col gap-1">
        <a
          href="tel:+79061232727"
          className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
        >
          +7 (906) 123-27-27
        </a>
        <a
          href="tel:+79678722594"
          className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
        >
          +7 (967) 872-25-94
        </a>
      </div>
    ),
  },
  {
    icon: Clock,
    title: "Время работы",
    content: (
      <div className="text-slate-600 space-y-0.5">
        <p>Пн-Пт: 08:00-20:00</p>
        <p>Сб-Вс: 09:00-18:00</p>
        <p>Обед: 13:00-14:00</p>
      </div>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a
        href="mailto:info@iq-dental.ru"
        className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
      >
        info@iq-dental.ru
      </a>
    ),
  },
  {
    icon: Navigation,
    title: "Как добраться",
    content: (
      <p className="text-slate-600">
        Маршрутки №7, 13, 22, 26,
        <br />
        остановка &laquo;7-й комплекс&raquo;
      </p>
    ),
  },
];

/* ========== VK Icon ========== */
function VkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.596-.19 1.363 1.26 2.175 1.817.614.42 1.08.328 1.08.328l2.172-.03s1.136-.07.597-.964c-.044-.073-.314-.661-1.618-1.869-1.365-1.263-1.183-1.058.462-3.242.999-1.328 1.398-2.139 1.273-2.485-.12-.33-.856-.243-.856-.243l-2.445.015s-.182-.025-.316.056c-.131.079-.215.263-.215.263s-.387 1.028-.903 1.903c-1.089 1.85-1.524 1.948-1.702 1.834-.415-.267-.311-1.07-.311-1.641 0-1.784.271-2.528-.527-2.72-.265-.063-.46-.105-1.138-.112-.87-.009-1.606.003-2.023.207-.278.136-.492.438-.361.455.161.021.527.099.72.362.25.34.24 1.103.24 1.103s.144 2.098-.335 2.358c-.328.179-.779-.186-1.746-1.856-.495-.856-.869-1.804-.869-1.804s-.072-.176-.2-.271c-.155-.115-.372-.151-.372-.151l-2.322.015s-.349.01-.477.161c-.114.135-.009.413-.009.413s1.818 4.244 3.876 6.384c1.887 1.963 4.029 1.834 4.029 1.834h.971z" />
    </svg>
  );
}

/* ========== Instagram Icon ========== */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/* ========================================
   CONTACTS SECTION + FOOTER
   ======================================== */

export default function Footer() {
  return (
    <>
      {/* ---------- Contacts Section ---------- */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Контакты
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left column — contact cards */}
            <div className="space-y-5">
              {contactItems.map((item) => (
                <div
                  key={item.title}
                  className={cn(
                    "flex items-start gap-4 rounded-2xl bg-slate-50 p-5",
                    "border border-slate-100 shadow-sm"
                  )}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold text-slate-900">
                      {item.title}
                    </p>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Right column — Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm min-h-[400px] bg-slate-50 flex flex-col">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A&source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="flex-1 min-h-[400px]"
                title="IQ Dental на карте"
              />
              <div className="px-4 py-3 text-center text-sm text-slate-500">
                <a
                  href="https://2gis.ru/naberezhnye_chelny/search/%D0%BF%D1%80%D0%BE%D1%81%D0%BF.%20%D0%9C%D0%B8%D1%80%D0%B0%2C%2034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Открыть в 2ГИС
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 max-w-6xl py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1 — Logo + description */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <ToothIcon className="h-7 w-7 text-blue-400" />
                <span className="text-xl font-bold text-white">IQ Dental</span>
              </Link>
              <p className="text-sm leading-relaxed text-slate-400">
                Современная стоматология в Набережных Челнах. Качественное
                лечение, профессиональные специалисты и индивидуальный подход к
                каждому пациенту.
              </p>
            </div>

            {/* Col 2 — Navigation */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Навигация
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Socials */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Мы в соцсетях
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://vk.com/iq.dental"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg",
                    "bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
                  )}
                  aria-label="VK"
                >
                  <VkIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/iq.dental"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg",
                    "bg-slate-800 text-slate-400 hover:bg-pink-600 hover:text-white transition-colors"
                  )}
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>

              {/* Legal links */}
              <div className="mt-6 space-y-2">
                <Link
                  href="/privacy"
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Политика конфиденциальности
                </Link>
                <Link
                  href="/terms"
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Пользовательское соглашение
                </Link>
              </div>
            </div>

            {/* Col 4 — Contact shortcut */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Контакты
              </h3>
              <div className="space-y-2 text-sm text-slate-400">
                <a
                  href="tel:+79061232727"
                  className="block hover:text-white transition-colors"
                >
                  +7 (906) 123-27-27
                </a>
                <a
                  href="tel:+79678722594"
                  className="block hover:text-white transition-colors"
                >
                  +7 (967) 872-25-94
                </a>
                <a
                  href="mailto:info@iq-dental.ru"
                  className="block hover:text-white transition-colors"
                >
                  info@iq-dental.ru
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-slate-800 pt-8">
            <div className="flex flex-col items-center gap-4 text-center text-xs text-slate-500 md:flex-row md:justify-between md:text-left">
              <div className="space-y-1">
                <p>
                  ООО &laquo;Айкьюдентал&raquo;, Лицензия №
                  Л041-01181-16/00361643
                </p>
                <p>&copy; 2019-2026 IQ Dental. Все права защищены.</p>
              </div>
              <p className="text-slate-500">
                Сайт не является публичной офертой
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

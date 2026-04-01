import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IQ Dental — Стоматология в Набережных Челнах",
    template: "%s | IQ Dental",
  },
  description:
    "Современная стоматологическая клиника IQ Dental в Набережных Челнах. Имплантация, протезирование, лечение зубов, профессиональная чистка. Бесплатная консультация. Опыт врачей от 5 до 19 лет.",
  keywords: [
    "стоматология Набережные Челны",
    "IQ Dental",
    "имплантация зубов",
    "протезирование",
    "лечение кариеса",
    "стоматолог Набережные Челны",
    "виниры",
    "отбеливание зубов",
    "удаление зубов",
    "брекеты",
  ],
  authors: [{ name: "IQ Dental" }],
  openGraph: {
    title: "IQ Dental — Стоматология в Набережных Челнах",
    description:
      "Современная стоматология с опытными специалистами. Бесплатная консультация, рассрочка 0%. Просп. Мира, 34.",
    url: "https://iq-dental.ru",
    siteName: "IQ Dental",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google-site-verification": "",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "IQ Dental",
  alternateName: "Айкью Дентал",
  url: "https://iq-dental.ru",
  telephone: "+79061232727",
  email: "info@iq-dental.ru",
  address: {
    "@type": "PostalAddress",
    streetAddress: "просп. Мира, 34",
    addressLocality: "Набережные Челны",
    addressRegion: "Республика Татарстан",
    postalCode: "423812",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "55.725",
    longitude: "52.412",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "₽₽",
  medicalSpecialty: "Dentistry",
  availableService: [
    { "@type": "MedicalProcedure", name: "Имплантация зубов" },
    { "@type": "MedicalProcedure", name: "Протезирование" },
    { "@type": "MedicalProcedure", name: "Лечение кариеса" },
    { "@type": "MedicalProcedure", name: "Профессиональная чистка" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

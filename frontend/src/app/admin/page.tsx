"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

interface Stats {
  totalBookings: number;
  newBookings: number;
  confirmedBookings: number;
  completedBookings: number;
  cancelledBookings: number;
  todayBookings: number;
  totalDoctors: number;
  totalServices: number;
  totalReviews: number;
  pendingReviews: number;
  popularServices: { serviceName: string; count: number }[];
}

const CARDS = [
  { key: "todayBookings", label: "Сегодня", icon: "📅", color: "bg-blue-50 text-blue-700" },
  { key: "newBookings", label: "Новые", icon: "🆕", color: "bg-amber-50 text-amber-700" },
  { key: "confirmedBookings", label: "Подтверждённые", icon: "✅", color: "bg-green-50 text-green-700" },
  { key: "completedBookings", label: "Завершённые", icon: "🏁", color: "bg-gray-50 text-gray-700" },
  { key: "totalDoctors", label: "Врачей", icon: "👨‍⚕️", color: "bg-indigo-50 text-indigo-700" },
  { key: "totalServices", label: "Услуг", icon: "🦷", color: "bg-purple-50 text-purple-700" },
  { key: "totalReviews", label: "Отзывов", icon: "⭐", color: "bg-yellow-50 text-yellow-700" },
  { key: "pendingReviews", label: "На модерации", icon: "📝", color: "bg-red-50 text-red-700" },
] as const;

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    api.get<Stats>("/stats").then(setStats).catch(console.error);
  }, []);

  if (!stats) return <div className="text-gray-400">Загрузка...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#2a3250]">Дашборд</h1>
      <p className="mt-1 text-sm text-gray-500">Общая статистика клиники</p>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {CARDS.map((card) => (
          <div key={card.key} className="rounded-2xl bg-white p-5 shadow-sm">
            <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg ${card.color}`}>
              {card.icon}
            </div>
            <div className="text-2xl font-bold text-[#2a3250]">
              {stats[card.key as keyof Stats] as number}
            </div>
            <div className="mt-1 text-sm text-gray-500">{card.label}</div>
          </div>
        ))}
      </div>

      {stats.popularServices.length > 0 && (
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-[#2a3250]">Популярные услуги</h2>
          <div className="space-y-3">
            {stats.popularServices.map((s, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{s.serviceName}</span>
                <span className="rounded-full bg-[#2a3250]/10 px-3 py-1 text-xs font-semibold text-[#2a3250]">
                  {s.count} записей
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import { Users, Eye, MessageCircle, TrendingUp } from "lucide-react";
import StatCard from "@/components/admin/StatCard";

const stats = [
  {
    title: "Посетители",
    value: "1,248",
    change: "+12%",
    icon: Eye,
  },
  {
    title: "Заявки",
    value: "34",
    change: "+8%",
    icon: MessageCircle,
  },
  {
    title: "Атлеты в клубе",
    value: "86",
    change: "+4%",
    icon: Users,
  },
  {
    title: "Конверсия",
    value: "4.6%",
    change: "+1.2%",
    icon: TrendingUp,
  },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#633e05]">Аналитика</h2>
        <p className="text-sm text-[#6b4810] mt-1">
          Обзор показателей сайта за последние 7 дней.
        </p>
      </div>

      {/* Сетка статистики */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Заглушки графиков */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#e8d5b0] rounded-xl p-6 shadow-sm">
          <h3 className="text-sm font-bold text-[#633e05] mb-4">Посещаемость</h3>
          <div className="h-48 bg-[#f5eedb] rounded-lg flex items-center justify-center text-[#6b4810] text-xs">
            [График посещаемости]
          </div>
        </div>
        <div className="bg-white border border-[#e8d5b0] rounded-xl p-6 shadow-sm">
          <h3 className="text-sm font-bold text-[#633e05] mb-4">Заявки</h3>
          <div className="h-48 bg-[#f5eedb] rounded-lg flex items-center justify-center text-[#6b4810] text-xs">
            [График заявок]
          </div>
        </div>
      </div>
    </div>
  );
}
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export default function StatCard({ title, value, change, icon: Icon }: StatCardProps) {
  const isPositive = change.startsWith("+");

  return (
    <div className="bg-white border border-[#e8d5b0] rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-[#6b4810] font-medium uppercase tracking-wide">
          {title}
        </span>
        <div className="w-9 h-9 rounded-lg bg-[#f59f0d]/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-[#f59f0d]" />
        </div>
      </div>
      <p className="text-2xl font-extrabold text-[#633e05]">{value}</p>
      <span
        className={`text-xs font-medium mt-1 inline-block ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {change} за неделю
      </span>
    </div>
  );
}
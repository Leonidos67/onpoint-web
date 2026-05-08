"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, FileText, ChevronLeft, LogOut } from "lucide-react";

const menuItems = [
  {
    label: "Аналитика",
    href: "/admin",
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    label: "Контент страницы",
    href: "/admin/content",
    icon: <FileText className="w-5 h-5" />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-[#e8d5b0] flex flex-col z-50">

      {/* Навигация */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#f59f0d]/10 text-[#f59f0d]"
                  : "text-[#6b4810] hover:bg-[#f5eedb] hover:text-[#633e05]"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
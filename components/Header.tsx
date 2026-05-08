"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Мои старты", href: "#starts" },
    { label: "Обо мне", href: "#about" },
    { label: "Клуб", href: "#club" },
    { label: "Услуги", href: "#services" },
    { label: "Галерея", href: "#gallery" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Цены", href: "#prices" },
  ];

  return (
    <header className="font-pixel w-full border-b border-[#e8d5b0] bg-[#fdf6ea]/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Логотип */}
        <Link href="/" className="flex items-center text-xl font-extrabold text-[#633e05] tracking-tight">
          <p className="mr-1">Думай</p> <span className="text-[#f59f0d]">и Беги</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#6b4810] hover:text-[#633e05] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#cta"
            className="bg-[#f59f0d] text-white text-sm px-4 py-1.5 rounded-lg font-semibold hover:bg-[#e08c0a] transition-colors shadow-sm"
          >
            Начать
          </Link>
        </nav>

        {/* Бургер */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#633e05]" aria-label="Меню">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden border-t border-[#e8d5b0] bg-[#fdf6ea]">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#6b4810] hover:text-[#633e05]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#cta"
              className="bg-[#f59f0d] text-white text-sm px-5 py-2.5 rounded-lg font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Начать
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
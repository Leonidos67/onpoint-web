"use client";

import { useState } from "react";
import { MessageCircle, Send, Phone, CheckCircle } from "lucide-react";
import Link from "next/link";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  const limited = digits.slice(0, 11);
  
  if (limited.length === 0) return "+7";
  if (limited.length === 1) return `+7`;
  
  let formatted = "+7";
  const rest = limited.slice(1);
  
  if (rest.length > 0) {
    formatted += ` (${rest.slice(0, 3)}`;
  }
  if (rest.length >= 4) {
    formatted += `) ${rest.slice(3, 6)}`;
  }
  if (rest.length >= 7) {
    formatted += ` - ${rest.slice(6, 8)}`;
  }
  if (rest.length >= 9) {
    formatted += ` - ${rest.slice(8, 10)}`;
  }
  
  return formatted;
}

export default function CTA() {
  const [phone, setPhone] = useState("+7");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 11) return;
    
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
    setPhone("+7");
    
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="cta" className="px-6 py-16 md:py-24 bg-[#f9f0dd]">
      <div className="max-w-2xl mx-auto text-center bg-white border border-[#e8d5b0] rounded-2xl p-10 md:p-14 shadow-sm">
        <span className="text-[#f59f0d] font-pixel text-xs font-semibold tracking-wide uppercase">
          [ Начнём ]
        </span>
        <h2 className="text-3xl md:text-4xl font-pixel font-extrabold text-[#633e05] mt-3 mb-4">
          Готовы к своему старту?
        </h2>
        
        {sent ? (
          <div className="py-6">
            <CheckCircle className="w-12 h-12 text-[#f59f0d] mx-auto mb-3" />
            <p className="font-pixel text-[#633e05] font-semibold text-lg">
              Заявка отправлена!
            </p>
            <p className="text-[#6b4810] text-sm mt-1">
              Я свяжусь с вами в ближайшее время
            </p>
          </div>
        ) : (
          <>
            <p className="text-[#6b4810] text-base mb-6 max-w-md mx-auto leading-relaxed">
              Напишите мне или оставьте телефон. Обсудим цель, уровень и что нужно именно вам. Первый созвон бесплатный.
            </p>

            {/* Форма ввода телефона */}
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto mb-6">
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b4810]" />
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+7 (___) ___ - __ - __"
                  required
                  maxLength={22}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e8d5b0] bg-[#fdf6ea] text-[#633e05] text-base placeholder:text-[#6b4810]/50 focus:outline-none focus:ring-2 focus:ring-[#f59f0d]/30 focus:border-[#f59f0d]"
                />
              </div>
              <button
                type="submit"
                disabled={loading || phone.replace(/\D/g, "").length !== 11}
                className="w-full mt-3 bg-[#f59f0d] text-white py-3 rounded-lg font-pixel font-semibold text-base hover:bg-[#e08c0a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <span className="animate-pulse">Отправка...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Отправить заявку
                  </>
                )}
              </button>
            </form>

            {/* Разделитель */}
            <div className="flex items-center gap-4 max-w-sm mx-auto mb-6">
              <div className="flex-1 h-px bg-[#e8d5b0]"></div>
              <span className="text-xs text-[#6b4810]">или</span>
              <div className="flex-1 h-px bg-[#e8d5b0]"></div>
            </div>

            {/* Кнопка Telegram */}
            <Link
              href="https://t.me/твой_юзернейм"
              className="inline-flex items-center justify-center gap-2 bg-[#f59f0d] text-white px-8 py-3 rounded-lg font-pixel font-semibold text-base hover:bg-[#e08c0a] transition-colors shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Написать в Telegram
            </Link>
          </>
        )}
        
        <p className="text-xs text-[#6b4810] mt-5">
          Отвечаю лично. Обычно в течение пары часов.
        </p>
      </div>
    </section>
  );
}
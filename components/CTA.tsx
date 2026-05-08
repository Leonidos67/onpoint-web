import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="px-6 py-16 md:py-24 bg-[#f9f0dd]">
      <div className="max-w-2xl mx-auto text-center bg-white border border-[#e8d5b0] rounded-2xl p-10 md:p-14 shadow-sm">
        <span className="text-[#f59f0d] font-pixel text-xs font-semibold tracking-wide uppercase">
          [ Начнём ]
        </span>
        <h2 className="text-3xl md:text-4xl font-pixel font-extrabold text-[#633e05] mt-3 mb-4">
          Готовы к своему старту?
        </h2>
        <p className="text-[#6b4810] text-base mb-8 max-w-md mx-auto leading-relaxed">
          Напишите мне. Обсудим цель, уровень и что нужно именно вам. Первый созвон бесплатный.
        </p>
        <Link
          href="https://t.me/твой_юзернейм"
          className="inline-flex items-center gap-2 bg-[#f59f0d] text-white px-8 py-3.5 rounded-lg font-pixel font-semibold text-base hover:bg-[#e08c0a] transition-colors shadow-md"
        >
          <MessageCircle className="w-5 h-5" />
          Написать в Telegram
        </Link>
        <p className="text-xs text-[#6b4810] mt-5">
          Отвечаю лично. Обычно в течение пары часов.
        </p>
      </div>
    </section>
  );
}
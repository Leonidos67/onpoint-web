"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Анна К.",
    text: "Готовилась к первому марафону с нуля. Финишировала за 4:08. Без травм, с удовольствием. Спасибо за систему!",
    stars: 5,
  },
  {
    name: "Дмитрий С.",
    text: "Прошёл IRONMAN 70.3 с личным рекордом. Всё чётко: план, контроль, поддержка. Легенда.",
    stars: 5,
  },
  {
    name: "Максим Р.",
    text: "Сборы в горах — переломный момент. Объёмы, которые я боялся делать один. Здесь — семья.",
    stars: 5,
  },
  {
    name: "Ольга В.",
    text: "Бегала 5 км и думала, что марафон не для меня. Через 8 месяцев стояла на старте. Это меняет жизнь.",
    stars: 5,
  },
  {
    name: "Алексей Т.",
    text: "Триатлон — сложный спорт. Одному не разобраться. С тренером каждый шаг осмыслен. Результат заслуженный.",
    stars: 5,
  },
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollPos += speed;
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="reviews" className="px-6 py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-10">
        <span className="text-[#f59f0d] font-pixel text-xs font-semibold tracking-wide uppercase">
          [ Отзывы ]
        </span>
        <h2 className="text-3xl md:text-4xl font-pixel font-extrabold text-[#633e05] mt-2 mb-4">
          Что говорят атлеты
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden"
      >
        {[...reviews, ...reviews].map((r, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 bg-white border border-[#e8d5b0] rounded-xl p-5 shadow-sm"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: r.stars }).map((_, s) => (
                <Star key={s} className="w-4 h-4 text-[#f59f0d] fill-[#f59f0d]" />
              ))}
            </div>
            <p className="text-sm text-[#6b4810] leading-relaxed mb-3">
              «{r.text}»
            </p>
            <span className="text-xs font-bold text-[#633e05]">{r.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
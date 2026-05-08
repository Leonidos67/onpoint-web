// app/components/Hero.tsx
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      {/* Контент по центру */}
      <div className="max-w-3xl mx-auto text-center z-10">
        <span className="inline-block bg-[#f59f0d]/10 text-[#f59f0d] text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide uppercase">
          Тренер по бегу · Триатлон · IRONMAN
        </span>

        <h1 className="text-4xl font-pixel md:text-6xl font-extrabold text-[#633e05] mb-6 leading-tight mt-4">
          Бег. Велосипед.{" "}
          <span className="text-[#f59f0d] bg-[#fddcb1] px-2">Ты.</span>
        </h1>

        <p className="text-lg md:text-xl text-[#6b4810] max-w-xl mx-auto mb-10 leading-relaxed">
          Индивидуальные тренировки по бегу и триатлону. Готовлю к марафону,
          IRONMAN 70.3 и полной дистанции. Авторский Telegram-канал и сборы.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link
            href="#cta"
            className="bg-[#f59f0d] font-pixel text-white px-6 py-2.5 rounded-lg font-semibold text-base hover:bg-[#e08c0a] transition-colors inline-flex items-center gap-2 shadow-md"
          >
            Записаться на тренировку
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="https://t.me/канал_отца"
            className="text-[#6b4810] font-medium font-pixel hover:text-[#633e05] transition-colors underline underline-offset-4"
          >
            Telegram-канал
          </Link>
        </div>
      </div>

      {/* Изображение справа снизу */}
      <div className="absolute bottom-0 right-0 w-48 md:w-64 lg:w-80 z-0">
        <Image
          src="https://i.ibb.co/1fKCwLDP/image-Photoroom.png"
          alt="Тренер"
          width={320}
          height={320}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
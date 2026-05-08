"use client";

import { useState } from "react";
import { Users, MessageCircle, Calendar, ChevronDown, Send } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Users className="w-6 h-6 text-[#f59f0d]" />,
    title: "Атлеты клуба",
    desc: "Бегуны и триатлеты разного уровня — от новичков до IRONMAN. Живое общение, поддержка, совместные старты.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-[#f59f0d]" />,
    title: "Советы и разборы",
    desc: "Отвечаю на вопросы, разбираю техники, даю рекомендации. Общий чат — место, где рождаются инсайты.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-[#f59f0d]" />,
    title: "Сборы и выезды",
    desc: "Организую регулярные сборы. Горы, трейлы, велообъёмы. Только для участников клуба — спецусловия.",
  },
];

const steps = [
  {
    num: "01",
    title: "Напишите мне",
    desc: "Стучитесь в Telegram. Коротко расскажите о себе: опыт, цели, чего ждёте от клуба.",
  },
  {
    num: "02",
    title: "Созвон на 15 минут",
    desc: "Обсуждаем ваш уровень и формат участия. Я рассказываю про правила и атмосферу внутри.",
  },
  {
    num: "03",
    title: "Добавляю в чат",
    desc: "Вы получаете доступ в закрытый Telegram-чат клуба. Знакомитесь с атлетами, включаетесь в движ.",
  },
];

export default function Club() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="club" className="px-6 py-16 md:py-24 bg-[#fdf6ea]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-pixel text-[#f59f0d] text-xs font-semibold tracking-wide uppercase">
          [ Клуб ]
        </span>
        <div className="w-32 h-32 mx-auto my-4 rounded-full overflow-hidden border-4 border-[#f59f0d] shadow-md">
          <img
            src="https://i.ibb.co/NnTR26fy/image.png"
            alt="Клуб 80/20"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-pixel md:text-4xl font-extrabold text-[#633e05] mt-2 mb-4">
          Клуб 80/20
        </h2>
        <p className="text-[#6b4810] text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          Закрытое сообщество моих атлетов. Место, где мы общаемся без фильтров:
          разбираем тренировки, делимся лайфхаками, договариваемся о совместных
          стартах и сборах. 80% — общение и поддержка, 20% — жёсткая работа.
        </p>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-[#e8d5b0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3">{f.icon}</div>
              <h3 className="text-base font-bold text-[#633e05] mb-2">
                {f.title}
              </h3>
              <p className="text-xs text-[#6b4810] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Кнопка-аккордеон */}
        <div className="max-w-md mx-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex font-pixel cursor-pointer items-center gap-2 bg-[#f59f0d] text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-[#e08c0a] transition-colors shadow-md"
          >
            {/* <MessageCircle className="w-5 h-5" /> */}
            Как вступить в клуб
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Выпадающий блок */}
          <div
            className={`mt-4 bg-white border border-[#e8d5b0] rounded-xl shadow-sm overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 border-0"
            }`}
          >
            <div className="p-6 text-left">
              <h4 className="text-lg font-bold text-[#633e05]">
                Как попасть в клуб
              </h4>
              <p className="text-xs text-[#6b4810] mb-6">
                Три простых шага — и вы в команде
              </p>

              {/* Шаги */}
              <div className="space-y-4 mb-6">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f59f0d] text-white text-xs font-bold flex items-center justify-center">
                      {step.num}
                    </span>
                    <div>
                      <h5 className="text-sm font-bold text-[#633e05]">
                        {step.title}
                      </h5>
                      <p className="text-xs text-[#6b4810] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Кнопка заявки */}
              <Link
                href="https://t.me/твой_юзернейм"
                className="flex items-center justify-center gap-2 w-full bg-[#f59f0d] text-white py-3 rounded-lg font-pixel font-semibold text-sm hover:bg-[#e08c0a] transition-colors"
              >
                <Send className="w-4 h-4" />
                Подать заявку
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
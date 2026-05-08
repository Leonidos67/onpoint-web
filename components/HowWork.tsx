import { MessageCircle, ClipboardCheck, BarChart3, Flag } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <MessageCircle className="w-6 h-6 text-[#f59f0d]" />,
    title: "Созвон",
    desc: "Обсуждаем цель, текущую форму, ограничения. Бесплатно, без обязательств.",
  },
  {
    num: "02",
    icon: <ClipboardCheck className="w-6 h-6 text-[#f59f0d]" />,
    title: "План",
    desc: "Я пишу программу под вас. Учитываю график, слабые места, прошлые травмы.",
  },
  {
    num: "03",
    icon: <BarChart3 className="w-6 h-6 text-[#f59f0d]" />,
    title: "Работа",
    desc: "Тренировки, аналитика, корректировки. Я на связи каждый день.",
  },
  {
    num: "04",
    icon: <Flag className="w-6 h-6 text-[#f59f0d]" />,
    title: "Финиш",
    desc: "Старт. Ваш результат. Дальше — новая цель. Я рядом.",
  },
];

export default function HowWork() {
  return (
    <section id="how" className="px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <span className="text-[#f59f0d] font-pixel text-xs font-semibold tracking-wide uppercase">
          [ Процесс ]
        </span>
        <h2 className="text-3xl md:text-4xl font-pixel font-extrabold text-[#633e05] mt-2 mb-4">
          Как мы начнём
        </h2>
        <p className="text-[#6b4810] text-base mb-12 max-w-xl leading-relaxed">
          Никакой бюрократии. Просто шаги, которые приведут вас к финишу.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white border border-[#e8d5b0] rounded-xl p-6 shadow-sm"
            >
              <span className="text-5xl font-extrabold text-[#f5eedb] block mb-3">
                {step.num}
              </span>
              <div className="mb-3">{step.icon}</div>
              <h3 className="text-base font-pixel font-bold text-[#633e05] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#6b4810] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
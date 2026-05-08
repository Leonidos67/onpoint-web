import { Footprints, Bike, Timer, Users } from "lucide-react";

const services = [
  {
    icon: <Footprints className="w-7 h-7 text-[#f59f0d]" />,
    title: "Индивидуальный план",
    desc: "Персональная программа под ваш уровень. Бег, вело, плавание. Адаптация каждые 2 недели.",
  },
  {
    icon: <Timer className="w-7 h-7 text-[#f59f0d]" />,
    title: "Подготовка к старту",
    desc: "Марафон, Half Ironman, Ironman. Полное ведение: от подводки до финиша.",
  },
  {
    icon: <Bike className="w-7 h-7 text-[#f59f0d]" />,
    title: "Сборы",
    desc: "Регулярные выезды. Горы, трейлы, велообъёмы. Атмосфера, дисциплина, прогресс.",
  },
  {
    icon: <Users className="w-7 h-7 text-[#f59f0d]" />,
    title: "Telegram-канал",
    desc: "Авторский блог о триатлоне: методика, опыт, ошибки, мотивация. Бесплатно и честно.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <span className="text-[#f59f0d] font-pixel text-xs font-semibold tracking-wide uppercase">
          [ Что я делаю ]
        </span>
        <h2 className="text-3xl md:text-4xl font-pixel font-extrabold text-[#633e05] mt-2 mb-4">
          Тренировки и не только
        </h2>
        <p className="text-[#6b4810] text-base mb-12 max-w-xl leading-relaxed">
          Работаю с теми, кто хочет результат. Неважно — первый старт или Kona.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-[#e8d5b0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3">{s.icon}</div>
              <h3 className="text-base font-pixel font-bold text-[#633e05] mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-[#6b4810] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
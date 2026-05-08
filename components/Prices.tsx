import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Бег",
    price: "5 000 ₽",
    period: "/ месяц",
    features: [
      "Индивидуальный план",
      "Адаптация раз в 2 недели",
      "Обратная связь в Telegram",
      "Анализ техники по видео",
    ],
    popular: false,
  },
  {
    name: "Триатлон",
    price: "8 000 ₽",
    period: "/ месяц",
    features: [
      "План: бег + вело + плавание",
      "Подготовка к старту",
      "Питание и гидратация",
      "Priority-связь 24/7",
    ],
    popular: true,
  },
  {
    name: "Сборы",
    price: "от 15 000 ₽",
    period: "",
    features: [
      "5–7 дней в горах",
      "Групповые и инди-тренировки",
      "Жильё и трансфер (обсуждается)",
      "Место в Telegram-чате сборов",
    ],
    popular: false,
  },
];

export default function Prices() {
  return (
    <section id="prices" className="px-6 py-16 md:py-24 bg-[#f9f0dd]">
      <div className="max-w-6xl mx-auto">
        <span className="text-[#f59f0d] font-pixel text-xs font-semibold tracking-wide uppercase">
          [ Тарифы ]
        </span>
        <h2 className="text-3xl md:text-4xl font-pixel font-extrabold text-[#633e05] mt-2 mb-4">
          Выберите свой путь
        </h2>
        <p className="text-[#6b4810] text-base mb-12 max-w-xl leading-relaxed">
          Предоплата за первый месяц. Если не ваш формат — верну деньги.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white border rounded-xl p-6 shadow-sm ${
                plan.popular
                  ? "border-[#f59f0d] ring-2 ring-[#f59f0d]/20"
                  : "border-[#e8d5b0]"
              }`}
            >
              {plan.popular && (
                <span className="font-pixel absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f59f0d] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Популярный
                </span>
              )}
              <div className="mt-2">
                <h3 className="font-pixel text-lg font-bold text-[#633e05]">
                  {plan.name}
                </h3>
                <p className="text-3xl font-extrabold text-[#633e05] mt-3">
                  {plan.price}
                </p>
                {plan.period && (
                  <p className="text-sm text-[#6b4810] mt-1">{plan.period}</p>
                )}
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-[#6b4810]"
                  >
                    <Check className="w-4 h-4 text-[#f59f0d] mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="#cta"
                className={`mt-6 block text-center py-2.5 rounded-lg font-pixel font-semibold text-sm transition-colors ${
                  plan.popular
                    ? "bg-[#f59f0d] text-white hover:bg-[#e08c0a]"
                    : "bg-[#f5eedb] text-[#633e05] hover:bg-[#e8d5b0]"
                }`}
              >
                Выбрать
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
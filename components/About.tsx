export default function About() {
  return (
    <section id="about" className="px-6 py-16 md:py-24 bg-[#fdf6ea]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Фото */}
        <div className="bg-[#f5eedb] border border-[#e8d5b0] rounded-xl h-80 md:h-96 overflow-hidden shadow-sm">
            <img
                src="https://i.ibb.co/PZj79ZMW/image.png"
                className="w-full h-full object-cover"
            />
        </div>

        {/* Текст */}
        <div>
          <span className="text-[#f59f0d] font-pixel text-xs font-semibold tracking-wide uppercase">
            [ Обо мне ]
          </span>
          <h2 className="text-3xl md:text-4xl font-pixel font-extrabold text-[#633e05] mt-2 mb-4">
            {/* Вставь имя */}
            Я - Александр Харченков
          </h2>
          <div className="space-y-3 text-[#6b4810] text-base max-w-2xl mx-auto leading-relaxed">
            <p>
              Бегаю с 2012 года. За спиной 8 марафонов, 3 полных IRONMAN,
              десятки полудистанций.
            </p>
            <p>
              Тренирую с 2018. Мои атлеты финишируют в Kona, бегают из
              «never run» в марафон за 6 месяцев.
            </p>
            <p>
              Не обещаю волшебства. Обещаю систему, честность и результат.
              Каждая тренировка — шаг к цели.
            </p>
          </div>

          {/* Достижения в цифрах */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { value: "4+", label: "лет в спорте" },
              { value: "20+", label: "атлетов" },
              { value: "n", label: "стратов" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-white border border-[#e8d5b0] rounded-lg py-3 px-2">
                <span className="block text-xl font-extrabold text-[#f59f0d]">{stat.value}</span>
                <span className="text-[12px] text-[#6b4810]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
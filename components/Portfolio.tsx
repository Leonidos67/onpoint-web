const projects = [
  { title: "Smoke Lounge", type: "Кальянная", image: "/port1.jpg" },
  { title: "Sushi Fast", type: "Доставка еды", image: "/port2.jpg" },
  { title: "Barber House", type: "Барбершоп", image: "/port3.jpg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="font-pixel px-6 py-16 md:py-24 bg-[#f9f0dd]">
      <div className="max-w-6xl mx-auto">
        <span className="text-[#f59f0d] text-xs font-semibold tracking-wide uppercase">
          [ Портфолио ]
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#633e05] mt-2 mb-4">
          Готовые проекты
        </h2>
        <p className="text-[#6b4810] text-base mb-12 max-w-xl">
          От идеи до публикации. Вот что я сдаю клиенту.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-[#e8d5b0] rounded-xl overflow-hidden shadow-sm"
            >
              <div className="bg-[#f5eedb] h-56 flex items-center justify-center text-[#6b4810] text-xs font-medium">
                [Скриншот]
              </div>
              <div className="p-5">
                <span className="text-xs text-[#f59f0d] font-semibold uppercase tracking-wide">
                  {p.type}
                </span>
                <h3 className="text-lg font-bold text-[#633e05] mt-1">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
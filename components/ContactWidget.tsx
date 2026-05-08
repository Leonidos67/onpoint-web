"use client";

import { useState } from "react";
import { MessageCircle, X, Send, CheckCircle, Phone } from "lucide-react";

function formatPhone(value: string): string {
  // Оставляем только цифры
  const digits = value.replace(/\D/g, "");

  // Ограничиваем 11 цифрами (+7 + 10 цифр)
  const limited = digits.slice(0, 11);

  // Если нет цифр — просто +7
  if (limited.length === 0) return "+7";
  if (limited.length === 1) return `+7`;

  // Форматируем
  let formatted = "+7";
  const rest = limited.slice(1); // цифры после +7

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

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [phone, setPhone] = useState("+7");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Проверяем что номер полный (11 цифр = +7 + 10 цифр)
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 11) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
    setPhone("+7");
  };

  return (
    <section>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`font-pixel cursor-pointer fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-white border border-[#e8d5b0] rotate-90"
            : "bg-[#f59f0d] hover:bg-[#e08c0a]"
        }`}
        aria-label="Написать"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#633e05]" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      <div
        className={`fixed bottom-24 right-6 z-50 w-80 bg-white border border-[#e8d5b0] rounded-2xl shadow-xl transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-5">
          {sent ? (
            <div className="text-center py-6">
              <CheckCircle className="w-10 h-10 text-[#f59f0d] mx-auto mb-3" />
              <p className="font-pixel text-[#633e05] font-semibold text-sm">
                Заявка отправлена!
              </p>
              <p className="text-xs text-[#6b4810] mt-1">
                Я позвоню в ближайшее время
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setIsOpen(false);
                }}
                className="font-pixel cursor-pointer mt-4 text-xs text-[#f59f0d] hover:underline"
              >
                Закрыть
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-pixel text-sm font-bold text-[#633e05]">
                  Записаться
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#6b4810] font-pixel cursor-pointer hover:text-[#633e05]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-[#6b4810] mb-4">
                Оставьте телефон — я перезвоню и обсудим тренировки.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b4810]" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="+7 (___) ___ - __ - __"
                    required
                    maxLength={22}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e8d5b0] bg-[#fdf6ea] text-[#633e05] text-sm placeholder:text-[#6b4810]/50 focus:outline-none focus:ring-2 focus:ring-[#f59f0d]/30 focus:border-[#f59f0d]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || phone.replace(/\D/g, "").length !== 11}
                  className="w-full bg-[#f59f0d] cursor-pointer text-white py-2.5 rounded-lg font-pixel font-semibold text-sm hover:bg-[#e08c0a] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="animate-pulse">Отправка...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Отправить
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
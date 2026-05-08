import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e8d5b0] bg-[#fdf6ea]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-lg font-extrabold text-[#633e05]">
          Александр<span className="text-[#f59f0d]">Харченков</span>
        </Link>

        <div className="flex items-center gap-6 text-sm text-[#6b4810]">
          <Link
            href="https://t.me/канал_отца"
            className="hover:text-[#633e05] transition-colors font-medium"
          >
            Telegram-канал
          </Link>
        </div>

        <p className="text-xs text-[#6b4810]">
          © {new Date().getFullYear()}. Тренер по бегу и триатлону.
        </p>
      </div>
    </footer>
  );
}
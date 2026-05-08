import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e8d5b0] bg-[#fdf6ea]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center text-lg font-extrabold text-[#633e05]">
          <p className="mr-1">Думай</p> <span className="text-[#f59f0d]">и Беги</span>
        </Link>

        <div className="flex items-center gap-6 text-sm text-[#6b4810]">
          <Link
            href="https://t.me/begsmozgami"
            className="hover:text-[#633e05] transition-colors font-medium"
          >
            Telegram-канал
          </Link>
        </div>
      </div>
    </footer>
  );
}
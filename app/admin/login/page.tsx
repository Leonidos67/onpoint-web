"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn, User, Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Тестовая авторизация
    await new Promise((r) => setTimeout(r, 1000));

    if (login === "admin" && password === "admin") {
      router.push("/admin");
    } else {
      setError("Неверный логин или пароль");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#fdf6ea] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Лого */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-[#633e05]">
            Site<span className="text-[#f59f0d]">fast</span>
          </h1>
          <p className="text-xs text-[#6b4810] mt-1">Админ-панель</p>
        </div>

        {/* Форма */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#e8d5b0] rounded-2xl p-6 shadow-sm space-y-5"
        >
          <h2 className="text-lg font-extrabold text-[#633e05] text-center">
            Вход
          </h2>

          {/* Логин */}
          <div>
            <label
              htmlFor="login"
              className="block text-xs font-semibold text-[#6b4810] mb-2 uppercase tracking-wide"
            >
              Логин
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b4810]" />
              <input
                id="login"
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="admin"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e8d5b0] bg-[#fdf6ea] text-[#633e05] text-sm focus:outline-none focus:ring-2 focus:ring-[#f59f0d]/30 focus:border-[#f59f0d]"
              />
            </div>
          </div>

          {/* Пароль */}
          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold text-[#6b4810] mb-2 uppercase tracking-wide"
            >
              Пароль
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b4810]" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e8d5b0] bg-[#fdf6ea] text-[#633e05] text-sm focus:outline-none focus:ring-2 focus:ring-[#f59f0d]/30 focus:border-[#f59f0d]"
              />
            </div>
          </div>

          {/* Ошибка */}
          {error && (
            <p className="text-xs text-red-600 bg-red-50 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}

          {/* Кнопка */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#f59f0d] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-[#e08c0a] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="animate-pulse">Вход...</span>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                Войти
              </>
            )}
          </button>

          <p className="text-[10px] text-[#6b4810] text-center">
            Тестовый доступ: admin / admin
          </p>
        </form>

        {/* Ссылка на сайт */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-xs text-[#6b4810] hover:text-[#633e05] transition-colors underline underline-offset-4"
          >
            ← Вернуться на сайт
          </a>
        </div>
      </div>
    </div>
  );
}
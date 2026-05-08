import type { Metadata } from "next";
import Sidebar from "@/components/admin/Sidebar";

export const metadata: Metadata = {
  title: "Админ-панель | Sitefast",
  description: "Управление контентом сайта",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Сайдбар */}
      <Sidebar />

      {/* Основная область */}
      <div className="flex-1 flex flex-col ml-64">
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
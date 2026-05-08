"use client";

import { useState } from "react";
import { Save, RotateCcw } from "lucide-react";

interface EditableField {
  id: string;
  section: string;
  label: string;
  value: string;
  type: "input" | "textarea";
}

const defaultFields: EditableField[] = [
  {
    id: "hero-title",
    section: "Hero",
    label: "Заголовок",
    value: "Бег. Велосипед. Ты.",
    type: "input",
  },
  {
    id: "hero-subtitle",
    section: "Hero",
    label: "Подзаголовок",
    value:
      "Индивидуальные тренировки по бегу и триатлону. Готовлю к марафону, IRONMAN 70.3 и полной дистанции.",
    type: "textarea",
  },
  {
    id: "about-text",
    section: "Обо мне",
    label: "Основной текст",
    value:
      "Бегаю с 2012 года. За спиной 8 марафонов, 3 полных IRONMAN, десятки полудистанций.",
    type: "textarea",
  },
  {
    id: "club-title",
    section: "Клуб",
    label: "Название клуба",
    value: "Клуб 80/20",
    type: "input",
  },
  {
    id: "club-description",
    section: "Клуб",
    label: "Описание клуба",
    value:
      "Закрытое сообщество моих атлетов. Место, где мы общаемся без фильтров.",
    type: "textarea",
  },
  {
    id: "cta-text",
    section: "CTA",
    label: "Текст призыва",
    value: "Готовы к своему старту?",
    type: "input",
  },
];

export default function ContentEditor() {
  const [fields, setFields] = useState<EditableField[]>(defaultFields);
  const [saved, setSaved] = useState(false);

  const handleChange = (id: string, value: string) => {
    setFields((prev) =>
      prev.map((f) => (f.id === id ? { ...f, value } : f))
    );
    setSaved(false);
  };

  const handleSave = () => {
    // Здесь будет API-запрос
    console.log("Saving:", fields);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    setFields(defaultFields);
    setSaved(false);
  };

  const sections = [...new Set(fields.map((f) => f.section))];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-[#633e05]">
            Контент страницы
          </h2>
          <p className="text-sm text-[#6b4810] mt-1">
            Редактируйте текст на сайте. Изменения применяются сразу после
            сохранения.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#e8d5b0] text-sm font-medium text-[#6b4810] hover:bg-[#f5eedb] transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Сбросить
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f59f0d] text-white text-sm font-semibold hover:bg-[#e08c0a] transition-colors"
          >
            <Save className="w-4 h-4" />
            {saved ? "Сохранено!" : "Сохранить"}
          </button>
        </div>
      </div>

      {/* Секции */}
      <div className="space-y-6">
        {sections.map((section) => (
          <div
            key={section}
            className="bg-white border border-[#e8d5b0] rounded-xl shadow-sm overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-[#e8d5b0] bg-[#f9f0dd]">
              <h3 className="text-sm font-extrabold text-[#633e05]">
                {section}
              </h3>
            </div>
            <div className="p-6 space-y-5">
              {fields
                .filter((f) => f.section === section)
                .map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-xs font-semibold text-[#6b4810] mb-2 uppercase tracking-wide"
                    >
                      {field.label}
                    </label>
                    {field.type === "input" ? (
                      <input
                        id={field.id}
                        type="text"
                        value={field.value}
                        onChange={(e) =>
                          handleChange(field.id, e.target.value)
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-[#e8d5b0] bg-[#fdf6ea] text-[#633e05] text-sm focus:outline-none focus:ring-2 focus:ring-[#f59f0d]/30 focus:border-[#f59f0d]"
                      />
                    ) : (
                      <textarea
                        id={field.id}
                        rows={3}
                        value={field.value}
                        onChange={(e) =>
                          handleChange(field.id, e.target.value)
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-[#e8d5b0] bg-[#fdf6ea] text-[#633e05] text-sm focus:outline-none focus:ring-2 focus:ring-[#f59f0d]/30 focus:border-[#f59f0d] resize-y"
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";

import * as React from "react";
import type { TCountryCode } from "countries-list";
import { DottedMap } from "@/components/ui/dotted-map";
import type { Marker } from "@/components/ui/dotted-map";

type CountryCode = Lowercase<TCountryCode>;

type MyMarker = Marker & {
  overlay: {
    countryCode: CountryCode;
    label: string;
    year: number;
    distance: string;
  };
};

// Добавляем погрешность к координатам, чтобы точки не накладывались
const addNoise = (lat: number, lng: number, index: number) => {
  const noise = 0.8;
  const latNoise = (index * 0.3) % noise - noise / 2;
  const lngNoise = (index * 0.5) % noise - noise / 2;
  return {
    lat: lat + latNoise,
    lng: lng + lngNoise,
  };
};

const markersData = [
  {
    baseLat: 55.7558,
    baseLng: 37.6176,
    label: "Москва",
    year: 2024,
    distance: "Марафон",
    countryCode: "ru" as CountryCode,
  },
  {
    baseLat: 43.5855,
    baseLng: 39.7231,
    label: "Сочи",
    year: 2024,
    distance: "Триатлон",
    countryCode: "ru" as CountryCode,
  },
  {
    baseLat: 63.8625,
    baseLng: 34.1798,
    label: "Карелия",
    year: 2023,
    distance: "Трейл",
    countryCode: "ru" as CountryCode,
  },
  {
    baseLat: 38.9637,
    baseLng: 35.2433,
    label: "Турция",
    year: 2023,
    distance: "IRONMAN 70.3",
    countryCode: "tr" as CountryCode,
  },
  {
    baseLat: 42.9833,
    baseLng: 47.5,
    label: "Дагестан",
    year: 2023,
    distance: "Горный трейл",
    countryCode: "ru" as CountryCode,
  },
  {
    baseLat: 44.9484,
    baseLng: 34.1003,
    label: "Крым",
    year: 2023,
    distance: "Полумарафон",
    countryCode: "ua" as CountryCode,
  },
  {
    baseLat: 59.9311,
    baseLng: 30.3609,
    label: "Санкт-Петербург",
    year: 2024,
    distance: "Марафон",
    countryCode: "ru" as CountryCode,
  },
  {
    baseLat: 54.7828,
    baseLng: 32.0459,
    label: "Смоленск",
    year: 2023,
    distance: "Полумарафон",
    countryCode: "ru" as CountryCode,
  },
];

const markers: MyMarker[] = markersData.map((data, index) => {
  const { lat, lng } = addNoise(data.baseLat, data.baseLng, index);
  return {
    lat,
    lng,
    size: 1.2,
    pulse: true,
    overlay: {
      countryCode: data.countryCode,
      label: data.label,
      year: data.year,
      distance: data.distance,
    },
  };
});

export default function StartsMap() {
  const id = React.useId();

  return (
    <section id="starts" className="px-6 py-16 md:py-24 bg-[#f9f0dd]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[#f59f0d] font-pixel text-xs font-semibold tracking-wide uppercase">
            [ Мои старты ]
          </span>
          <h2 className="text-3xl md:text-4xl font-pixel font-extrabold text-[#633e05] mt-2 mb-4">
            География достижений
          </h2>
        </div>

        <div className="relative w-full overflow-hidden rounded-xl border border-[#e8d5b0] shadow-lg bg-white">
          <DottedMap<MyMarker>
            markers={markers}
            dotRadius={0.1}
            markerColor="#f59f0d"
            pulse={false}
            renderMarkerOverlay={({ marker, x, y, r, index }) => {
              const { label, year, distance } = marker.overlay;
              const fontSize = r * 1;
              const pillH = r * 1.2;
              const pillW = label.length * (fontSize * 0.6) + r * 1.2;
              const pillX = x + r + r * 0.3;
              const pillY = y - pillH / 2;

              return (
                <g style={{ pointerEvents: "none" }}>
                  {/* Точка маркера сплошным цветом */}
                  <circle
                    cx={x}
                    cy={y}
                    r={r}
                    fill="#f59f0d"
                    stroke="white"
                    strokeWidth={0.5}
                  />
                  
                  {/* Очень маленькая пульсация */}
                  <circle
                    cx={x}
                    cy={y}
                    r={r}
                    fill="none"
                    stroke="#f59f0d"
                    strokeOpacity={0.3}
                    strokeWidth={0.2}
                  >
                    <animate
                      attributeName="r"
                      values={`${r};${r * 1.15}`}
                      dur="5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.3;0"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Плашка с названием города */}
                  <rect
                    x={pillX}
                    y={pillY}
                    width={pillW}
                    height={pillH}
                    rx={pillH / 2}
                    fill="rgba(0,0,0,0.7)"
                  />
                  <text
                    x={pillX + r * 0.5}
                    y={y + fontSize * 0.3}
                    fontSize={fontSize}
                    fill="white"
                    fontWeight="bold"
                    className="font-pixel"
                  >
                    {label}
                  </text>
                </g>
              );
            }}
          />
        </div>
      </div>
    </section>
  );
}
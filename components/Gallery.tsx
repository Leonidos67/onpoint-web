"use client";

import { useState } from "react";
import { HeroVideoDialog } from "./ui/hero-video-dialog";
import { ChevronDown } from "lucide-react";

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(3);

  const videos = [
    {
      id: 1,
      title: "Финиш Крым",
      videoSrc: "/assets/video/VIDEO_ID_1.mp4",
    },
    {
      id: 2,
      title: "Wild Siberia вел",
      videoSrc: "/assets/video/VIDEO_ID_2.mp4",
    },
    {
      id: 3,
      title: "Wild Siberia плавание",
      videoSrc: "/assets/video/VIDEO_ID_3.mp4",
    },
    {
      id: 4,
      title: "Crazy Owl 50k",
      videoSrc: "/assets/video/VIDEO_ID_4.mp4",
    },
    {
      id: 5,
      title: "Crazy Owl 50k",
      videoSrc: "/assets/video/VIDEO_ID_5.mp4",
    },
    {
      id: 6,
      title: "Старт в Зарайске",
      videoSrc: "/assets/video/VIDEO_ID_6.mp4",
    },
    // {
    //   id: 7,
    //   title: "Плавательные сборы",
    //   videoSrc: "/assets/video/VIDEO_ID_7.mp4",
    // },
    // {
    //   id: 8,
    //   title: "Марафон Москва",
    //   videoSrc: "/assets/video/VIDEO_ID_8.mp4",
    // },
    // {
    //   id: 9,
    //   title: "Трейл Алтай",
    //   videoSrc: "/assets/video/VIDEO_ID_9.mp4",
    // },
  ];

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const visibleVideos = videos.slice(0, visibleCount);
  const hasMore = visibleCount < videos.length;

  return (
    <section id="gallery" className="px-6 py-16 md:py-24 bg-[#f9f0dd]">
      <div className="max-w-6xl mx-auto">
        <span className="text-[#f59f0d] font-pixel text-xs font-semibold tracking-wide uppercase">
          [ Галерея ]
        </span>
        <h2 className="text-3xl md:text-4xl font-pixel font-extrabold text-[#633e05] mt-2 mb-4">
          Моменты, которые говорят сами
        </h2>
        <p className="text-[#6b4810] text-base mb-10 max-w-xl leading-relaxed">
          Это не постановка. Это реальные старты, сборы и дороги.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleVideos.map((video) => (
            <div
              key={video.id}
              className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <HeroVideoDialog
                animationStyle="from-center"
                videoSrc={video.videoSrc}
                thumbnailAlt={video.title}
                className="w-full"
              />
              
              <div className="absolute bottom-4 left-2 right-2 bg-white rounded-lg px-4 py-2 shadow-md z-10">
                <h3 className="text-base font-pixel font-bold text-[#633e05]">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка "Показать еще" */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleShowMore}
              className="inline-flex font-pixel cursor-pointer items-center gap-2 text-[#633e05] rounded-lg font-semibold text-base"
          >
              Показать еще
              <ChevronDown className="w-4 h-4 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
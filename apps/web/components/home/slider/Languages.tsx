"use client";

import { useRef, useState } from "react";
import { useAnimationFrame } from "framer-motion";
import MainWrapper from "@/components/shared/MainWrapper";
import { languageList } from "./language-list.data";

function Languages() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const speed = 0.5;
  const [paused, setPaused] = useState(false);

  // Animación cuadro a cuadro
  useAnimationFrame(() => {
    if (paused || !sliderRef.current) return;

    x.current -= speed;
    const totalWidth = sliderRef.current.scrollWidth / 2;

    if (Math.abs(x.current) >= totalWidth) {
      x.current = 0;
    }

    sliderRef.current.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <section className=" text-index">
      <MainWrapper className="relative overflow-hidden w-[80%] max-w-[1000px]">
        {/* Gradientes laterales */}
        <div className="absolute inset-y-0 left-0 z-20 w-1/4 bg-gradient-to-r from-[#1F1F1F] to-transparent" />
        <div className="absolute inset-y-0 right-0 z-20 w-1/4 bg-gradient-to-l from-[#1F1F1F] to-transparent" />

        {/* Slider dinámico con handlers */}
        <div
          className="border-b-2 shadow-2xs py-6 lg:py-10 relative flex w-max will-change-transform cursor-pointer"
          ref={sliderRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {[...languageList, ...languageList].map((item, index) => (
            <div
              key={`${item.language}-${index}`}
              className="text-sm lg:text-lg font-semibold px-8"
            >
              {item.language}
            </div>
          ))}
        </div>
      </MainWrapper>
    </section>
  );
}

export default Languages;

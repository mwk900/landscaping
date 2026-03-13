"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

type BeforeAfterSliderProps = {
  beforeImage: StaticImageData;
  afterImage: StaticImageData;
  beforeLabel: string;
  afterLabel: string;
  alt: string;
  defaultPosition?: number;
  priority?: boolean;
  aspectRatio?: string;
  sizes: string;
};

function clampPosition(value: number) {
  return Math.min(92, Math.max(8, value));
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  alt,
  defaultPosition = 52,
  priority = false,
  aspectRatio = "aspect-[5/4]",
  sizes,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(clampPosition(defaultPosition));
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <div
        className={`editorial-frame relative overflow-hidden ${aspectRatio} ${
          focused ? "ring-2 ring-[#8aa286] ring-offset-2 ring-offset-[#f4f1e8]" : ""
        }`}
      >
        <Image
          src={beforeImage}
          alt={alt}
          fill
          className="object-cover"
          placeholder="blur"
          priority={priority}
          sizes={sizes}
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={afterImage}
            alt=""
            aria-hidden="true"
            fill
            className="object-cover"
            placeholder="blur"
            priority={priority}
            sizes={sizes}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#142118]/18 via-transparent to-transparent" />
        <span className="badge-soft left-4 top-4">{beforeLabel}</span>
        <span className="badge-soft left-auto right-4 top-4 bg-[#203427] text-white">{afterLabel}</span>

        <div
          className="before-after-divider pointer-events-none"
          style={{ left: `calc(${position}% - 0.5px)` }}
        />
        <div
          className="before-after-handle pointer-events-none"
          style={{ left: `calc(${position}% - 1.625rem)` }}
          aria-hidden="true"
        />

        <input
          type="range"
          min={8}
          max={92}
          step={1}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          onInput={(event) => setPosition(Number((event.target as HTMLInputElement).value))}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-label={`Compare before and after landscaping images for ${alt}`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </div>
  );
}

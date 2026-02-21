"use client";

import { useState } from "react";
import Image from "next/image";

export default function BeforeAfter({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 3",
        overflow: "hidden",
      }}
    >
      {/* APRES */}
      <Image
        src={after}
        alt=""
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center center", // ⭐️ IMPORTANT
        }}
      />

      {/* AVANT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: `${pos}%`,
          overflow: "hidden",
        }}
      >
        <Image
          src={before}
          alt=""
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center center", // ⭐️ IMPORTANT
          }}
        />
      </div>

      {/* LIGNE */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          width: 2,
          background: "white",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />

      {/* SLIDER */}
      <input
  type="range"
  min="0"
  max="100"
  value={pos}
  onChange={(e) => setPos(Number(e.target.value))}
  className="ba-range"
  style={{
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: "translateX(-50%)",
    width: "80%",
    zIndex: 5,
  }}
/>
    </div>
  );
}
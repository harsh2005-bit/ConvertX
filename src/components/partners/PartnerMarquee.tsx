"use client";

import React from "react";
import { PartnerPlatform } from "@/lib/partners-data";
import { PartnerLogo } from "./PartnerLogo";

interface PartnerMarqueeProps {
  partners: PartnerPlatform[];
  direction?: "left" | "right";
  speedSeconds?: number;
  className?: string;
}

export const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({
  partners,
  direction = "left",
  speedSeconds = 40,
  className = "",
}) => {
  // We repeat the array 4 times to ensure seamless infinite looping on ultra-wide screens without empty gaps
  const marqueeKeyframes =
    direction === "left" ? "marquee-scroll-left" : "marquee-scroll-right";

  return (
    <div
      className={`relative w-full overflow-hidden select-none marquee-container ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1) 8%, rgba(0, 0, 0, 1) 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1) 8%, rgba(0, 0, 0, 1) 92%, transparent 100%)",
      }}
    >
      <div
        className="flex w-max items-center gap-3 sm:gap-4.5 py-2 hover:[animation-play-state:paused]"
        style={{
          animation: `${marqueeKeyframes} ${speedSeconds}s linear infinite`,
          willChange: "transform",
        }}
      >
        {/* Set 1 — accessible */}
        <div className="flex items-center gap-3 sm:gap-4.5">
          {partners.map((partner) => (
            <PartnerLogo key={`p1-${partner.id}`} partner={partner} />
          ))}
        </div>

        {/* Set 2 — decorative duplicate */}
        <div className="flex items-center gap-3 sm:gap-4.5" aria-hidden="true">
          {partners.map((partner) => (
            <PartnerLogo key={`p2-${partner.id}`} partner={partner} ariaHidden />
          ))}
        </div>

        {/* Set 3 — decorative duplicate for high-res/wide displays */}
        <div className="flex items-center gap-3 sm:gap-4.5" aria-hidden="true">
          {partners.map((partner) => (
            <PartnerLogo key={`p3-${partner.id}`} partner={partner} ariaHidden />
          ))}
        </div>

        {/* Set 4 — decorative duplicate */}
        <div className="flex items-center gap-3 sm:gap-4.5" aria-hidden="true">
          {partners.map((partner) => (
            <PartnerLogo key={`p4-${partner.id}`} partner={partner} ariaHidden />
          ))}
        </div>
      </div>
    </div>
  );
};

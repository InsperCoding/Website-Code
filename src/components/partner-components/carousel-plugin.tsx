"use client"

import * as React from "react"
import { PartnerLogo } from "./partner-logo";

const LogoList = [
    "/assets/intelli-gamelab.jpeg",
    "/assets/finq-logo.png",
    "/assets/fund-estudar.jpeg",
    "/assets/in-health.jpeg",
    "/assets/ibs-americas.jpeg",
    "/assets/insper-sec.jpeg",
    "/assets/na-pratica.jpeg",
]

export function CarouselPlugin() {
  return (
    <div className="overflow-hidden w-100% py-4 bg-white">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...LogoList, ...LogoList].map((logo, index) => (
          <PartnerLogo key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} className="w-full h-full object-cover" />
          </PartnerLogo>
        ))}
      </div>
    </div>
  );
}

"use client"

import * as React from "react"
import { PartnerLogo } from "./partner-logo";

const LogoList = [
    "https://media.licdn.com/dms/image/v2/D4D0BAQFPtz92o_eL1Q/company-logo_200_200/company-logo_200_200/0/1711374204983/inteli_game_lab_logo?e=1750896000&v=beta&t=WSuZ3MdZwI65gF3y3rDKQiHZOu3vqL5wKeFtR4-4bZo",
    "/assets/finq-logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIBanYASx6yTAfvw3mXKk5RsUgKlqLgPOTw&s",
    "https://media.licdn.com/dms/image/v2/C4D1BAQE9lkIEfmcHeQ/company-background_10000/company-background_10000/0/1650376636950/insper_in_hesalth_cover?e=1746316800&v=beta&t=bV8BXFtkWMtiogv2sui-6ptFf9P0texg_9vF43r4XvE",
    "https://www.insper.edu.br/content/insper-portal/pt/cursos/graduacao/organizacoes-estudantis/_jcr_content/root/responsivegrid/wrapper/container_grid/container/wrapper_copy_copy_co_1469664296/container_grid/container/image.coreimg.png/1733768250709/insper-sec-150x150.png",
    "https://ibs-americas.com/assets/img/AIC-IBS.png",
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

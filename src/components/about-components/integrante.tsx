import Image from "next/image"
import { PiLinkedinLogoLight } from "react-icons/pi";

export function Integrante() {
  return (
    <div className="relative w-full">
      <div className="relative h-60 sm:h-65 md:h-70 lg:h-75 w-full">
        <Image
          src="/assets/equipes/2025.1/img/henriquebomfim.png"
          alt="integrante"
          fill
          className="object-cover"
        />
      </div>

      <article className="absolute scale-85 p-2 bottom-0 right-0 translate-x-4 translate-y-4 z-[10] bg-white text-zinc-700 hover:cursor-default sm:scale-100 ">
        <div className="border-b-2">
          <span className="text-base font-medium">Nome Sobrenome</span>
        </div>
        <div className="flex items-center justify-between gap-1 w-40">
          <span className="text-sm">Cargo</span>
          <a
            href="https://www.instagram.com/inspercode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiLinkedinLogoLight className="text-xl" />
          </a>
        </div>
      </article>
    </div>
  );
}

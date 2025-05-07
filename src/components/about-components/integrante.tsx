import Image from "next/image"
import { PiLinkedinLogoLight } from "react-icons/pi"

type Props = {
  nome: string
  sobrenome: string
  cargo: string
  linkedin: string
  imagem: string
}

export function Integrante({ nome, sobrenome, cargo, linkedin, imagem }: Props) {
  return (
    <div className="relative w-full">
      <div className="relative h-60 sm:h-65 md:h-70 lg:h-75 w-full">
        <Image
          src={imagem}
          alt={`${nome} ${sobrenome}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <article className="absolute scale-85 p-2 bottom-0 right-0 translate-x-4 translate-y-4 z-[10] bg-white text-zinc-700 hover:cursor-default sm:scale-100">
        <div className="border-b-2">
          <span className="text-base font-medium">{nome} {sobrenome}</span>
        </div>
        <div className="flex items-center justify-between gap-1 w-40">
          <span className="text-sm">{cargo}</span>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiLinkedinLogoLight className="text-xl" />
          </a>
        </div>
      </article>
    </div>
  )
}

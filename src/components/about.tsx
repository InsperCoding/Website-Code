import Image from "next/image"
import { PiTargetBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";

export function AboutUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
      <div className="relative w-full h-60 overflow-hidden"> 
        <Image
          src="/assets/equipes/2025.1/img/fotoequipe.webp"
          alt="Insper Code Team"
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="object-cover rounded-sm"
        />
      </div>
      <div className="">
        <h2 className="text-2xl font-semibold mb-3 text-white">Sobre nós</h2>
        <p className="text-sm text-white/90 mb-3">
          O Insper Code é uma entidade estudantil do Insper que capacita membros a se tornarem melhores desenvolvedores, líderes e comunicadores através de projetos práticos.
          Com orientação de coordenadores e diretores de áreas como RH, projetos, tech e games, os membros aprendem enquanto desenvolvem soluções reais. A organização é liderada por Presidente e Vice-Presidente, garantindo sustentabilidade e parcerias.
          O objetivo é proporcionar uma experiência próxima do mercado, enriquecendo portfólios e preparando para o futuro profissional.
        </p>
        <p className="text-sm text-white/90">
          Acreditamos no poder da colaboração, no desenvolvimento contínuo e na criação de soluções que gerem valor
          para dentro e fora do Insper. 
        </p>
      </div>

      <div className="">
        <div className="flex flex-row items-center gap-2 mb-1">
          <PiTargetBold className="text-xl text-white"></PiTargetBold>
          <h3 className="text-xl font-medium text-white">Missão e Visão</h3>
        </div>
        <p className="text-sm text-white/90">
          Tornar a tecnologia mais acessível e desenvolver projetos 
          que agregam valor para a comunidade. Além disso, tem como visão tornar-se uma 
          empresa estudantil de soluções tecnológicas capaz de investir em seus membros e 
          realizar sonhos através de projetos.
        </p>
      </div>

      <div className="">
        <div className="flex flex-row items-center gap-2 mb-1">
          <PiEyeBold className="text-xl text-white" />
          <h3 className="text-xl font-medium text-white">Valores</h3>
        </div>

        
        <div className="grid grid-cols-2 w-fit gap-x-3 text-sm text-white/90"> 
          <div className="flex flex-col gap-1">
            <div>- Colaboração</div>
            <div>- Proatividade</div>
            <div>- Excelência</div>
          </div>
          
          <div className="flex flex-col gap-1">
            <div>- Comunicação</div>
            <div>- Aprendizado contínuo</div>
          </div>
        </div>
      </div>
    </div>
  )
}
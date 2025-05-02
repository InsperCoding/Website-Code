import Image from "next/image"
import { PiTargetBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";

export function AboutUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
      <div className="relative w-full h-60 overflow-hidden"> 
        <Image
          src="/assets/foto-sobre.png"
          alt="Insper Code Team"
          fill
          className="object-cover rounded-sm"
        />
      </div>
      <div className="">
        <h2 className="text-2xl font-semibold mb-3 text-white">Sobre nós</h2>
        <p className="text-sm text-white/90 mb-1">
          O Insper Code é a organização estudantil de desenvolvimento de software do Insper. Fundada em 2021, atua
          com os valores de inovação, colaboração e trabalho em equipe para tornar a tecnologia mais acessível,
          promovendo aprendizado prático, inovação e impacto real por meio de projetos alinhados com as demandas da
          comunidade.
        </p>
        <p className="text-sm text-white/90">
          Acreditamos no poder da colaboração, no desenvolvimento contínuo e na criação de soluções que gerem valor
          para dentro e fora do Insper. Seja construindo aplicativos, jogos ou novas ferramentas, buscamos sempre
          inspirar e capacitar quem deseja transformar ideias em realidade.
        </p>
      </div>

      <div>
        <div className="flex flex-row items-center gap-2 mb-1">
          <PiTargetBold className="text-xl text-white"></PiTargetBold>
          <h3 className="text-xl font-medium text-white">Missão</h3>
        </div>
        <p className="text-sm text-white/90">
          Tornar a tecnologia acessível e transformar sonhos em soluções. Queremos democratizar o acesso à
          tecnologia, desenvolvendo soluções que gerem impacto real. Nossa missão é formar talentos prontos para
          inovar e criar mudanças positivas.
        </p>
      </div>

      <div>
      <div className="flex flex-row items-center gap-2 mb-1">
          <PiEyeBold className="text-xl text-white"></PiEyeBold>
          <h3 className="text-xl font-medium text-white">Visão</h3>
        </div>
        <p className="text-sm text-white/90">
          Ser referência em inovação tecnológica estudantil. Nossa visão é consolidar o Insper Code como a
          principal organização estudantil de tecnologia, investindo no crescimento dos membros e impulsionando
          projetos de impacto.
        </p>
      </div>

    </div>
  )
}
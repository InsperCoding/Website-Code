import { ServiceCard } from "./services-components/service-card"
import Image from "next/image"
import { CgWebsite } from "react-icons/cg";

export function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <ServiceCard
        icon={
          <div className="relative w-10 h-10 mx-auto mb-4">
            <Image
              src="/assets/web-design.png"
              alt="Desenvolvimento Web & Mobile"
              fill
              className="object-contain"
            />
          </div>
        }
        title="Desenvolvimento Web & Mobile"
        description="Criamos universos interativos com narrativas envolventes, mecânicas divertidas e arte cativante, proporcionando diversão e aprendizado."
      />

      <ServiceCard
        icon={
          <div className="relative w-10 h-10 mx-auto mb-4">
            <Image
              src="/assets/controle.png"
              alt="GameDesign"
              fill
              className="object-contain"
            />
          </div>
        }
        title="Game Design"
        description="Criamos universos interativos com narrativas envolventes, mecânicas divertidas e arte cativante, proporcionando diversão e aprendizado."
      />

      <ServiceCard
        icon={
          <div className="relative w-10 h-10 mx-auto mb-4">
            <Image
              src="/assets/evento.png"
              alt="Eventos & Workshops"
              fill
              className="object-contain"
            />
          </div>
        }
        title="Eventos & Workshops"
        description="Criamos universos interativos com narrativas envolventes, mecânicas divertidas e arte cativante, proporcionando diversão e aprendizado."
      />

      <ServiceCard
        icon={
          <div className="relative w-10 h-10 mx-auto mb-4">
            <Image
              src="/assets/inteligencia-artificial.png"
              alt="Inteligência Artificial"
              fill
              className="object-contain"
            />
          </div>
        }
        title="Inteligência Artificial"
        description="Criamos universos interativos com narrativas envolventes, mecânicas divertidas e arte cativante, proporcionando diversão e aprendizado."
      />
    </div>

  )
}

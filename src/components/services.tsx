import { ServiceCard } from "./services-components/service-card"
import { PiNotePencilThin } from "react-icons/pi";
import { PiDevicesThin, PiGameControllerThin, PiCalendarDotsThin, PiBrainThin } from "react-icons/pi";


export function Services() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <ServiceCard
        icon={<PiDevicesThin></PiDevicesThin>}
        title="Dev Web & Mobile"
        description="Criamos universos interativos com narrativas envolventes, mecânicas divertidas e arte cativante, proporcionando diversão e aprendizado."
      />

      <ServiceCard
        icon={<PiGameControllerThin></PiGameControllerThin>}
        title="Game Design"
        description="Criamos universos interativos com narrativas envolventes, mecânicas divertidas e arte cativante, proporcionando diversão e aprendizado."
      />

      <ServiceCard
        icon={<PiCalendarDotsThin></PiCalendarDotsThin>}
        title="Eventos & Workshops"
        description="Criamos universos interativos com narrativas envolventes, mecânicas divertidas e arte cativante, proporcionando diversão e aprendizado."
      />

      <ServiceCard
        icon={<PiBrainThin></PiBrainThin>}
        title="Inteligência Artificial"
        description="Criamos universos interativos com narrativas envolventes, mecânicas divertidas e arte cativante, proporcionando diversão e aprendizado."
      />
    </div>

  )
}

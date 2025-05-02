import { ServiceCard } from "./services-components/service-card"
import { PiNotePencilThin } from "react-icons/pi";
import { PiDevicesThin, PiGameControllerThin, PiCalendarDotsThin, PiBrainThin } from "react-icons/pi";


export function Services() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <ServiceCard
        icon={<PiDevicesThin />}
        title="Dev Web & Mobile"
        description="Desenvolvemos sites responsivos e aplicativos nativos, unindo performance, design intuitivo e acessibilidade total."
      />

      <ServiceCard
        icon={<PiGameControllerThin />}
        title="Game Design"
        description="Criamos jogos envolventes do conceito à arte final, equilibrando narrativa, mecânica e experiência de jogador memorável."
      />

      <ServiceCard
        icon={<PiCalendarDotsThin />}
        title="Eventos & Workshops"
        description="Organizamos eventos imersivos e workshops práticos, combinando conteúdo relevante, interatividade e planejamento."
      />

      <ServiceCard
        icon={<PiBrainThin />}
        title="Inteligência Artificial"
        description="Aplicamos IA para automatizar processos e gerar insights, integrando modelos preditivos com soluções escaláveis."
      />
    </div>
  );
}


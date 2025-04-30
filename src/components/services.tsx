import { ServiceCard } from "./services-components/service-card"
import Image from "next/image"
import { CgWebsite } from "react-icons/cg";

export function Services() {
  return (
    <section id="services" className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Nossos Serviços</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            description="Construímos plataformas intuitivas e responsivas — que conectam pessoas e transformam ideias em experiências digitais fluidas e impactantes."
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
            description="Planejamos e conduzimos eventos memoráveis e workshops 'mão na massa' que inspiram, conectam pessoas e geram resultados tangíveis."
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
            description="Desenvolvemos soluções com chatbots e modelos preditivos que otimizam processos, revelam insights valiosos e auxiliam na tomada de decisão do negócio."
          />
        </div>
      </div>
    </section>
  )
}

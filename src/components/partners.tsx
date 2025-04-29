import { CarouselPlugin } from "./partner-components/carousel-plugin"

export function PartnersSection() {

  return (
    <section id="partners" className="py-16">
      <div className="mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 pb-2">Parceiros</h2>

        <div className="mt-8">
          <CarouselPlugin />
        </div>
      </div>
    </section>
  )
}
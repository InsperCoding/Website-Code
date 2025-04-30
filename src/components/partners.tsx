import { CarouselPlugin } from "./partner-components/carousel-plugin"

export function PartnersSection() {

  return (
    <section id="partners" className="py-16">
      <div className="mx-auto px-4">
        <h2  className="text-3xl font-bold mb-12 text-center md:text-left">Parceiros</h2>

        <div className="mt-8">
          <CarouselPlugin />
        </div>
      </div>
    </section>
  )
}
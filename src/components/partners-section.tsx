import { CarouselPlugin } from "./carousel-plugin"

export function PartnersSection() {

  return (
    <section id="partners" className="py-16 border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Parceiros</h2>

        <div className="mt-8">
          <CarouselPlugin />
        </div>
      </div>
    </section>
  )
}
import Image from "next/image"

export function AboutUs() {
  return (
    <section id="about" className="w-full py-16 text-white">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/assets/foto-sobre.png"
              alt="Insper Code Team"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Sobre nós</h2>
            <p className="text-white/90 mb-4">
              O Insper Code é a organização estudantil de desenvolvimento de software do Insper. Fundada em 2021, atua
              com os valores de inovação, colaboração e trabalho em equipe para tornar a tecnologia mais acessível,
              promovendo aprendizado prático, inovação e impacto real por meio de projetos alinhados com as demandas da
              comunidade.
            </p>
            <p className="text-white/90">
              Acreditamos no poder da colaboração, no desenvolvimento contínuo e na criação de soluções que gerem valor
              para dentro e fora do Insper. Seja construindo aplicativos, jogos ou novas ferramentas, buscamos sempre
              inspirar e capacitar quem deseja transformar ideias em realidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export function MissionVision() {
    return (
      <section className="w-full py-16 bg-white">
        <div className="mx-auto w-full px-4 flex flex-row justify-between">
          <div className="w-full border-3 border-blue-600 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 mr-2">
                    <img
                      src="/assets/missao.png"
                      alt="Ícone Missão"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-600">Missão</h3>
                </div>
                <p className="text-2xl text-blue-600 ">
                  Tornar a tecnologia acessível e transformar sonhos em soluções. Queremos democratizar o acesso à
                  tecnologia, desenvolvendo soluções que gerem impacto real. Nossa missão é formar talentos prontos para
                  inovar e criar mudanças positivas.
                </p>
              </div>
  
              {/* Visão */}
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 mr-2">
                    <img
                      src="/assets/visao.png"
                      alt="Ícone Visão"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-600">Visão</h3>
                </div>
                <p className="text-2xl text-blue-600">
                  Ser referência em inovação tecnológica estudantil. Nossa visão é consolidar o Insper Code como a
                  principal organização estudantil de tecnologia, investindo no crescimento dos membros e impulsionando
                  projetos de impacto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
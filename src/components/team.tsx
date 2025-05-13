'use client'

import { useEffect, useState } from "react"
import clsx from "clsx"
import { Integrante } from "./about-components/integrante"
import { MdKeyboardArrowDown } from "react-icons/md"
import SimpleSelect from "./ui/select"
import Image from "next/image"

type IntegranteInfo = {
  nome: string
  sobrenome: string
  cargo: string
  linkedin: string
  imagem: string
}

const anosDisponiveis = ["2025.1", "2025.2 teste"]

function normalizarNome(nome: string, sobrenome: string) {
  return `${nome}${sobrenome}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
}

export function Team() {
  const [open, setOpen] = useState(false)
  const [ano, setAno] = useState(anosDisponiveis[0])
  const [gestao, setGestao] = useState<IntegranteInfo[]>([])
  const [coordenadores, setCoordenadores] = useState<IntegranteInfo[]>([])

  useEffect(() => {
    fetch(`/assets/equipes/${ano}/integrantes.csv`)
      .then(res => res.text())
      .then(csv => {
        const linhas = csv.trim().split("\n")
        const cabecalho = linhas[0].split(",")
        const dados = linhas.slice(1).map(linha => {
          const valores = linha.split(",")
          const obj: any = {}
          cabecalho.forEach((col, i) => {
            obj[col.trim()] = valores[i]?.trim()
          })
          return {
            nome: obj.Nome,
            sobrenome: obj.Sobrenome,
            cargo: obj.Cargo,
            linkedin: obj.LinkedIn,
            imagem: `/assets/equipes/${ano}/img/${normalizarNome(obj.Nome, obj.Sobrenome)}.webp`
          }
        })

        const ordenado = dados.sort((a, b) => {
          const getPeso = (cargo: string) => {
            const c = cargo.toLowerCase()
            if (c.includes("presidente")) return 0
            if (c.includes("vice")) return 1
            if (c.includes("diretor")) return 2
            if (c.includes("coordenador")) return 3
            return 4
          }
          return getPeso(a.cargo) - getPeso(b.cargo)
        })

        const listaGestao = ordenado.filter(p =>
          p.cargo.toLowerCase().includes("presidente") ||
          p.cargo.toLowerCase().includes("vice") ||
          p.cargo.toLowerCase().includes("diretor")
        )

        const listaCoordenadores = ordenado.filter(p =>
          p.cargo.toLowerCase().includes("coordenador")
        )

        setGestao(listaGestao)
        setCoordenadores(listaCoordenadores)
      })
  }, [ano])

  return (
    <div className="w-full h-fit text-white pt-8">
      <div className="w-full flex flex-col items-center gap-3">
        <button
          onClick={() => setOpen(prev => !prev)}
          className={clsx(
            "flex items-center text-xs select-none border-b border-white focus:outline-none hover:cursor-pointer hover:opacity-100",
            open ? "opacity-100" : "opacity-60"
          )}
        >
          <span className="mr-1 pb-1 text-base font-medium">Equipe</span>
          <MdKeyboardArrowDown
            className={clsx(
              "text-lg transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </button>

        {open && (
          <div className="w-full">
            <div className="mt-2">
              <SimpleSelect
                options={anosDisponiveis.map(a => ({ value: a, label: a }))}
                value={ano}
                onChange={setAno}
                placeholder="Período"
              />
            </div>
          </div>
        )}
      </div>

      {open && (
        <section className="mt-5">
          <div className="relative w-full max-w-3xl mx-auto mb-8 md:h-100">
            <Image
              src={`/assets/equipes/${ano}/img/fotoemequipe.webp`}
              alt="Foto da equipe"
              width={1500}
              height={900}
              className="w-full h-full object-cover"
            />

            <article className="absolute scale-85 p-2 bottom-0 right-0 translate-x-4 translate-y-4 z-[10] bg-white text-zinc-700 hover:cursor-default sm:scale-100">
              <div className="border-b-2">
                <span className="text-base font-medium">Equipe</span>
              </div>
              <div className="flex items-center justify-between gap-1 w-20">
                <span className="text-sm">{ano}</span>
                <div />
              </div>
            </article>
          </div>

          {/* Seção Gestão */}
          {gestao.length > 0 && (
            <section className="w-full max-w-screen-xl mx-auto mt-12">
              <h2 className="text-xl font-semibold border-b pb-1 mb-4">Gestão</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-5 gap-y-8">
                {gestao.map((pessoa, idx) => (
                  <Integrante
                    key={idx}
                    nome={pessoa.nome}
                    sobrenome={pessoa.sobrenome}
                    cargo={pessoa.cargo}
                    linkedin={pessoa.linkedin}
                    imagem={pessoa.imagem}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Seção Coordenadores */}
          {coordenadores.length > 0 && (
            <section className="w-full max-w-screen-xl mx-auto mt-12">
              <h2 className="text-xl font-semibold border-b pb-1 mb-4">Coordenadores</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-5 gap-y-8">
                {coordenadores.map((pessoa, idx) => (
                  <Integrante
                    key={idx}
                    nome={pessoa.nome}
                    sobrenome={pessoa.sobrenome}
                    cargo={pessoa.cargo}
                    linkedin={pessoa.linkedin}
                    imagem={pessoa.imagem}
                  />
                ))}
              </div>
            </section>
          )}
        </section>
      )}
    </div>
  )
}

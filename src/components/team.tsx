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

const anosDisponiveis = ["2025.1", '2025.2 teste']

function normalizarNome(nome: string, sobrenome: string) {
  return `${nome}${sobrenome}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
}

export function Team() {
  const [open, setOpen] = useState(false)
  const [ano, setAno] = useState(anosDisponiveis[0])
  const [integrantes, setIntegrantes] = useState<IntegranteInfo[]>([])

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
        setIntegrantes(dados)
      })
  }, [ano])

  return (
    <div className="w-full h-fit text-white pt-6">
      <div className="w-full flex flex-col items-center gap-3">
        <button
          onClick={() => setOpen(prev => !prev)}
          className={clsx(
            "flex items-center text-xs select-none border-b border-white focus:outline-none hover:cursor-pointer hover:opacity-100",
            open ? "opacity-100" : "opacity-60"
          )}
        >
          <span className="mr-1 pb-1 font-medium">Equipe</span>
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
        <div className="relative w-full max-w-xl mx-auto mb-8 md:h-75">
          <Image
            src={`/assets/equipes/${ano}/img/fotoequipe.webp`}
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
              <div/>
            </div>
          </article>
        </div>
      
        <div className="pb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-5 gap-y-8 mt-5">
          {integrantes.map((pessoa, idx) => (
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
    </div>
  )
}

'use client'

import { useEffect, useState } from "react"
import clsx from "clsx"
import { Integrante } from "./about-components/integrante"
import { MdKeyboardArrowDown } from "react-icons/md"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"

type IntegranteInfo = {
  nome: string
  sobrenome: string
  cargo: string
  linkedin: string
  imagem: string
}

// Lista de anos disponíveis — basta adicionar aqui para novo ano aparecer automaticamente
const anosDisponiveis = [
  "2025.1"
]

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

        setIntegrantes(ordenado)
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
          <span className="mr-1 pb-1 font-medium">Nosso Time</span>
          <MdKeyboardArrowDown
            className={clsx(
              "text-lg transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </button>

        {open && (
          <Select onValueChange={setAno} value={ano}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione o ano" />
            </SelectTrigger>
            <SelectContent>
              {anosDisponiveis.map((ano) => (
                <SelectItem key={ano} value={ano}>
                  {ano}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      {open && (
        <section className="pb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-5 gap-y-8 h-fit mt-5">
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
        </section>
      )}
    </div>
  )
}

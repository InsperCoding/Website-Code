import { ReactNode } from "react";
import Image from "next/image";

interface IconeProjeto {
    nome: string;
    icone: ReactNode;
    cor: {
        border: string;
        text: string;
    };
}

interface ProjetoProps {
    image: string;
    href: string;
    title: string;
    descricao: string;
    tecnologias: IconeProjeto[];
}


export default function CardProjeto({
    image,
    title,
    descricao,
    tecnologias,
  }: ProjetoProps) {
    return (
      <div
        className="
          relative block transition-all ease-in-out duration-300
        "
      >
        <article className="bg-white text-black overflow-hidden rounded-sm">
          <div className="relative w-full h-40">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
  
          <div className="flex flex-col p-5 text-zinc-600">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-base">{descricao}</p>
  
            <ol className="flex flex-row space-x-2 mt-3">
              {tecnologias.map((tech, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-1 p-1 text-xs border-2 rounded-sm
                    ${tech.cor.border} ${tech.cor.text}`}
                  title={tech.nome}
                >
                  {tech.icone}
                  <span>{tech.nome}</span>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </div>
    );
  }
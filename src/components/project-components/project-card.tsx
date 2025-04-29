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


export default function CardProjeto({ image, href, title, descricao, tecnologias }: ProjetoProps) {
    return (
        <a className="relative group-hover:opacity-80 group-hover:scale-98 hover:!opacity-100 hover:!scale-100 transition-all ease-in-out duration-300"
            href={href}
            target="_blank"
        >
            <article className="border border-zinc-200 bg-white text-black overflow-hidden rounded-xl shadow-md transition-transform hover:scale-[1.02]">
                <div className="relative w-full h-40">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col p-5 text-zinc-600">
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-zinc-800">{descricao}</p>
                    <ol className="flex flex-row space-x-2 mt-3">
                        {tecnologias ? tecnologias.map((tech, index) => (
                            <li
                                key={index}
                                className={`flex items-center my-2 gap-1 p-1 text-xs rounded border-2 ${tech.cor.border} ${tech.cor.text}`}
                                title={tech.nome}
                            >
                                {tech.icone}
                                <span>{tech.nome}</span>
                            </li>

                        )) : null}
                    </ol>
                </div>
            </article>
        </a>

        );
    
    }
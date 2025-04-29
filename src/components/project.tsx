import CardProjeto from "./project-components/project-card";
import { FaFigma } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { SiGodotengine } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";

export function Projects() {
    return (
        <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-4">
            <CardProjeto
            image="/assets/estoca-ai.png"
            href="https://www.google.com/"
            title="Estoca Aí"
            descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo explicabo quis consectetur, voluptatum expedita quisquam, quia minus nemo similique, inventore modi asper"
            tecnologias={[
                {
                nome: "Figma",
                icone: <FaFigma />,
                cor: {
                    border: "border-pink-500",
                    text: "text-pink-500"
                }
                },
                {
                nome: "NodeJS",
                icone: <IoLogoNodejs />,
                cor: {
                    border: "border-green-400",
                    text: "text-green-400"
                }
                },
                {
                nome: "NextJS",
                icone: <TbBrandNextjs />,
                cor: {
                    border: "border-black",
                    text: "text-black"
                }
                }
            ]}
            />
            <CardProjeto
            image="/assets/help-the-fox.png"
            href="https://www.google.com/"
            title="Help The Fox"
            descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo explicabo quis consectetur, voluptatum expedita quisquam, quia minus nemo similique, inventore modi asper"
            tecnologias={[
                {
                nome: "Godot",
                icone: <SiGodotengine />,
                cor: {
                    border: "border-blue-500",
                    text: "text-blue-500"
                }
                },
                {
                nome: "Photoshop",
                icone: <SiAdobephotoshop />,
                cor: {
                    border: "border-green-400",
                    text: "text-green-400"
                }
                }
            ]}
            />
            <CardProjeto
            image="/assets/finq-logo.png"
            href="https://www.google.com/"
            title="FinQ"
            descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo explicabo quis consectetur, voluptatum expedita quisquam, quia minus nemo similique, inventore modi asper"
            tecnologias={[
                {
                nome: "Figma",
                icone: <FaFigma />,
                cor: {
                    border: "border-pink-500",
                    text: "text-pink-500"
                }
                },
                {
                nome: "NodeJS",
                icone: <IoLogoNodejs />,
                cor: {
                    border: "border-green-400",
                    text: "text-green-400"
                }
                },
                {
                nome: "NextJS",
                icone: <TbBrandNextjs />,
                cor: {
                    border: "border-black",
                    text: "text-black"
                }
                }
            ]}
            />
        </div>
    );
};
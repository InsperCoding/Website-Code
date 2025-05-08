import CardProjeto from "./project-components/project-card";
import { FaFigma } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { SiGodotengine } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";

export function Projects() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 group">
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
                border: "border-pink-600",  // antes: border-pink-500
                text:   "text-pink-600",    // antes: text-pink-500
              },
            },
            {
              nome: "NodeJS",
              icone: <IoLogoNodejs />,
              cor: {
                border: "border-green-600", // antes: border-green-400
                text:   "text-green-600",   // antes: text-green-400
              },
            },
            {
              nome: "NextJS",
              icone: <TbBrandNextjs />,
              cor: {
                border: "border-gray-700",  // antes: border-black
                text:   "text-gray-700",    // antes: text-black
              },
            },
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
                  border: "border-blue-600",  // antes: border-blue-500
                  text:   "text-blue-600",    // antes: text-blue-500
                },
              },
              {
                nome: "Photoshop",
                icone: <SiAdobephotoshop />,
                cor: {
                  border: "border-sky-600",   // antes: border-green-400
                  text:   "text-sky-600",     // antes: text-green-400
                },
              },
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
                border: "border-pink-600",  // antes: border-pink-500
                text:   "text-pink-600",    // antes: text-pink-500
              },
            },
            {
              nome: "NodeJS",
              icone: <IoLogoNodejs />,
              cor: {
                border: "border-green-600", // antes: border-green-400
                text:   "text-green-600",   // antes: text-green-400
              },
            },
            {
              nome: "NextJS",
              icone: <TbBrandNextjs />,
              cor: {
                border: "border-gray-700",  // antes: border-black
                text:   "text-gray-700",    // antes: text-black
              },
            },
          ]}
        />
    </div>

    );
};
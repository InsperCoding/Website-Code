import { PiLinkedinLogo, PiInstagramLogo } from "react-icons/pi";

export function Footer() {
  return (
    <footer
      id="footer"
      /* mobile → coluna; md+ → linha  */
      className="
        w-full bg-zinc-700 text-white text-sm
        flex flex-col md:flex-row md:justify-between md:items-center
        gap-6 md:gap-0
        px-6 sm:px-10 lg:px-24
        py-10
      "
    >
      {/* endereço: centralizado no mobile, alinhado à esquerda em md+ */}
      <address className="not-italic leading-relaxed text-center md:text-left">
        <p>Rua Quatá, 300, Vila Olímpia</p>
        <p>São Paulo / SP – Brasil</p>
        <p>CEP 04546-042</p>
      </address>

      {/* redes + copyright: central no mobile, à direita em md+ */}
      <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
        <nav
          aria-label="Redes sociais"
          className="flex justify-center md:justify-end gap-3 text-3xl"
        >
          <a
            href="https://www.instagram.com/inspercode/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-zinc-300 transition-colors"
          >
            <PiInstagramLogo />
          </a>

          <a
            href="https://www.linkedin.com/company/insper-code"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-zinc-300 transition-colors"
          >
            <PiLinkedinLogo />
          </a>
        </nav>

        <small>© 2025 Insper Code. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}

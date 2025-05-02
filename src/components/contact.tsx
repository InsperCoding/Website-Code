import Image from "next/image";
import ContactForm from "./contact-components/ContactForm";

export function Contact() {
  return (
    <div className="w-full flex flex-row items-stretch rounded-sm overflow-hidden">
      {/* Formulário ocupa 100 % até sm; 75 % a partir de md */}
      <div className="w-full md:w-3/5">
        <ContactForm />
      </div>

      {/* Imagem: escondida até sm; visível (25 %) em md+ */}
      <div className="relative hidden md:block md:w-2/5 min-h-[300px] bg-white">
        <Image
          src="/assets/contact-image.png"
          alt="contato"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

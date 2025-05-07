import Image from "next/image";
import ContactForm from "./contact-components/ContactForm";

export function Contact() {
  return (
    <div className="w-full flex flex-row items-stretch rounded-sm overflow-hidden">
      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
      
      <div className="p-6 pl-0 md:w-1/2 bg-white">
        <div className="relative hidden md:block w-full h-full">
          <Image
            src="/assets/contact-image.png"
            alt="contato"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

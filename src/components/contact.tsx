import Image from "next/image"
import ContactForm from "./contact-components/ContactForm"

export function Contact() {
  return (
    <div id='Contatos'  className="my-3 pb-3">
       <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Contato</h2>
        <ContactForm />
    </div>
  )
}
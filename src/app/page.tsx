import { PartnersSection } from "../components/partners-section"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import ContactForm from "../components/contact/ContactForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PartnersSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

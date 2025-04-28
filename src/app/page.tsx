import { PartnersSection } from "../components/partners-section"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}

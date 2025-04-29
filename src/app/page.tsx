import { PartnersSection } from "../components/partners"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Slogan } from "../components/slogan"
import { AboutUs } from "../components/about";
import { MissionVision } from "../components/mission-vision";
import { Services } from "../components/services";
import ContactForm from "../components/contact/ContactForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="w-full md:w-[75%] mx-auto">
        <Slogan />
      </div>
      
      <div className="w-full bg-blue-600">
        <div className="w-full md:w-[75%] mx-auto">
          <AboutUs />
        </div>
      </div>
      
      <div className="w-full md:w-[75%] mx-auto">
        <MissionVision />
        <Services />
        <PartnersSection />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

import { PartnersSection } from "../components/partners"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Slogan } from "../components/slogan"
import { AboutUs } from "../components/about";
import { Services } from "../components/services";
import { Contact } from "../components/contact"
import { Projects } from "../components/project";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">

      <section id = "home" className="w-full">
        <Header />
        <div className="flex items-center justify-center h-[75vh]">
          <Slogan />
        </div>
      </section>
      
      <section id="about" className="flex justify-center w-full bg-[#2B6BB1] pt-10 pb-10 xl: px-5">
        <div className="flex items-between justify-center max-w-6xl">
          <AboutUs />
        </div>
      </section>

      <section id="services" className="flex flex-col items-center w-full xl: px-5">
        <div className="flex flex-col items-between justify-center max-w-6xl">
          <h2 className="text-3xl font-bold mb-3 text-left">Nossos Serviços</h2>
          <Services />
        </div>
      </section>
      
      <div className="w-full md:w-[75%] mx-auto">
        <PartnersSection />
        <Projects/>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

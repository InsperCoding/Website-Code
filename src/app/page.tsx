import { PartnersSection } from "../components/partners"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Slogan } from "../components/slogan"
import { AboutUs } from "../components/about";
import { MissionVision } from "../components/mission-vision";
import { Services } from "../components/services";
import { Contact } from "../components/contact";
import { Wave } from "../components/wave";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative w-full h-[100%]">
        <div className="absolute top-0 left-0 w-full h-[100%] z-0">
          <Wave />
        </div>
        <div className="relative z-10 w-full md:w-[85%] mx-auto">
          <Slogan />
        </div>
      </div>

      {/* Section AboutUs starts right after Wave */}
      <div className="w-full bg-blue-600"> {/* Remove the margin-top */}
        <div className="w-full md:w-[75%] mx-auto">
          <AboutUs />
        </div>
      </div>

      <div className="w-full md:w-[75%] mx-auto">
        <MissionVision />
        <Services />
        <PartnersSection />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

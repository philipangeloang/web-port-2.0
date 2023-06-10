import TechCarousel from "./components/TechCarousel";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <section id="nav" className="w-full py-4 px-7">
        <Navbar />
      </section>

      <section id="home" className="w-full px-7 mt-20">
        <Hero />
      </section>

      <section className="w-full h-44 mt-16 bg-overlay-black border border-main-white/5 flex justify-center items-center p-4">
        <TechCarousel />
      </section>

      <section id="services" className="w-full px-7 mt-28">
        <Services />
      </section>

      <section id="packages" className="w-full px-7 mt-28">
        <Packages />
      </section>

      <section id="projects" className="w-full px-7 mt-28">
        <Projects />
      </section>

      <section className="w-full px-7 my-28">
        <Contact />
      </section>

      <section className="w-full px-7 mt-28 mb-10">
        <Footer />
      </section>
    </>
  );
}

export default App;

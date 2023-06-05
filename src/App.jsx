import { AiOutlineMail } from "react-icons/ai";
import { RxArrowTopRight } from "react-icons/rx";
import TechCarousel from "./components/TechCarousel";
import Services from "./components/Services";
import Packages from "./components/Packages";

function App() {
  return (
    <>
      <section className="w-full py-4 px-7">
        <nav className="max-w-6xl mx-auto bg-main-black flex justify-between">
          <div className="flex items-center gap-5">
            <AiOutlineMail className="bg-[#1a1a1a] cursor-pointer text-main-white border-2 rounded-full peer p-4 border-main-white/5 h-14 w-14" />
            <span className="text-sm link peer-hover:opacity-50">
              Get in Touch
            </span>
          </div>
          <div className="flex gap-4 items-center text-sm">
            <div className="link">Home</div>/
            <div className="link">Services</div>/
            <div className="link">Packages</div>/
            <div className="link">Projects</div>/
            <div className="link">Resume</div>
          </div>
        </nav>
        <hr className="divider" />
      </section>

      <section className="w-full px-7 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
          <img src="/hero-photo.png" alt="hero-image" className="h-32 w-32" />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="mt-5 text-sm">Hi, I'm Philip 👋 </p>
          <p className="text-[3.5rem] max-w-[29rem] text-center leading-[1.2] mt-2 heading-gradient">
            I will transform your vision into a digital reality.
          </p>
          <div className="cursor-pointer rounded-md flex justify-center items-center gap-3 py-4 px-10 mt-10 bg-overlay-black border border-main-white/5 hover:scale-95">
            <span className="bg-overlay-black text-main-white/70">
              Latest Projects
            </span>
            <RxArrowTopRight className="bg-overlay-black" />
          </div>
        </div>
      </section>

      <section className="w-full h-44 mt-16 bg-overlay-black border border-main-white/5 flex justify-center items-center p-4">
        <TechCarousel />
      </section>

      <section className="w-full px-7 mt-28">
        <Services />
      </section>

      <section className="w-full px-7 mt-28">
        <Packages />
      </section>

      <section className="w-full px-7 my-28">
        <hr className="divider my-28" />
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
          <p className="text-[3.5rem] max-w-[29rem] text-center leading-[1.2] mt-2 heading-gradient">
            Tell me about your next project
          </p>
          <div className="cursor-pointer rounded-md flex justify-center items-center gap-3 py-4 px-10 mt-10 bg-overlay-black border border-main-white/5 hover:scale-95">
            <span className="bg-overlay-black text-main-white/70">
              Get in Touch
            </span>
            <AiOutlineMail className="bg-overlay-black" />
          </div>
        </div>
      </section>

      <section className="w-full px-7 mt-28 mb-10">
        <hr className="divider mb-6" />
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="text-sm text-main-white/70 cursor-pointer hover:opacity-50 peer-hover:opacity-50">
              © 2023 All rights reserved.
            </span>
          </div>
          <div className="flex gap-4 items-center text-sm">
            <div className="cursor-pointer hover:opacity-50 text-main-white/70">
              Linkedin
            </div>
            /
            <div className="cursor-pointer hover:opacity-50 text-main-white/70">
              Github
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

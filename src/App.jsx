import { AiOutlineMail } from "react-icons/ai";
import { RxArrowTopRight } from "react-icons/rx";

function App() {
  return (
    <>
      <section className="w-full py-4 px-7">
        <nav className="max-w-6xl mx-auto bg-main-black flex justify-between">
          <div className="flex items-center gap-5">
            <AiOutlineMail className="bg-[#1a1a1a] cursor-pointer text-main-white border-2 rounded-full peer p-4 border-main-white/5 h-14 w-14" />
            <span className="text-sm text-main-white/70 cursor-pointer hover:opacity-50 peer-hover:opacity-50">
              Get in Touch
            </span>
          </div>
          <div className="flex gap-4 items-center text-sm">
            <div className="cursor-pointer hover:opacity-50">Home</div>/
            <div className="cursor-pointer hover:opacity-50">Services</div>/
            <div className="cursor-pointer hover:opacity-50">Projects</div>/
            <div className="cursor-pointer hover:opacity-50">Resume</div>
          </div>
        </nav>
        <hr className="bg-main-black border border-[#1a1a1a] mt-4 max-w-6xl mx-auto" />
      </section>

      <section className="w-full px-7 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
          <img src="/hero-photo.png" alt="hero-image" className="h-32 w-32" />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="mt-5 text-sm">Hi, I'm Philip 👋 </p>
          <p className="text-[3.5rem] max-w-[29rem] text-center leading-[1.2] mt-2">I will transform your vision into a digital reality.</p>
          <div className="flex gap-4 p-4"><span>Latest Projects</span><RxArrowTopRight /></div>
        </div>
      </section>
    </>
  );
}

export default App;

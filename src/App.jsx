import { AiOutlineMail } from "react-icons/ai";

function App() {
  return (
    <>
      <section className="w-full p-4">
        <nav className="max-w-7xl mx-auto bg-main-black flex justify-between">
          <div className="flex items-center gap-5">
            <AiOutlineMail className="bg-[#1a1a1a] text-main-white border-2 rounded-full p-4 border-main-white/5 h-14 w-14" />
            <span className="text-sm text-main-white/70">Get in Touch</span>
          </div>
          <div className="flex gap-4 items-center text-sm">
            <div>Home</div>/<div>Services</div>/<div>Projects</div>/
            <div>Resume</div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default App;

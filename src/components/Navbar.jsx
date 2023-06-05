import { AiOutlineMail } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <nav className="max-w-6xl mx-auto bg-main-black flex justify-between">
        <div className="flex items-center gap-5">
          <AiOutlineMail className="bg-[#1a1a1a] cursor-pointer text-main-white border-2 rounded-full peer p-4 border-main-white/5 h-14 w-14" />
          <span className="text-sm link peer-hover:opacity-50">
            Get in Touch
          </span>
        </div>
        <div className="flex gap-4 items-center text-sm">
          <div className="link">Home</div>/<div className="link">Services</div>/
          <div className="link">Packages</div>/
          <div className="link">Projects</div>/
          <div className="link">Resume</div>
        </div>
      </nav>
      <hr className="divider" />
    </>
  );
};

export default Navbar;

import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsArrowUp } from "react-icons/bs";
const Navbar = () => {
  const [hamburger, setHamburger] = useState("left-[-100%]");
  return (
    <>
      <nav className="max-w-6xl mx-auto bg-main-black flex justify-between">
        <a
          href="mailto:philipangeloang1@gmail.com?subject=Make me a Website!"
          className="flex items-center gap-5"
        >
          <AiOutlineMail className="bg-[#1a1a1a] cursor-pointer text-main-white border-2 rounded-full peer p-4 border-main-white/5 h-14 w-14" />
          <span className="text-sm link peer-hover:opacity-50">
            Get in Touch
          </span>
        </a>
        <div className="hidden gap-4 items-center text-sm | md:flex">
          <div className="link">
            <a href="#home">Home</a>
          </div>
          /
          <div className="link">
            <a href="#services">Services</a>
          </div>
          /
          <div className="link">
            <a href="#packages">Packages</a>
          </div>
          /
          <div className="link">
            <a href="#projects">Projects</a>
          </div>
          /
          <div className="link">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.canva.com/design/DAFcfNmz_kI/OCZ43YkxcImw3WXm4R-ozw/view"
            >
              Resume
            </a>
          </div>
        </div>

        <div
          onClick={() => {
            if (hamburger === "left-0") {
              setHamburger("left-[-100%]");
            } else {
              setHamburger("left-0");
            }
          }}
          className="space-y-1.5 md:hidden flex flex-col items-center justify-center cursor-pointer"
        >
          <span className="block w-8 h-1 rounded-md bg-main-white/50"></span>
          <span className="block w-8 h-1 rounded-md bg-main-white/50"></span>
          <span className="block w-8 h-1 rounded-md bg-main-white/50"></span>
        </div>

        <a
          href="#nav"
          className="fixed rounded-full bottom-5 z-10 right-5 h-10 w-10 bg-main-white/20 flex items-center justify-center hover:bg-main-black"
        >
          <BsArrowUp />
        </a>

        {hamburger && (
          <div
            className={`fixed top-0 h-screen w-1/2 bg-main-white flex flex-col transition-all duration-300 z-10 ${hamburger} `}
          >
            <a
              onClick={() => {
                setHamburger("left-[-100%]");
              }}
              href="#home"
              className="text-main-black text-sm p-4 border-b border-main-black/10"
            >
              Home
            </a>
            <a
              onClick={() => {
                setHamburger("left-[-100%]");
              }}
              href="#services"
              className="text-main-black text-sm p-4 border-b border-main-black/10"
            >
              Services
            </a>
            <a
              onClick={() => {
                setHamburger("left-[-100%]");
              }}
              href="#packages"
              className="text-main-black text-sm p-4 border-b border-main-black/10"
            >
              Packages
            </a>
            <a
              onClick={() => {
                setHamburger("left-[-100%]");
              }}
              href="#projects"
              className="text-main-black text-sm p-4 border-b border-main-black/10"
            >
              Projects
            </a>
            <a className="text-main-black text-sm p-4 border-b border-main-black/10">
              Resume
            </a>
          </div>
        )}
      </nav>
      <hr className="divider" />
    </>
  );
};

export default Navbar;

import { RxArrowTopRight } from "react-icons/rx";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
      <img src="/hero-photo.png" alt="hero-image" className="h-32 w-32" />
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p className="mt-5 text-sm">Hi, I'm Philip 👋 </p>
      <p className="text-[2.5rem] md:text-[3.5rem] max-w-[29rem] text-center leading-[1.2] mt-2 heading-gradient">
        I will transform your vision into a digital reality.
      </p>
      <div className="cursor-pointer rounded-md flex justify-center items-center gap-3 py-4 px-10 mt-10 bg-overlay-black border border-main-white/5 hover:scale-95">
        <span className="bg-overlay-black text-main-white/70">
          Latest Projects
        </span>
        <RxArrowTopRight className="bg-overlay-black" />
      </div>
    </div>
  );
};

export default Hero;

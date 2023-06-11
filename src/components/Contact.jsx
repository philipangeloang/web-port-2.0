import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <hr className="divider my-28" />
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <p className="text-[3.5rem] max-w-[29rem] text-center leading-[1.2] mt-2 heading-gradient">
          Tell me about your next project
        </p>
        <a
          href="mailto:philipangeloang1@gmail.com?subject=Make me a Website!"
          className="cursor-pointer rounded-md flex justify-center items-center gap-3 py-4 px-10 mt-10 bg-overlay-black border border-main-white/5 hover:scale-95"
        >
          <span className="bg-overlay-black text-main-white/70">
            Get in Touch
          </span>
          <AiOutlineMail className="bg-overlay-black" />
        </a>
      </div>
    </>
  );
};

export default Contact;

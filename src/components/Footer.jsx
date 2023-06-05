const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;

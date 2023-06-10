import { SiPowerpages, SiManageiq } from "react-icons/si";
import { BsPersonBadgeFill } from "react-icons/bs";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
      <p className="text-main-white text-4xl heading-gradient">
        Services Offered
      </p>
      <div className="grid gap-4 grid-cols-12 w-full mt-20">
        <div className="service-card">
          <SiPowerpages size={40} />
          <p className="mt-5 text-xl heading-gradient">Landing Pages</p>
          <p className="mt-5 text-sm pr-10 md:pr-2 text-main-white/50">
            Developing a landing page website that is responsive, intuitive, and
            efficient to use.
          </p>
        </div>

        <div className="service-card">
          <BsPersonBadgeFill size={40} />
          <p className="mt-5 text-xl heading-gradient">Portfolio Website</p>
          <p className="mt-5 text-sm pr-10 md:pr-2 text-main-white/50">
            Developing a portfolio website that showcases your projects, skills,
            and achivements.
          </p>
        </div>

        <div className="service-card">
          <SiManageiq size={40} />
          <p className="mt-5 text-xl heading-gradient">Content Management</p>
          <p className="mt-5 text-sm pr-10 md:pr-2 text-main-white/50">
            Developing a website with a builder that let you customize your own
            website.
          </p>
        </div>

        <div className="service-card">
          <GiPerspectiveDiceSixFacesRandom size={40} />
          <p className="mt-5 text-xl heading-gradient">Custom Websites</p>
          <p className="mt-5 text-sm pr-10 md:pr-2 text-main-white/50">
            Developing any website that you need made visually appealing and
            responsive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

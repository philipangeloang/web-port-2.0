import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiShopify,
  SiTailwindcss,
  SiVite,
  SiWebflow,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <p className="text-main-white text-4xl heading-gradient">
          Recent Projects
        </p>
      </div>

      {/* Carousel */}

      <Swiper
        modules={[Autoplay]}
        autoplay={true}
        spaceBetween={25}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="mt-20"
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          662: {
            slidesPerView: 2,
          },
          1072: {
            slidesPerView: 3,
          },
          1376: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide className="project-card">
          <div className="w-full h-56 bg-main-white rounded-t-md"></div>
          <p className="heading-gradient text-main-white font-bold text-2xl p-4">
            Barangay 564
          </p>
          <p className="text-main-white/50 text-sm px-4 w-72">
            Barangay Record Management System for Manila that fully-automated
            all cumbersome barangay transactions.
          </p>
          <div className="flex gap-2 px-4 absolute bottom-5">
            <IoLogoJavascript />
            <SiVite />
            <TbBrandNextjs />
            <SiMongodb />
            <SiExpress />
            <SiTailwindcss />
          </div>
        </SwiperSlide>

        <SwiperSlide className="project-card">
          <div className="w-full h-56 bg-main-white rounded-t-md"></div>
          <p className="heading-gradient text-main-white font-bold text-2xl p-4">
            Sumida
          </p>
          <p className="text-main-white/50 text-sm px-4 w-72">
            Article Summarizer powered by OpenAI GPT-4 that turns long articles
            into brief and straightforward summaries.
          </p>
          <div className="flex gap-2 px-4 absolute bottom-5">
            <IoLogoJavascript />
            <SiVite />
            <SiTailwindcss />
            <SiRedux />
          </div>
        </SwiperSlide>

        <SwiperSlide className="project-card">
          <div className="w-full h-56 bg-main-white rounded-t-md"></div>
          <p className="heading-gradient text-main-white font-bold text-2xl p-4">
            Hiplip
          </p>
          <p className="text-main-white/50 text-sm px-4 w-72">
            Personal Portfolio that showcases skills, experiences, and ventures
            with rich UI/UX and fully responsive design.
          </p>
          <div className="flex gap-2 px-4 absolute bottom-5">
            <IoLogoJavascript />
            <FaReact />
            <SiTailwindcss />
          </div>
        </SwiperSlide>

        <SwiperSlide className="project-card">
          <div className="w-full h-56 bg-main-white rounded-t-md"></div>
          <p className="heading-gradient text-main-white font-bold text-2xl p-4">
            Wuju
          </p>
          <p className="text-main-white/50 text-sm px-4 w-72">
            Daily Expenses Tracker that tracks gains and loses through
            statistical data presented in a dashboard.
          </p>
          <div className="flex gap-2 px-4 absolute bottom-5">
            <IoLogoJavascript />
            <FaReact />
            <SiTailwindcss />
            <SiExpress />
            <SiMongodb />
          </div>
        </SwiperSlide>

        <SwiperSlide className="project-card">
          <div className="w-full h-56 bg-main-white rounded-t-md"></div>
          <p className="heading-gradient text-main-white font-bold text-2xl p-4">
            Livecoin
          </p>
          <p className="text-main-white/50 text-sm px-4 w-72">
            Crypto Ticker for only the four most popular coins: BTC, ETH, SOL,
            BNB that shows their prices and percent change.
          </p>
          <div className="flex gap-2 px-4 absolute bottom-5">
            <IoLogoJavascript />
            <FaReact />
            <SiTailwindcss />
          </div>
        </SwiperSlide>

        <SwiperSlide className="project-card">
          <div className="w-full h-56 bg-main-white rounded-t-md"></div>
          <p className="heading-gradient text-main-white font-bold text-2xl p-4">
            Plagrab
          </p>
          <p className="text-main-white/50 text-sm px-4 w-72">
            Plagiarism Checker using the Enchanced Rabin-Karp Algorithm
            improving text-similarity consructs.
          </p>
          <div className="flex gap-2 px-4 absolute bottom-5">
            <IoLogoJavascript />
            <SiVite />
            <SiTailwindcss />
          </div>
        </SwiperSlide>

        <SwiperSlide className="project-card">
          <div className="w-full h-56 bg-main-white rounded-t-md"></div>
          <p className="heading-gradient text-main-white font-bold text-2xl p-4">
            Upman
          </p>
          <p className="text-main-white/50 text-sm px-4 w-72">
            Modified Hangman game that casts the characters of the Pixar
            Animation Studios movie Up.
          </p>
          <div className="flex gap-2 px-4 absolute bottom-5">
            <IoLogoJavascript />
            <SiVite />
            <SiTailwindcss />
          </div>
        </SwiperSlide>

        <SwiperSlide className="project-card">
          <div className="w-full h-56 bg-main-white rounded-t-md"></div>
          <p className="heading-gradient text-main-white font-bold text-2xl p-4">
            Digital Cover
          </p>
          <p className="text-main-white/50 text-sm px-4 w-72">
            Landing page emphasizing in aesthetics and animation fully utilizing
            code management sytem.
          </p>
          <div className="flex gap-2 px-4 absolute bottom-5">
            <SiWebflow />
          </div>
        </SwiperSlide>

        <SwiperSlide className="project-card">
          <div className="w-full h-56 bg-main-white rounded-t-md"></div>
          <p className="heading-gradient text-main-white font-bold text-2xl p-4">
            Bosk UK
          </p>
          <p className="text-main-white/50 text-sm px-4 w-72">
            Fully Functional E-Commerce site selling Office Pods and Phonebooths
            located in London, United Kingdom
          </p>
          <div className="flex gap-2 px-4 absolute bottom-5">
            <SiShopify />
          </div>
        </SwiperSlide>

        <SwiperSlide className="project-card">
          <div className="w-full h-56 bg-main-white rounded-t-md"></div>
          <p className="heading-gradient text-main-white font-bold text-2xl p-4">
            Bird Supplies
          </p>
          <p className="text-main-white/50 text-sm px-4 w-72">
            Fully Functional E-Commerce site selling Science Backed Bird Care
            located in United States
          </p>
          <div className="flex gap-2 px-4 absolute bottom-5">
            <SiShopify />
          </div>
        </SwiperSlide>

        <SwiperSlide className="project-card">
          <div className="w-full h-56 bg-main-white rounded-t-md"></div>
          <p className="heading-gradient text-main-white font-bold text-2xl p-4">
            Tea Dog
          </p>
          <p className="text-main-white/50 text-sm px-4 w-72">
            Fully Functional E-Commerce site selling completely healthy energy
            located in United States tea.
          </p>
          <div className="flex gap-2 px-4 absolute bottom-5">
            <SiShopify />
          </div>
        </SwiperSlide>

        <SwiperSlide className="project-card">
          <div className="w-full h-56 bg-main-white rounded-t-md"></div>
          <p className="heading-gradient text-main-white font-bold text-2xl p-4">
            iGelSoles
          </p>
          <p className="text-main-white/50 text-sm px-4 w-72">
            Fully Functional E-Commerce site selling shoes designed for
            all-day-wear and comfort.
          </p>
          <div className="flex gap-2 px-4 absolute bottom-5">
            <SiShopify />
          </div>
        </SwiperSlide>

        <SwiperSlide className="project-card">
          <div className="w-full h-56 bg-main-white rounded-t-md"></div>
          <p className="heading-gradient text-main-white font-bold text-2xl p-4">
            Joule Body
          </p>
          <p className="text-main-white/50 text-sm px-4 w-72">
            Fully Functional E-Commerce site selling kit for a fresh start with
            nutrient rich bars and herbal teas.
          </p>
          <div className="flex gap-2 px-4 absolute bottom-5">
            <SiShopify />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Projects;

import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
} from "react-icons/io";
import {
  SiWordpress,
  SiWebflow,
  SiShopify,
  SiVite,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiTrpc,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

const TechCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={true}
      slidesPerView={7}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="flex justify-center items-center">
        <IoLogoHtml5 size={60} className="hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <IoLogoCss3 size={60} className="hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <IoLogoJavascript size={60} className=" hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <SiTypescript size={60} className="hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <FaReact size={60} className="hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <TbBrandNextjs size={60} className="hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <SiVite size={60} className="hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <IoLogoNodejs size={60} className="hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <SiTailwindcss size={60} className="hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <SiBootstrap size={60} className="hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <SiTrpc size={60} className="hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <SiMongodb size={60} className="hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <SiExpress size={60} className="hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <SiWordpress size={60} className="hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <SiWebflow size={60} className="hover:opacity-50" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <SiShopify size={60} className="hover:opacity-50" />
      </SwiperSlide>
    </Swiper>
  );
};

export default TechCarousel;

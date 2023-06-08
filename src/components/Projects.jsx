import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

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
        slidesPerView={7}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Projects;

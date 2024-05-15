import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useRef } from "react";

export default function LandingSwiperSection({ datas }) {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    swiperRef.current.swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current.swiper.autoplay.start();
  };

  return (
    <section>
      <Swiper
        ref={swiperRef}
        onInit={(swiper) => {
          swiper.el.addEventListener("mouseenter", handleMouseEnter);
          swiper.el.addEventListener("mouseleave", handleMouseLeave);
        }}
        navigation
        pagination={{ type: "bullets", clickable: true }}
        autoplay={true}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {datas.map((swiper, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="h-screen relative">
                <div className="relative z-[1] h-full lg:px-14 px-6 bg-gradient-swiper">
                  <div className="absolute bottom-10">
                    <p className="font-bold lg:text-5xl text-3xl line-clamp-1 w-4/5 text-white">{swiper.title}</p>
                    <p className="line-clamp-2 text-white lg:text-3xl text-xl w-4/5 font-light">{swiper.desc}</p>
                  </div>
                </div>
                <Image src={`/${swiper.img}`} fill={true} style={{ objectFit: "cover" }} quality={75} alt="Ryper Lab Latest Blog Image" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

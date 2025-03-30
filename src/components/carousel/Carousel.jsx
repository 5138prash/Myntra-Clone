import React from "react";
import Data from "../../data/Carousel_Data"
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Carousel = () => {
  return (
    <section>
      <div className=" main-carousel mt-[120px]  h-[540px] flex ">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{delay: 2500, disableOnInteraction: false}}
          
        >
          {Data.map(({ id, url }) => {
            return (
                <SwiperSlide key={id}>
                    <div>
                    <img src={url} alt={`Image${id}`} />
                    </div>
                </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;

import React from "react";
import Carousel from "../components/carousel/Carousel";
import Favourite_Brands from "../data/Favourite_Brands";
import ShopByCategory from "../data/ShopByCategory";
import Grand_Global_Brands from "../data/Grand_Global_Brands";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home-section">
      <Carousel />

      <div className=" my-5 p-8 heading">
        <h4 className="px-[50px]  text-[38px] font-[650] text-gray-700  uppercase tracking-widest">
          Favourite Brands
        </h4>
      </div>

      <div className="slides py-4 flex  w-full ">
        {/* Brands */}
        <div className="flex gap-1 w-full justify-around flex-wrap slide-1 ">
          {Favourite_Brands.map(({ id, image }) => {
            return (
              <div className="slides-img cursor-pointer" key={id}>
                <img
                  src={image}
                  onClick={() => navigate("/products")}
                  alt=""
                  className="w-[205px]"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className=" heading my-5 p-8 ">
        <h4 className=" px-[50px] text-[38px] font-[650] text-gray-700  uppercase tracking-widest">
          {" "}
          Grand Global Brands
        </h4>
      </div>

      <div className="slides-2 my-10 h-[440px] w-full flex ">
        <Swiper
          className="flex swiper-2 py-8 "
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={6}
          slidesPerGroup={6}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2010, disableOnInteraction: false }}
          breakpoints={{
            200: { slidesPerView: 2, slidesPerGroup: 2 }, 
            600: { slidesPerView: 3, slidesPerGroup: 3 }, 
            
            1430: { slidesPerView: 6, slidesPerGroup: 6 }, // Default settings for above 1430px
          }}
        >
          {Grand_Global_Brands.map(({ id, image }) => {
            return (
              <SwiperSlide className="cursor-pointer h-[400px]" key={id}>
                <img
                  className="swiper-img w-full h-full object-contain"
                  src={image}
                  alt={`image${id}`}
                  onClick={() => navigate("/products")}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="heading category-heading my-5 p-8 ">
        <h4 className="px-[50px] text-[38px] font-[650] text-gray-700  uppercase tracking-widest">
          {" "}
          Shop by category
        </h4>
      </div>

      <div className="shopByCategory w-full px-2 py-10 ">
        <div>
          <div className="category-items  w-full px-2 gap-7 flex  flex-wrap items-center justify-around ">
            {ShopByCategory.map(({ id, image }) => {
              return (
                <div
                  key={id}
                  className="category-img  w-[250px] p-2  cursor-pointer flex"
                >
                  <img
                    src={image}
                    onClick={() => navigate("/products")}
                    alt=""
                    className=" w-full h-full object-fit"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

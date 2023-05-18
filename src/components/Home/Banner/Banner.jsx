import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="my-container">
      <Swiper
        className="rounded-b-xl"
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="w-full h-[80vh] lg:h-full relative">
            <img
              className="w-full"
              src="https://i.ibb.co/3kdQW8m/banner-01.png"
              alt=""
            />
            <div className="flex justify-center items-center slider-bg h-full bg-gradient-to-r from-[#151515a1] to-[#151515a1]">
              <div className="w-[90%] md:w-1/2 mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white lg:leading-[4rem]">
                  Playfully Energized Sports Toys
                </h2>
                <p className="text-white my-5">
                  Power Up Your Play: Fuel the Fun with Dynamic Sports Toys!" -
                  Discover an array of exhilarating sports toys that will ignite
                  your passion for play and supercharge your active adventures.
                </p>
                <button className="my-btn hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[80vh] lg:h-full relative">
            <img
              className="w-full"
              src="https://i.ibb.co/PNhHBSs/banner-02.png"
              alt=""
            />
            <div className="flex justify-center items-center slider-bg h-full bg-gradient-to-r from-[#151515a1] to-[#151515a1]">
              <div className="w-[90%] md:w-1/2 mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white lg:leading-[4rem]">
                  Active Fun Gear Up
                </h2>
                <p className="text-white my-5">
                  Fun in Motion: Unleash Your Energy with Top-notch Sports
                  Toys!" - Dive into a world of active play and endless
                  entertainment with high-quality sports toys designed to keep
                  you on the move.
                </p>
                <button className="my-btn hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[80vh] lg:h-full relative">
            <img
              className="w-full"
              src="https://i.ibb.co/w7mZ8n8/banner-03.png"
              alt=""
            />
            <div className="flex justify-center items-center slider-bg h-full bg-gradient-to-r from-[#151515a1] to-[#151515a1]">
              <div className="w-[90%] md:w-1/2 mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white lg:leading-[4rem]">
                  Champion Unleashed Sports Toys
                </h2>
                <p className="text-white my-5">
                  "Play, Score, Repeat: Elevate Your Playtime with Action-packed
                  Sports Toys!" - Experience the thrill of competition and
                  unleash your inner champion with a wide selection of sports
                  toys that bring excitement and joy to every game.
                </p>
                <button className="my-btn hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[80vh] lg:h-full relative">
            <img
              className="w-full"
              src="https://i.ibb.co/LRG77F5/banner-04.png"
              alt=""
            />
            <div className="flex justify-center items-center slider-bg h-full bg-gradient-to-r from-[#151515a1] to-[#151515a1]">
              <div className="w-[90%] md:w-1/2 mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white lg:leading-[4rem]">
                  Move, Fun, Sports Toys
                </h2>
                <p className="text-white my-5">
                  "Active Adventures Await: Embrace Fun-Filled Play with Dynamic
                  Sports Toys!" - Get ready for non-stop action and memorable
                  adventures as you explore the world of sports toys, igniting
                  your imagination and promoting an active lifestyle.
                </p>
                <button className="my-btn hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="mt-16 lg:mt-[120px] bg-blue-50 py-20">
      <div className="my-container">
        <div className="flex flex-col md:flex-row gap-12 md:mx-20">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
              Grab Our Newsletter
            </h2>
            <p className="text-[#2396DC] font-medium">
              Get the latest toy collection update on your inbox!
            </p>
          </div>
          <div className="form-control md:w-1/2">
            <div className="input-group">
              <input
                type="email"
                placeholder="E-main Address"
                className="input input-bordered w-full"
              />
              <button className="my-btn hover:bg-transparent hover:text-[#2396DC] transition-all duration-200 ease-in-out">
                <FaTelegramPlane className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex flex-wrap justify-between gap-5">
          <img src={"https://i.ibb.co/Trs3fC3/brand1.png"} alt="brand 1" />
          <img src={"https://i.ibb.co/WHDvTfL/barnd2.png"} alt="brand 2" />
          <img src={"https://i.ibb.co/d0wy7ks/brand3.png"} alt="brand 2" />
          <img src={"https://i.ibb.co/VvzH6kx/brand4.png"} alt="brand 4" />
          <img src={"https://i.ibb.co/5W3hNmD/brand5.png"} alt="brand 5" />
          <img src={"https://i.ibb.co/kHCSXwj/brand6.png"} alt="brand 6" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

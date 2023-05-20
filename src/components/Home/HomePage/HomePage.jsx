import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import useTitle from "../../../hooks/useTitle";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useTitle("Home");
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div data-aos="fade-up">
        <Gallery></Gallery>
      </div>
      <div data-aos="fade-up">
        <ShopByCategory></ShopByCategory>
      </div>
    </div>
  );
};

export default HomePage;

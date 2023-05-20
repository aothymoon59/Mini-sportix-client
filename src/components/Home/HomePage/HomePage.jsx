import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import useTitle from "../../../hooks/useTitle";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const HomePage = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
    </div>
  );
};

export default HomePage;

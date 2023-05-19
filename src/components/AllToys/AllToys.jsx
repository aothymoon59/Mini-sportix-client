import React from "react";

const AllToys = () => {
  return (
    <div className="my-container">
      <div
        className="flex h-[50vh] justify-center items-center bg-[#000000] bg-opacity-[0.5] bg-blend-multiply bg-cover bg-center"
        style={{
          backgroundImage: `url(https://i.ibb.co/6NKx039/section-banner.jpg)`,
        }}
      >
        <h2 className="text-lg md:text-2xl text-center font-semibold text-white w-[90%] md:w-[50%]">
          Enhance our sports toy collection by contributing your favorite
          playthings to our marketplace and sharing them with fellow enthusiasts
        </h2>
      </div>
    </div>
  );
};

export default AllToys;

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Puff } from "react-loader-spinner";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize the loading state to true
  const [activeTab, setActiveTab] = useState("Outdoor");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://b7a11-toy-marketplace-server-side-aothymoon59.vercel.app/toys/category/${activeTab}`
        );
        const data = await response.json();
        setToys(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  if (loading) {
    // Return a loading indicator while data is loading
    return (
      <div className="flex items-center mt-10 justify-center h-[400px]">
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#1d4ed8"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="my-container mt-12 lg:mt-[120px]">
      <div className="section-header text-center space-y-3 mb-12 lg:mb-16">
        <h4 className="text-[#2396DC] text-lg sm:text-xl md:text-2xl font-medium">
          Shop by category
        </h4>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Find Your Perfect Sports Toy!
        </h2>
      </div>
      <div>
        <div className="tabs justify-center flex gap-3">
          <a
            onClick={() => handleTabClick("Outdoor")}
            className={`tab tab-sm md:tab-lg tab-bordered ${
              activeTab == "Outdoor" ? "tab-active" : ""
            }`}
          >
            Outdoor Games
          </a>
          <a
            onClick={() => handleTabClick("Indoor")}
            className={`tab tab-sm md:tab-lg tab-bordered ${
              activeTab == "Indoor" ? "tab-active" : ""
            }`}
          >
            Indoor Games
          </a>
          <a
            onClick={() => handleTabClick("Ride")}
            className={`tab tab-sm md:tab-lg tab-bordered ${
              activeTab == "Ride" ? "tab-active" : ""
            }`}
          >
            Ride On Sports Toys
          </a>
        </div>
        <div className="grid lg:grid-cols-4 gap-7 mt-12">
          {toys.map((toy) => (
            <ProductCard key={toy._id} toy={toy}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;

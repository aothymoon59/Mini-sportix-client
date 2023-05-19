import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize the loading state to true

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(
          "https://b7a11-toy-marketplace-server-side-aothymoon59.vercel.app/gallery"
        );
        const data = await response.json();
        setGalleries(data);
        setLoading(false); // Update the loading state when data is loaded
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };
    fetchGallery();
  }, []);

  if (loading) {
    // Return a loading indicator while data is loading
    return (
      <div className="flex items-center mt-10 justify-center h-[400px]">
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#4fa94d"
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
          Playtime Arena
        </h4>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Explore Our Sports Toy Gallery
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {galleries.map((gallery, i) => (
          <div
            key={i}
            className="rounded-2xl relative transition duration-200 transform hover:-translate-y-2"
          >
            <img
              className="object-cover border-8 rounded-2xl border-blue-100 box-border"
              src={gallery.img}
              alt={gallery.name}
            />

            <div className="bg-black rounded-2xl bg-opacity-75 opacity-0 hover:opacity-100 text-blue-100 font-medium p-2 flex justify-center items-center absolute inset-0 transition duration-300 ease-in-out">
              <h3 className="text-center">{gallery.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

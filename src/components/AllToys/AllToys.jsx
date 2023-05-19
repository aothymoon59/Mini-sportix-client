import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import SingleToyCard from "./SingleToyCard";
import { FaSearch } from "react-icons/fa";

const AllToys = () => {
  const [allToy, setAllToy] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize the loading state to true

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await fetch(
          "https://b7a11-toy-marketplace-server-side-aothymoon59.vercel.app/toys"
        );
        const data = await response.json();
        setAllToy(data);
        setLoading(false); // Update the loading state when data is loaded
      } catch (error) {
        console.error("Error fetching toy data:", error);
      }
    };

    fetchToys();
  }, []);

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
    <div className="my-container">
      <div
        className="flex h-[50vh] justify-center items-center bg-[#000000] bg-opacity-[0.5] bg-blend-multiply bg-cover bg-center"
        style={{
          backgroundImage: `url(https://i.ibb.co/6NKx039/section-banner.jpg)`,
        }}
      >
        <h2 className="text-lg md:text-2xl text-center font-semibold text-white w-[90%] md:w-[50%]">
          Discover a wide range of thrilling sports toys in our extensive
          collection, designed to bring joy and excitement to every playtime
          adventure.
        </h2>
      </div>
      <div className="mt-12 lg:mt-[120px]">
        <div className="section-header text-center space-y-3 mb-12 lg:mb-16">
          <h4 className="text-[#2396DC] text-lg sm:text-xl md:text-2xl font-medium">
            Playtime Paradise
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Explore Our Collection of Sports Toys
          </h2>
        </div>
        <div className="section-body">
          <div>
            <div className="form-control w-[70%] lg:w-1/2 mx-auto mb-8">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered w-full"
                />
                <button className="my-btn hover:bg-transparent hover:text-[#2396DC] transition-all duration-200 ease-in-out">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto rounded-lg box-border border-[10px] border-[#F4F7FC] p-5">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Seller name</th>
                  <th>Toy name</th>
                  <th>Sub category</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {/* row */}
                {allToy.map((toy) => (
                  <SingleToyCard toy={toy} key={toy._id}></SingleToyCard>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;

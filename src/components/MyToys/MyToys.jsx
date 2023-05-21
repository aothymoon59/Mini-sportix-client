import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import SingleMyToy from "./SingleMyToy";
import useTitle from "../../hooks/useTitle";
import { Puff } from "react-loader-spinner";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize the loading state to true
  const [selected, setSelected] = useState("");

  useTitle("My Toys");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://b7a11-toy-marketplace-server-side-aothymoon59.vercel.app/myToys/${user?.email}?selected=${selected}`
        );
        const data = await response.json();
        setMyToys(data);
        setLoading(false); // Update the loading state when data is loaded
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };
    fetchData();
  }, [user, selected]);

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
      {/* banner section  */}
      <div
        className="flex h-[50vh] justify-center items-center bg-[#000000] bg-opacity-[0.5] bg-blend-multiply bg-cover bg-center"
        style={{
          backgroundImage: `url(https://i.ibb.co/6NKx039/section-banner.jpg)`,
        }}
      >
        <h2 className="text-lg md:text-2xl text-center font-semibold text-white w-[90%] md:w-[50%]">
          Your Personal Toy Collection: Discover and Relish in the Sports Toys
          You've Added, Curated Just for You!
        </h2>
      </div>
      <div className="mt-12 lg:mt-[120px]">
        {/* section header */}
        <div className="section-header text-center space-y-3 mb-12 lg:mb-16">
          <h4 className="text-[#2396DC] text-lg sm:text-xl md:text-2xl font-medium">
            My Toy Collection
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            My Arena of Sports Toy Treasures
          </h2>
        </div>
        <div className="form-control  w-fit mb-6">
          <select
            onChange={(e) => setSelected(e.target.value)}
            name="sort"
            className="select bg-[#EBF8FF] select-bordered"
          >
            <option disabled selected>
              Sort by price
            </option>
            <option value="ascending">High to low</option>
            <option value="descending">Low to high</option>
          </select>
        </div>
        {/* table  */}
        <div className="overflow-x-auto rounded-lg box-border border-[10px] border-[#F4F7FC] p-5">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="no-sticky">#</th>
                <th className="no-sticky">Toy Image</th>
                <th>Toy name</th>
                <th>Sub category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Rating</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {myToys.map((toy, i) => (
                <SingleMyToy
                  toy={toy}
                  myToys={myToys}
                  setMyToys={setMyToys}
                  i={i}
                  key={toy._id}
                ></SingleMyToy>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;

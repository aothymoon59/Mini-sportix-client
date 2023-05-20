import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import SingleMyToy from "./SingleMyToy";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useTitle("My Toys");

  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-aothymoon59.vercel.app/myToys/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

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
        {/* table  */}
        <div className="overflow-x-auto rounded-lg box-border border-[10px] border-[#F4F7FC] p-5">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th className="no-sticky">Toy Image</th>
                <th>Toy name</th>
                <th>Sub category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Rating</th>
                <th>Description</th>
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

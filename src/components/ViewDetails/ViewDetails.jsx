import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ViewDetails = () => {
  useTitle("Details");
  const toy = useLoaderData();
  const {
    toyName,
    toyPhoto,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    quantity,
    rating,
    description,
  } = toy || {};

  const handleAddCart = () => {
    toast.success("Cart added");
  };

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
          Delve into the Intricate Details and Specifications of Sports Toys for
          an Informed Buying Decision.
        </h2>
      </div>
      <div className="mt-12 lg:mt-[120px]">
        {/* section header */}
        <div className="section-header text-center space-y-3 mb-12 lg:mb-16">
          <h4 className="text-[#2396DC] text-lg sm:text-xl md:text-2xl font-medium">
            Toy Insights
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Dive into Details, Unleash Fun
          </h2>
        </div>
        {/* section body  */}
        <div className="section-body">
          <div className="card md:card-side bg-blue-50 shadow-sm">
            <figure className="md:w-[428px]">
              <img className="w-full h-full" src={toyPhoto} alt={toyName} />
            </figure>
            <div className="card-body p-5 md:p-8">
              <h2 className="font-semibold text-3xl">{toyName}</h2>
              <div className="text-base sm:text-xl space-y-2">
                <p>
                  <span className="font-semibold">Sub category:</span>{" "}
                  {subCategory}
                </p>
                <p>
                  <span className="font-semibold">Available quantity:</span>{" "}
                  {quantity}
                </p>
                <p>
                  <span className="font-semibold">Price:</span> ${price}
                </p>
                <p>
                  <span className="font-medium">Description:</span>{" "}
                  {description}
                </p>
                <div className="flex items-center gap-2">
                  Rating:{" "}
                  <Rating style={{ maxWidth: 100 }} value={rating} readOnly />{" "}
                  <span>{rating} / 5</span>
                </div>
                <p>
                  <span className="font-medium">Seller name:</span> {sellerName}
                </p>
                <p>
                  <span className="font-medium">Seller email:</span>{" "}
                  {sellerEmail}
                </p>
              </div>

              <div className="card-actions md:justify-end">
                <button
                  onClick={handleAddCart}
                  className="my-btn flex items-center justify-center gap-2 hover:bg-transparent hover:text-[#2396DC] transition-all duration-200 ease-in-out"
                >
                  <FaShoppingCart /> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

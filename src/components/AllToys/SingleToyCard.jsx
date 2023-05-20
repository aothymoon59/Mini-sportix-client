import React from "react";
import { Link } from "react-router-dom";

const SingleToyCard = ({ toy, i }) => {
  const { toyName, sellerName, subCategory, price, quantity } = toy || {};
  return (
    <>
      <tr>
        <td>{i + 1}</td>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>$ {price}</td>
        <td>{quantity}</td>
        <td>
          <Link
            to="/viewDetails"
            className="my-btn hover:bg-transparent hover:text-[#2396DC] transition-all duration-200 ease-in-out"
          >
            View Details
          </Link>
        </td>
      </tr>
    </>
  );
};

export default SingleToyCard;

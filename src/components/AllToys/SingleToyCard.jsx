import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const SingleToyCard = ({ toy, i }) => {
  const { user } = useContext(AuthContext);
  const { _id, toyName, sellerName, subCategory, price, quantity } = toy || {};

  const handleAlert = () => {
    if (!user) {
      toast.error("You have to log in first to view details");
    }
  };
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
            to={`/toy/${_id}`}
            onClick={handleAlert}
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

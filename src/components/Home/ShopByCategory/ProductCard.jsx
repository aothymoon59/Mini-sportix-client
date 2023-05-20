import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const ProductCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
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

  const handleAlert = () => {
    if (!user) {
      toast.error("You have to log in to view details");
    }
  };

  return (
    <div className="card card-compact bg-blue-50 shadow-xl">
      <figure>
        <img className="w-full" src={toyPhoto} alt={toyName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <h3 className="text-lg font-semibold">${price}</h3>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/toy/${_id}`}
            onClick={handleAlert}
            className="my-btn hover:bg-transparent hover:text-[#2396DC] transition-all duration-200 ease-in-out"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

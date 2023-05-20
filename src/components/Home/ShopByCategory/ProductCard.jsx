import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const { _id, toyName, toyPhoto, price, rating } = toy || {};

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
        <div className="flex items-center gap-2">
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />{" "}
          <span>{rating} / 5</span>
        </div>
        <div className="card-actions mt-auto justify-end">
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

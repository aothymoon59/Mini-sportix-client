import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleMyToy = ({ toy }) => {
  const {
    toyName,
    toyPhoto,
    subCategory,
    price,
    quantity,
    rating,
    description,
  } = toy || {};
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={toyPhoto} alt={toyName} />
              </div>
            </div>
          </div>
        </td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>$ {price}</td>
        <td>{quantity}</td>
        <td>{description}</td>

        <td>
          <Link to="/updateMyToy" className="text-xl">
            <FaEdit />
          </Link>
        </td>
        <td>
          <button className="text-xl text-red-500">
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleMyToy;

import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleMyToy = ({ toy, myToys, setMyToys, i }) => {
  const { _id, toyName, toyPhoto, subCategory, price, quantity, description } =
    toy || {};

  const handleDelete = (_id) => {
    console.log(_id, " deleted");

    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
        }
        const remaining = myToys.filter((toy) => toy._id !== _id);
        setMyToys(remaining);
      });
  };
  return (
    <>
      <tr>
        <td>{i + 1}</td>
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
          <button
            onClick={() => handleDelete(_id)}
            className="text-xl text-red-500"
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleMyToy;

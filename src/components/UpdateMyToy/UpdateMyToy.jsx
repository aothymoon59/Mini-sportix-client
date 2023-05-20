import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateMyToy = () => {
  const { user } = useContext(AuthContext);
  const toy = useLoaderData();
  const { _id, toyName, sellerName, price, quantity, description } = toy || {};

  useTitle("Update Toy");

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToy = {
      price,
      quantity,
      description,
    };
    console.log(updatedToy);

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b7a11-toy-marketplace-server-side-aothymoon59-aothymoon59.vercel.app/toys/${_id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedToy),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Toy Updated Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      }
    });
  };

  return (
    <div className="my-container">
      <div
        className="flex h-[50vh] justify-center items-center bg-[#000000] bg-opacity-[0.5] bg-blend-multiply bg-cover bg-center"
        style={{
          backgroundImage: `url(https://i.ibb.co/6NKx039/section-banner.jpg)`,
        }}
      >
        <h2 className="text-lg md:text-2xl text-center font-semibold text-white w-[90%] md:w-[50%]">
          Refresh and Enhance Your Toy Collection.Explore the Latest Updates and
          Upgrades for Your Favorite Sports Toys
        </h2>
      </div>
      <div className="mt-12 lg:mt-[120px]">
        <div className="section-header text-center space-y-3 mb-12 lg:mb-16">
          <h4 className="text-[#2396DC] text-lg sm:text-xl md:text-2xl font-medium">
            Revamp Your Play
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Update and Upgrade Your Sports Toys Collection
          </h2>
        </div>
        <form onSubmit={handleUpdate}>
          {/* toy name and seller name  */}
          <div className="flex flex-col md:flex-row mb-5 gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Toy Name</span>
              </label>
              <input
                type="text"
                name="toyName"
                placeholder="Toy Name"
                className="input input-bordered"
                defaultValue={toyName}
                readOnly
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Seller Name</span>
              </label>
              <input
                type="text"
                name="sellerName"
                defaultValue={sellerName}
                placeholder="Seller Name"
                className="input input-bordered"
                readOnly
              />
            </div>
          </div>
          {/* quantity and price  */}
          <div className="flex flex-col md:flex-row mb-5 gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                defaultValue={price}
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">
                  Available Quantity
                </span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered"
                defaultValue={quantity}
              />
            </div>
          </div>
          {/* Product details  */}
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text font-semibold">
                Product Description
              </span>
            </label>
            <textarea
              name="description"
              defaultValue={description}
              className="textarea textarea-bordered h-24 resize-none"
              placeholder="Product Details Description"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="my-btn w-full hover:bg-transparent hover:text-[#2396DC] transition-all duration-200 ease-in-out"
              type="submit"
              value="Update Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyToy;

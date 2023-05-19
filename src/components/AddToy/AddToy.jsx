import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyName = form.toyName.value;
    const toyPhoto = form.toyPhoto.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const createdToy = {
      toyName,
      toyPhoto,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      quantity,
      rating,
      description,
    };

    fetch(
      "https://b7a11-toy-marketplace-server-side-aothymoon59.vercel.app/toys",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(createdToy),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
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
          Enhance our sports toy collection by contributing your favorite
          playthings to our marketplace and sharing them with fellow enthusiasts
        </h2>
      </div>
      <div className="mt-12 lg:mt-[120px]">
        <div className="section-header text-center space-y-3 mb-12 lg:mb-16">
          <h4 className="text-[#2396DC] text-lg sm:text-xl md:text-2xl font-medium">
            Expand Our Play Zone
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Add a Sports Toy to the Marketplace
          </h2>
        </div>
        <form onSubmit={handleAddToy}>
          {/* toy name and toy photo  */}
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
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Toy Photo URL</span>
              </label>
              <input
                type="text"
                name="toyPhoto"
                placeholder="Toy Photo URL"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* seller name and seller email  */}
          <div className="flex flex-col md:flex-row mb-5 gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Seller Name</span>
              </label>
              <input
                type="text"
                name="sellerName"
                defaultValue={user?.displayName}
                placeholder="Seller Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Seller Email</span>
              </label>
              <input
                type="email"
                name="sellerEmail"
                placeholder="Seller Email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered"
              />
            </div>
          </div>
          {/* sub-category and price  */}
          <div className="flex flex-col md:flex-row mb-5 gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Sub Category</span>
              </label>
              <select
                required
                name="subCategory"
                className="select select-bordered"
              >
                <option value="">Pick a sub category</option>
                <option value="Outdoor games toy">Outdoor Games</option>
                <option value="Indoor games toy">Indoor Games</option>
                <option value="Ride toys">Ride On Sports Toys</option>
              </select>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
          </div>
          {/* Available quantity and rating  */}
          <div className="flex flex-col md:flex-row mb-5 gap-5">
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
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Rating between 1 to 5"
                className="input input-bordered"
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
              className="textarea textarea-bordered h-24 resize-none"
              placeholder="Product Details Description"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="my-btn w-full hover:bg-transparent hover:text-[#2396DC] transition-all duration-200 ease-in-out"
              type="submit"
              value="Add A Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;

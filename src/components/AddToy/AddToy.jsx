import React from "react";

const AddToy = () => {
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
      subCategory,
      price,
      quantity,
      rating,
      description,
    };
    console.log(createdToy);
  };
  return (
    <div className="my-container">
      <div
        className="flex h-[50vh] justify-center items-center bg-[#000000] bg-opacity-[0.5] bg-blend-multiply bg-cover bg-center"
        style={{
          backgroundImage: `url(https://i.ibb.co/6NKx039/section-banner.jpg)`,
        }}
      >
        <h2 className="text-4xl font-bold text-white">ADD A TOY</h2>
      </div>
      <div className="mt-12 lg:mt-[120px]">
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
                className="input input-bordered"
                required
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
                defaultValue="default"
                name="subCategory"
                className="select select-bordered"
              >
                <option disabled value="default">
                  Pick a sub category
                </option>
                <option value="outdoor_games">Outdoor Games</option>
                <option value="indoor_games">Indoor Games</option>
                {/* <option value="team_sports">Team Sports</option>
                <option value="balls">Balls</option>
                <option value="racket_paddles">Rackets and Paddles</option> */}
                <option value="ride_toys">Ride On Sports Toys</option>
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
                type="text"
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
                placeholder="Rating"
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

import React, { useState } from "react";
import Lottie from "lottie-react";
import registerAnimation from "../../../assets/38435-register.json";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="my-container flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-[60%]">
        <Lottie animationData={registerAnimation} loop={true} />
      </div>
      <div className="w-full lg:w-[40%] bg-blue-100 px-5 py-10 rounded-xl card-shadow">
        <h2 className="text-3xl text-center font-semibold mb-10">
          Create an account
        </h2>
        <form>
          {/* name */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered w-full"
            />
          </div>
          {/* photo url */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo URL"
              className="input input-bordered w-full"
            />
          </div>
          {/* email */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered w-full"
            />
          </div>
          {/* password  */}
          <div className="form-control mb-6 relative">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
            />
            <p
              className="absolute top-[54px] right-[15px]"
              onClick={() => setShowPass(!showPass)}
            >
              <small>{showPass ? <FaEye /> : <FaEyeSlash />}</small>
            </p>
          </div>
          <input
            type="submit"
            value="Register"
            className="my-btn w-full hover:bg-transparent hover:text-[#2396DC] transition-all duration-200 ease-in-out"
          />
          <p className="text-center mt-4 mb-6">
            <small>
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-[#2396DC]">
                Login
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

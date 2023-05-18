import React, { useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../../assets/121421-login.json";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaTwitter } from "react-icons/fa";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="my-container flex flex-col-reverse lg:flex-row justify-center items-center">
      <div className="w-full lg:w-[40%] bg-blue-100 px-5 py-10 rounded-xl">
        <h2 className="text-3xl text-center font-semibold mb-10">
          Login to your account
        </h2>
        <form>
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

            <button className="text-left ml-1 mt-2 hover:underline">
              <small>Forgot password?</small>
            </button>
          </div>
          <input
            type="submit"
            value="Login"
            className="my-btn w-full hover:bg-transparent hover:text-[#2396DC] transition-all duration-200 ease-in-out"
          />
          <p className="text-center mt-4 mb-6">
            <small>
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold text-[#2396DC]">
                Register
              </Link>
            </small>
          </p>
        </form>
        <div className="divider mb-6">OR</div>
        {/* Social login  */}
        <div className="social-login flex flex-col md:flex-row gap-5 justify-center items-center">
          <button className="social-btn hover:bg-[#3cba54] text-[#3cba54] hover:text-white border-[#3cba54]">
            <FaGoogle className="text-2xl" /> Login With Google
          </button>
          <button className="social-btn hover:bg-[#1DA1F2] text-[#1DA1F2] hover:text-white border-[#1DA1F2]">
            <FaTwitter className="text-2xl" /> Login With Twitter
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[60%]">
        <Lottie animationData={loginAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Login;

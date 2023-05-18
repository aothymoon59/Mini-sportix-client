import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../../assets/95560-error-404.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="my-container flex justify-center items-center h-screen">
      <div>
        <Lottie animationData={errorAnimation} loop={true} />
        <div className="text-center">
          <Link
            to="/"
            className="my-btn hover:bg-transparent hover:text-[#2396DC] transition-all duration-200 ease-in-out"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

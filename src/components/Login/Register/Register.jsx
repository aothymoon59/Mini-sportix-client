import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import registerAnimation from "../../../assets/38435-register.json";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, email, photo, password);

    // password validation
    if (password.length < 6) {
      setError("Password must be at least 6 digit");
      toast.error("Password must be at least 6 digit");
      form.password.focus();
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must contain at least one uppercase");
      toast.error("Password must contain at least one uppercase");
      form.password.focus();
      return;
    }

    setError("");
    setSuccess("");

    // create user by email and password
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUserData(createdUser, name, photo);
        setSuccess("User has been created successfully");
        toast.success("User has been created successfully");
        navigate("/login");
        setError("");
        form.reset();
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setSuccess("");
        toast.error(err.message);
      });
  };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="my-container flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-[60%]">
        <Lottie animationData={registerAnimation} loop={true} />
      </div>
      <div className="w-full lg:w-[40%] bg-blue-100 px-5 py-10 rounded-xl card-shadow">
        <h2 className="text-3xl text-center font-semibold mb-10">
          Create an account
        </h2>
        <div className="h-5">
          <p className="text-success text-center">{success}</p>
          <p className="text-error text-center">{error}</p>
        </div>
        <form onSubmit={handleRegister}>
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

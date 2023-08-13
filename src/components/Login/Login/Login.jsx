import React, { useContext, useRef, useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../../assets/121421-login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { HiMailOpen } from "react-icons/hi";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  const { signIn, resetPassword, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  useTitle("Login");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        setSuccess("Successfully login");
        toast.success("Successfully login");
        navigate(from, { replace: true });
        setError("");
      })
      .catch((err) => {
        let errorMessage = err.message;
        if (errorMessage == "Firebase: Error (auth/wrong-password).") {
          errorMessage = "Wrong password! Please try again";
        } else if (errorMessage == "Firebase: Error (auth/user-not-found).") {
          errorMessage = "User not found!";
        }
        console.log(errorMessage);
        setError(errorMessage);
        setSuccess("");
        toast.error(errorMessage);
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    resetPassword(email)
      .then(() => {
        toast("Please check your email for reset password", {
          icon: <HiMailOpen />,
        });
      })
      .catch((err) => {
        let errorMessage = err.message;
        if (errorMessage == "Firebase: Error (auth/missing-email).") {
          errorMessage = "Please provide email address";
        }
        console.log(errorMessage);
        setError(errorMessage);
        toast.error(errorMessage);
      });
  };

  // sign in with google pop up
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("Successfully login With Google");
        toast.success("Successfully login With Google");
        setError("");
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
        setSuccess("");
      });
  };

  //sign in with twitter
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("Successfully login With Github");
        toast.success("Successfully login With Github");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        console.log(errorMessage);
        toast.error(err.message);
        setSuccess("");
      });
  };

  return (
    <div className="my-container flex flex-col-reverse lg:flex-row justify-center items-center">
      <div className="w-full lg:w-[40%] bg-blue-100 px-5 py-10 rounded-xl card-shadow">
        <h2 className="text-3xl text-center font-semibold mb-10">
          Login to your account
        </h2>
        <div className="h-5">
          <p className="text-success text-center">{success}</p>
          <p className="text-error text-center">{error}</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
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

            <button
              onClick={handleResetPassword}
              className="text-left ml-1 mt-2 hover:underline"
            >
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
          <button
            onClick={handleGoogleSignIn}
            className="social-btn hover:bg-[#3cba54] text-[#3cba54] hover:text-white border-[#3cba54]"
          >
            <FaGoogle className="text-2xl" /> Login With Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="social-btn hover:bg-[#181717] text-[#181717] hover:text-white border-[#181717]"
          >
            <FaGithub className="text-2xl" /> Login With Github
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

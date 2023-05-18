import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-base-200 w-full mt-[50px] lg:mt-[120px]">
      <footer className="footer p-10 bg-base-200 text-base-content my-container">
        <div>
          <span className="text-[#2396DC] font-semibold text-lg">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="text-[#2396DC] font-semibold text-lg">Company</span>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/allToy" className="link link-hover">
            All Toys
          </Link>
          <Link to="/myToy" className="link link-hover">
            My Toys
          </Link>
          <Link to="/addToy" className="link link-hover">
            Add Toy
          </Link>
          <Link to="/blogs" className="link link-hover">
            Blogs
          </Link>
        </div>
        <div>
          <span className="text-[#2396DC] font-semibold text-lg">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 my-container">
        <div className="items-center grid-flow-col">
          <img
            src={"https://i.ibb.co/R6wG4vm/logo.png"}
            alt="MiniSportix"
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <p>
            <span className="text-[#2396DC]">MiniSportix </span>
            <br />
            Providing reliable Sports toy since 2018
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a href="https://twitter.com/aothymoon59" target="_blank">
              <FaTwitter className="text-[#1DA1F2]"></FaTwitter>
            </a>
            <a href="https://www.facebook.com/aothymoon59" target="_blank">
              <FaFacebook className="text-[#1877F2]"></FaFacebook>
            </a>
            <a
              href="https://www.youtube.com/@moonstechtime1034"
              target="_blank"
            >
              <FaYoutube className="text-[#FF0000]"></FaYoutube>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

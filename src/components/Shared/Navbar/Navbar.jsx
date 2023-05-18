import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allToys"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myToys"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          My Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addToy"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Add Toy
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar my-container py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex items-center text-[#2396DC]">
          <img
            src={"https://i.ibb.co/R6wG4vm/logo.png"}
            alt="MiniSportix"
            className="w-8 h-8 md:w-12 md:h-12"
          />

          <span className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            MiniSportix
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="my-btn hover:bg-transparent hover:text-[#2396DC] transition-all duration-200 ease-in-out"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

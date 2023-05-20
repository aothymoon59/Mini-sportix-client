import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import BlogsCard from "./BlogsCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useTitle("Blogs");

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);

  return (
    <div className="my-container">
      <div
        className="flex h-[50vh] justify-center items-center bg-[#000000] bg-opacity-[0.5] bg-blend-multiply bg-cover bg-center"
        style={{
          backgroundImage: `url(https://i.ibb.co/6NKx039/section-banner.jpg)`,
        }}
      >
        <h2 className="text-lg md:text-2xl text-center font-semibold text-white w-[90%] md:w-[50%]">
          Expand Your Knowledge and Skills.Dive into Informative and Engaging
          Educational Blogs for Sports Toy Enthusiasts
        </h2>
      </div>
      <div className="mt-12 lg:mt-[120px]">
        <div className="section-header text-center space-y-3 mb-12 lg:mb-16">
          <h4 className="text-[#2396DC] text-lg sm:text-xl md:text-2xl font-medium">
            Learn, Play, Grow
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Educational Blogs for Sports Toys
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogs.map((blog, i) => (
            <BlogsCard key={i} blog={blog}></BlogsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

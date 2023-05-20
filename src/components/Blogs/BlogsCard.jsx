import React from "react";

const BlogsCard = ({ blog }) => {
  const { img, question, answer } = blog || {};
  return (
    <div className="card card-compact bg-blue-100 shadow-xl">
      <figure className="h-[50%] border border-blue-100">
        <img className="w-full h-full" src={img} alt="blog question-answer" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{question}</h2>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default BlogsCard;

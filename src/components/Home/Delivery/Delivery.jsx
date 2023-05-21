import React from "react";
import { FaMoneyCheckAlt, FaPlaneDeparture, FaRedoAlt } from "react-icons/fa";

const Delivery = () => {
  return (
    <div className="my-container mt-12 lg:mt-[120px] grid lg:grid-cols-3 gap-1 text-white">
      <div className="bg-[#ef3a82] flex gap-5 justify-center items-center lg:rounded-l-full py-5">
        <FaPlaneDeparture className="text-4xl" />
        <div>
          <h4 className="text-xl font-semibold">FREE DELIVERY</h4>
          <p className="font-medium">For all orders over $100</p>
        </div>
      </div>
      <div className="bg-[#2396DC] flex gap-5 justify-center items-center py-5">
        <FaRedoAlt className="text-4xl" />
        <div>
          <h4 className="text-xl font-semibold">90 DAYS RETURN</h4>
          <p className="font-medium">If goods have problem</p>
        </div>
      </div>
      <div className="bg-[#7AC141] flex gap-5 justify-center items-center lg:rounded-r-full py-5">
        <FaMoneyCheckAlt className="text-4xl" />
        <div>
          <h4 className="text-xl font-semibold">SECURE PAYMENT</h4>
          <p className="font-medium">100% secure payment</p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

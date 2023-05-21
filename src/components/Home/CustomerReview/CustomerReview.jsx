import React from "react";

const CustomerReview = () => {
  return (
    <div className="mt-12  lg:mt-[120px] bg-blue-50">
      <div className="my-container">
        <div className="carousel h-[70vh] md:h-[50vh] w-full">
          {/* slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex justify-center items-center w-full">
              <div className="sm:w-1/2 text-center">
                <h2 className="font-semibold text-2xl mb-5">
                  It's incredible. Best. Product. Ever! MiniSportix toy Store
                  was worth a fortune to my company
                </h2>
                <div>
                  <img
                    className="rounded-full w-10 h-10 mx-auto"
                    src={"https://i.ibb.co/tc5VRPQ/customer1.png"}
                    alt="customer 1"
                  />
                  <p className="text-lg font-semibold mt-5">- Mair Q.</p>
                  <p> Dover, North Carolina </p>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex justify-center items-center w-full">
              <div className="sm:w-1/2 text-center">
                <h2 className="font-semibold text-2xl mb-5">
                  Very easy to use. I love your system. Definitely worth the
                  investment. Buy this now.
                </h2>
                <div>
                  <img
                    className="rounded-full w-10 h-10 mx-auto"
                    src={"https://i.ibb.co/0jvGTFF/customer2.png"}
                    alt="customer 1"
                  />
                  <p className="text-lg font-semibold mt-5">- Neely E.</p>
                  <p> Whippleville, New York </p>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex justify-center items-center w-full">
              <div className="sm:w-1/2 text-center">
                <h2 className="font-semibold text-2xl mb-5">
                  I made back the purchase price in just 48 hours! You guys
                  rock!
                </h2>
                <div>
                  <img
                    className="rounded-full w-10 h-10 mx-auto"
                    src={"https://i.ibb.co/qWCcLy9/customer3.png"}
                    alt="customer 1"
                  />
                  <p className="text-lg font-semibold mt-5">- Melony A.</p>
                  <p> Faifax, Washington DC </p>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;

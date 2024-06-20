import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { customers } from "../../../constants/customerSays";

const CustomerSays = () => {
  const carouselRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.children[0].clientWidth; // Width of one customer item
      if (direction === "left") {
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const updateButtonsState = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", updateButtonsState);
      updateButtonsState();
    }
    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", updateButtonsState);
      }
    };
  }, []);

  return (
    <div className="w-full bg-white py-8 md:px-16">
      <div className="flex flex-col md:mx-[7rem]">
        <div className="flex justify-between gap-3 mx-3 md:gap-16 items-center">
          <h1 className="text-20 md:text-40 mx-4 font-bold">
            What Our Customers Say
          </h1>
          <div className="flex gap-3 text-black">
            <div
              className={`border p-2 bg-white rounded-full transition-[1s] cursor-pointer ${
                isAtStart ? "opacity-50 cursor-not-allowed" : "hover:-translate-x-2"
              }`}
              onClick={() => !isAtStart && handleScroll("left")}
            >
              <FaArrowLeftLong className="text-xl md:text-2xl" />
            </div>
            <div
              className={`border p-2 bg-white rounded-full transition-[1s] cursor-pointer ${
                isAtEnd ? "opacity-50 cursor-not-allowed" : "hover:translate-x-2"
              }`}
              onClick={() => !isAtEnd && handleScroll("right")}
            >
              <FaArrowRightLong className="text-xl md:text-2xl" />
            </div>
          </div>
        </div>
        <div
          className="w-full flex overflow-x-auto hide-scrollbar"
          ref={carouselRef}
          style={{ scrollBehavior: "smooth" }}
        >
          {customers.map((customer, index) => (
            <div key={index} className="min-w-[100%]">
              <div className="px-6 py-4">
                <p className="text-[16px] md:text-[16px]">{customer.desc}</p>
                <div className="flex items-center gap-3 mt-7">
                  <img
                    className="w-[32px] h-[32px] rounded-full object-cover"
                    src={customer.img}
                    alt="profile"
                  />
                  <div>
                    <h3 className="text-[15px]">{customer.name}</h3>
                    <p className="text-[14px]">
                      <span className="text-[13px]">From</span> {customer.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSays;

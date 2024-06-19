import React from "react";
import Booking from "./Booking";

const Hero = () => {
  return (
    <div className="hero w-full h-full md:h-[90vh] flex overflow-y-hidden  justify-center relative">
      <div className="text-[24px] text-white text-center  absolute  top-[8rem] md:top-8">
        <h1 className="sm:text-[44px] md:text-[64px] font-bold">
          Discover the world on wheels{" "}
        </h1>
        <span className="sm:text-[44px] md:text-[64px] font-bold">
          {" "}
          with our car rental service
        </span>
      </div>
      <img
        className="w-full  object-cover mt-[13rem] sm:mt-[13rem] md:mt-[2rem]"
        src="/image_23.png"
        alt="Car rental"
      />
    </div>
  );
};

export default Hero;

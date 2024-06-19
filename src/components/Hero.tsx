import React from "react";
import Booking from "./Booking";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const Hero = () => {
  return (
    <div className="h-full">
      <div className="hero w-full h-full md:h-[90vh] flex overflow-y-hidden justify-center relative">
        <div className="text-[24px] text-white text-center absolute top-[8rem] md:top-8">
          <h1 className="sm:text-[44px] md:text-[64px] font-bold">Discover the world on wheels</h1>
          <span className="sm:text-[44px] md:text-[64px] font-bold">with our car rental service</span>
        </div>
        <img className="w-full object-cover mt-[13rem] sm:mt-[13rem] md:mt-[2rem]" src="/image_23.png" alt="Car rental" />
      </div>
      <div className="relative w-full top-16 h-full mx-auto">
        <div className="booking-container mx-3 md:mx-8">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Booking />
         </LocalizationProvider>
        </div>
      </div>
    </div>
  );
};

export default Hero;

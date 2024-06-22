import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import Logo from "../assets/Heading.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-[5%] py-3 bg-black fixed top-0 right-0 left-0 z-50">
     <h1 className="font-bold text-white text-3xl">DEE 
     <span className="text-red-500">PINES</span></h1>
      <div className="hidden md:block text-white ">
        <ul className="flex gap-4 font-[600] ">
          <li className="hover:text-orange-600 cursor-pointer transition-[1s]">Home</li>
          <li className="hover:text-orange-600 cursor-pointer transition-[1s]">About us</li>
          <li className="hover:text-orange-600 cursor-pointer transition-[1s]">Services</li>
          <li className="hover:text-orange-600 cursor-pointer transition-[1s]">Contact</li>
          <li className="hover:text-orange-600 cursor-pointer transition-[1s]">Home</li>
        </ul>
      </div>
      <div>
        <HiMenuAlt4 className="text-4xl text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;

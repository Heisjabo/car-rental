import React from "react";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import Logo from "../assets/Heading.png"
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#0F0F0F] w-full py-8 text-white">
      <div className="  flex justify-center items-center gap-10 mx-6 flex-wrap">
        <div className="w-full text-center md:w-[488px]">
          <h1 className="md:text-[36px] text-[24px] font-bold py-3">More Info Contact Us ⚡️</h1>
          <p className="md:text-start text-gray-400 text-[15px]">
          Get exclusive access to car rentals, houses and mordern plots. 
          Know more about our products and services.
          </p>
        </div>
        {/* <div className="flex text-black gap-8">
          <div className="flex items-center justify-center gap-2 bg-white py-3 px-4 rounded-full">
            <FaApple className="text-lg"/>
            <div className="">
              <p className="md:text-[10px] text-[8px]">Download on the</p>
              <h2 className="md:text-[12px text-[10px]">App Store</h2>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full">
            < BiLogoPlayStore text-lg/>
            <div className="">
              <p className="md:text-[10px] text-[7px]">Download on the</p>
              <h2 className="md:text-[12px] text-[10px]">App Store</h2>
            </div>
          </div>
        </div> */}
      </div>
    <div className="w-screen h-[0.5px] bg-gray-300 my-12 opacity-[0.4]"/>
    <div className="flex items-center justify-around flex-wrap gap-4 mx-6">
      <div className="">
        <h1 className="font-bold text-white text-3xl">DEE 
     <span className="text-red-500">PINES</span></h1>
      </div>
      <div className="">
        <ul className="flex items-center gap-3">
          <li>Rent</li>
          <li>Share</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="">
        <ul className="flex items-center gap-3">
          <li className="text-[22px]">
            <a href=""><FaInstagram /></a>
          </li>
          <li className="text-[22px]">
            <a href=""><FaDribbble /></a>
          </li>
          <li className="text-[22px]">
            <a href=""><BsTwitterX /></a>
          </li>
          <li className="text-[22px]">
            <a href=""><FaYoutube /></a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
};

export default Footer;

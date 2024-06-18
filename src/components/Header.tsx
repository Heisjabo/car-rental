import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import Logo from "../assets/Heading.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-[5%] py-3 bg-black fixed top-0 right-0 left-0 z-50">
      <div>
        <HiMenuAlt4 className="text-2xl text-white" />
      </div>
      <img src={Logo} alt="logo" />
      <button className="bg-transparent border border-slate-200 rounded-[48px] px-4 py-1 text-[16px] text-white">
        Login / Register
      </button>
    </div>
  );
};

export default Header;

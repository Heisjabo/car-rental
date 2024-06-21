import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { DatePicker } from "@mui/x-date-pickers";
import { useEffect } from "react";

const Booking = () => {
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         console.log(position);
    //     })
    // })
  return (
  <div className="bg-[#ffffff] py-3  rounded-xl shadow-lg">
        {/* <h2 className="pl-3 py-1 font-bold text-orange-600 text-center text-lg">Book with us</h2> */}
    <div className="px-3 pb-3 flex justify-evenly items-center gap-3 overflow-auto">
        <div className="flex flex-col items-start">
            <label className="text-[12px] md:text-[14px]">Pick up Location</label>
            <div className=" flex items-center rounded-[4px] border border-gray-300 hover:border-gray-600">
            <CiLocationOn className="mx-3 text-lg" />    
            <input 
            className="outline-none py-2 bg-transparent"
            type="text" 
            name="" id="" 
            placeholder="Search a location" 
            />
            </div>
        </div>
        {/* <div className="flex flex-col items-start">
            <label className="text-[12px] md:text-[14px]">Pick up date</label>
            <div className="flex items-center">
            <DatePicker 
            className="w-48"
             />
            </div>
        </div> */}
        <div className="flex flex-col items-start">
            <label className="text-[12px] md:text-[14px]">Drop off Location</label>
            <div className=" flex items-center rounded-[4px] border border-gray-300 hover:border-gray-600">
            <CiLocationOn className="mx-3 text-lg" />    
            <input 
            className="outline-none py-2 bg-transparent"
            type="text" 
            name="" id="" 
            placeholder="Search a location" 
            />
            </div>
        </div>
        {/* <div className="flex flex-col items-start">
            <label className="text-[12px] md:text-[14px]">Drop off date</label>
            <div className="flex items-center">
            <DatePicker 
            className="w-48 py-2"
             />
            </div>
        </div> */}
        <div className="text-white">
            <label htmlFor="">test</label>
        <button className="flex items-center justify-center bg-black py-2 px-4 w-48 rounded-full  transition-all hover:bg-orange-600 cursor-pointer hover:translate-x-3 duration-100">
            Find a Vehicle
            <FaArrowRightLong className="ml-2"/>
        </button>
        </div>
    </div>
  </div>
  )};

export default Booking;

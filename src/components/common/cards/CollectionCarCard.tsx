import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { MdAutoMode } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdElectricBolt } from "react-icons/md";

interface CarCard {
  //   id: number;
  name: string;
  price: number;
  mileage: string;
  transmission: string;
  capacity: string;
  type: string;
  image: string;
}

interface ICarCardProps {
  car: CarCard;
}

const CarCard: React.FC<ICarCardProps> = ({ car }) => {
  return (
    <div className=" rounded-lg shadow-md bg-white overflow-hidden border border-[#E5E5E5]">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg text-[#333333] font-semibold">{car.name}</h2>
        <p className="text-xl font-bold text-[#000000]">
          ${car.price}
          <span className="text-sm font-normal text-[#808080]">/day</span>
        </p>
        <div className="flex justify-between mt-4 bg-[#F6F6F6] p-2 rounded-md">
          <div className="flex items-center space-x-2 flex-col">
            <BsClockHistory className="material-icons text-black" />
            <span className=" text-[#4A4A4A]">{car.mileage}</span>
          </div>
          <div className="flex items-center space-x-2 flex-col">
            <MdAutoMode className="material-icons text-black" />
            <span className=" text-[#4A4A4A]">{car.transmission}</span>
          </div>
          <div className="flex items-center space-x-2 flex-col">
            <HiOutlineUserGroup className="material-icons text-black" />
            <span className=" text-[#4A4A4A]">{car.capacity}</span>
          </div>
          <div className="flex items-center space-x-2 flex-col">
            <MdElectricBolt className="material-icons text-black" />
            <span className=" text-[#4A4A4A]">{car.type}</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-black text-white py-2 rounded-lg">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;

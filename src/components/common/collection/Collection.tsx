import React, { useState } from "react";
import CarCard from "../cards/CollectionCarCard";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Collection = () => {
  const [selected, setSelected] = useState("Popular Car");

  const cars = [
    {
      name: "Audi A8 L 2022",
      price: 78.9,
      image: "/images/img1.png",
      mileage: "4,000",
      transmission: "Auto",
      capacity: "4 Person",
      type: "Electric",
    },
    {
      name: "Audi A8 L 2022",
      price: 78.9,
      image: "/images/img1.png",
      mileage: "4,000",
      transmission: "Auto",
      capacity: "4 Person",
      type: "Electric",
    },
    {
      name: "Audi A8 L 2022",
      price: 78.9,
      image: "/images/img1.png",
      mileage: "4,000",
      transmission: "Auto",
      capacity: "4 Person",
      type: "Electric",
    },
    {
      name: "Nissan Maxima Platinum 2022",
      price: 78.9,
      image: "/images/img1.png",
      mileage: "4,000",
      transmission: "Auto",
      capacity: "4 Person",
      type: "Electric",
    },
    {
      name: "Porsche Cayenne GTS 2022",
      price: 78.9,
      image: "/images/img1.png",
      mileage: "4,000",
      transmission: "Auto",
      capacity: "4 Person",
      type: "Electric",
    },
  ];

  const buttons = [
    "Popular Car",
    "Luxury Car",
    "Vintage Car",
    "Family Car",
    "Off-Road Car",
  ];
  return (
    <div className=" bg-[#F5F5F5] text-white py-10">
      <div className="max-w-[1440px] w-[90%] mx-auto">
        <div className="flex flex-col justify-center items-center gap-3 max-w-[700px] mx-auto">
          <h1 className=" text-[#0F0F0F] sm:text-[32px] text-[25px] md:text-[44px] font-bold text-center">
            Our Impressive Collection of Cars
          </h1>
          <p className=" text-[#0F0F0F] text-center">
            Ranging from elegant sedans to powerful sports cars, all carefully
            selected to provide our customers with the ultimate driving
            experience.
          </p>
        </div>

        <div className="flex space-x-2 py-4 bg-gray-100 flex-wrap rounded-lg mx-auto justify-center items-center">
          {buttons.map((button) => (
            <button
              key={button}
              className={`px-4 py-2 mt-2 sm:text-[17px] text-nowrap rounded-full text-[10px] focus:outline-none ${
                selected === button
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
              onClick={() => setSelected(button)}
            >
              {button}
            </button>
          ))}
        </div>

        <Grid container className="flex gap-2  bg-gray-100 justify-center">
          {cars.map((car) => (
            <Grid key={car.name} item xs={12} sm={6} md={3} lg={3}>
              <CarCard car={car} />
            </Grid>
          ))}
        </Grid>

        <Link
          to="/"
          className=" text-center bg-black px-4 py-2 rounded-lg w-[200px] mx-auto text-white flex justify-center items-center my-[50px]"
        >
          <span>See All</span>{" "}
          <BsArrowRight
            className=" hover:translate-x-3 transition duration-600"
            ml-2
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Collection;

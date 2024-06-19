import React from "react";
import BarndCard from "../cards/BarndCard";
import { Grid } from "@mui/material";
import { carBrands } from "../../../../constants/cars";
import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-[1440px] w-[90%] mx-auto">
        <div className="flex items-center justify-between py-3">
          <h4 className=" cursor-pointer"> Brands</h4>
          <Link to="/" className=" underline">
            View All brand
          </Link>
        </div>
        <Grid container spacing={2}>
          {carBrands.map((car) => (
            <Grid item xs={6} sm={4} md={2} key={car.id}>
              <BarndCard brand={car} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Brands;

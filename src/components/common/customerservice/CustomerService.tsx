import { Grid } from "@mui/material";
import { FaTruck, FaHeadset, FaCheckCircle } from "react-icons/fa";

const CustomerService = () => {
  return (
    <div className="max-w-[1440px] w-[90%] mx-auto">
      <Grid
        container
        className="flex justify-around items-center py-[100px]"
        spacing={2}
      >
        <Grid item xs={12} sm={6} md={4}>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white p-4">
              <FaTruck className="text-black" size={24} />
            </div>
            <h3 className="font-bold text-lg text-white mt-2">
              Quality Choice
            </h3>
            <p className="text-gray-500 text-sm text-center">
              We offer a wide range of high-quality vehicles to choose from,
              including luxury cars, SUVs, vans, and more.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white p-4">
              <FaHeadset className="text-black" size={24} />
            </div>
            <h3 className="font-bold text-lg text-white mt-2">
              Affordable Prices
            </h3>
            <p className="text-gray-500 text-sm text-center">
              Our rental rates are highly competitive and affordable, allowing
              our customers to enjoy their trips without breaking the bank.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white p-4">
              <FaCheckCircle className="text-black" size={24} />
            </div>
            <h3 className="font-bold text-lg text-white mt-2">
              Convenient Online Booking
            </h3>
            <p className="text-gray-500 text-sm text-center">
              With our easy-to-use online booking system, customers can quickly
              and conveniently reserve their rental car from anywhere, anytime.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomerService;

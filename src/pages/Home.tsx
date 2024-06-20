import React from "react";
import Hero from "../components/Hero";
import Brands from "../components/common/brands/Brands";
import Collection from "../components/common/collection/Collection";
import HowItWorks from "../components/common/how-it-work/HowItWorks";
import CustomerService from "../components/common/customerservice/CustomerService";
import CustomerSays from "../components/layout/CustomerSays";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Brands />
      <Collection />
      <HowItWorks />
      <CustomerService />
      <CustomerSays />
    </div>
  );
};

export default Home;

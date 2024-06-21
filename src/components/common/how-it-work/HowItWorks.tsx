import React from "react";
import { FaSearch, FaHouseUser , FaLandmark } from "react-icons/fa";
const steps = [
  {
    icon: <FaSearch size={24} />,
    title: "Car Rent and Fast truck",
    description:
      "Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best.",
  },
  {
    icon: <FaHouseUser  size={24} />,
    title: "Buy plot at modern place",
    description:
      "Buy our best plot in city and country we beeen working on this for long trust our company to delivery very competitive place to resides.",
  },
  {
    icon: <FaLandmark size={24} />,
    title: "House for sale",
    description:
      "We sell best house at suitable price, our houses located at good place and to know more about house don't hasitate to contact us in below contact.",
  },
];
const HowItWorks = () => {
  return (
    <div className=" bg-white py-10 px-4">
      <div className="max-w-[1440px] w-[90%] mx-auto">
        <div className="flex flex-col justify-center items-center gap-3 max-w-[700px] mx-auto">
          <h1 className=" text-[#0F0F0F] sm:text-[32px] text-[25px] md:text-[44px] font-bold text-center">
            How it woks
          </h1>
          <p className=" text-[#0F0F0F] text-center mb-4">
            Here are our best services we delivery on people who seek to rent cars, buy houses and looking plot to buy. Read more on below to know more about our services.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center bg-gray-100 p-2 rounded-lg shadow-md">
          <div className="lg:w-1/2 flex flex-col space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0 text-gray-700">{step.icon}</div>
                <div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8 flex justify-center items-center">
            <div className="relative">
              <img
                src="/images/image.png"
                alt="Car Image"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

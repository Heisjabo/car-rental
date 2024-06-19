import React from "react";
import { FaSearch, FaCalendarCheck, FaSmile } from "react-icons/fa";
const steps = [
  {
    icon: <FaSearch size={24} />,
    title: "Browse and select",
    description:
      "Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best.",
  },
  {
    icon: <FaCalendarCheck size={24} />,
    title: "Book and confirm",
    description:
      "Book your desired car with just a few clicks and receive an instant confirmation via email or SMS.",
  },
  {
    icon: <FaSmile size={24} />,
    title: "Enjoy your ride",
    description:
      "Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service.",
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
            Renting a luxury car has never been easier. Our streamlined process
            makes it simple for you to book and confirm your vehicle of choice
            online
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

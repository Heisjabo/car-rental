import { useState } from "react";
import { useParams } from "react-router-dom";
import { BsClockHistory } from "react-icons/bs";
import { MdAutoMode } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdElectricBolt } from "react-icons/md";
import CarCard from "../components/common/cards/CollectionCarCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const SingleCar = () => {
  const { id } = useParams();

  const cars = [
    {
      id: 1,
      name: "Audi A8 L 2022",
      price: 78.9,
      images: [
        "/images/img1.png",
        "/images/img1.png",
        "/images/img1.png",
        "https://www.shutterstock.com/image-photo/geneva-mar-4-bmw-335i-260nw-181164407.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
      ],
      mileage: "4,000",
      transmission: "Auto",
      capacity: "4 Person",
      type: "Electric",
    },
    {
      id: 2,
      name: "Audi A8 L 2022",
      price: 78.9,
      images: [
        "/images/img1.png",
        "/images/img1.png",
        "/images/img1.png",
        "/images/img1.png",
        "/images/img1.png",
      ],
      mileage: "4,000",
      transmission: "Auto",
      capacity: "4 Person",
      type: "Electric",
    },
    {
      id: 3,
      name: "Audi A8 L 2022",
      price: 78.9,
      images: [
        "/images/img1.png",
        "/images/img1.png",
        "/images/img1.png",
        "/images/img1.png",
        "/images/img1.png",
      ],
      mileage: "4,000",
      transmission: "Auto",
      capacity: "4 Person",
      type: "Electric",
    },
    {
      id: 4,
      name: "Nissan Maxima Platinum 2022",
      price: 78.9,
      images: [
        "/images/img1.png",
        "/images/img1.png",
        "/images/img1.png",
        "/images/img1.png",
        "/images/img1.png",
      ],
      mileage: "4,000",
      transmission: "Auto",
      capacity: "4 Person",
      type: "Electric",
    },
    {
      id: 5,
      name: "Porsche Cayenne GTS 2022",
      price: 78.9,
      images: [
        "/images/img1.png",
        "/images/img1.png",
        "/images/img1.png",
        "/images/img1.png",
        "/images/img1.png",
      ],
      mileage: "4,000",
      transmission: "Auto",
      capacity: "4 Person",
      type: "Electric",
    },
  ];

  const car = cars.find((car) => car.id === parseInt(id));
  const [mainImage, setMainImage] = useState(car.images[0]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <main className="w-full mx-auto bg-[#F5F5F5] flex flex-col gap-6 text-white py-10 ">
      <div className="flex w-[90%] md:w-[90%] mx-auto gap-8 flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-cover rounded-xl mx-0">
          <img
            src={mainImage}
            alt={car.name}
            className="w-full object-cover h-[50vh] cursor-pointer rounded-lg"
          />
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {/* Display small images for selection */}
            {car.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${car.name} ${index}`}
                className={`w-1/4 object-cover h-[10vh] cursor-pointer rounded-md border ${
                  mainImage === image ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 w-full md:w-1/2 relative flex flex-col justify-between">
      <div>
        <h1 className="font-bold text-2xl text-black">{car.name}</h1>
        <p className="mt-4 text-slate-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book.
        </p>
        <div className="mt-4 p-2 rounded-md text-lg space-y-2">
          <div className="flex items-center space-x-4">
            <BsClockHistory className="text-black" />
            <span className="text-[#4A4A4A]">Mileage: {car.mileage}</span>
          </div>
          <div className="flex items-center space-x-4">
            <MdAutoMode className="text-black" />
            <span className="text-[#4A4A4A]">Transmission: {car.transmission}</span>
          </div>
          <div className="flex items-center space-x-4">
            <HiOutlineUserGroup className="text-black" />
            <span className="text-[#4A4A4A]">Capacity: {car.capacity}</span>
          </div>
          <div className="flex items-center space-x-4">
            <MdElectricBolt className="text-black" />
            <span className="text-[#4A4A4A]">Type: {car.type}</span>
          </div>
        </div>
      </div>
        <h2 className="font-bold ml-3 text-xl text-slate-700 mt-4">
          ${car.price} <span className="font-normal">/month</span>
        </h2>
      <div className="flex flex-col">
        <button className="w-full mt-4 bg-black text-white py-3 rounded-lg">
          <a href="#order">Rent Now</a>
        </button>
      </div>
    </div>
      </div>
      <div className="flex w-[90%] md:w-[90%] mx-auto gap-8 flex-col">
        <h1 className="flex text-black text-2xl font-bold">Related cars</h1>
        <Swiper
      modules={[Autoplay]}
      spaceBetween={35}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 1,
        },
      }}
      className="flex gap-4 items-center w-full"
    >
      {cars.map(car => (
        <SwiperSlide key={car.id} >
          <CarCard car={car} />
        </SwiperSlide>
      ))}
    </Swiper>
        
      </div>
    </main>
  );
};

export default SingleCar;

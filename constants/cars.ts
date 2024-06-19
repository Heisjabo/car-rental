import { SiToyota } from "react-icons/si";
import { SiMitsubishi } from "react-icons/si";
import { SiTesla } from "react-icons/si";
import { SiBmw } from "react-icons/si";
import { SiFord } from "react-icons/si";
import { SiHyundai } from "react-icons/si";
import { SiKia } from "react-icons/si";
import { SiNissan } from "react-icons/si";
import { SiChevrolet } from "react-icons/si";
import { SiLandrover } from "react-icons/si";

export interface ICarBrand {
  id: number;
  name: string;
  icon: any;
}

export const carBrands: ICarBrand[] = [
  {
    id: 1,
    name: "Toyota",
    icon: SiToyota,
  },
  {
    id: 2,
    name: "Mitsubishi",
    icon: SiMitsubishi,
  },
  {
    id: 3,
    icon: SiTesla,
    name: "Tesla",
  },
  {
    id: 4,
    icon: SiBmw,
    name: "BMW",
  },
  {
    id: 5,
    icon: SiFord,
    name: "Ford",
  },
  {
    id: 6,
    icon: SiHyundai,
    name: "Hyundai",
  },
  {
    id: 7,
    icon: SiKia,
    name: "Kia",
  },
  {
    id: 8,
    icon: SiNissan,
    name: "Nissan",
  },
  {
    id: 9,
    icon: SiChevrolet,
    name: "Chevrolet",
  },
  {
    id: 10,
    icon: SiLandrover,
    name: "Land Rover",
  },
];

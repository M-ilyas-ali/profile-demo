import React from "react";
import Fiber from "./Fiber";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
const Introduction = () => {
  return (
    <div className="  bg-[#141614]  grid  lg:grid-cols-2 w-full h-screen  ">
      <div className=" animate-pulse w- relative p-4">
        <div>
          <Image className="m-4 "layout="responsive" objectFit="contain" width={50} height={50} alt="img" src="/a.svg" />
        </div>
      </div>

      <div className="container flex justify-center items-center   ">
        <div>
          <h1 className=" text-center px-4 text-gray-200 text-2xl sm:text-4xl md:text-6xl  font-bold font-serif">
            Front-End Software Developer
          </h1>
          <h2 className="sm:px-4 p-2 text-center sm:text-xl text-md  text-gray-400   ">
            Resolving design problems, building smart user interfaces and useful
            interactions,developing rich web application and seamless web
            experiences.
          </h2>
        </div>
      </div>

      {/* <div className="relative bg-fixed bg-center bg-no-repeat transform rotate-90  h-screen bg-custom-image"></div> */}
    </div>
  );
};
export default Introduction;

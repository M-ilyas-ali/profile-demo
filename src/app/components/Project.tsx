import React from "react";
import{motion} from'framer-motion'
import { useState } from "react";
const Project = () => {
  const [data, setdata] = useState(0);
  function update() {
    const First_slide = data === 0;
    const newSlide = First_slide ? images_array.length - 1 : data - 1;
    setdata(newSlide);
  }
  const images_array = ["bg-panaverse1", "bg-panaverse2", "bg-panaverse3"];

  return (
    <div className="w-full h-screen relative px-16 py-16 m-auto bg-[#141614] grid grid-rows-1">
      <motion.div className={`relative ${images_array[data]} w-full h-full bg-no-repeat bg-cover rounded-3xl `}
       initial={{x:-300}} whileInView={{x:0,transition:{type:"spring", bounce:0.4,duration:0.8}}}>
       
      </motion.div>
      <div className="flex justify-center items-center mt-4">
        <button
          className=" bg-transparent text-2xl font-bold text-gray-200 border-solid border-4 border-white  hover:bg-slate-400   w-[200px] h-[60px] rounded-full"
          onClick={update}
        >
          Click
        </button></div>
    </div>
  );
};
export default Project;

import React from "react";
import Image from "next/image";
import {motion} from 'framer-motion'
import { TypeAnimation } from "react-type-animation";
const About=()=>{
    return(
<>
    <div className="bg-[#141614] w-full h-screen grid lg:grid-cols-2 relative">
      
    <div className="container grid justify-center items-center">
            <motion.div 
             initial={{x:-300}} whileInView={{x:0,transition:{type:"spring", bounce:0.4,duration:0.8}}}>
                <div className=" flex justify-center items-center"><Image alt="picture" src="/elyas.jpg " width={140} height={140}  className="rounded-full mix-blend-luminosity "/></div>
            <h1 className="text-gray-50 text-2xl sm:text-4xl md:text-6xl text-center font-serif font-bold ">
                <TypeAnimation
                sequence={[
                    'Hi 😃,',
                    1000,
                    'Hi I,m',
                    2000,
                    'Hi I,m M.Ilyas.Ali',
                    3000,
                ]} 
                wrapper="span"
                cursor={true}
                repeat={Infinity}/>

            </h1>
            <h2 className=" text-center text-gray-400 text-lg md:text-2xl p-4">Front End Developer/JavaScript & TypeScript Fan/ CMS Expert</h2>
            </motion.div>
            </div>
            <motion.div className=" flex   justify-center  items-center inset-0 mx-10 z-30"
             initial={{x:300}} whileInView={{x:0,transition:{type:"spring", bounce:0.4,duration:0.8}}}>
                <ul className="text-gray-100 text-md md:text-2xl  px-2 ">
                    <li>Professionally Connected with Web development industry</li>
                    <li>Problem solver,well-organized person,loyal employee with high attention to detail</li>
                    <li>Fan of MMA,Video Game,Coding of Course ❤️</li>
                    <li>Interested in the entire frontend spectrum and working on ambitious projects with interesting people</li>
                </ul>
            </motion.div>
        </div>
    
</>
    )
}
export default About;
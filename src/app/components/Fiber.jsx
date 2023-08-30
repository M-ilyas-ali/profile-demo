
import React from 'react'
import { ReactThreeFiber } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { useFrame,useLoader } from '@react-three/fiber'
import {TextureLoader} from 'three/src/loaders/TextureLoader'
import {motion} from 'framer-motion'
function Sphere (){
    const myref=useRef();
    useFrame(()=>{
        myref.current.rotation.y += 0.001
    })
    const material=useLoader(TextureLoader,"/earthlights1k.jpg")
    return(
        
        <mesh ref={myref} className="z-40">
            <sphereGeometry args={[2.8,40,40]}  />
            <meshStandardMaterial map={material}/>
            <ambientLight density={3} />
        </mesh>
    
    )
}
export default function Fiber(){
    return(
        <div className='w-full h-full md:h-screen bg-[#141614] grid lg:grid-cols-2'>
        <Canvas>
        <Sphere />
        </Canvas>
        <motion.div className=" text-center text-gray-200 flex py-4 justify-center items-center text-2xl md:text-3xl "  initial={{x:100}} whileInView={{x:0,transition:{type:"spring", bounce:0.4,duration:0.8}}}>
           <div className='py-4'> <span>🙂</span><h1 className='text-center mx-20 my-3'>What would you do if you had software expert at your fingertips?</h1>
            <p>feel free to Contact for your projects and queries </p>
            </div>
        </motion.div>
        </div>
    )
}
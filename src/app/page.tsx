"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Introduction from '../../src/app/components/Introduction'
import Fiber from '../app/components/Fiber'
import Tec from './components/Tec'
import About from './components/About'
import Project from './components/Project'


export default function Home() {
  return (
    <>
   
   <Introduction/>
   <About/>
    <Tec/>
    <Project/>
   <Fiber/>  
   

   </>
    )
}

import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link, animateScroll as scroll } from "react-scroll";



const Home = () => {
   

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-[1000px]'>
            <p className='text-pink-600 text-3xl sm:text-4xl font-bold'>Hi, my name is,</p>
            <h1 className='text-4xl sm:text-8xl font-bold text-[#ccd6f6]'>wulu</h1>
            <h2 className='text-1xl sm:text-2xl font-bold text-[#8192d5]'>A ROBLOX developer,</h2>
            <h3 className='text-1xl sm:text-4xl font-bold text-[#adb4d0] '>A 3D Modeler, Programmer and a VFX Designer</h3>
            
            <div>
                <button onClick={() => scroll.scrollToBottom()} className='text-white group border-2 px-6 py-3 my-3 flex items-center hover:bg-pink-600 duration-150 hover:border-pink-600 duration-150 hover:px-9 duration-30 '> View Work
                  
                    <span className='group-hover:rotate-90 duration-300 '>
                    <HiArrowNarrowRight className='ml-3.5'/>
                    </span>
                    
                </button>
            </div>
        </div>
        <head>
            <title>wow</title>
        </head>
    </div>
  )
}

export default Home
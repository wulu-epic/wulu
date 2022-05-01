import React from 'react'

import Bisento from '../assets/bisento.png'
import particle from '../assets/particle.gif'
import brokenSword from '../assets/broken-sword.jpg'
import scripting from '../assets/scripting.gif'
import greatSword from '../assets/great-sword.jpg'
import katana from '../assets/katana.png'

const Work = () => {
    return (
        <div name='work' className='w-full h-[1600x] text-gray-200 bg-[#0a192f] '>
            <div style={{backgroundSize: "cover"}} className='max-w-[1000px] max-h-[500x]  mx-auto p-3 flex-col justify-center w-full h-full'>
                <div>
                    <div className='sm:text-left pb-2 pl-1 flex items-center justify-center'>
                        <p className='text-4xl  font-bold inline border-b-4 border-pink-600 '>
                            Work
                        </p>
                    </div>
                    <div className='sm:text-left top-2 pl-1 flex items-center justify-center'>
                        <p className='text-4xl  font-bold '>
                        // Check out some of my creations!
                        </p>
                    </div>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-[1000px] h-[350px] w-full  pb-11 pt-10 hover:scale-100'>
                    <div style={{ backgroundImage: `url(${particle})`, backgroundSize: "cover"}} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-200  hover:cursor-pointer' onClick={() => window.open("https://gyazo.com/6f83bf2a2ed6991ca31db2eb5dc6ef2d")} >
                        <p className='font-bold'>
                            Death Beam
                        </p>
                    </div>
         
                    <div style={{ backgroundImage: `url(${brokenSword})`, backgroundSize: "cover" , backgroundPositionY: "-600px" }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-200  hover:cursor-pointer' onClick={() => window.open("https://gyazo.com/8f083193bdc3b26f3239cf79fbd5e25f")} >
                            <p className='font-bold '>
                               Broken Sword
                            </p>
                    </div>

                    <div style={{ backgroundImage: `url(${greatSword})`, backgroundSize: "cover" }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-200  hover:cursor-pointer' onClick={() => window.open("https://i.gyazo.com/thumb/1200/8db34a39ea3416b8393c5207c734f643-png.jpg")} >
                            <p className='font-bold '>
                                Great Sword
                            </p>
                    </div>

                    <div style={{ backgroundImage: `url(${scripting})`, backgroundSize: "cover" }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-200  hover:cursor-pointer' onClick={() => window.open("https://imgur.com/a/Mi8AIQd")} >
                            <p className='font-bold '>
                                Star Wars Jedi Fallen Order
                            </p>
                    </div>

                    <div style={{ backgroundImage: `url(${Bisento})`, backgroundSize: "cover" , backgroundPositionY: "-150px"}} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-200  hover:cursor-pointer' onClick={() => window.open("https://imgur.com/a/Mi8AIQd")} >
                            <p className='font-bold '>
                                Bisento
                            </p>
                    </div>

                    <div style={{ backgroundImage: `url(${katana})`, backgroundSize: "cover", backgroundPositionY: "-50px", scale:"30%" }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-90 duration-200  hover:cursor-pointer' onClick={() => window.open("https://gyazo.com/b0c9cd1d6b72cd46d616b6815d1d965a")} >
                            <p className='font-bold '>
                                Katana
                            </p>
                    </div>
                    
                </div>
            <h2 onClick={() => window.open("https://discord.gg/uxDgVAJcSN")} className='flex flex-center justify-center text-4xl text-[#4ecad3] font-bold  border-pink-600 hover:text-purple-600 before:border-0 hover:border-3 duration-100 hover:border-b-2 duration-100 hover:cursor-pointer'>Click here for more of my creations!</h2>
            <div className='pt-3'>
                <h3 className='flex flex-center justify-center text-4xl sm:text-2xl '>Thanks for showing interest in my work!</h3>
                <h4 className='flex flex-center justify-center text-3xl sm:text-2xl text-[#8d8dca] font-bold'>You can message me on discord</h4>
                <h5 className='flex flex-center justify-center text-6xl sm:text-3xl text-pink-600 font-bold'>wulu#0827</h5>
            </div>
            </div>
        </div>
    )
}

export default Work
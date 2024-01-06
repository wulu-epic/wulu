import React from 'react'


const Contact = () => {
    return (
        <div name='contact' className='max-w-full h-[700px] mx-auto text-gray-200 bg-[#0a192f] '>
            <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid-cols-2 gap-8'>

                <div className='sm:text-left pb-8 pl-1 flex items-center justify-center'>
                    <p className='text-4xl  font-bold inline border-b-4 border-pink-600 '>
                        Contact
                    </p>
                </div>

                <div></div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid grid-cols-2 gap-8 px-4'>
                    <div>
                    <p className='font-bold text-1.5xl sm:text-1xl'>
                    Hi! Thanks for showing interest in my work! You can contact me on Discord by either directly joining the server to the right, or by direct messaging <span className="text-pink-600">.wuluu</span>.
                    </p>
                    <p className='font-bold text-1.5xl sm:text-1xl'>
                    Also for my work section, regarding <span className="text-blue-600">Magic Simulator</span> and <span className="text-blue-600">Speed Track Simulator</span> please message me for extra details for my contribtions towards them. Thank you
                    </p>
                    </div>

                    <div className='sm:text-right text-4xl font-bold'>
                    <p onClick={() => window.open("https://discord.gg/uxDgVAJcSN")} className='text-4xl text-center text-[#4ecad3] font-bold  border-pink-600 hover:text-purple-600 before:border-0 hover:border-3 duration-100 hover:border-b-2 duration-100 hover:cursor-pointer'>Click here for more of my creations!</p>                    </div>
               </div>
            </div>
        </div>
    )
}

export default Contact
import React from 'react'

const About = () => {
  return (
    <div name='about'className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid-cols-2 gap-8'>

                <div className='sm:text-left pb-8 pl-1 flex items-center justify-center'>
                    <p className='text-4xl  font-bold inline border-b-4 border-pink-600 '>
                        About
                    </p>
                </div>

                <div></div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p> Hi I'm wulu, nice to meet you. Take a look around.</p>
                    </div>

                    <div>
                    <p>
                        I am a 14 year old ROBLOX developer that has been on ROBLOX for over 6 years, I am a hard-working and fast developer that can produce high quality models.
                        I specialize in modeling and making weapons. I also have over 200 hours of experience in blender (<a className='text-blue-400 font-bold inline border-b-2 pt-3 hover:text-pink-600 duration-300' href="https://cdn.discordapp.com/attachments/810560991300419584/970007679751823390/unknown.png" target='_blank'>click here to see)</a>.
                    </p>
                    <p className='font-bold text-1.5xl sm:text-1xl'>
                    If you do decide to hire me, the only payment method I'm currently accepting
                    is PayPal. The price is also negotiable so you can name your price first and then we can decide if its do-able.

                    </p>
                </div>

               </div>

                

            </div>

    </div> 
  )
}

export default About
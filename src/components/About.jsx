import React from 'react'

const About = () => {
  return (
    <div name='about'className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-[500px]'>
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
                            I'm a 16-year-old ROBLOX developer with over 6 years of dedicated experience on the platform. I pride myself on being hardworking and diligent. I specialize in scripting but also invested a lot of time into modelling, having over 300+ hours of experience in blender (<a className='text-blue-400 font-bold inline border-b-2 pt-3 hover:text-pink-600 duration-300' href="https://cdn.discordapp.com/attachments/1167784603537395743/1193261894081974352/image.png?ex=65ac12bd&is=65999dbd&hm=d5b0549d338c0298bf5ecf5a740d3f49d1942360f1ae6c748fc052ec8c569101&" target='_blank'>click here to see)</a>.
                        </p>
                        <p> I am also very capable in coding in other languages such as C++, C#, Python, HTML, CSS, and React and have made commerical projects in them. <p className='font-bold text-1.5xl sm:text-1xl'>
                            If you do decide to hire me, the only payment method I'm currently accepting
                            is PayPal or Robux (special cases). The price is also negotiable so you can name your price first and then we can decide if its do-able.
                        </p>
                        </p>
                    </div>
               </div>
            </div>
    </div> 
  )
}

export default About
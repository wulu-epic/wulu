import React, {useState} from 'react'
import Logo from "../assets/logo.png"
import {FaBars, FaTimes, FaGithub, FaDiscord, FaYoutube} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link} from "react-scroll";


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav);

  return (
      
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0e1e36] text-gray-300'>
        <div>
        <img src={Logo} alt="wulu" style={{width:'50px'}}/>
        </div>

    {/* menu */}
        <ul className='hidden md:flex '>
            <li className='hover:text-pink-600 duration-150'>
            <Link to="home" smooth={true} duration={1000}>
             Home
             </Link>
            </li>
            <li className='hover:text-pink-600 duration-150'><Link  to="about" smooth={true} duration={1000}>
             About 
             </Link></li>
            <li className='hover:text-pink-600 duration-150'><Link to="work"  smooth={true} duration={1000}>
             Work
             </Link></li>
        </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0c1f3c] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'> 
            <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
             Home
             </Link></li>
            <li   className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
             About
             </Link></li>
            <li  className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
             Work
             </Link></li>
        </ul>
        {/* socials */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li onClick={() => window.open("https://discord.gg/8RsyJUP9cv")} className='w-[135px] h-[60px] flex justify-between items-center ml-[-78px] hover:ml-[-10px] duration-300 bg-blue-500 rounded-md'>
                    <p className='flex justify-between items-center w-full text-gray-300' href="/">
                        Discord <FaDiscord size={30}/>
                    </p>
                </li>

                <li onClick={() => window.open("https://github.com/wulu-epic")} className='w-[135px] h-[60px] flex justify-between items-center ml-[-78px] hover:ml-[-10px] duration-300 bg-[#1e1e1e] rounded-md'>
                    <p className='flex justify-between items-center w-full text-gray-300' href="/" >
                        Github <FaGithub size={30}/>
                        
                    </p>
                </li>

                <li onClick={() => window.open("https://www.youtube.com/c/CenterGaming1")} className='w-[135px] h-[60px] flex justify-between items-center ml-[-78px] hover:ml-[-10px] duration-300 bg-[#da1e1e] rounded-md'>
                    <p className='flex justify-between items-center w-full text-gray-300' >
                        Youtube<FaYoutube size={30}/>       
                    </p>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar
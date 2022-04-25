import React, { useState } from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin,FaWhatsappSquare} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/CDv.png'
import CV from '../assets/CV||FR.pdf'
import {Link} from 'react-router-dom'


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <Link to='/'>
            <div>
                <img src={Logo} alt="Logo Image" style={{ width: '150px' }}/>
            </div>
            </Link>
            {/*menu*/}

            <ul className='hidden md:flex'>
                <li className="hover:bg-lime-300 rounded-lg hover:text-black ">
                <a href='/'>Home</a>
                </li >
                <li  className="hover:bg-lime-300 rounded-lg hover:text-black ">
                <a href='/about'>About</a>
                </li>
                <li  className="hover:bg-lime-300 rounded-lg hover:text-black ">
                <a href='/skill'>Skill</a>
                </li>
                <li  className="hover:bg-lime-300 rounded-lg hover:text-black ">
                <a href='/work'>Work</a>
                </li>
                <li  className="hover:bg-lime-300 rounded-lg hover:text-black ">
                <a href='/contact'>Contact</a>
                </li>
            </ul>

            {/*hamburger*/}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}

            </div>
            {/*mobile menu */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                  < a href='/'>Home</a>
                </li>
                <li className='py-6 text-4xl'>
                <a href='/about'>About</a>
                </li>
                <li className='py-6 text-4xl'>
                <a href='/skill'>Skill</a>
                </li>
                <li className='py-6 text-4xl'>
                <a href='/work'>Work</a>
                </li>
                <li className='py-6 text-4xl hover:bg-lime-200 '>
                <a href='/contact'>Contact</a>
                </li>
            </ul>


            {/*social icons*/}
            <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>

                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-lime-300'>
                    <a  className='flex justify-between items-center w-full text-black'
                    href="https://www.linkedin.com/in/cerettidanilo-dev/" TARGET='_BLANK'>
                        LinkedIn<FaLinkedin size={30}/>
                    </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/Daniloceretti" TARGET='_BLANK' >
                       Github<FaGithub size={30}/>
                    </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-lime-300'>
                    <a  className='flex justify-between items-center w-full text-black'
                    href="/contact">
                        Email<HiOutlineMail size={30}/> 
                    </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                    href={CV} TARGET='_BLANK'>
                       CV<BsFillPersonLinesFill size={30}/>
                    </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-lime-300'>
                    <a  className='flex justify-between items-center w-full text-black'
                    href="https://walink.co/41a177" TARGET='_BLANK'>
                       WhatsApp<FaWhatsappSquare size={30}/>
                    </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar

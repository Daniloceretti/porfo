import React from 'react'
import { HiArrowNarrowRight,HiArrowNarrowLeft } from 'react-icons/hi'
import {Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className=' w-full h-screen bg-[#0a192f]'>
            {/*container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-lime-200'> Hola, Mi nombre es</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Danilo Ceretti</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm Front-End Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'> Soy un desarrollador full-stack orientado a la creación de front-end de experiencias digitales excepcionales. Actualmente, estoy enfocado en la creación de aplicaciones web.</p>
                <div className=" w-max  " >
                <Link to="/work" >
                    <button  className='text-white group border-2 px-6 py-3 my-2   flex items-center hover:bg-lime-200 hover:bg-lime-200 hover:text-black'>
                        Ver Trabajos
                      
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                </Link>
                </div> 
                <div className=" w-max">
                <Link to="/skill">
                    <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-lime-200 hover:border-lime-200 hover:text-black'>
                        Ver Skills
                      
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                </Link>
                </div> 
            </div>
        </div>
    )
}

export default Home

import React from 'react'

const Contact = () => {

 


  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/b9d66af8-8509-4bfe-bd91-56e24a32d6ed" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-lime-200 text-gray-300'>Contacto</p>
                <p className='text-gray-300 py-4'></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name *' name='name'  required/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email *' name='email' required />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message *' required ></textarea>
            <button className='text-white border-2 hover:bg-lime-200 hover:border-lime-200 px-4 hover:text-black py-3 my-8 mx-auto flex items-center'>Enviar Mensage</button>
        </form>
    </div>
  )
}

export default Contact
import React from 'react'
import '../App.css'
import ewastelogo from '../assets/ewastelogo.png';
import ewaste from '../assets/image.jpg';

const Landingpage = () => {
  return (
    <div className='bg-white shadow-md'>
      {/* Navbar Section */}
      {/* <div className='container mx-auto flex justify-between items-center py-10 px-10 overflow-hidden'>
        <div className="w-40 h-20"> 
          <img
            src={ewastelogo}
            alt="Ewaste Logo"
            className='w-full h-full object-contain'
          />
        </div>

        <div className='flex space-x-8 text-lg'>
          <a href="#" className='text-[#133700] hover:text-green-600'>Home</a>
          <a href="#" className='text-[#133700] hover:text-green-600'>Our Services</a>
          <a href="#" className='text-[#133700] hover:text-green-600'>Blog</a>
          <a href="#" className='text-[#133700] hover:text-green-600'>About Us</a>
          <a href="#" className='text-[#133700] hover:text-green-600'>Contact Us</a>
        </div>
      </div> */}


      {/* Image with centered heading */}
      <div className='relative w-full h-[400px]'>
        <img
          src={ewaste}
          alt="E-waste Awareness"
          className='w-full h-full object-cover rounded-lg'
        />

        {/* Centered Headings */}
        <h1 className='absolute top-[30%] left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold drop-shadow-lg'>
          Waste Management
        </h1>
        <h2 className='absolute top-[45%] left-1/2 transform -translate-x-1/2 text-white text-3xl font-semibold drop-shadow-lg'>
          Awareness
        </h2>

        {/* Read More Button */}
        <button
          className='absolute top-[60%] left-1/2 transform -translate-x-1/2 
                     w-[150px] h-[60px] rounded-[20px] bg-[#133700] text-white text-lg hover:bg-green-700 transition'
        >
          Read More
        </button>
      </div>
    </div>
  )
}

export default Landingpage


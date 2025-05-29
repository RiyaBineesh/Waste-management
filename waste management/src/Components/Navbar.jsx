import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdAddIcCall,MdEmail} from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



const Navbar = () => {
  return (
    <div className="w-full bg-[#E1EED0] p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-8">
          <a href="#" className="bg-[#133700] p-4 rounded-md hover:bg-green-600 text-white">
            <FaFacebook size={24} />

          </a>
          <a href="#" className="bg-[#133700] p-4 rounded-md hover:bg-green-600 text-white">
            < FaLinkedin size={24} />

          </a>
          <a href="#" className="bg-[#133700] p-4 rounded-md hover:bg-green-600 text-white">
            < FaInstagram size={24} />

          </a>
        </div>
        <div className='flex flex-col md:flex-row gap-4'>
          <a href="#" className='bg-[#133700] text-white p-4 rounded-md hover:bg-green-600 flex items-center gap-2'>
            <MdAddIcCall size={24} />
            <span> +91 9400514935</span>

          </a>
          <a href="#" className='bg-[#133700] text-white p-4 rounded-md hover:bg-green-600 flex items-center gap-2'>
            <FaLocationDot size={24} />
            <span>kozhikode, kerala</span>

          </a>
          <a href="#" className='bg-[#133700] text-white p-4 rounded-md hover:bg-green-600 flex items-centre gap-2'>
          <MdEmail size={24} />
          <span>riyabineesh2gmail.com</span>
          </a>

        </div>
        
      </div>

    </div>
  );
};

export default Navbar;

import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdAddIcCall, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import ewastelogo from "../assets/ewastelogo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const navigate=useNavigate();

  return (
    <div className="w-full">
      {/* Top section with contact info and social links */}
      <div className="w-full bg-[#E1EED0] p-10 mb-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-8">
            <a
              href="#"
              className="bg-[#133700] p-4 rounded-md hover:bg-green-600 text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="bg-[#133700] p-4 rounded-md hover:bg-green-600 text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="bg-[#133700] p-4 rounded-md hover:bg-green-600 text-white"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="#"
              className="bg-[#133700] text-white p-4 rounded-md hover:bg-green-600 flex items-center gap-2"
            >
              <MdAddIcCall size={24} />
              <span> +91 9400514935</span>
            </a>
            <a
              href="#"
              className="bg-[#133700] text-white p-4 rounded-md hover:bg-green-600 flex items-center gap-2"
            >
              <FaLocationDot size={24} />
              <span>kozhikode, kerala</span>
            </a>
            <a
              href="#"
              className="bg-[#133700] text-white p-4 rounded-md hover:bg-green-600 flex items-centre gap-2"
            >
              <MdEmail size={24} />
              <span>riyabineesh2gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation section with full width, shadow, and gaps */}
      <div className="w-screen  bg-white shadow-lg mb-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-20">
          {/* Logo */}
          <div className="w-32 h-16 md:w-40 md:h-20 mb-4 md:mb-0">
            <img
              src={ewastelogo}
              alt="Ewaste Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8 text-lg">
            
            <span onClick={()=>navigate('/')}  className="text-[#133700] hover:text-green-600 cursor-pointer" >
              Home
            </span >
            <span onClick={()=>navigate('/Ourservice')}  className="text-[#133700] hover:text-green-600 cursor-pointer" >
              Our Services
            </span >
            <span onClick={()=>navigate('/Blog')}  className="text-[#133700] hover:text-green-600 cursor-pointer" >
              Blog

            </span>
            <span onClick={()=>navigate('/Aboutus')}  className="text-[#133700] hover:text-green-600 cursor-pointer" >
              About Us

            </span>
            <span onClick={()=>navigate('/Enquiry')}  className="text-[#133700] hover:text-green-600 cursor-pointer" >
              Contact Us

            </span>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

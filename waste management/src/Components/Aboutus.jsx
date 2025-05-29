import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Navbar from "./Navbar";



const AboutUs = () => {
    return (


        <div className="relative">
            {/* About Us curved section */}
            <div className="bg-gradient-to-b from-green-100 to-green-200 relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">
                            About Us
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            S & R Enterprises is committed to providing comprehensive waste management
                            and environmental solutions. We help businesses achieve sustainability
                            goals through our expert services.
                            <p>Find Us On
                                <div className="flex gap-8">
                                    <a href="#" className="bg-[#96a98b] p-4 rounded-md hover:bg-green-600 text-white ml-60">
                                        <FaFacebook size={20} />

                                    </a>
                                    <a href="#" className="bg-[#96a98b] p-4 rounded-md hover:bg-green-600 text-white">
                                        < FaLinkedin size={20} />

                                    </a>
                                    <a href="#" className="bg-[#96a98b] p-4 rounded-md hover:bg-green-600 text-white">
                                        < FaInstagram size={20} />

                                    </a>
                                </div>
                            </p>
                        </p>
                    </div>
                </div>

                {/* Curved bottom using SVG */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg
                        className="relative block w-full h-20"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0 C150,80 350,80 600,40 C850,0 1050,80 1200,20 L1200,120 L0,120 Z"
                            className="fill-white"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
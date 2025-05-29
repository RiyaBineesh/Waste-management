import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function FooterSection() {
  const services = [
    'Waste Management',
    'E-waste EPR',
    'Plastic waste EPR',
    'Battery waste EPR',
    'TYRE WASTE EPR',
    'RECYCLER REGISTRATION',
    'CGWA NOC',
    'UPGWD NOC',
    'HWRA NOC',
    'LMPC',
    'BIS, WPC, ISO'
  ];

  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Social Media Icons - Left Column */}
          <div className="flex lg:flex-col items-center lg:items-start justify-center lg:justify-start space-x-4 lg:space-x-0 lg:space-y-4">
            <a
              href="#"
              className="w-16 h-16 bg-green-200 hover:bg-green-300 rounded-full flex items-center justify-center transition-colors duration-200 group"
            >
              <Facebook className="w-7 h-7 text-green-800 group-hover:text-green-900" />
            </a>
            <a
              href="#"
              className="w-16 h-16 bg-green-200 hover:bg-green-300 rounded-full flex items-center justify-center transition-colors duration-200 group"
            >
              <Instagram className="w-7 h-7 text-green-800 group-hover:text-green-900" />
            </a>
            <a
              href="#"
              className="w-16 h-16 bg-green-200 hover:bg-green-300 rounded-full flex items-center justify-center transition-colors duration-200 group"
            >
              <Twitter className="w-7 h-7 text-green-800 group-hover:text-green-900" />
            </a>
          </div>

          {/* Services - Center Column */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-8 text-white">Services</h2>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-lg">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us - Right Column */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-8 text-white">Contact Us</h2>
            <div className="space-y-4">
              <div className="text-gray-300">
                <p className="text-lg">Get in touch with us for all your waste management needs</p>
              </div>
              <div className="text-gray-300">
                <p>Email: info@wastemanagement.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
              <div className="text-gray-300">
                <p>Address: 123 Green Street</p>
                <p>Eco City, EC 12345</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

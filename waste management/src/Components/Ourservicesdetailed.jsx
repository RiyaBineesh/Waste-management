import React from 'react'
import { ArrowRight } from 'lucide-react'
import ewaste from '../assets/image.jpg';
import ewaste1 from '../assets/ewaste1.jpg';
import ewaste3 from '../assets/ewaste3.jpg';
import ewaste4 from '../assets/ewaste4.jpg';
import ewaste5 from '../assets/ewaste5.jpg';
import ewaste6 from '../assets/ewaste6.jpg';

const Ourservicesdetailed = () => {
  const services = [
    {
      id: 1,
      title: "RECYCLER REGISTRATION",
      subtitle: "Know More",
      image: ewaste, // Use the imported variable, not string
      alt: "Person in blue suit registering at a desk with laptop"
    },
    {
      id: 2,
      title: "TYRE WASTE EPR",
      subtitle: "Know More",
      image: ewaste1, // Use the imported variable
      alt: "Old tire with plants growing through it"
    },
    {
      id: 3,
      title: "Battery waste EPR",
      subtitle: "Know More",
      image: ewaste3, // Note: you don't have ewaste2 imported, using ewaste3
      alt: "Collection of various used batteries"
    },
    {
      id: 4,
      title: "E-Waste Management",
      subtitle: "Know More",
      image: ewaste3, // Use the imported variable
      alt: "Electronic waste management"
    },
    {
      id: 5,
      title: "Plastic Waste EPR",
      subtitle: "Know More",
      image: ewaste4, // Use the imported variable
      alt: "Plastic waste recycling"
    },
    {
      id: 6,
      title: "Hazardous Waste",
      subtitle: "Know More",
      image: ewaste5, // Use the imported variable
      alt: "Hazardous waste disposal"
    },
    {
      id: 7,
      title: "Organic Waste",
      subtitle: "Know More",
      image: ewaste6, // Use the imported variable
      alt: "Organic waste composting"
    }
  ]

  return (
    <div className="p-6 bg-gray-50">
      {/* Centered Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
      </div>
      
      {/* Services Grid - 3 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <div 
            key={service.id}
            className="bg-green-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          >
          {/* Image Container */}
          <div className="h-48 overflow-hidden">
            <img 
              src={service.image}
              alt={service.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Content Container */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 tracking-wide">
              {service.title}
            </h3>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 font-medium">
                {service.subtitle}
              </span>
              <ArrowRight 
                className="w-4 h-4 text-gray-600 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-200" 
              />
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ourservicesdetailed
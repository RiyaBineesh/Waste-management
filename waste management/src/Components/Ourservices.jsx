
import React from 'react'
import ewaste from '../assets/image.jpg';
import ewaste1 from '../assets/ewaste1.jpg';
import ewaste3 from '../assets/ewaste3.jpg';
import ewaste4 from '../assets/ewaste4.jpg';
import ewaste5 from '../assets/ewaste5.jpg';
import ewaste6 from '../assets/ewaste6.jpg';
import { ArrowRight } from 'lucide-react';

const Ourservices = () => {
  const services = [
    {
      id: 1,
      title: 'Waste Management',
      image: ewaste,
      bgColour: 'bg-blue-200'
    },
    {
      id: 2,
      title: 'E-Waste EPR',
      image: ewaste1,
      bgColour: 'bg-blue-200'

    },
    {
      id: 3,
      title: 'Plastic waste EPR',
      image: ewaste3,
      bgColour: 'bg-blue-200'
    },
    {
      id: 4,
      title: 'Battery waste EPR',
      image: ewaste4,
      bgColour: 'bg-blue-200'

    },
    {
      id: 5,
      title: 'Tyre waste EPR',
      image: ewaste5,
      bgColour: 'bg-blue-200'

    },
    {
      id: 6,
      title: 'RECYCLER REGISTRATION',
      image: ewaste6,
      bgColour: 'bg-blue-200'

    }
  ]
  return (
    <div className="py-16 px-4 bg-white h-full">
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold text-gray-900'>Our Services</h2>

      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
        {services.map((service) => (
          <div key={service.id}
            className={`${service.bgColour}round-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300`}>
            <div className='h-48 overflow-hidden'>
              <img src={service.image} alt={service.title}
                className='w-full h-full top-447px gap-30px bg-[#DFEDCC] object-cover rounded-xl group-hover:scale-110 transition-transform duration-300' />


            </div>
            <div className='p-6 '>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>{service.title}</h3>
              <button className='flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 group'>
                <span className='text-[#133700]'>Know More</span>
                <ArrowRight />
              </button>

            </div>
          </div>
        ))}


      </div>
    </div>
  )
}

export default Ourservices

import React from 'react';
import { ArrowRight } from 'lucide-react';
import emp1 from '../assets/emp1.jpg';
import emp2 from '../assets/emp2.jpg';
import emp3 from '../assets/emp3.jpg';
import emp4 from '../assets/emp4.jpg';
import icon from '../assets/icon.png'; // Add your image path here

const services = [
    {
        id: 1,
        name: 'Emma Roberts',
        role: 'Director',
        description: 'Artist is a term applied to a person who engages in an activity deemed to be an art.',
        image: emp1,
    },
    {
        id: 2,
        name: 'William Pearce',
        role: 'Boss',
        description: 'Artist is a term applied to a person who engages in an activity deemed to be an art.',
        image: emp2,
    },
    {
        id: 3,
        name: 'Emma Roberts',
        role: 'UI Designer',
        description: 'Artist is a term applied to a person who engages in an activity deemed to be an art.',
        image: emp3,
    },
    {
        id: 4,
        name: 'William Pearce',
        role: 'Boss',
        description: 'Artist is a term applied to a person who engages in an activity deemed to be an art.',
        image: emp4,
    }
];

const ExecutiveServices = () => {
    return (
        <div className="w-full min-h-screen bg-green-800 py-16 px-4">
            {/* Header Section */}
            <div className='text-center mb-12'>
                <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                    The Executive Team
                </h2>
                <p className="text-green-100 text-lg mb-2">
                    There's nothing I really wanted to do in life that I wasn't able to get good at.
                </p>
                <p className="text-green-100 text-lg">
                    That's my skill.
                </p>
            </div>

            {/* Services Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
                {services.map(({ id, name, role, description, image }) => (
                    <div key={id}
                        className="bg-green-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        
                        <div className='flex items-start gap-6'>
                            {/* Avatar Section */}
                            <div className="w-32 h-32 rounded-xl flex-shrink-0 overflow-hidden">
                                <img 
                                    src={image} 
                                    alt={name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className='flex-1'>
                                <h3 className='text-2xl font-bold text-gray-800 mb-1'>
                                    {name}
                                </h3>
                                <p className='text-gray-700 font-semibold mb-3'>
                                    {role}
                                </p>
                                <p className='text-gray-600 leading-relaxed mb-4'>
                                    {description}
                                </p>
                                
                                {/* Know More Button */}
                                <button className='flex items-center text-gray-700 hover:text-green-700 font-medium transition-colors duration-200 group'>
                                    <span className='text-gray-800 font-semibold'>Know More</span>
                                    <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200' />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Statistics Section */}
            <div className="mt-16 text-center">
                <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-lg">
                    <h3 className="text-5xl font-bold text-green-800 mb-4">
                        5,234
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">
                        Number Of Client
                    </h4>
                    <p className="text-gray-500 leading-relaxed">
                        Text Text Text Text Text Text Text Text Text Text Text
                    </p>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="mt-16 bg-green-100 rounded-2xl p-12 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Be the first to see the news
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Your company may not be in the software business, 
                            but eventually, a software company will be in your 
                            business.
                        </p>
                        
                        {/* Email Subscription */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Email Here..."
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            <button className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <img 
                                src={icon} 
                                alt="Newsletter illustration - person with computer"
                                className="w-80 h-64 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExecutiveServices;
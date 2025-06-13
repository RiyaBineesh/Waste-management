import React, { useState } from 'react';
import { Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        lookingFor: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden relative">
                {/* Main container with curved design */}
                <div className="flex flex-col lg:flex-row min-h-[600px]">

                    {/* Left side - Form section */}
                    <div className="flex-1 p-8 lg:p-12 bg-gradient-to-br from-green-50 to-green-100 relative">
                        <div className="max-w-md mx-auto lg:mx-0">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                                Say Hi!
                            </h1>
                            <p className="text-gray-600 text-lg mb-8">
                                We'd like to talk with you.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 text-lg font-medium mb-3">
                                        My name is
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-lg font-medium mb-3">
                                        I'm looking for
                                    </label>
                                    <input
                                        type="text"
                                        name="lookingFor"
                                        value={formData.lookingFor}
                                        onChange={handleInputChange}
                                        placeholder="What you love"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-lg font-medium mb-3">
                                        Your message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="I want to say that..."
                                        rows={6}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-400 resize-none"
                                        required
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="bg-green-800 hover:bg-green-900 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    SEND MESSAGE
                                </button>
                            </div>
                        </div>

                        {/* Curved overlay */}
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-green-800 to-green-700 transform skew-x-12 translate-x-16 hidden lg:block"></div>
                    </div>

                    {/* Right side - Contact Information */}
                    <div className="lg:w-96 bg-gradient-to-br from-green-800 to-green-900 p-8 lg:p-12 text-white relative">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                            <p className="text-green-100 mb-8 text-lg">
                                Fill up the form and our Team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <Phone className="w-5 h-5 text-green-300" />
                                    <span className="text-green-100">9400514395</span>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Mail className="w-5 h-5 text-green-300" />
                                    <span className="text-green-100">riyabineesh@gmail.com</span>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <MapPin className="w-5 h-5 text-green-300" />
                                    <span className="text-green-100">Dyonisie Wolf Bucharest, RO 010458</span>
                                </div>
                            </div>

                            <div className="flex space-x-4 mt-12">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                                >
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Decorative background pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 right-10 w-32 h-32 border border-green-400 rounded-full"></div>
                            <div className="absolute bottom-20 left-10 w-20 h-20 border border-green-400 rounded-full"></div>
                            <div className="absolute top-1/2 right-20 w-16 h-16 border border-green-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
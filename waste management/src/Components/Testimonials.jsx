import React from 'react';
import emp1 from '../assets/emp1.jpg';
import emp2 from '../assets/emp2.jpg';
import emp3 from '../assets/emp3.jpg';
import emp4 from '../assets/emp4.jpg';
import emp5 from '../assets/emp5.jpg';
import emp6 from '../assets/emp6.jpg';

const testimonials = [
    {
        id: 1,
        name: 'PATRICK WILLSON',
        designation: 'CEO',
        text: 'Pillar of the Office',
        image: emp1,
    },
    {
        id: 2,
        name: 'MARGERETTE JEANS',
        designation: 'Marketing Manager',
        text: 'Deals with Sales & Distribution',
        image: emp2,
    },
    {
        id: 3,
        name: 'JOHN PAUL',
        designation: 'Finanacial Officer',
        text: 'Rotary and Finance Head',
        image: emp3,
    },
    {
        id: 4,
        name: 'STEVE GREGORY',
        designation: 'Vice Chairman',
        text: 'Executive Head of the Company',
        image: emp4,
    },
    {
        id: 5,
        name: 'RACHEL PHILIP',
        designation: 'HR',
        text: 'Overall Company Managing',
        image: emp5,
    },
    {
        id: 6,
        name: 'GEORGE ATLANTIS',
        designation: 'Social media Manager',
        text: 'Social media platforms dealer',
        image: emp6,
    },
];

const Testimonials = () => {
    return (
        <div className="py-16 px-4 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map(({ id, name, designation, text, image }) => (
                    <div key={id} className="bg-[#DFEDCC] p-6 rounded-lg text-center shadow-md">
                        <div className="flex justify-center mb-4">
                            <img
                                src={image}
                                alt={name}
                                className="w-50 h-50 object-cover rounded-full border-10 border-white shadow-sm"
                            />
                        </div>
                        <p className="text-gray-700 mb-4 text-sm">{text}</p>
                        <p className="font-semibold text-gray-900">{name}</p>
                        <p className="text-gray-600 text-sm">{designation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;


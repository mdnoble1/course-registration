/* eslint-disable no-unused-vars */
import React from 'react';

const Cards = () => {
    return (
        <div className='w-80 bg-gray-100 p-4 rounded-lg drop-shadow-2xl'>
            <img className='mb-4 w-full' src="https://i.ibb.co/XzhZvrc/rectangle-3.png" alt="" />
            <h3 className='font-semibold text-lg mb-3'>Introduction to C Programming</h3>
            <p className='text-gray-400 text-sm text-justify mb-4'>Introduction to C Programming is a foundational course that covers the essentials of the C programming language. Learn the basics of coding, data structures, and algorithms while gaining hands-on experience in developing software applications using C.</p>
            <div className='flex justify-between items-center mb-6'>
                <div>
                    <p className='font-medium  text-gray-400'>Price : 15000</p>
                </div>
                <div>
                    <p className='font-medium  text-gray-400'>Credit : 2hr</p>
                </div>
            </div>
            <button className='w-full bg-sky-500 py-2 rounded-md font-semibold text-lg text-white hover:bg-sky-400'>Select</button>
        </div>
    );
};

export default Cards;
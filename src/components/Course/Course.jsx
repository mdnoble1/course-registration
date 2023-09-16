/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa';

const Course = ({course , handleAddToCart}) => {
    
    const {image, course_name, credit, price, details} = course;


    return (
        <div className="w-80 bg-gray-100 p-4 rounded-lg drop-shadow-2xl">
        <img
            className="mb-4 w-full"
            src={course.image}
            alt=""
        />
        <h3 className="font-semibold text-lg mb-3">
            {course.course_name}
        </h3>
        <p className="text-gray-400 text-sm text-justify mb-4 h-36">
            {course.details}
        </p>
        <div className="flex justify-between items-center mb-6">
            <div className='flex items-center gap-2'>
             <span className='text-2xl'><FaDollarSign></FaDollarSign></span>
            <p className="font-medium  text-gray-400">Price : {course.price}</p>
            </div>
            <div className="flex items-center gap-2">
            <span className='text-2xl'><FaDollarSign></FaDollarSign></span>
            <p className="font-medium  text-gray-400">Credit : {course.credit}hr</p>
            </div>
        </div>
        <button 
        onClick={handleAddToCart}
        className="w-full bg-sky-500 py-2 rounded-md font-semibold text-lg text-white hover:bg-sky-400">
            Select
        </button>
        </div>
    );
};


Course.propTypes = {
    course : PropTypes.object.isRequired,

}
export default Course;
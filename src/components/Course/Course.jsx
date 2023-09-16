/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from "prop-types";

const Course = ({course}) => {

    const { cover, title, description, price, time_hour } = course;

    return (
        <div>
            <div className="w-80 bg-gray-100 p-4 rounded-lg drop-shadow-2xl">
        {/* Display the blog cover image */}
        <img
          className="mb-4 w-full"
          src={cover}
          alt=""
        />
        {/* Display the blog title */}
        <h3 className="font-semibold text-lg mb-3">
          {title}
        </h3>
        {/* Display the blog description */}
        <p className="text-gray-400 text-sm text-justify mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center mb-6">
          <div>
            {/* Display the blog price */}
            <p className="font-medium text-gray-400">Price : {price}</p>
          </div>
          <div>
            {/* Display the blog credit hours */}
            <p className="font-medium text-gray-400">Credit : {time_hour}hr</p>
          </div>
        </div>
        {/* Button to select the blog */}
        <button
          className="w-full bg-sky-500 py-2 rounded-md font-semibold text-lg text-white hover:bg-sky-400">
          Select
        </button>
      </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object, 
    handleSelectToBookMark: PropTypes.func,
  };

export default Course;
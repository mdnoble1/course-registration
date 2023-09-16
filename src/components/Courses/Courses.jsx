/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';


const Courses = ({ handleSelectedToCart }) => {
    
    const [courses, setCourses] = useState([]);

    
    useEffect(() => {
        fetch('courses.json') 
            .then(res => res.json())
            .then(data => setCourses(data)); 
    }, []);

    return (
        <div className="w-2/3 grid grid-cols-3 gap-16">
            
            {courses.map(course => <Course key={course.id} course={course} handleSelectedToCart={handleSelectedToCart}></Course>)}

        </div>
    );
};


Courses.propTypes = {
    handleSelectedToCart: PropTypes.func
}

export default Courses; 

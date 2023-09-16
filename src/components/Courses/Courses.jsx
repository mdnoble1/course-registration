/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {

    const [courses , setCourses] = useState([]);

    useEffect( () => {
        fetch('courses.json')
            .then( res => res.json())
            .then( data => setCourses(data))
    }, [])

    return (
        <div className='grid grid-cols-3 gap-6 w-2/3'>
            
            {
                courses.map(course => <Course 
                    key={course.id} 
                    course={course}
                    ></Course>)
            }
        </div>
    );
};

export default Courses;
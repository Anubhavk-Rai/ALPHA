import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('/api/courses').then(res => setCourses(res.data));
    }, []);

    return (
        <div className="container">
            <h1>Courses</h1>
            <ul>
                {courses.map(course => (
                    <li key={course._id}>
                        <a href={`/courses/${course._id}`}>{course.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Courses;

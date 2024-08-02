import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CourseDetail() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        axios.get(`/api/courses/${id}`).then(res => setCourse(res.data));
    }, [id]);

    if (!course) return <div>Loading...</div>;

    return (
        <div className="container">
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <h3>Videos</h3>
            <ul>
                {course.videos.map(video => (
                    <li key={video}>{video}</li>
                ))}
            </ul>
            <h3>Materials</h3>
            <ul>
                {course.materials.map(material => (
                    <li key={material}>{material}</li>
                ))}
            </ul>
        </div>
    );
}

export default CourseDetail;

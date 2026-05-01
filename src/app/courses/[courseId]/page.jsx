import React from 'react';
import data from "../../../../db.json";

const CourseDetails = ({params}) => {
    const { courseId } = params;

    const course = data.courses.find((c) => String(c.id) === String(courseId));


     if (!course) {
       return (
         <div className="min-h-screen flex items-center justify-center text-3xl">
           Course not found
         </div>
       );
     }

    return (
      <div>
        <h2>Course details loading soon.....</h2>
        <p className="mt-4">{course.description}</p>
      </div>
    );
};

export default CourseDetails;
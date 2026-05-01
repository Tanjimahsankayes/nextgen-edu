import React from 'react';
import data from "../../../../db.json";
import Image from 'next/image';
import { IoIosStarHalf} from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const CourseDetails = async({params}) => {

    const { courseId } = await params;
    console.log(params);
    const course = data.courses.find((c) => String(c.id) === String(courseId));


     if (!course) {
       return (
         <div className="min-h-screen flex items-center justify-center text-3xl">
           Course not found
         </div>
       );
     }
     const {
       title,
       instructor,
       duration,
       rating,
       level,
       description,
       image,
       category,
     } = course;
    return (
      <div className="min-h-screen w-8/12 mx-auto flex flex-col items-center justify-center">
        <div className="card h-full w-full p-8 lg:card-side bg-[#72BAA9] text-black shadow-sm">
          <figure>
            <Image
              src={image}
              alt={title}
              height={400}
              width={400}
              className="object-cover w-full h-full rounded-full"
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-bold"> {title} </h2>
            <p> {description} </p>
            <h2 > Instructor : <span className="text-xl font-bold"> {instructor}</span>  </h2>
            <div className="flex justify-between gap-10 text-md ">
              <h4> Category : <span className="text-xl font-bold"> {category}</span> </h4>
              <h4 className="flex items-center gap-2 text-amber-800 text-right ml-auto text-2xl font-bold ">
                {rating} <IoIosStarHalf />
              </h4>
            </div>

            <div className="card-actions justify-end items-center flex ">
              <p className='text-xl font-bold text-amber-800'> Duration : {duration} </p>
              <button className="btn btn-primary">Start <span><FaPlay /></span> </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails;
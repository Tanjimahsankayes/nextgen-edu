import React from 'react';
import data from "../../../../db.json";
import Image from 'next/image';
import { IoIosStarHalf} from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const CourseDetails = async({params}) => {

  const session = await auth.api.getSession({
    headers: await headers()
  });
  const user = session?.user;
  if(!user){
          redirect('/auth/signin')
      }

    const { courseId } = await params;
    
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
      <div className="bg-accent py-6">
        <div className="min-h-screen px-4 md:w-10/12 mx-auto flex flex-col items-center justify-center">
          <div className=" h-full w-full md:p-8 lg:card-side bg-[#EEEEEE] text-black shadow-sm rounded-2xl ">
            <figure>
              <Image
                src={image}
                alt={title}
                height={200}
                width={200}
                className="object-cover w-full h-64 p-4"
              ></Image>
            </figure>
            <div className="card-body">
              <h2 className="text-3xl font-bold"> {title} </h2>
              <p> {description} </p>
              <h2>
                Instructor :<span className="text-xl"> {instructor}</span>
              </h2>
              <h2>
                Category :<span className="text-xl "> {category}</span>
              </h2>
              <div className="flex justify-between gap-10 text-md ">
                <h4>
                  <span className="text-xl "> {level}</span>
                </h4>
                <h4 className="flex items-center gap-2 text-amber-300 text-right ml-auto text-2xl font-bold ">
                  {rating} <IoIosStarHalf />
                </h4>
              </div>

              <div className="card-actions justify-end items-center flex ">
                <p className=" ">
                  Duration :
                  <span className="text-xl text-amber-300">{duration}</span>
                </p>
                <button className="btn btn-primary">
                  Start
                  <span>
                    <FaPlay />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails;
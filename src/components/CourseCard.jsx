import Image from 'next/image';
import React from 'react';

const CourseCard = ({course}) => {

    if (!course) return null;
    const { title, image, description } = course;
    console.log("course i1g",course)
    return (
      <div className='mb-6' >
        <div className="card bg-base-100 w-96 shadow-sm h-full flex flex-col">
          <figure>
            <Image
              src={image}
              alt={title}
              height={400}
              width={400}
              className="object-cover w-full h-full"
            ></Image>
          </figure>
          <div className="card-body flex flex-col justify-between flex-1">
            <h2 className="card-title"> {title} </h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseCard;
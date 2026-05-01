"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCard = ({ course }) => {
  if (!course) return null;
  const { title, image, description } = course;
  return (
    <div className="mb-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
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
            <Link href={`/courses/${course.id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

import Link from "next/link";
import data from "../../db.json"
import CourseCard from "./CourseCard";

const TrendingCoursesPage = () => {

    const courses = data.courses;
    const popularCourses = courses.filter((course) => course.trending === true);
    return (
      <div className="bg-[#DFF1F1] ">
        <div className="w-11/12 mx-auto ">
          <div className="flex justify-between items-center " >
            <h2 className="text-3xl font-bold my-6 text-black">
              Trending Course :
            </h2>
            <Link href="/courses">
              <button className="btn btn-outline btn-info text-black"> 
                All
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-6">
            {popularCourses.map((course) => (
              <div key={course.id}>
                <CourseCard course={course}></CourseCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default TrendingCoursesPage;
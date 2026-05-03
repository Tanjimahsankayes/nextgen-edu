import CourseCard from "@/components/CourseCard";
import data from "../../../db.json"


const CoursesPage = () => {
    const courses = data.courses
    return (
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold my-6">Available Course :</h2>

        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    );
};

export default CoursesPage;
import Image from "next/image";
import data from "../../db.json";
// Example icon imports from react-icons. Ensure these are installed.
import { FiUsers, FiStar, FiClock, FiGrid, FiArrowRight } from "react-icons/fi";

const InstructorPage = () => {
  const instructors = data.instructor;

  return (
    <section className="bg-[#DFF1F1] min-h-screen py-16 w-full text-slate-800">
      <div className="w-11/12 max-w-7xl mx-auto space-y-12">
        {/* Header & Hero Section */}
        <div className="text-center space-y-3 max-w-2xl mx-auto pt-4">
          <span className="bg-[#0D9488]/10 text-[#0D9488] font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
            Our World-Class Instructors
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Learn from <span className="text-[#0D9488]">Industry Experts</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            Our mentors are seasoned professionals from top tech companies,
            passionate about guiding you to success.
          </p>
        </div>

        {/* Instructor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {instructors?.map((instructor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-teal-100/50 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Header: Picture & Category/Rating */}
              <div className="relative group">
                <figure className="aspect-[16/10] overflow-hidden bg-slate-950">
                  <Image
                    src={instructor.image}
                    width={500}
                    height={300}
                    alt={instructor.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </figure>

                {/* Floating Category Badge */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-[#0D9488] border border-teal-100/50 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  <FiGrid size={14} /> {instructor.category}
                </span>

                {/* Floating Rating Badge */}
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-white/90 backdrop-blur-md text-amber-500 border border-teal-100/50 text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                  <FiStar className="fill-amber-500 text-amber-500" size={16} />
                  <span className="text-slate-900">{instructor.rating}</span>
                </span>
              </div>

              {/* Card Body & Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {instructor.name}
                  </h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    {instructor.title}
                  </p>
                </div>

                {/* Key Stats Row */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-teal-100/50 text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-100/50 flex items-center justify-center text-[#0D9488]">
                      <FiUsers size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Students</p>
                      <p className="text-sm font-bold text-slate-900">
                        {instructor.totalStudents}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-100/50 flex items-center justify-center text-[#0D9488]">
                      <FiClock size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Experience</p>
                      <p className="text-sm font-bold text-slate-900">
                        {instructor.experience}
                      </p>
                    </div>
                  </div>
                </div>

                {/* View Courses Button */}
                <div className="pt-4">
                  <button className="inline-flex items-center justify-center gap-2 w-full bg-[#0D9488] hover:bg-[#0b7a70] text-white text-sm sm:text-base font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-teal-900/30 hover:shadow-teal-700/40 hover:-translate-y-0.5 transition-all duration-300">
                    Explore Mentor Courses
                    <FiArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorPage;

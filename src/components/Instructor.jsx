import Image from "next/image";
import data from "../../db.json";

const InstructorPage = () => {
  const instructor = data.instructor;

  return (
    <div className="my-8" >
      <h2 className="text-3xl font-bold my-6">Our Instructor :</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {instructor?.map((instruc, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
          >
            <figure>
              <Image
                src={instruc.image}
                width={400}
                height={250}
                alt={instruc.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instruc.name}</h2>
              <p>{instruc.title}</p>

              <div className="flex justify-between items-center">
                <p> Student : {instruc.totalStudents} </p>
                <p className="text-right"> {instruc.rating} </p>
              </div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline"> {instruc.category} </div>
                <div className="badge badge-outline">{instruc.experience}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorPage;
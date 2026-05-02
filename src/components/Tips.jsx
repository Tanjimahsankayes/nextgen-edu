import { FaBook } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { TbFocus2 } from "react-icons/tb";

const LearningTips = () => {
  return (
    <div className=" bg-[#DFF1F1] text-black w-full py-8">
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold">Learning Techniques : </h1>
        <div className="flex gap-10 justify-around py-8">
          <div className="shadow-md p-4 rounded-md bg-base-100  ">
            <h2 className="text-2xl text-center p-4 text-white">Study Tech </h2>
            <div className="flex gap-2 ">
              <div className="text-center shadow-2xl p-4 rounded-2xl bg-[#FFCEE3]">
                <span className="flex items-center justify-center">
                  <FaBook size={50} />
                </span>
                <h2 className="text-xl">Study Techniques</h2>
                <p>Use active recall and spaced repetition to learn faster.</p>
              </div>
              <div className="text-center shadow-2xl p-4 rounded-2xl bg-[#FFCEE3]">
                <span className="flex items-center justify-center">
                  <FaBrain size={50} />
                </span>
                <h2 className="text-xl">Smart Learning</h2>
                <p>
                  Break big topics into smaller chunks for easy understanding.
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-md p-4 rounded-md bg-base-100">
            <h2 className="text-2xl text-center p-4 text-white">Time Management </h2>
            <div className="flex gap-2">
              <div className="text-center shadow-2xl p-4 rounded-2xl bg-[#FFCEE3]">
                <span className="flex items-center justify-center">
                  <IoIosTime size={50} />
                </span>
                <h2 className="text-xl">Time Management</h2>
                <p>Follow Pomodoro technique to stay focused and productive.</p>
              </div>
              <div className="text-center shadow-2xl p-4 rounded-2xl bg-[#FFCEE3]">
                <span className="flex items-center justify-center">
                  <TbFocus2 size={50} />
                </span>
                <h2 className="text-xl">Focus Improvement</h2>
                <p>Remove distractions and study in a quiet environment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningTips;

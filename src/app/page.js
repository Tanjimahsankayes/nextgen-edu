import AboutPage from "@/components/About";
import Banner from "@/components/Banner";
import InstructorPage from "@/components/Instructor";
import PopularCoursesPage from "@/components/PopularCourses";
import LearningTips from "@/components/Tips";
import TrendingCoursesPage from "@/components/TrendingCourses";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 flex-col items-center justify-between bg-white  sm:items-start">
        <Banner></Banner>
        <AboutPage></AboutPage>
        <PopularCoursesPage></PopularCoursesPage>
        <TrendingCoursesPage></TrendingCoursesPage>
        <LearningTips></LearningTips>
        <InstructorPage></InstructorPage>
      </main>
    </div>
  );
}



const AboutPage = () => {
    return (
      <div className="text-center space-y-4 py-6 bg-[#DFF1F1] text-black">
        <h4>About Us</h4>
        <div>
          <p className="w-8/12 mx-auto text-xl mb-4">
            <span className="font-semibold">
              We are passionate about empowering learners.
            </span>{" "}
            Worldwide with high-quality, accesible & engaging education. Our
            mission offering a diverse range of courses.
          </p>
          <div className="grid grid-cols-3 gap-4 my-6">
            <div className="shadow-md p-4 rounded-xl">
              <h1 className="text-4xl font-bold">25+</h1>
              <p>Years of learing experience</p>
            </div>
            <div className="shadow-md p-4 rounded-xl">
              <h1 className="text-4xl font-bold">56k</h1>
              <p>Students Enrolled</p>
            </div>
            <div className="shadow-md p-4 rounded-xl">
              <h1 className="text-4xl font-bold">170+</h1>
              <p>Experienced Teacher's Serives</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutPage;
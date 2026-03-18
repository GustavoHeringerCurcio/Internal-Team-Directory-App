import Header from "../components/navbar/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 text-black py-16 px-6 sm:px-12 lg:px-24 ">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center drop-shadow-lg  text-blue-600 mb-8 
          ">
            About TeamForce
          </h1>

          {/* Project Description */}
          <div className="text-lg sm:text-xl text-black mb-12 space-y-6">
            <p className="">
              TeamForce is a project I started to challenge myself and build a solid, responsive application using tools like React and Tailwind. This project was a chance for me to learn, push my boundaries, and improve as a developer.
            </p>
            <p className="">
              It took me about a week to finish the project, and it wasn't easy. There were several mini-challenges along the way, including managing states with React, working with the Fetch API to retrieve data, and mastering modal handling. Each challenge taught me something new, helping me become more confident in my abilities.
            </p>
            <p className="">
              What I love the most about programming is the constant evolution. Every bug fixed, every feature added, and every new tool I learn gets me closer to becoming the developer I want to be. The journey never ends, and I'm always excited to learn and grow.
            </p>
          </div>

          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-start mb-12 md:gap-12">
            <div className="flex-shrink-0">
              
              <img
                className="md:w-64 md:h-64 w-32 h-32  rounded-full object-[50%_80%] object-cover border-4 border-blue-600 shadow-lg"
                src="/images/my_picture.jpg" 
                alt="Creator of TeamForce"
              />
            </div>
            <div className=" text-center sm:text-left bg-white p-6 rounded-lg shadow-md max-w-xl md:max-w-full">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Creator: Gustavo Heringer Curcio</h3>
              <p className="text-gray-600 mt-4 text-lg sm:text-xl">
                Hi, I'm Gustavo Heringer Curcio, and I'm the developer behind TeamForce. This project has been an amazing opportunity for me to push my boundaries and keep learning. It's been a fun and challenging process, and I'm excited for the next step in my learning journey.
              </p>
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

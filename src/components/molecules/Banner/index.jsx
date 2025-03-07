import React from "react";
import Typewriter from "typewriter-effect";
import { FaDownload } from "react-icons/fa";
import { profile_image } from "../../../assets";

const Banner = () => {
  return (
    <div id="about" className="pt-20">
      <div className="flex flex-col-reverse gap-10 max-w-7xl  mx-auto md:flex-row items-center justify-center p-8 md:h-[60vh]">
        {/* Left Section */}
        <div className="text-white  flex flex-col justify-center md:items-start w-full">
          <h2 className="text-2xl font-bold mb-4">Hi, I'm</h2>
          <div className="text-2xl font-semibold mb-4 flex gap-2">
            A{" "}
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Web Developer",
                  "Mobile Developer",
                  "Python Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          <p className="text-lg mb-4 ">
            I am a passionate Software Developer specializing in Full-Stack
            Development and Backend Engineering. I have experience in building
            high-performance web and mobile applications using modern
            technologies and best practices.
          </p>
          <div className="flex gap-6">
            <div className="bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform shadow-[rgba(0,0,0,1)_8px_8px_0px_1px] hover:shadow-none hover:translate-y-1 hover:scale-105">
              HIRE ME
            </div>
            <div className="flex gap-3 items-center bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform shadow-[rgba(0,0,0,1)_8px_8px_0px_1px] hover:shadow-none hover:translate-y-1 hover:scale-105">
              <FaDownload />
              <h2>MY RESUME</h2>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="h-full w-full">
          <div className="max-md:hidden h-full w-72 relative group mx-auto">
            <div className="h-full w-72 rounded-lg group-hover:ring-orange-500 ring-4 ring-gray-600/50 shadow-lg shadow-orange-500 rotate-6 group-hover:rotate-0 duration-500 absolute"></div>
            <div className="h-full w-72 rounded-lg ring-4 group-hover:ring-orange-500 ring-gray-600/50 shadow-lg shadow-orange-500 -rotate-6 group-hover:rotate-0 duration-500 absolute bg-gray-800 flex flex-col items-center p-4">
              <div className="w-52 h-52 ring-2 ring-gray-400/10 rounded-full shadow-lg shadow-orange-500 group-hover:shadow-none duration-500 overflow-hidden">
                <img src={profile_image} className="w-full h-full" alt="" />
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-2 text-white text-center">
                  Kapil Kumar
                </h3>
                <p className="text-gray-300">MERN Stack Developer</p>
                <p className="text-gray-300">Web Enthusiast</p>
                <p className="text-gray-300">Tech Lover</p>
              </div>
              <div className="px-4 py-2 bg-orange-500 rounded-md text-white shadow-[rgba(0,0,0,1)_10px_10px_0px_1px] mt-4 hover:shadow-none hover:translate-y-1 duration-500 hover:scale-105">
                ABOUT ME
              </div>
            </div>
          </div>
          <div className="md:hidden md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={profile_image}
              alt="Kapil Kumar"
              className="max-w-96 max-h-96 rounded-full shadow-lg object-cover ring-2 ring-gray-400/10 hover:scale-105 transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

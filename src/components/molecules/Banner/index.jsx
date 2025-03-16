import React from "react";
import Typewriter from "typewriter-effect";
import { profile_image } from "../../../assets/images";
import { BsBuildingsFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

const Banner = () => {
  return (
    <div id="about" className="pt-20">
      <div className="flex flex-col-reverse gap-10 max-w-7xl  mx-auto md:flex-row items-center justify-center md:p-8 p-3 md:h-[60vh]">
        {/* Left Section */}
        <div className=" flex flex-col justify-center md:items-start w-full">
          <h2 className="md:text-2xl text-sm font-bold md:mb-3 mb-1">
            Hi, I'm
          </h2>
          <div className="md:text-2xl underline underline-offset-8 decoration-orange-500 text-orange-500 text-lg font-semibold mb-4 flex gap-1">
            A
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
          <p className="md:text-lg mb-4 text-sm">
            I am a passionate Software Developer specializing in Full-Stack
            Development and Backend Engineering. I have experience in building
            high-performance web and mobile applications using modern
            technologies and best practices.
          </p>

          <div className="flex md:gap-6 gap-3">
            <a
              href={`mailto:kapil.work.2002@gmail.com`}
              className="bg-orange-700 max-md:text-xs flex items-center justify-center  font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform shadow-[rgba(0,0,0,1)_8px_8px_0px_1px] hover:shadow-none hover:translate-y-1 hover:scale-105"
            >
              HIRE ME
            </a>
            <a
              href="https://drive.google.com/file/d/1IwYmUAwf4CKIsBGXNE5wXF8rwWaWK-EC/view?usp=sharing"
              target="_blank"
              className="flex gap-2 max-md:text-xs items-center justify-center bg-orange-700  font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform shadow-[rgba(0,0,0,1)_8px_8px_0px_1px] hover:shadow-none hover:translate-y-1 hover:scale-105"
            >
              <FaDownload className="max-md:text-xs" />
              <h2>MY RESUME</h2>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="h-full w-full flex justify-center items-center">
          <div className="sm:h-96 h-80 sm:w-72 w-64   relative group mx-auto">
            <div className="h-full sm:w-72 w-full rounded-lg group-hover:ring-orange-500 ring-4 ring-gray-600/50 shadow-lg shadow-orange-500 rotate-6 group-hover:rotate-0 max-sm:rotate-0 duration-500 absolute"></div>
            <div className="h-full sm:w-72 w-full justify-between rounded-lg ring-4 group-hover:ring-orange-500 ring-gray-600/50 shadow-lg shadow-orange-500 -rotate-6 group-hover:rotate-0 max-sm:rotate-0 duration-500 absolute bg-gray-800 flex flex-col items-center p-4">
              <div>
                <div className="sm:w-52 sm:h-52 w-48 h-48  ring-2 ring-gray-400/10 rounded-full shadow-lg shadow-orange-500 sm:group-hover:shadow-none duration-500 overflow-hidden">
                  <img src={profile_image} className="w-full h-full" alt="" />
                </div>
                <div className="flex flex-col items-center pt-4">
                  <div className="pt-4">
                    <h3 className="text-xl font-bold mb-2  text-center">
                      Kapil Kumar
                    </h3>
                    <a
                      href="https://iiitu.ac.in/"
                      target="_blank"
                      title="Indian Institute of Information Technology, Una Himachal Pradesh"
                      className="mb-4"
                    >
                      <div className="flex gap-1 items-center justify-center px-4 py-2 ring-2 ring-orange-500 rounded-md group hover:scale-105 hover:font-bold duration-700">
                        <BsBuildingsFill className="text-orange-500 group-hover:text-white" />
                        <span className="text-xs text-gray-400 group-hover:text-white">
                          #IIITian
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import Slider from "react-slick";
import { FaMapMarkerAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import educationData from "../../../data/educationData";

const EducationSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full bg-orange-200"></div>
    ),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-2 mt-4">{dots}</ul>
      </div>
    ),
  };

  return (
    <section
      id="education"
      data-aos="fade-up"
      className="p-8 max-sm:p-3 text-white max-w-5xl mx-auto flex flex-col gap-10 pt-20"
    >
      <div className="flex gap-2 items-center justify-center">
        <div className="h-10 w-2 bg-orange-500 rounded-full shadow-2xl shadow-orange-500"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Education</h2>
      </div>
      <Slider {...settings}>
        {educationData.map((education, index) => (
          <div key={index} className="p-4 sm:p-6">
            <div className="relative p-4 sm:p-6 ring-2 ring-gray-400/10 bg-gray-800 rounded-lg transition duration-300 hover:shadow-lg hover:shadow-orange-500">
              <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                <img
                  src={education.image}
                  alt={education.name}
                  className="w-full md:max-w-xs md:h-60 h-auto object-cover rounded-lg shadow-lg"
                />
                <div className="flex flex-col flex-1 w-full gap-2">
                  <h3 className="text-lg font-bold">{education.name}</h3>
                  <p className="text-sm">Degree: {education.degree}</p>
                  <p className="text-sm">
                    Field of Study: {education.fieldOfStudy}
                  </p>
                  <p className="text-xs">Type: {education.type}</p>
                  <h1 className="text-lg ">Description:</h1>
                  <p className="text-xs text-gray-400">
                    {education.description.substring(0, 50)}...
                  </p>
                  <p className="text-sm font-semibold">
                    Core subjects studied:
                  </p>
                  <ul className="flex gap-2 flex-wrap">
                    {education.coreSubjects.map((subject, idx) => (
                      <li
                        key={idx}
                        className="transition duration-300 text-xs hover:bg-orange-600 hover:text-white p-1 rounded-lg ring-2 ring-orange-500"
                      >
                        {subject}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute top-4 left-4 text-6xl text-orange-500 opacity-20">
                    &ldquo;
                  </div>
                  <div className="absolute bottom-4 right-4 text-6xl text-orange-500 opacity-20">
                    &rdquo;
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <FaMapMarkerAlt size={20} />
                <a
                  href={education.location}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline hover:text-orange-500 transition duration-300 text-xs"
                >
                  {education.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-orange-500 rounded-full p-2 shadow-lg hover:bg-orange-600 transition duration-300 hidden sm:flex`}
      style={{ ...style, display: "block", left: "-40px" }}
      onClick={onClick}
    >
      <FaArrowLeft className="text-white" />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-orange-500 justify-center items-center rounded-full p-2 shadow-lg hover:bg-orange-600 transition duration-300 hidden sm:flex`}
      style={{ ...style, display: "block", right: "-40px" }}
      onClick={onClick}
    >
      <FaArrowRight className="text-white" />
    </div>
  );
};

export default EducationSection;

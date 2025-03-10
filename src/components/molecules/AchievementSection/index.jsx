import React, { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../../atoms/Title";
import { project, quote } from "../../../assets/images";
import achievementData from "../../../data/achievementData";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="md:w-14 md:h-12 w-8 h-8 bg-[#0c1821] hover:bg-black duration-300 rounded-md md:text-2xl text-lg text-orange-500 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="md:w-14 md:h-12 w-8 h-8 bg-[#0c1821] hover:bg-black duration-300 rounded-md md:text-2xl text-lg text-orange-500 flex justify-center items-center absolute top-0 md:right-20 right-10 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const AchievementSection = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => setDotActive(next),
    appendDots: (dots) => (
      <div style={{ borderRadius: "10px", padding: "10px" }}>
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          background: i === dotActive ? "orange" : "gray",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      ></div>
    ),
  };

  return (
    <section id="achievements" className="w-full py-20">
      <div className="flex justify-center items-center text-center pb-8">
        <Title title={"Achievements"} />
      </div>
      <div className="max-w-6xl mx-auto md:px-8 px-3 ">
        <Slider {...settings}>
          {achievementData.map((achievement) => (
            <div key={achievement.id} className="w-full">
              <div className="w-full h-auto flex flex-col xl:flex-row justify-between">
                {/* Left Side */}
                <div className="w-full xl:w-[35%] h-full bg-gradient-to-r from-gray-900 to-gray-800 md:p-8 p-4 rounded-lg shadow-shadowOne flex flex-col md:flex-row xl:flex-col gap-8 justify-center md:justify-start xl:justify-center">
                  <img
                    className="h-52 md:h-32 xl:h-72 rounded-lg object-cover"
                    src={project}
                    alt={achievement.title}
                  />
                  <div className="w-full flex flex-col justify-end">
                    {/* <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Bound - Trolola
                    </p> */}
                    <h3 className="md:text-2xl text-lg font-bold">
                      {achievement.name}
                    </h3>
                    <p className="md:text-base text-sm tracking-wide text-gray-500">
                      {achievement.role}
                    </p>
                  </div>
                </div>

                {/* Right Side */}
                <div className="w-full xl:w-[60%] h-full flex flex-col justify-between ">
                  <img
                    className="md:w-20 md:xl:w-32 w-14 h-14"
                    src={quote}
                    alt="quote"
                  />
                  <div className="w-full h-[70%] md:py-10 py-5 bg-gradient-to-t from-gray-800 to-gray-900 rounded-lg shadow-shadowOne p-4 xl:p-8 flex flex-col justify-center gap-4 xl:gap-8">
                    <div className="flex flex-col justify-between xl:items-center md:py-6 py-2 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="md:text-xl xl:text-2xl text-lg font-medium tracking-wide">
                          {achievement.title}
                        </h3>
                        <p className="md:text-base text-xs text-gray-400 mt-3 ">
                          {achievement.date}
                        </p>
                      </div>
                      <div className="text-orange-500 flex gap-1">
                        {Array.from({ length: achievement.rating }, (_, i) => (
                          <RiStarFill key={i} />
                        ))}
                      </div>
                    </div>
                    <p className="md:text-base text-xs font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AchievementSection;

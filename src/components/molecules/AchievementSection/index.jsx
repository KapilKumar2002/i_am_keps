import React from "react";
import Slider from "react-slick";
import { Avatar } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../../atoms/Title";
import { project } from "../../../assets/images";

const testimonials = [
  {
    title: "Certified in Secure Coding by Udemy",
    role: "CEO, Tech Corp",
    image: project,
    description:
      "During my internship at Talentmonk, in a meeting with the team, CEO of Talentmonk, Mr. Ankit Kulkarni, suggested us to purchase this course. I am glad I did. It has helped me a lot in my career.",
  },
  {
    title: "Certified in Secure Coding by Udemy",
    role: "Marketing Manager, StartupX",
    image: project,
    description:
      "Amazing experience! The support team was always available and helpful.",
  },
  {
    title: "Certified in Secure Coding by Udemy",
    role: "Freelancer",
    image: project,
    description:
      "I've landed multiple high-profile projects through this platform. It's a game-changer!",
  },
];

const AchievementSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="w-full p-10 ">
      <Title title="Achievements" />
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 sm:p-6">
              <div className="relative p-4 sm:p-6 ring-2 ring-gray-400/10 bg-gray-800 rounded-lg transition duration-300 hover:shadow-lg hover:shadow-orange-500">
                <div className="flex flex-col md:flex-row  items-start gap-4 sm:gap-6">
                  <img
                    src={testimonial.image}
                    className="w-40 h-40 object-cover"
                  />
                  <div className="flex flex-col flex-1 w-full gap-1">
                    <h3 className="font-bold text-xl">{testimonial.title}</h3>
                    <p className="text-sm">{testimonial.role}</p>
                    <p className="text-sm">{testimonial.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AchievementSection;

import React from "react";
import Title from "../../atoms/Title";
import Slider from "react-slick";
import skillsData from "../../../data/skills";

const SkillSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <div
      id="skills"
      className="flex flex-col items-center pt-20 max-md:px-3 gap-8"
    >
      <Title title="Skills" />
      <div className="md:max-w-2xl w-full mx-auto md:px-8 px-3">
        <Slider {...settings}>
          {skillsData.map(({ skills, title }, index) => (
            <div key={title} className="flex justify-center items-center">
              <div className="flex flex-wrap justify-center md:gap-6 gap-2 ">
                {skills.map((skill, index) => (
                  <div className="flex flex-col items-center p-4 transform transition duration-500 hover:scale-105">
                    <div className="rounded-full overflow-hidden hover:ring-orange-500 hover:shadow-lg bg-white ring-2 hover:shadow-orange-500 ring-black shadow-[rgba(0,0,0,1)_5px_5px_0px_1px]">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className=" md:w-24 md:h-24 w-12 h-12 sm:w-20 sm:h-20 p-2 sm:p-3 md:p-4  object-cover   duration-200"
                      />
                    </div>
                    <p className="mt-2 md:text-sm text-xs font-medium">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SkillSection;

// import React from "react";
// import skills from "../../../data/skills";
// import Title from "../../atoms/Title";
// import Slider from "react-slick";
// import skillsData from "../../../data/skills";

// const SkillSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div
//       id="skills"
//       className="flex flex-col items-center pt-20 max-md:px-3 gap-8"
//     >
//       <Title title={"Skills"} />
//       <Slider {...settings}>

//       </Slider>
//     </div>
//   );
// };

// export default SkillSection;

// ("https://images.prismic.io/turing/652ebdc4fbd9a45bcec81864_Comprehensive_Guide_to_Sending_an_Email_Using_Node_Mailer_a2a37c6861.webp?auto=format%2Ccompress&fit=max&w=256");

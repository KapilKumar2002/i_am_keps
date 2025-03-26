import React from "react";
import Title from "../../atoms/Title";
import skillsData from "../../../data/skills";

const SkillSection = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center pt-20 max-md:px-3 gap-8"
    >
      <Title title="Skills" />
      <div className="w-[30rem] max-w-6xl flex shrink-0 flex-col gap-4 relative p-6 overflow-hidden">
        {skillsData.map((row, index) => (
          <div
            className="loop-slider"
            key={index}
            style={{
              "--duration": `${10000 + index * 2000}ms`,
              "--direction": index % 2 === 0 ? "normal" : "reverse",
            }}
          >
            <div
              className="flex w-fit gap-4"
              style={{
                animation: `loop var(--duration) linear infinite var(--direction)`,
              }}
            >
              {[...row, ...row].map((skill, i) => (
                <div
                  key={i}
                  className="flex gap-2 items-center justify-center px-7 py-3 text-slate-200 text-sm bg-slate-800 shadow-[0_0.1rem_0.2rem_rgba(0,0,0,0.2),0_0.1rem_0.5rem_rgba(0,0,0,0.3),0_0.2rem_1.5rem_rgba(0,0,0,0.4)] hover:shadow-orange-500"
                >
                  <img src={skill.image} alt={skill.name} className="w-5 h-5" />
                  <span className="text-slate-400 text-base">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="fade pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#1e293b,transparent_30%,transparent_70%,#1e293b)]" />
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

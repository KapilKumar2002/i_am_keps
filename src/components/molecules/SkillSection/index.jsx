import React from "react";
import skills from "../../../data/skills";
import Title from "../../atoms/Title";

const SkillSection = () => {
  return (
    <div id="skills" className="flex flex-col items-center pt-20 max-md:px-3">
      <Title title={"Skills"} />
      <div className="flex flex-wrap justify-center md:gap-6 gap-2 max-w-3xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-left"
            className="flex flex-col items-center p-4 transform transition duration-500 hover:scale-105"
          >
            <div className="rounded-full overflow-hidden hover:ring-orange-500 hover:shadow-lg bg-white ring-2 hover:shadow-orange-500 ring-black shadow-[rgba(0,0,0,1)_5px_5px_0px_1px]">
              <img
                src={skill.image}
                alt={skill.name}
                className=" md:w-24 md:h-24 w-12 h-12 sm:w-20 sm:h-20 p-2 sm:p-3 md:p-4  object-cover   duration-200"
              />
            </div>
            <p className="mt-2 md:text-sm text-xs font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;

("https://images.prismic.io/turing/652ebdc4fbd9a45bcec81864_Comprehensive_Guide_to_Sending_an_Email_Using_Node_Mailer_a2a37c6861.webp?auto=format%2Ccompress&fit=max&w=256");

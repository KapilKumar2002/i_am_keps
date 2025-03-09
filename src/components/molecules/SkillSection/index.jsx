import React from "react";
import skills from "../../../data/skills";

const SkillSection = () => {
  return (
    <div id="skills" className="py-12 flex flex-col items-center pt-20">
      <div className="pb-10">
        <h2 className="text-3xl font-bold text-center mb-2 px-4">Skills</h2>
        <div className="h-2 w-full bg-orange-500 rounded-full shadow-2xl shadow-orange-500"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 transform transition duration-500 hover:scale-105"
          >
            <div className="rounded-full overflow-hidden hover:ring-orange-500 hover:shadow-lg bg-white ring-2 hover:shadow-orange-500 ring-black shadow-[rgba(0,0,0,1)_5px_5px_0px_1px]">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 p-2 sm:p-4 md:p-8  object-cover   duration-200"
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

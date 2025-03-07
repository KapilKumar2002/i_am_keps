import React from "react";

const skills = [
  { name: "Laravel", image: "YOUR_IMAGE_URL_1" },
  { name: "CakePHP", image: "YOUR_IMAGE_URL_2" },
  { name: "CodeIgniter", image: "YOUR_IMAGE_URL_3" },
  { name: "Node.js", image: "YOUR_IMAGE_URL_4" },
  { name: "PHP", image: "YOUR_IMAGE_URL_5" },
  { name: "Python", image: "YOUR_IMAGE_URL_6" },
  { name: "MySQL / MongoDB", image: "YOUR_IMAGE_URL_7" },
  { name: "Docker", image: "YOUR_IMAGE_URL_8" },
];

const SkillSection = () => {
  return (
    <div className="py-12  flex flex-col items-center">
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
            <img
              src={
                "https://images.prismic.io/turing/652ebdc4fbd9a45bcec81864_Comprehensive_Guide_to_Sending_an_Email_Using_Node_Mailer_a2a37c6861.webp?auto=format%2Ccompress&fit=max&w=256"
              }
              alt={skill.name}
              className="max-w-32 max-h-32 rounded-full object-cover ring-2 ring-black hover:ring-orange-500 hover:shadow-lg hover:shadow-orange-500 shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] duration-200"
            />
            <p className="mt-2 text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;

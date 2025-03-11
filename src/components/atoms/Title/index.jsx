import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="md:h-10 h-6 md:w-2 w-1 bg-orange-500 rounded-full shadow-2xl shadow-orange-500"></div>
      <h2 className="md:text-3xl text-lg font-bold ">{title}</h2>
    </div>
  );
};

export default Title;

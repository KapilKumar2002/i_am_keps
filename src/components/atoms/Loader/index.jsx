import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = ({ isLoad }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-gray-800 flex flex-col text-orange-500 items-center justify-center transition-transform duration-1000 ease-in-out ${
        isLoad ? "translate-y-0" : "-translate-y-full pointer-events-none"
      }`}
    >
      <ThreeDots
        height="80"
        width="80"
        color="orange"
        ariaLabel="loading-indicator"
      />
      <div className="text-lg text-center">
        Please wait, while I am loading Kapil Kumar...
      </div>
    </div>
  );
};

export default Loader;

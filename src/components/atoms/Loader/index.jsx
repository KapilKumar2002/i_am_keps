import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col text-orange-500 px-4">
      <ThreeDots
        height="80"
        width="80"
        color="orange"
        ariaLabel="loading-indicator"
      />
      <div className="text-lg">
        Please wait, while I am loading Kapil Kumar...
      </div>
    </div>
  );
};

export default Loader;

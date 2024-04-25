import React from "react";
import Services from "../../assets/imges/banner/b2.jpg";

const RepairServices = () => {
  return (
    <div className="relative text-center h-80 text-white mt-20 md:mt-28">
      <img
        src={Services}
        alt=""
        className="absolute inset-0 w-full h-full -z-10  object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center -z-10">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
          Repair Services
        </h1>
        <h1 className="font-bold text-4xl md:text-6xl mt-2 lg:text-7xl">
          Up to <span className="text-red-500">70% OFF</span> - All T-Shirts
        </h1>
        <button className="mt-6 w-32 h-10 bg-gray-300 font-bold text-black hover:bg-lime-700 hover:text-gray-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default RepairServices;

import React from "react";
import { aboutdata } from "../../../FeatureData/FeatureData";

const CardsImges = () => {
  const nameBackgroundColors = [
    "#DBF5F8",
    "#f3d2e4",
    "#eaf5d8",
    "#b8d9ed",
    "#e3ddf4",
    "#f6e5db",
  ];

  const getNumColumns = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      return 4;
    } else if (screenWidth >= 768) {
      return 3;
    } else if (screenWidth >= 640) {
      return 2;
    } else {
      return 1;
    }
  };

  const getColumnWidth = () => {
    const numColumns = getNumColumns();
    return `w-${Math.floor(12 / numColumns)}/12`;
  };

  return (
    <div className="flex flex-wrap justify-center gap-6   sm:mt-72 md:mt-72  md:gap-4  lg:gap-8 xl:gap-12 ">
      {aboutdata.map((item, index) => (
        <div
          key={index}
          className={`border border-black shadow-xl rounded-2xl p-4 ${getColumnWidth()}`}
        >
          <img src={item.img} alt={item.name} className="w-28 h-24 mb-2" />
          <h1
            className="text-xs font-bold text-[#187c72]"
            style={{
              backgroundColor: nameBackgroundColors[index],
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            {item.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default CardsImges;

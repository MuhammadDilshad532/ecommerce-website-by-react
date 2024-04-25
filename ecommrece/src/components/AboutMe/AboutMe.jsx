import React from "react";
// import button from "../../assets/imges/button.png";
const AboutMe = () => {
  return (
    <div className="">
      <div className="mt-64  sm:ml-0 lg:ml-12  font-bold">
        <h1 className="  text-xl">Trade-in-offer</h1>
        <h1 className="lg:text-6xl md:text-3xl"> Super value deals</h1>
        <h1 className="lg:text-7xl md:text-3xl text-green-800">
          On all products
        </h1>
        <h1 className="mt-4 text-xl">Save more with coupons & upto 70% off!</h1>
      </div>
      <div>
        <button className="text-xl font-bold ml-28 mt-5 text-green-800 w-32 rounded-full cursor-pointer  bg-[#8f7e4f]">
          {" "}
          Shop Now
        </button>
        {/* <img className="absolute w-48    " src={button} alt="" /> */}
      </div>
    </div>
  );
};

export default AboutMe;

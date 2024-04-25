import React from "react";
import b17 from "../../assets/imges/banner/b17.jpg";
import b10 from "../../assets/imges/banner/b10.jpg";
import b7 from "../../assets/imges/banner/b7.jpg";
import b4 from "../../assets/imges/banner/b4.jpg";
import b18 from "../../assets/imges/banner/b18.jpg";

const BannerImges = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 -z-10 p-10 ">
          <div className="relative">
            <img src={b17} alt="" className="w-full" />
            <div className="absolute top-0 left-0 p-4 text-white">
              <h1 className="font-bold font-serif">crazy deals</h1>
              <h1 className="font-bold text-4xl mt-2">buy 1 get 1 free</h1>
              <h1 className="font-bold mt-2">
                The best classic dress is on sale at Cara
              </h1>
              <button className="border-2 border-white w-28 h-10 hover:bg-green-700 hover:text-white hover:border-green-700 mt-3 text-white ml-4 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 -z-10 p-10">
          <div className="relative">
            <img src={b10} alt="" className="w-full" />
            <div className="absolute top-0 left-0 p-4 text-white">
              <h1 className="font-bold font-seri">spring/summer</h1>
              <h1 className="font-bold text-4xl mt-2">upcoming season</h1>
              <h1 className="font-bold mt-2">
                The best classic dress is on sale at Cara
              </h1>
              <button className="border-2 border-white w-28 h-10 hover:bg-green-700 hover:text-white hover:border-green-700 mt-3">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 -z-10  p-10">
          <div className="relative">
            <img src={b7} alt="" className="w-full" />
            <div className="absolute top-0 left-0 p-4 text-white">
              <h1 className="font-bold text-2xl">SEASONAL SALE</h1>
              <h1 className="text-red-400 font-bold">Winter Collection 2023</h1>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 -z-10 p-10">
          <div className="relative">
            <img src={b4} alt="" className="w-full" />
            <div className="absolute top-0 left-0 p-4 text-white">
              <h1 className="font-bold text-2xl">SEASONAL SALE</h1>
              <h1 className="text-red-400 font-bold">Winter Collection 2023</h1>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 -z-10 p-10">
          <div className="relative">
            <img src={b18} alt="" className="w-full" />
            <div className="absolute top-0 left-0 p-4 text-white">
              <h1 className="font-bold text-2xl">T-SHIRTS</h1>
              <h1 className="text-red-400 font-bold">Winter Collection 2023</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#031d42] h-48 flex flex-col md:flex-row items-center sm:justify-center md:justify-around lg:justify-around">
        <div class="text-center md:text-left">
          <h1 class="text-white">Sign Up for Newsletter</h1>
          <h1 class="text-white">
            Get E-mail updates about our latest shop and{" "}
            <span class="text-[#d3a40d]">special offers</span>
          </h1>
        </div>
        <div class="mt-5 flex  md:mt-0 md:ml-5  ">
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full  md:w-auto h-8 rounded p-3 mb-2 md:mb-0 md:mr-2"
          />
          <button class="text-white bg-[#187c72] sm:w-28 sm:ml-3 md:w-28 lg:w-28  h-8 rounded-r md:rounded">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default BannerImges;

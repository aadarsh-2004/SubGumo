import React, { useState } from "react";
import herobg from "./hero-bg.svg";

console.log(herobg);
const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="  relative mt-0  w-full flex justify-center">
      <img
        src={herobg}
        className=" absolute  md:top-0 md:left-0 w-full h-full z-0 "
        alt="Hero Background"
      />

      <div className=" z-10 container m-2 p-0 md:px-20      h-full flex items-center relative ">
        <div className="flex flex-wrap p-1 md:p-2  items-center justify-between w-full">
          {/* Text Section  */}
          <div className="w-1/2   md:w-6/12 font-Volkhov lex flex-col items-start text-left md:text-left md:py-6 ">
            <h4 className="text-[10px] md:text-[22px] font-bold text-red-600 mb-3">
              Sabgumo - Explore the Unexplored

            </h4>
            <h1 className="text-[16px] md:text-[60px] font-extrabold leading-tight mb-6">
            Discover new destinations, experiences, and cultures with us

            </h1>
            <p className="text-[8px] md:text-[18px] text-gray-600 mb-6">
            your gateway to unparalleled travel experiences.We're a team of passionate
            <br className="hidden xl:block" />
              travelers, explorers, and storytellers dedicated to helping you discover 
              <br className="hidden xl:block" />
              the hidden gems of our world.{" "}
              <br className="hidden xl:block " />
              
              We'll take you on a journey that will leave you with unforgettable memories.
{" "}
              <br className="hidden xl:block" />
              
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start">
              {/* Button */}
              {/* <a
                href="#!"
                className="btn bg-blue-600  text-white text-xs md:text-lg px-6 py-3 rounded-lg shadow-lg mb-3 md:mb-0 md:mr-4"
              >
                Start  Exploring

              </a> */}
            </div>
          </div>

          {/* Image Section  */}
          <div className="w-1/2 md:w-6/12 relative  text-center md:text-right">
            <img
              className="ml-8 pt-0 w-[600px]  md:pt-0 max-w-full"
              src="https://technext.github.io/jadoo/v1.0.0/assets/img/hero/hero-img.png"
              alt="hero-header"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

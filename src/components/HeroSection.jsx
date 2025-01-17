import React, { useState } from "react";
import herobg from "./hero-bg.svg";

console.log(herobg);
const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=" relative mt-0  w-full flex justify-center">
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
              Best Destinations around the world
            </h4>
            <h1 className="text-[20px] md:text-[83px] font-extrabold leading-tight mb-6">
              Travel, enjoy and live a new and full life
            </h1>
            <p className="text-[8px] md:text-[18px] text-gray-600 mb-6">
              Built Wicket longer admire do barton vanity itself do in it.{" "}
              <br className="hidden xl:block" />
              Preferred to sportsmen it engrossed listening. Park gate{" "}
              <br className="hidden xl:block" />
              sell they west hard for the.
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start">
              {/* Button */}
              <a
                href="#!"
                className="btn bg-blue-600  text-white text-xs md:text-lg px-6 py-3 rounded-lg shadow-lg mb-3 md:mb-0 md:mr-4"
              >
                Explore
              </a>
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

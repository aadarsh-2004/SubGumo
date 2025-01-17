import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Get Best Prices",
      subTitle: "Pay through our application and save.",
    },
    {
      icon: service2,
      title: "Covid Safe",
      subTitle: "We have all the curated hotels that have.",
    },
    {
      icon: service3,
      title: "Flexible Payment",
      subTitle: "Enjoy the flexible payment through our app and get.",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      subTitle: "Find the best hotels and places to visit.",
    },
  ];

  return (
    <div className=" mb-1 md:mb-28">
      <h1 className="mt-20 font-poppins text-[18px] text-center">CATEGORY</h1>
      <h1 className="mt-2 font-Volkhov text-[28px] sm:text-[42px] md:text-[52px] text-center font-semibold text-blue-950">
        We Offer Best Services
      </h1>

      <section
        id="services"
        className="py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-screen-xl mx-auto"
      >
        {data.map((service, index) => (
          <div
            key={index}
            className="font-poppins flex-wrap flex-col gap-4 p-6 w-full bg-white  rounded-3xl transition-transform duration-300 hover:shadow-2xl hover:scale-105"
          >
            <div className="icon">
              <img
                src={service.icon}
                alt={service.title}
                className="h-12 mx-auto"
              />
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-blue-950 text-center">
              {service.title}
            </h3>
            <p className="text-[14px] sm:text-[16px] font-medium text-gray-700 text-center">
              {service.subTitle}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

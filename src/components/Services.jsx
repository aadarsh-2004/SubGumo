import React from "react";
import { Compass, Mountain, Utensils, Book, Camera, Heart, Leaf } from 'lucide-react';

export default function Services() {
  const data = [

    {
      icon: <Mountain className="w-12 h-12 text-blue-600" />,
      title: "Hidden Gems",
      subTitle: "Discover secret spots and off-the-beaten-path destinations.",
    },
    {
      icon: <Utensils className="w-12 h-12 text-blue-600" />,
      title: "Cultural Experiences",
      subTitle: "Immerse yourself in local traditions and cuisine.",
    },
    {
      icon: <Book className="w-12 h-12 text-blue-600" />,
      title: "Expert Guidance",
      subTitle: "In-depth travel guides and local knowledge.",
    },

    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Wellness Retreats",
      subTitle: "Rejuvenating experiences in serene locations.",
    },

  ];

  return (
    <div className="mb-1 md:mb-28">
      <h1 className="mt-20 font-poppins text-[18px] text-center text-blue-600">OUR SERVICES</h1>
      <h1 className="mt-2 font-Volkhov text-[28px] sm:text-[42px] md:text-[52px] text-center font-semibold text-blue-950">
        Experience the Unexplored
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto px-6 mt-4">
        From off-the-beaten-path destinations to unique cultural experiences, we'll take you on a journey that will leave you with unforgettable memories.
      </p>

      <section
        id="services"
        className="py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 max-w-screen-xl mx-auto"
      >
        {data.map((service, index) => (
          <div
            key={index}
            className="font-poppins flex flex-col items-center gap-4 p-6 w-full bg-white rounded-3xl transition-transform duration-300 hover:shadow-2xl hover:scale-105"
          >
            <div className="icon mb-2">
              {service.icon}
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
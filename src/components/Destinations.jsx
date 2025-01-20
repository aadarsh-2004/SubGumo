
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import { useState } from "react";
import { DestinationsData } from "../utils/constants";
import { NavLink } from 'react-router-dom';

export default function Destinations() {
 
  const packages = [ "The Group Tour", "Upcoming Tours"];
  const [active, setActive] = useState(1);

  return (
    <section id="destination" className="py-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-Volkhov font-bold"
          style={{
            textShadow:
              "0 0 2px rgba(150, 0, 0, 0.8), 0 0 5px rgba(255, 165, 0, 0.6)",
          }}
        >
          Recommended Destinations
        </h2>
      </div>

      {/* Packages */}
      <div className="flex justify-center mb-6">
        <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 text-lg font-medium">
          {packages.map((pkg, index) => (
            <li
              key={index}
              className={`cursor-pointer rounded-lg px-4 py-2 ${
                active === index + 1
                  ? "border-b-4 shadow-gray-400 shadow-2xl border-orange-400 text-blue-700"
                  : "text-gray-800 border-b-4 border-transparent"
              }`}
              onClick={() => setActive(index + 1)}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>

      {/* Destinations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {DestinationsData.map((destination) => (
        <NavLink key={destination.id} to={`/destination/${destination.id}`}>
            <div
            key={destination.id}
            className="bg-white bg-gradient-to-t from-white via-gray-50 to-white backdrop-blur-3xl rounded-xl p-4 shadow-gray-600 shadow-xl hover:shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-4"
          >
            <img
              src={destination.Cardimg}
              alt={destination.title}
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {destination.title}
            </h3>
            <p className="text-gray-600 mb-4">{destination.subTitle}</p>
            <div className="flex items-center justify-between mb-2">
              <div className="flex space-x-2">
                <img
                  src={info1}
                  alt="info1"
                  className="w-8 h-8 bg-purple-300 p-1 rounded-full"
                />
                <img
                  src={info2}
                  alt="info2"
                  className="w-8 h-8 bg-purple-300 p-1 rounded-full"
                />
                <img
                  src={info3}
                  alt="info3"
                  className="w-8 h-8 bg-purple-300 p-1 rounded-full"
                />
              </div>
              <h4 className="text-lg font-bold text-purple-600">
                ₹{destination.cost}
              </h4>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>{destination.duration}</span>
              <span>1000 Kms</span>
            </div>
          </div>
        </NavLink>
        ))}
      </div>
    </section>
  );
}

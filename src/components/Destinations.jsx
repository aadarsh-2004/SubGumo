import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import { useState } from "react";

export default function Destinations() {
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officially the Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asian country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];
  const packages = ["The Package Holiday", "The Group Tour", "Upcoming Tours"];
  const [active, setActive] = useState(1);

  return (
    <section id="recommend" className="py-8">
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
        {data.map((destination, index) => (
          <div
            key={index}
            className="bg-white bg-gradient-to-t from-white via-gray-50 to-white backdrop-blur-3xl rounded-xl p-4 shadow-gray-600 shadow-xl hover:shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-4"
          >
            <img
              src={destination.image}
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
        ))}
      </div>
    </section>
  );
}

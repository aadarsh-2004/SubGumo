import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaLocationArrow } from "react-icons/fa";
import { DestinationsData } from "../utils/constants";

// Main Component
export default function AboutDestination() {
  const { id } = useParams();
  const destination = DestinationsData.find((dest) => dest.id === parseInt(id));
  const [showItinerary, setShowItinerary] = useState(false);
  const [activeDay, setActiveDay] = useState(1);

  if (!destination) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-700 text-xl">Destination not found!</p>
      </div>
    );
  }

  const ItineraryView = () => (
    <div className="fixed inset-0 bg-gray-900/95 z-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => setShowItinerary(false)}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-8 group transition-colors"
        >
          <FaLocationArrow className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Destination</span>
        </button>

        {/* Itinerary Header */}
        <div className="text-center text-white mb-12 relative">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {destination.title} Itinerary
          </h1>
          <p className="text-xl mb-2 text-blue-200">
            {destination.itineraryData.dateRange}
          </p>
          <p className="text-xl text-blue-200">{destination.itineraryData.locations}</p>
        </div>

        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{DestinationsData.title}</h1>
            <p className="text-xl text-gray-600">{DestinationsData.dateRange}</p>
            <p className="text-lg text-gray-500">{DestinationsData.locations}</p>
        </div>



        {/* Itinerary Content */}
        <div className="flex gap-6 overflow-x-auto pb-8">
          {destination.itineraryData.days.map((day) => (
              <div key={day.dayNumber} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900">
                            Day {day.dayNumber} - <span className="text-blue-300">{day.title}</span>
                        </h2>
                    </div>  
                    <div className="p-6">
                        {day.activities.map((activity, actIndex) => (
                    <div key={actIndex}className="mb-6 relative pl-8 last:mb-0">
                      <div className="absolute left-0 top-1">
                        {activity.icon}
                      </div>
                      <div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
                        <h3 className="font-semibold text-gray-900 mb-1">
                            {activity.title}
                        </h3>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                        
                      </div>
                    </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        </div>
    </div>
  );

   return (
    <div className="relative">
      {/* Header Section */}
      <div>
        <img
          src={destination.img}
          alt={destination.title}
          className="w-full h-[550px] object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="container shadow-2xl bg-gray-50 border rounded-3xl px-6 py-8">
        {/* Tabs */}
        <div className="flex border-b bg-transparent mb-6">
          <button className="px-6 py-2 border-b-2 border-red-500 text-orange-500 font-bold">
            Descripción
          </button>
        </div>

        <div className="grid grid-cols-1 bg-gray-50 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="md:col-span-2 bg-white rounded-3xl shadow-lg p-4 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              {destination.title}
            </h2>
            <div className="flex items-center text-gray-600 space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, index) => (
                  <FaStar key={index} />
                ))}
                <FaStar className="text-gray-400" />
              </div>
              <span>4.5 (1200 Reviews)</span>
            </div>
            <p className="text-orange-500">{destination.name}</p>

            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Descripción general
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {destination.description}
              </p>
              <p className="text-orange-500 font-bold mt-4">
                Precio Estimado: Gratis
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-bold text-gray-800">Categorías</h3>
              <div className="flex gap-4 mt-2">
                {["Templos", "Relajación", "Cultural"].map((category) => (
                  <span
                    key={category}
                    className="bg-red-100 text-orange-500 px-4 py-2 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6 bg-transparent p-4 rounded-3xl">
            <div className="flex gap-4 font-poppins">
              <button className="bg-black text-white px-6 py-4 rounded-3xl shadow-md flex items-center gap-2"
              onClick={() => setShowItinerary(true)}
>
                <FaLocationArrow className="text-orange-500" />
                View Itinerary
              </button>
              <button className="bg-gray-200 shadow-md text-black px-6 py-2 rounded-3xl">
                Other Packages
              </button>
            </div>

            {/* Map */}
            <div className="w-[450px] h-[300px]">
              <h3 className="text-lg font-bold text-gray-800">
                {destination.name}
              </h3>
              <iframe
                src={destination.mapsIframe}
                className="w-full h-full rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {showItinerary && <ItineraryView />}

    </div>
  );
}

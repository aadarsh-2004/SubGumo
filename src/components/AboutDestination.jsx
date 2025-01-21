import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  MapPin,
  Sun,
  Sunset,
  Moon,
  Clock,
  Star,
  Calendar,
  Heart,
  X,
} from "lucide-react";
import { DestinationsData } from "../utils/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import IForm from "./IForm";

const getTimeIcon = (time) => {
  switch (time.toLowerCase()) {
    case "morning":
      return <Sun className="text-yellow-500 w-6 h-6" />;
    case "afternoon":
      return <Sunset className="text-orange-500 w-6 h-6" />;
    case "evening":
      return <Moon className="text-indigo-500 w-6 h-6" />;
    default:
      return <Clock className="text-gray-500 w-6 h-6" />;
  }
};

// Main Component
export default function AboutDestination() {
  const { id } = useParams();
  const destination = DestinationsData.find((dest) => dest.id === parseInt(id));
  const [showItinerary, setShowItinerary] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!destination) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-700 text-xl">Destination not found!</p>
      </div>
    );
  }

  return (
    <div className="relative bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={destination.img}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4">{destination.title}</h1>
            <p className="text-xl opacity-90">{destination.subTitle}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto  relative z-10 px-4">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill={i < 4 ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-gray-600">4.5 (1200 Reviews)</span>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-full transition-colors ${
                isFavorite
                  ? "bg-red-50 text-red-500"
                  : "bg-gray-50 text-gray-400"
              }`}
            >
              <Heart fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
            {/* Main Content */}
            
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  About the Destination
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {destination.description}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Categories</h2>
                <div className="flex flex-wrap gap-3">
                  {["Temples", "Relaxation", "Cultural"].map((category) => (
                    <span
                      key={category}
                      className="bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Price Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Starting from</span>
                    <span className="text-2xl font-bold text-orange-600">
                      {destination.cost}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration</span>
                    <span className="text-gray-900">
                      {destination.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setShowItinerary(true)}
                  className="w-full bg-black text-white px-6 py-4 rounded-xl font-medium hover:bg-gray-900 transition-colors"
                >
                  View Itinerary
                </button>
                <button  className="w-full bg-orange-100 text-orange-600 px-6 py-4 rounded-xl font-medium hover:bg-orange-200 transition-colors">
                  Book Now 
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <iframe
              src={destination.mapsIframe}
              className="w-full h-[300px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Itinerary Modal */}
      {showItinerary && (
        <ItineraryModal
          data={destination}
          onClose={() => setShowItinerary(false)}
        />
      )}
    </div>
  );
}

const ItineraryModal = ({ data, onClose }) => {
  return ( 
    <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
    
    <div className="relative bg-white opacity-85 rounded-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden">
      <div className="p-4 sm:p-6 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold">Your Journey Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <div className="overflow-y-auto md:overflow-x-auto p-4 sm:p-6 border max-h-[calc(90vh-80px)]">
        {/* Container that switches between column and row layout */}
        <div className="flex flex-col md:flex-row gap-4 md:min-w-max">
          {data.itineraryData.map((day) => (
            <Card
              key={day.day}
              className="border-2  rounded-2xl shadow-xl hover:shadow-2xl transition-shadow md:w-80 w-full"
            >
              <CardHeader className="bg-gray-50 rounded-2xl">
                <CardTitle className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <span className="text-base sm:text-lg">
                    Day {day.day}: {day.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {day.activities.map((activity, index) => (
                    <div key={index} className="flex gap-4">
                      {getTimeIcon(activity.time)}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {activity.time}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </div>
);
};

import KashmirCardImg from "../assets/KashmirCardImg.jpg";
import kashmirInfoImg from "../assets/kashmirInfoImg.jpg";
import JaiselmerCardImg from "../assets/JaiselmerCardImg.jpg";
import JaiselmerInfoImg from "../assets/JaiselmerInfoImg.jpg"

import ManaliCoverImg from "../assets/ManaliCoverImg.jpg";
import ManaliInfoImg from "../assets/ManaliInfoImg.jpg"

import GoaCoverImg from "../assets/GoaCoverImg.jpg";
import GoaInfoImg from "../assets/GoaInfoImg.jpg";

import KerelaInfoImg from "../assets/KerelaInfoImg.jpg"
import kerelaCoverImg from "../assets/kerelaCoverImg.jpg";

import UdaipurInfoImg from "../assets/UdaipurInfoImg.jpg"
import UdaipurCoverImg from "../assets/UdaipurCoverImg.jpg";

import NainitalInfoImg from "../assets/NainitalInfoImg.jpg"
import NainitalCardImg from "../assets/NainitalCardImg.jpg";

import RishikeshInfoImg  from "../assets/RishikeshInfoImg.jpg"
import RishikeshCardImg  from "../assets/RishikeshCardImg.jpg";
// import { Camera, Coffee, Hotel, Plane, Umbrella, Utensils, Bus, Moon } from 'lucide-react';
import { ArrowLeft, MoreVertical, PlusCircle, Map, Utensils, Plane, Theater, Hotel, Camera, 
  Coffee, MapPin, Star, ArrowUpRight, X } from 'lucide-react';
export const NavbarLinks = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Packages",
    href: "destinations",
  },
  {
    id: 3,
    name: "Inquire Now",
    href: "IForm",
  },
  {
    id: 4,
    name: "About Us",
    href: "about",
  },
];

export const DestinationsData = [
  {
    id: 1,
    name: "Kashmir",
    Cardimg:KashmirCardImg,
    img:kashmirInfoImg,
    title: "Chalo Kashmir ",
    subTitle: "Embark on a Journey to Kashmir: The Crown Jewel of India’s Natural Beauty",
    cost: "11999/- Only",
    duration: "Approx 2 night trip",
    description: "Temp Sanso jiasdjaifaskfm asjfnaskjas Lorem ipsum",
    mapsIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1036.8074022026033!2d76.4038594499299!3d31.633345308943166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b2a7b793adcfd%3A0x5e65f5500e37035e!2sKashmir%2C%20Himachal%20Pradesh%20177006!5e0!3m2!1sen!2sin!4v1737195230919!5m2!1sen!2sin",
    itineraryData: {
      title: "Paradise Journey",
      dateRange: "05 October - 15 October",
      locations: "Vaitape - Matira - Mount Otemanu",
      days: [
        {
          dayNumber: 1,
          date: "5 October",
          activities: [
            {
              icon: "<Plane />",
              title: "Arrival in Bora Bora",
              description: "Landing at Bora Bora Airport",
              type: "transport",
              time: "09:00"
            },
            {
              icon: "<Hotel />",
              title: "Check-in Resort Paradise",
              description: "Overwater Villa Check-in",
              type: "accommodation",
              time: "11:00"
            },
            {
              icon: "<Coffee />",
              title: "Welcome Dinner",
              description: "Traditional Polynesian feast",
              type: "food",
              time: "18:30"
            }
          ]
        },
        {
          dayNumber: 2,
          date: "6 October",
          activities: [
            {
              icon: "<Camera />",
              title: "Lagoon Tour",
              description: "Snorkeling with rays and sharks",
              image: "/api/placeholder/400/200",
              type: "attraction",
              time: "09:00"
            }
          ]
        }
      ]
    }
  },
  {
    id: 2,
    name: "Jaiselmer",
    Cardimg:JaiselmerCardImg,
    img:JaiselmerInfoImg,
    title: "जैसलमेर चला की!",
    subTitle: "Discover the Magic of the Golden City – Where History Meets the Sands",
    cost: "4990/- Only",
    duration: "Approx 5 night trip",
    description:
      "Kuluuuuuuu Manli Sanso jiasdjaifaskfm asjfnaskjas Lorem ipsum",
    mapsIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1036.8074022026033!2d76.4038594499299!3d31.633345308943166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b2a7b793adcfd%3A0x5e65f5500e37035e!2sKashmir%2C%20Himachal%20Pradesh%20177006!5e0!3m2!1sen!2sin!4v1737195230919!5m2!1sen!2sin",
      itineraryData: {
        title: "Paradise Journey",
        dateRange: "05 October - 15 October",
        locations: "Vaitape - Matira - Mount Otemanu",
        days: [
          {
            dayNumber: 1,
            date: "5 October",
            activities: [
              {
                icon: "<Plane />",
                title: "Arrival in Bora Bora",
                description: "Landing at Bora Bora Airport",
                type: "transport",
                time: "09:00"
              },
              {
                icon: "<Hotel />",
                title: "Check-in Resort Paradise",
                description: "Overwater Villa Check-in",
                type: "accommodation",
                time: "11:00"
              },
              {
                icon: "<Coffee />",
                title: "Welcome Dinner",
                description: "Traditional Polynesian feast",
                type: "food",
                time: "18:30"
              }
            ]
          },
          {
            dayNumber: 2,
            date: "6 October",
            activities: [
              {
                icon: "<Camera />",
                title: "Lagoon Tour",
                description: "Snorkeling with rays and sharks",
                image: "/api/placeholder/400/200",
                type: "attraction",
                time: "09:00"
              }
            ]
          }
        ]
      }
  },
  
  {
    id: 3,
    name: "Manali",
    Cardimg:ManaliCoverImg,
    img:ManaliInfoImg,
    title: "Manali Ki Vaadiyon Mein",
    subTitle: "Where snow-capped mountains meet cozy adventures, मनाली awaits you!",
    cost: "6999/- Only",
    duration: "Approx 5-night trip",
    description:
      "Bora Bora is a dream destination offering overwater bungalows, scenic views, and unforgettable experiences.",
    mapsIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1036.8074022026033!2d76.4038594499299!3d31.633345308943166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b2a7b793adcfd%3A0x5e65f5500e37035e!2sKashmir%2C%20Himachal%20Pradesh%20177006!5e0!3m2!1sen!2sin!4v1737195230919!5m2!1sen!2sin",
    itineraryData: {
      title: "Paradise Journey",
      dateRange: "05 October - 15 October",
      locations: "Vaitape - Matira - Mount Otemanu",
      days: [
        {
          dayNumber: 1,
          date: "5 October",
          activities: [
            {
              icon: "<Plane />",
              title: "Arrival in Bora Bora",
              description: "Landing at Bora Bora Airport",
              type: "transport",
              time: "09:00"
            },
            {
              icon: "<Hotel />",
              title: "Check-in Resort Paradise",
              description: "Overwater Villa Check-in",
              type: "accommodation",
              time: "11:00"
            },
            {
              icon: "<Coffee />",
              title: "Welcome Dinner",
              description: "Traditional Polynesian feast",
              type: "food",
              time: "18:30"
            }
          ]
        },
        {
          dayNumber: 2,
          date: "6 October",
          activities: [
            {
              icon: "<Camera />",
              title: "Lagoon Tour",
              description: "Snorkeling with rays and sharks",
              image: "/api/placeholder/400/200",
              type: "attraction",
              time: "09:00"
            }
          ]
        }
      ]
    }
  },
  {
    id: 4,
    name: "Goa",
    Cardimg:GoaCoverImg,
    img:GoaInfoImg,
    title: "Goa",
    subTitle: "Sun, Sand, and Stories That’ll Keep You Dancing Till Dawn!",
    cost: "9000",
    duration: "Approx 5-night trip",
    description:
      "Bora Bora is a dream destination offering overwater bungalows, scenic views, and unforgettable experiences.",
    mapsIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1036.8074022026033!2d76.4038594499299!3d31.633345308943166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b2a7b793adcfd%3A0x5e65f5500e37035e!2sKashmir%2C%20Himachal%20Pradesh%20177006!5e0!3m2!1sen!2sin!4v1737195230919!5m2!1sen!2sin",
    itineraryData: {
      title: "Paradise Journey",
      dateRange: "05 October - 15 October",
      locations: "Vaitape - Matira - Mount Otemanu",
      days: [
        {
          dayNumber: 1,
          date: "Day 1",
          title: "Arrival and North Goa Beaches",
          activities: [
            {
              icon: "<Plane/>",
              title: "Arrival in Goa",
              description: "Check into your hotel",
              type: "transport",
              time: "Morning"
            },
            {
              icon:" <Hotel />",
              title: "Calangute Beach",
            description: "Queen of Beaches - Perfect for sunbathing and water sports",
            type: "attraction",
            time: "Afternoon"
            },
            {
              icon: "<Coffee />",
              title: "Baga Beach",
            description: "Vibrant nightlife and beach shacks",
            type: "attraction",
            time: "Afternoon"
            },
            {
              icon: "<Coffee />",
              title: "Local Markets & Dinner",
              description: "Shop for souvenirs and enjoy Goan cuisine at beachside shacks",
              type: "leisure",
              time: "Evening"
            }
          ]
        },
        {
          dayNumber: 2,
          date: "6 October",
          activities: [
            {
              icon: "<Camera />",
              title: "Lagoon Tour",
              description: "Snorkeling with rays and sharks",
              image: "/api/placeholder/400/200",
              type: "attraction",
              time: "09:00"
            }
          ]
        }
      ]
    }
  },
  // Additional destinations to add to DestinationsData array
{
  id: 5,
  name: "Udaipur",
  Cardimg: UdaipurCoverImg, // Placeholder image reference
  img: UdaipurInfoImg, // Placeholder image reference
  title: "Venice of the East",
  subTitle: "Experience Royal Rajasthan in the City of Lakes and Palaces",
  cost: "42,500",
  duration: "Approx 4 night trip",
  description: "Discover the romantic city of Udaipur, with its stunning lakes, grand palaces, and rich cultural heritage.",
  mapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.764652392266!2d73.68207867374668!3d24.588058197657894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e567937f893f%3A0xb1d3c369838889!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin",
  itineraryData: {
    title: "Royal Rajasthan Journey",
    dateRange: "10 October - 14 October",
    locations: "City Palace - Lake Pichola - Fateh Sagar",
    days: [
      {
        dayNumber: 1,
        date: "10 October",
        activities: [
          {
            icon: "<Plane />",
            title: "Arrival in Udaipur",
            description: "Welcome at Maharana Pratap Airport",
            type: "transport",
            time: "10:00"
          },
          {
            icon: "<Hotel />",
            title: "Palace Hotel Check-in",
            description: "Luxury lakeside accommodation",
            type: "accommodation",
            time: "12:00"
          },
          {
            icon: "<Camera />",
            title: "Evening Lake Tour",
            description: "Sunset boat ride on Lake Pichola",
            type: "attraction",
            time: "17:00"
          }
        ]
      }
    ]
  }
},
{
  id: 6,
  name: "Nainital",
  Cardimg: NainitalCardImg, // Placeholder image reference
  img: NainitalInfoImg, // Placeholder image reference
  title: "Lake District of India",
  subTitle: "Where Mountains Meet Lakes in Perfect Harmony",
  cost: "35,999",
  duration: "Approx 3 night trip",
  description: "Experience the charm of this hill station nestled in the Kumaon foothills of the Himalayas.",
  mapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.868895045592!2d79.46151267385668!3d29.380632947439948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a1bc28fd9d61%3A0x7cae7ba916987db3!2sNainital%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin",
  itineraryData: {
    title: "Himalayan Lake Retreat",
    dateRange: "15 October - 18 October",
    locations: "Naini Lake - Mall Road - Snow View",
    days: [
      {
        dayNumber: 1,
        date: "15 October",
        activities: [
          {
            icon: "<Plane />",
            title: "Arrive in Nainital",
            description: "Scenic drive from Pantnagar Airport",
            type: "transport",
            time: "11:00"
          },
          {
            icon: "<Coffee />",
            title: "Mall Road Exploration",
            description: "Shopping and local delicacies",
            type: "attraction",
            time: "16:00"
          }
        ]
      }
    ]
  }
},
{
  id: 7,
  name: "Kerala",
  Cardimg: kerelaCoverImg, // Placeholder image reference
  img: KerelaInfoImg, // Placeholder image reference
  title: "God's Own Country",
  subTitle: "Backwaters, Beaches, and Beautiful Traditions",
  cost: "45,999",
  duration: "Approx 6 night trip",
  description: "Explore the tropical paradise of Kerala with its backwaters, tea plantations, and rich culture.",
  mapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016815.454371155!2d74.71497067116893!3d10.538127223674406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin",
  itineraryData: {
    title: "Kerala Discovery",
    dateRange: "20 October - 26 October",
    locations: "Munnar - Alleppey - Kochi",
    days: [
      {
        dayNumber: 1,
        date: "20 October",
        activities: [
          {
            icon: "<Plane />",
            title: "Arrive in Kochi",
            description: "International Airport Welcome",
            type: "transport",
            time: "09:00"
          },
          {
            icon: "<Camera />",
            title: "Fort Kochi Tour",
            description: "Historical sites and Chinese fishing nets",
            type: "attraction",
            time: "14:00"
          }
        ]
      }
    ]
  }
},
{
  id: 8,
  name: "Rishikesh",
  Cardimg: RishikeshCardImg, // Placeholder image reference
  img: RishikeshInfoImg, // Placeholder image reference
  title: "Yoga Capital of the World",
  subTitle: "Where Adventure Meets Spirituality",
  cost: "28,999",
  duration: "Approx 4 night trip",
  description: "Experience spiritual awakening and adventure sports in the foothills of the Himalayas.",
  mapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.780273839872!2d78.26694267389775!3d30.08676947536051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e67cf93f111%3A0xcc78804a6f941bfe!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin",
  itineraryData: {
    title: "Spiritual Adventure Journey",
    dateRange: "25 October - 29 October",
    locations: "Laxman Jhula - Ram Jhula - Triveni Ghat",
    days: [
      {
        dayNumber: 1,
        date: "25 October",
        activities: [
          {
            icon: "<Plane />",
            title: "Arrive in Dehradun",
            description: "Transfer to Rishikesh",
            type: "transport",
            time: "10:00"
          },
          {
            icon: "<Coffee />",
            title: "Evening Aarti",
            description: "Spiritual ceremony at Triveni Ghat",
            type: "attraction",
            time: "18:00"
          },
          {
            icon: "<Hotel />",
            title: "Ashram Check-in",
            description: "Peaceful riverside accommodation",
            type: "accommodation",
            time: "20:00"
          }
        ]
      }
    ]
  }
}

  
];

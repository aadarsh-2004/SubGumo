import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
export const Footer = () => {
  return (
    <div >
    <footer className="bg-white  font-poppins text-white py-8">
  <div className="max-w-7xl text-black mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Column 1: Logo and Company Info */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Tripify</h2>
        <p className="text-gray-700 mb-2">
          Explore the world with ease. Your journey begins here.
        </p>
        <p className="text-gray-700">© 2025 Tripify, All Rights Reserved.</p>
      </div>

      {/* Column 2: Navigation Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#about" className="text-gray-700 hover:text-white">About Us</a></li>
          <li><a href="#destinations" className="text-gray-700 hover:text-white">Destinations</a></li>
          
          <li><a href="#privacy" className="text-gray-700 hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Column 3: Social Media & Newsletter */}
      <div>
        <h3 className="text-xl font-normal mb-4">Stay Connected</h3>
        <div className="flex space-x-4 mb-4 items-center">
            <h3 className='font-medium'>Contact No. : 7877571101</h3>
        <IoLogoWhatsapp className="text-black text-2xl cursor-pointer hover:text-[#46c030] transition duration-300" />
        <FaInstagram className="text-black cursor-pointer hover:text-pink-600 text-2xl" />
          
        </div>

        {/* Newsletter */}
        
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-l-md text-gray-900"
          />
          <button className="p-2 bg-blue-600 rounded-r-md text-white">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

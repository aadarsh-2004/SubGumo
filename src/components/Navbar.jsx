import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);

  return (
    <nav className="bg-transparent backdrop-blur-md font-poppins font-medium text-[16px] sticky top-0 w-full z-50 py-1 md:py-4">
      <div className="container p-4 mx-auto flex justify-between max-w-[1350px] items-center px-6">
        {/* Logo */}
        <NavLink to="/" className="text-lg font-bold text-gray-800">
          <h3 className="text-4xl">
            Sab<span className="text-orange-500">G</span>umo
          </h3>
        </NavLink>

        {/* Menu (Mobile) */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setNavbarState(!navbarState)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className="flex items-start">
          {/* Navbar Links */}
          <div
            className={`lg:flex lg:items-center lg:space-x-6 ${
              navbarState ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-6 text-gray-800">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block px-4 py-2 ${
                      isActive ? "text-orange-500 font-bold" : "text-black hover:text-blue-600"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/packages"
                  className={({ isActive }) =>
                    `block px-4 py-2 ${
                      isActive ? "text-orange-500 font-bold" : "text-black hover:text-blue-600"
                    }`
                  }
                >
                  Packages
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/booking"
                  className={({ isActive }) =>
                    `block px-4 py-2 ${
                      isActive ? "text-orange-500 font-bold" : "text-black hover:text-blue-600"
                    }`
                  }
                >
                  Booking
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block px-4 py-2 ${
                      isActive ? "text-orange-500 font-bold" : "text-black hover:text-blue-600"
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
            <div className="flex gap-4 cursor-pointer">
              <IoLogoWhatsapp className="text-[#25D366] text-3xl hover:text-[#128C7E] transition duration-300" />
              <FaInstagram className="text-pink-600 text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

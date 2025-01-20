import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { NavbarLinks } from "../utils/constants";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);

  return (
    <nav className=" backdrop-blur-md font-poppins font-medium text-[16px] sticky top-0 w-full z-50 py-2 md:py-4">
      <div className="container mx-auto flex justify-between  items-center px-6 max-w-[1350px]">
        {/* Logo */}
        <NavLink to="/" className="text-lg  font-bold text-gray-800">
          <h3 className="text-4xl">
            Sab<span className="text-orange-500">G</span>umo
          </h3>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden ml-24  text-gray-800 focus:outline-none"
          onClick={() => setNavbarState(!navbarState)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
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
        <div className="flex justify-start">
          {/* Navbar Links */}
          <div
            className={`fixed top-16 left-0 w-full bg-white shadow-lg p-4 lg:static lg:bg-transparent lg:shadow-none lg:flex lg:items-center lg:gap-6 ${
              navbarState ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-6 text-gray-800">
              {NavbarLinks.map((navlink) => (
                <li key={navlink.id}>
                  <NavLink
                    to={navlink.href}
                    className={({ isActive }) =>
                      `block px-4 py-2 ${
                        isActive
                          ? "text-orange-500 font-bold"
                          : "text-black hover:text-blue-600"
                      }`
                    }
                  >
                    {navlink.name}
                  </NavLink>
                </li>
              ))}
                           
            </ul>
            <div className="flex gap-4 mt-4 lg:mt-0 lg:ml-6">
              <a
                href="https://wa.me/917877571101" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp className="text-[#25D366] text-3xl hover:text-[#128C7E] transition duration-300 cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/your_instagram_handle" // Replace with your Instagram handle
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-600 text-3xl cursor-pointer hover:text-pink-500 transition duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

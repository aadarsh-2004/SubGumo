import { useState, useCallback, memo } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { NavbarLinks } from "../utils/constants";

const Logo = memo(() => (
  <NavLink to="/" className="relative group">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      Sab
      <span className="text-orange-500 inline-block group-hover:rotate-12 transition-transform duration-300">
        G
      </span>
      umo
    </h3>
    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300" />
  </NavLink>
));

const SocialButton = memo(
  ({ href, icon: Icon, gradientFrom, gradientTo, shadowColor }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
    >
      <div
        className={`absolute -inset-3 rounded-full opacity-20 group-hover:opacity-0 transition-opacity duration-300 animate-ping`}
        style={{ background: gradientFrom }}
      />
      <div
        className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"
        style={{
          background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
        }}
      />
      <div
        className={`relative p-3 bg-gradient-to-br from-white to-${shadowColor}-50 rounded-full 
      shadow-lg shadow-${shadowColor}-500/20 transition-all duration-300 
      group-hover:shadow-${shadowColor}-500/40 group-hover:scale-110 group-hover:rotate-12`}
      >
        <Icon
          className={`text-2xl text-${shadowColor}-500 group-hover:text-${shadowColor}-600 
        transition-all duration-300 group-hover:-rotate-12`}
        />
      </div>
    </a>
  )
);

const NavbarLink = memo(({ navlink, onClick }) => (
  <NavLink
    to={navlink.href}
    onClick={onClick}
    className={({ isActive }) =>
      `block px-6 py-3 lg:px-4 lg:py-2 relative group transition-colors duration-300
      ${
        isActive
          ? "text-orange-500 font-bold"
          : "text-gray-700 hover:text-blue-600"
      }`
    }
  >
    {navlink.name}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
  </NavLink>
));

const Navbar = () => {
  const [navbarState, setNavbarState] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Memoized handlers
  const toggleNavbar = useCallback(() => {
    setNavbarState((prev) => !prev);
  }, []);

  const closeNavbar = useCallback(() => {
    setNavbarState(false);
  }, []);

  // Use ResizeObserver for better performance
  useState(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return (
    <nav
      className={`fixed  w-full z-50 transition-all duration-300 font-poppins 
      ${scrolled ? "py-2 bg-white shadow-lg" : "py-4 bg-white/90"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 max-w-7xl">
        <Logo />

        <button
          className="lg:hidden relative z-50 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          onClick={toggleNavbar}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                  navbarState && index === 0
                    ? "rotate-45 translate-y-2"
                    : navbarState && index === 1
                    ? "opacity-0"
                    : navbarState && index === 2
                    ? "-rotate-45 -translate-y-2"
                    : ""
                }`}
              />
            ))}
          </div>
        </button>

        <div
          className={`fixed inset-0 lg:static lg:flex lg:items-center lg:gap-8 transition-all duration-300
          ${
            navbarState
              ? "visible opacity-100 bg-white/95 backdrop-blur-lg"
              : "invisible lg:visible opacity-0 lg:opacity-100"
          }`}
        >
          <ul
            className={`flex flex-col lg:flex-row items-center gap-6 pt-20 lg:pt-0 transition-all duration-500
            ${
              navbarState
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }`}
          >
            {NavbarLinks.map((navlink) => (
              <li key={navlink.id} className="w-full lg:w-auto">
                <NavbarLink navlink={navlink} onClick={closeNavbar} />
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-6 mt-8 lg:mt-0 lg:ml-6 transition-all duration-500">
            <SocialButton
              href="https://wa.me/917877571101"
              icon={IoLogoWhatsapp}
              gradientFrom="#4ade80"
              gradientTo="#16a34a"
              shadowColor="green"
            />
            <SocialButton
              href="https://www.instagram.com/your_instagram_handle"
              icon={FaInstagram}
              gradientFrom="#ec4899"
              gradientTo="#a855f7"
              shadowColor="pink"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);

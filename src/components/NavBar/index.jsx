import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { About, Contact, Home, Logo, Projects } from "../../assets";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: About },
    { name: "Projects", path: "/projects", icon: Projects },
    { name: "Contact", path: "/contact", icon: Contact },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className=" w-full z-50 bg-gradient-to-r from-blue to-mint-blue text-white py-4 px-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (Navigates to Home) */}
        <Link
          to="/"
          className="text-2xl flex flex-row items-center font-bold text-light-pink hover:text-mint-green transition duration-300"
        >
          <img
            src={Logo}
            alt="Logo"
            className=" hover:text-mint-green transition duration-300"
          />
          <h3>Portfolio</h3>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden text-light-pink hover:text-mint-green transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-2 rounded transition duration-300 ${
                  isActive(item.path)
                    ? "text-light-pink border-b-2 border-light-pink font-semibold"
                    : "text-light-pink hover:text-mint-green hover:border-b-2 hover:border-light-pink"
                }`}
              >
                <img src={item.icon} alt="Logo" width={25} className="mr-2" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sliding Nav Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-blue to-mint-blue z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-light-pink hover:text-mint-green transition duration-300"
          onClick={() => setIsMenuOpen(false)}
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
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className="flex flex-col space-y-4 p-6 mt-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
                className={`flex items-center justify-around px-4 py-2 rounded transition duration-300 ${
                  isActive(item.path)
                    ? "text-light-pink border-b-2 border-light-pink font-semibold"
                    : "text-light-pink hover:text-mint-green hover:border-b-2 hover:border-light-pink"
                }`}
              >
                <img src={item.icon} alt="Logo" width={25} />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

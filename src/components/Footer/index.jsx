import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
const Footer = () => {
  const links = [
    {
      title: "Facebook",
      href: "https://www.facebook.com/3bdulla7elseginy",
      icon: <FaFacebook className="mr-2" />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/abdullah-elseginy-7bbbb21ba/",
      icon: <FaLinkedin className="mr-2" />,
    },
    {
      title: "GitHub",
      href: "https://github.com/Abdullah-Elseginy",
      icon: <FaGithub className="mr-2" />,
    },
    {
      title: "Instagram",
      href:
        "https://www.instagram.com/3bdulla7.elseginy/profilecard/?igsh=NnYwd3dpdjZrOWN3",
      icon: <FaInstagram className="mr-2" />,
    },
    {
      title: "WhatsApp",
      href: "https://wa.link/upgmhp",
      icon: <FaWhatsapp className="mr-2" />,
    },
  ];
  return (
    <footer className="bg-gradient-to-r from-mint-green via-mint-blue to-blue text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Abdullah Elseginy. All Rights Reserved.</p>
        <div className="mt-2 space-x-4 flex items-center justify-center flex-wrap">
          {links.map((link, index) => (
            <div
              key={index}
              className="flex flex-row items-center bg-black p-2 rounded-lg my-3 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-500 flex items-center font-bold"
              >
                {link.icon}
                {link.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

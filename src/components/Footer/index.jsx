import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import packageJson from "../../../package.json";

const Footer = () => {
  const links = [
    {
      title: "GitHub",
      href: "https://github.com/Abdullah-Elseginy",
      icon: <FaGithub />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/abdullahelseginy/",
      icon: <FaLinkedin />,
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/3bdulla7elseginy",
      icon: <FaFacebook />,
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/3bdulla7.elseginy/profilecard/?igsh=NnYwd3dpdjZrOWN3",
      icon: <FaInstagram />,
    },
    {
      title: "WhatsApp",
      href: "https://wa.link/upgmhp",
      icon: <FaWhatsapp />,
    },
  ];

  return (
    <footer className="bg-secondary text-text-secondary py-8 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-accent hover:-translate-y-1 transition-all duration-300"
              aria-label={link.title}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="font-mono text-sm">
          &copy; {new Date().getFullYear()} Abdullah Elseginy. Built with React & Tailwind.
        </p>
        <p className="font-mono text-xs text-text-secondary/60 mt-2">
          version {packageJson.version}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

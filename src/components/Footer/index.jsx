import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-mint-green via-mint-blue to-blue text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Abdullah Elseginy. All Rights Reserved.</p>
        <div className="mt-2 space-x-4">
          <a
            href="https://www.linkedin.com/in/abdullah-elseginy-7bbbb21ba/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Abdullah-Elseginy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

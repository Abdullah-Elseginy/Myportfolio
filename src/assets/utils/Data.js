import { SiGmail } from "react-icons/si";
import { AMSAPP, BloomifyMocup, BloomifyWebtMocup, FreshCartMocup, PortoflioWebtMocup, ShoglMocup } from "..";
import { FaAws, FaFacebook, FaGit, FaGithub, FaInstagram, FaJs, FaLinkedin, FaLinux, FaMobileAlt, FaReact, FaWhatsapp } from "react-icons/fa";

const ProjectsData = [
    {
      id:"1",
      title: "Academy Management System App",
      description:
        "A React Native mobile application that integrates with third-party APIs to display dynamic data in a clean UI.",
      githubLink:
        "https://github.com/Abdullah-Elseginy/Academy-management-System-App",
      image: AMSAPP,
    },
    {
      id:"2",
      title: "Shoghl App",
      description:
        "This mobile application, built with React Native, facilitates the hiring process by allowing job seekers to apply and company owners to post job listings and hire candidates",
      githubLink: "https://github.com/Abdullah-Elseginy/Shoghl-Application",
      image: ShoglMocup,
    },
    {
      id:"3",
      title: "Bloomify App",
      description:
        "Bloomify is an e-commerce application designed for selling flowers online. It allows users to browse and purchase a wide variety of floral arrangements.",
      githubLink: "https://github.com/Abdullah-Elseginy/BLOOMIFY-APP-ITI",
      image: BloomifyMocup,
    },
    {
      id:"4",
        title: "FreshCart Website",
        description:
          "FreshCart is an e-commerce web application designed for selling Clothes online. It allows users to browse and purchase a wide variety of floral arrangements.",
        githubLink: "https://github.com/Abdullah-Elseginy/E-Commerce-App",
        image: FreshCartMocup,
      },
      {
        id:"5",
        title: "Bloomify web application",
        description:
          "Bloomify is an e-commerce web application designed for selling flowers online. It allows users to browse and purchase a wide variety of floral arrangements.",
        githubLink:
          "https://github.com/Paula-Eissa/BLOMIFY",
        image: BloomifyWebtMocup,
      },
      {
        id:"6",
        title: "portfolio",
        description:
          "this portfolio website refer to my curated collection of works, achievements, or assets that showcase an individual's or organization's skills, accomplishments, and expertise",
        githubLink:
          "https://github.com/Abdullah-Elseginy/Myportfolio",
        image: PortoflioWebtMocup,
      },
 
  ];
  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript", "Python"],
      icon: <FaJs className="text-4xl text-light-pink" />,
    },
    {
      category: "Mobile Application Technologies",
      items: ["React Native", "Redux", "React Hooks"],
      icon: <FaMobileAlt className="text-4xl  text-light-pink" />,
    },
    {
      category: "Concepts",
      items: ["OOP", "AWS", "Agile", "Design Patterns"],
      icon: <FaAws className="text-4xl  text-light-pink" />,
    },
    {
      category: "Front-End",
      items: ["HTML-5", "CSS-3", "Bootstrap", "React Native", "React"],
      icon: <FaReact className="text-4xl  text-light-pink" />,
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "Firebase"],
      icon: <FaGit className="text-4xl  text-light-pink" />,
    },
    {
      category: "Other Skills",
      items: ["Network Infrastructure", "CCNA", "Cyber Security Basics"],
      icon: <FaLinux className="text-4xl  text-light-pink" />,
    },
  ];
  const links = [
    {
      title: "Facebook",
      href: "https://www.facebook.com/3bdulla7elseginy",
      icon: <FaFacebook className="mr-2 w-36 h-36 text-light-pink " />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/abdullah-elseginy-7bbbb21ba/",
      icon: <FaLinkedin className="mr-2 w-36 h-36 text-light-pink" />,
    },
    {
      title: "GitHub",
      href: "https://github.com/Abdullah-Elseginy",
      icon: <FaGithub className="mr-2 w-36 h-36 text-light-pink " />,
    },
    {
      title: "Instagram",
      href:
        "https://www.instagram.com/3bdulla7.elseginy/profilecard/?igsh=NnYwd3dpdjZrOWN3",
      icon: <FaInstagram className="mr-2 w-36 h-36 text-light-pink" />,
    },
    {
      title: "WhatsApp",
      href: "https://wa.link/upgmhp",
      icon: <FaWhatsapp className="mr-2 w-36 h-36 text-light-pink" />,
    },
    {
      title: "Send Email",
      href: "./contact",
      icon: <SiGmail className="mr-2 w-36 h-36 text-light-pink" />,
    },
  ];

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          arrows: true,
        },
      },
    ],
  };

  export {ProjectsData,settings,links,skills}
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
  const skillsAbout = [
    { name: "Mobile App Development", percentage: 95, bgColor: "bg-blue" },
    { name: "Web Development", percentage: 75, bgColor: "bg-mint-blue" },
    { name: "React Native", percentage: 95, bgColor: "bg-mint-green" },
    { name: "React js", percentage: 80, bgColor: "bg-blue" },
  ];
  const softSkills = [
    {
      skill: "Communication",
      description: "Clearly expressing ideas verbally and in writing, while listening and adapting effectively."
    },
    {
      skill: "Collaboration",
      description: "Working well with others to achieve shared goals through teamwork and cooperation."
    },
    {
      skill: "Progressive",
      description: "Staying current with new trends, technologies, and seeking continuous personal and professional growth."
    },
    {
      skill: "Presentation Skill",
      description: "Delivering clear, persuasive, and engaging presentations, handling questions confidently and professionally."
    },
    {
      skill: "Time Management",
      description: "Prioritizing tasks, managing deadlines, and efficiently allocating time for achieving goals."
    },
    {
      skill: "Attention to Detail",
      description: "Noticing small errors and inconsistencies, ensuring accuracy and high-quality work."
    },
    {
      skill: "Critical Thinking",
      description: "Analyzing information logically, solving problems, and making informed decisions based on reasoning."
    },
    {
      skill: "Creativity",
      description: "Generating innovative ideas and solutions, thinking outside the box for challenges."
    },
    {
      skill: "Interviewing Skills",
      description: "Conducting job interviews effectively, evaluating responses, and assessing candidate suitability for roles."
    },
    {
      skill: "Self-Motivation",
      description: "Independently staying focused, proactive, and productive while taking ownership of tasks and goals."
    },
    {
      skill: "Troubleshooting",
      description: "Diagnosing issues, analyzing solutions, and resolving problems effectively with technical expertise."
    }
  ];

  const hardSkills = [

    {
      skill: "JavaScript",
      description: "Experienced in JavaScript for building interactive web applications and mobile apps."
    },
    {
      skill: "Python",
      description: "Knowledgeable in Python for scripting, automation, and backend development tasks."
    },

    {
      skill: "React Native",
      description: "Skilled in building mobile apps using React Native, enabling cross-platform development."
    },
    {
      skill: "Redux",
      description: "Proficient in state management with Redux for efficient data flow in applications."
    },
    {
      skill: "React Hooks",
      description: "Experienced in using React Hooks to manage state and side effects in React apps."
    },

    {
      skill: "OOP",
      description: "Experienced in Object-Oriented Programming, focusing on design, inheritance, and polymorphism."
    },
    {
      skill: "AWS",
      description: "Familiar with Amazon Web Services (AWS) for cloud infrastructure and application deployment."
    },
    {
      skill: "Agile",
      description: "Experienced in Agile methodologies for iterative development and team collaboration."
    },
    {
      skill: "Design Patterns",
      description: "Understanding of design patterns like Singleton, Factory, and Observer for scalable apps."
    },

    {
      skill: "HTML-5 | CSS-3 | Bootstrap",
      description: "Proficient in HTML5, CSS3, and Bootstrap for responsive and structured web pages."
    },
    {
      skill: "React Native | React",
      description: "Experienced in building web and mobile applications using React and React Native."
    },
    {
      skill: "Git",
      description: "Proficient in using Git for version control and collaborating in development projects."
    },
    {
      skill: "Git Hub",
      description: "Experienced in using GitHub for project collaboration, code management, and version control."
    },
    {
      skill: "Postman",
      description: "Skilled in using Postman for API testing and documentation during development."
    },
    {
      skill: "Firebase",
      description: "Familiar with Firebase for real-time databases, authentication, and app hosting."
    },
    {
      skill: "Network Infrastructure",
      description: "Understanding of network infrastructure, including protocols, hardware, and configuration."
    },
    {
      skill: "CCNA",
      description: "Certified in Cisco's CCNA, with expertise in networking and security concepts."
    },
    {
      skill: "Cyber Security Basics",
      description: "Knowledgeable in cybersecurity fundamentals to protect networks and data from threats."
    }
  ];
  const myProjects = [
    {
      title: "E-Commerce App (Bloomify)",
      description: "Built a full e-commerce mobile application for selling flowers and bouquets."
    },
    {
      title: "Shoghl App",
      description: "Worked on designing and developing the front-end of the Shoghl app, similar to Wuzzuf."
    },
    {
      title: "E-Commerce Website (Clothes)",
      description: "Built a full e-commerce mobile application for selling clothes."
    },
    {
      title: "Offline Note App",
      description: "Created a note-taking app with full functionality for adding, editing, and deleting notes."
    },
    {
      title: "Cypher App",
      description: "Developed an app to convert plain text to cipher text and vice versa."
    }
  ];
  

  const myCertificates = [
    {
      title: "ITI 4-Month Program Certificate",
      description: "Certificate by Information Technology Institute",
      time: "May 2024"
    },
    {
      title: "Camp Coding React Native Certificate",
      description: "Certificate by Camp Coding",
      time: "January 2022"
    },
    {
      title: "Network Infrastructure and Cybersecurity",
      description: "Certificate by MCIT Egypt",
      time: "August 2022"
    }
  ];
  
  const myEducations = [
    {
      title: "ITI 4-month Diploma in Front-End and Cross Platform",
      institution: "Information Technology Institute",
      time: "May 2024",
      description: "Diploma in Front-End & Cross Platform Development"
    },
    {
      title: "Faculty of Computers and Information",
      institution: "Tanta University, Egypt",
      time: "Graduation: 2022",
      description: "Bachelor's degree in Information Technology"
    }
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

  export {ProjectsData,settings,links,skills,skillsAbout,softSkills,hardSkills,myProjects,myCertificates,myEducations}
import { MyImage } from "../../assets";

const About = () => {
  const workExperience = [
    {
      title: "React Native Developer",
      company: "IBS ",
      time: "08/2024-12/2024",
      description:
        "Junior React native developer at Infinity Business Solution responsible for developing the front-End of applications and APIs integrations.",
    },
    {
      title: "React Native Developer",
      company: "Camp Coding",
      time: "08/2024-12/2024",
      description:
        "Junior React native developer at Infinity Business Solution responsible for developing the front-End of applications and APIs integrations.",
    },
    {
      title: "Network Instructor",
      company: "Code",
      time: "02/2023-5/2023",
      description: "CCNA instructor at Code for three months .",
    },
  ];
  const InternData = [
    {
      title: "Front-End and Cross Platform Mobile App ",
      company: "ITI",
      time: "05/2024-09/2024",
      description:
        "Gained experience in web development and mobile application.",
    },
    {
      title: "Fundamentals of Infrastructure,System and cybersecurity",
      company: " MCIT",
      time: "07/2022-09/2022",
      description:
        "Gained experience in cybersecurity, Cloud, Wireless and network.",
    },
    {
      title: "React Native Development",
      company: "Camp Coding",
      time: "10/201-06/2022",
      description:
        "Gained experience in developing mobile application with react native.",
    },
  ];
  return (
    <div className="bg-light-pink min-h-screen flex flex-col items-center py-10">
      <h1 className="text-blue text-4xl font-bold mb-6">ABOUT ME</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center max-w-5xl bg-white shadow-lg p-6 rounded-lg">
        {/* Left Section */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-mint-green text-3xl font-bold">Your Name</h2>
          <p className="text-gray-700 mt-2">
            A passionate developer with expertise in Front-End and
            Cross-Platform development, creating professional mobile and web
            applications with clean, responsive designs.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <span className="material-icons text-mint-blue mr-2">home</span>
              Address: Your Address Here
            </li>
            <li className="flex items-center">
              <span className="material-icons text-mint-blue mr-2">phone</span>
              Phone: Your Phone Number
            </li>
            <li className="flex items-center">
              <span className="material-icons text-mint-blue mr-2">email</span>
              Email: your.email@example.com
            </li>
            <li className="flex items-center">
              <span className="material-icons text-mint-blue mr-2">
                language
              </span>
              Website: yourwebsite.com
            </li>
          </ul>
        </div>

        {/* Center Section */}
        <div className="my-6 md:my-0 mx-10 md:w-1/3">
          <img
            src="your-profile-picture.jpg"
            alt="Your Name"
            className="rounded-full border-4 border-mint-green shadow-lg w-48 h-48 md:w-60 md:h-60 mx-auto"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/3">
          <h2 className="text-mint-green text-2xl font-bold mb-4">
            My Professional Skills
          </h2>
          <p className="text-gray-700 mb-4">
            Dedicated to ensuring growth with expertise in development, design,
            and marketing strategies.
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-blue font-medium">
                Web Development <span className="text-gray-600">(95%)</span>
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue h-2 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
            <div>
              <p className="text-blue font-medium">
                Mobile Development <span className="text-gray-600">(85%)</span>
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-mint-blue h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div>
              <p className="text-blue font-medium">
                UI/UX Design <span className="text-gray-600">(90%)</span>
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-mint-green h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

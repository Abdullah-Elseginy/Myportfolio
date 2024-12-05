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
    // <section className="min-h-screen p-8">
    <div className="min-h-screen flex items-center justify-center text-light-pink ">
      <div className="w-[90%] max-w-4xl bg-mint-blue p-6 rounded-xl shadow-lg my-3">
        <header className="text-center">
          <h1 className="text-2xl font-bold mb-4">Portfolio 2025</h1>
        </header>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Profile Picture */}
          <div className="w-[50%] h-40 rounded-full overflow-hidden border-4 border-mint-green flex items-center justify-center">
            <img
              src={MyImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Me Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">Career Objective</h2>
            <p className="text-light-pink text-sm">
              Front-End & Cross-Platform Developer with a passion for mobile app
              and web development. Skilled in quickly learning new technologies
              and translating UI/UX designs into high-performance, responsive
              code. Seeking to contribute to a team of talented developers
              creating innovative mobile apps
            </p>
          </div>
        </div>

        {/* Work Experience */}
        <section className="mt-6">
          <h3 className="text-lg font-bold mb-3">Work History</h3>
          <div className="space-y-4">
            {/* Job 1 */}
            {workExperience.map((job, index) => (
              <div key={index} className="bg-mint-green p-4 rounded-md">
                <h4 className="text-md font-semibold">
                  {job.title} | {job.company} | {job.time}
                </h4>
                <p className="text-sm">{job.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-light-pink w-full h-0.5 opacity-30 rounded-full my-5" />
          <h3 className="text-lg font-bold mb-3 ">Internship History</h3>
          <div className="space-y-4">
            {/* Job 1 */}
            {InternData.map((job, index) => (
              <div key={index} className="bg-mint-green p-4 rounded-md">
                <h4 className="text-md font-semibold">
                  {job.title} | {job.company} | {job.time}
                </h4>
                <p className="text-sm">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    // </section>
  );
};

export default About;

import React from "react";
import SectionOne from "./SectionOne";
import Skills from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import { MainSkills } from "./MainSkills";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className=" text-white min-h-screen">
      {/* Header Section */}
      <SectionOne />
      {/* Skills Section */}
      <Skills />
      {/* Projects Section */}
      <ProjectsSection />
      {/* Contact Section */}
      <ContactSection />
      {/* MAin Skills */}
      <MainSkills />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
    </div>
  );
}

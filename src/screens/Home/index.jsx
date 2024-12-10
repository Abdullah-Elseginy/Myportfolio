import React from "react";
import SectionOne from "./SectionOne";
import Skills from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

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
    </div>
  );
}

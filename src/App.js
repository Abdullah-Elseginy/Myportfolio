import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Footer, NavBar, ScrollTopBottom } from "./components";
import { About, Contact, Home, ProjectDetails, Projects } from "./screens";
import { Toaster } from "sonner";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <NavBar />
      <ScrollToTop />
      <Toaster richColors position="top-center" />
      <main className="bg-primary text-text-primary min-h-screen font-sans selection:bg-accent selection:text-primary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projectDetails" element={<ProjectDetails />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTopBottom />
    </Router>
  );
};

export default App;

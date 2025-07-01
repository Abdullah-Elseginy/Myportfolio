import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Footer, NavBar, ScrollTopBottom } from "./components";
import { About, Contact, Home, ProjectDetails, Projects } from "./screens";
import { Toaster } from "react-hot-toast";

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
      <Toaster position="top-center" reverseOrder={false} />
      <main className="bg-gradient-to-r from-blue via-mint-blue to-mint-green text-white min-h-screen">
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

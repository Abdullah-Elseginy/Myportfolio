import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header, NavBar } from "./components";
import { About, Contact, Home, Projects } from "./screens";


const App = () => {
    return (
        <Router>
            {/* <Header /> */}
            <NavBar />
            <main className="bg-gradient-to-r from-blue via-mint-blue to-mint-green text-white min-h-screen"
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;

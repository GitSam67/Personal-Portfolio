import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollBtn from "./components/ScrollBtn";

export default function App() {
  return (
    <main className="text-gray-300 bg-gray-900 body-font">
      <div id="starter" className="bg-no-repeat bg-cover w-full h-auto pb-5">
      <Navbar />
      <Home />
      </div>
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <ScrollBtn />
      <Footer />
    </main>
  );
}

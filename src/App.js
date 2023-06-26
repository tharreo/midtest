import React from "react";
import "./App.css";
import "./assets/css/style.css";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Memories from "./Memories";
import Navbar from "./Navbar";
import Semester from "./Semester";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Semester />
      <Contact />
      <Memories />
      <Footer />
    </div>
  );
}

export default App;

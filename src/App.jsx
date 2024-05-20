import React from "react";
import Display from "./components/Display";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="App">
      <Loader />
      <Nav />
      <Hero />

      <SoundSection />
      <Display />
    </div>
  );
}

export default App;

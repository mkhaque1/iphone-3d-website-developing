import React, { Suspense } from "react";
import Display from "./components/Display";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <SoundSection />
      <Display />
    </div>
  );
}

export default App;

import React, { Suspense } from "react";
import Button from "./Button";
import Iphone from "./Iphone";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import Popup from "./Popup";
import { motion } from "framer-motion";

function Display() {
  return (
    <section className="display-section wrapper">
      <h2 className="title"> Awesome</h2>
      <motion.p
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, type: "spring" }}
        data-scroll
        className="text"
      >
        Battery & Display
      </motion.p>
      <span className="description mb-5">
        Batterie für den ganzen Tag. Damit du weiter weitermachen kannst.
      </span>
      <Popup />
      <div>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[-10, -10, 5]} intensity={2} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <directionalLight position={[-2, 5, 12]} />
          <Suspense fallback={null}>
            <color attach="background" args={["#000"]} />
            <fog attach="fog" args={["#ffffff", 10, 30]} />
            <Float
              speed={1} // Animation speed, defaults to 1
              rotationIntensity={1} // XYZ rotation intensity, defaults to 1
              floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
              floatingRange={[0, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
            >
              <Iphone />
            </Float>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Display;

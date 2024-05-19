import React, { Suspense } from "react";
import Button from "./Button";
import { motion, transform } from "framer-motion";
import AnimatedBlub from "./AnimatedBlub";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function SoundSection() {
  return (
    <section className="sound-section wrapper bg-black">
      <div className="body">
        <div className="sound-section-content lg:flex lg:gap-5 justify-between sm:flex sm:flex-wrap">
          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            className="lg:w-[30%] min-[320px]:hidden lg:block mt-10"
          >
            <Canvas className="canvas">
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} />
              <Suspense fallback={null}>
                <AnimatedBlub />
              </Suspense>
            </Canvas>
          </motion.div>
          <div className="content">
            <h2 className="title">New Sound System</h2>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, type: "spring" }}
              className="text"
            >
              {" "}
              Feel the base
            </motion.p>
            <span className="description">
              Dynamic Island. Das solltest du nicht verpassen.
            </span>
            <ul className="links">
              <li>
                <Button text="Buy Now" />
              </li>
              <li>
                <a className="text-blue-500 px-10" href="#">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SoundSection;

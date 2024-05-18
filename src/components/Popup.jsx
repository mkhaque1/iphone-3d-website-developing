import React, { useState } from "react";
import { motion } from "framer-motion";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="  flex justify-center cursor-pointer">
      <motion.div
        transition={{ layout: { duration: 0.5, type: "spring" } }}
        layout
        className="card bg-indigo-200 backdrop-blur-xl rounded-xl  px-10 py-4 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.h2
          layout="position"
          className=" text-red-700 font-bold text-center"
        >
          !!! Try Me !!!
        </motion.h2>
        {isOpen && (
          <motion.div>
            <p className=" text-black font-thin pt-3 w-[50vw]">
              So this project is a demo product , i'm experimenting it all in
              React, Three.js, Framer Motion so you can just drag and check the
              product by grabbing it. just grab and view the 3d model.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Popup;

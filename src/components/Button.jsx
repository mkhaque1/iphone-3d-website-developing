import { motion, spring } from "framer-motion";
import React from "react";

const Button = ({ text }) => {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.5 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelaydelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-8 py-3 rounded-full relative radial-gradient"
    >
      <span className=" text-neutral-100 tracking-tight font-light h-full w-full block relative linear-mask">
        {text}
      </span>
      <span className="block absolute rounded-full inset-0 p-px linear-overlay" />
    </motion.button>
  );
};

export default Button;

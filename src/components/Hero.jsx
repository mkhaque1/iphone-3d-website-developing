import React, { Suspense } from "react";
import iphoneLogo from "../assets/images/iphone-15.jpg";
import Button from "./Button";
import iphone from "../assets/images/iphone-hand.png";
import AnimatedBlub from "./AnimatedBlub";
import { motion } from "framer-motion";
import LottieAnimation from "./LottieAnimation";

function Hero() {
  const handleLearnMore = () => {
    const element = document.querySelector(".display-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className=" wrapper jumbotron-section">
      <h2 className="title">New phone is the town</h2>
      <img src={iphoneLogo} className="logo" alt="" />
      <motion.p
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          type: "spring",
        }}
        className="text"
      >
        Dynamic Island
      </motion.p>
      <span className="description text-center">
        Erhalte für dein neues iPhone 15 eine Gutschrift von 150 € bis 770 €
      </span>
      <ul className="links">
        <li>
          <Button text="Order Now" />
        </li>
        <li>
          <a className=" text-white px-10" onClick={handleLearnMore} href="#">
            Learn More
          </a>
        </li>
      </ul>
      <div className="flex w-full gap-10 justify-center flex-end">
        <img className="iphone-img" src={iphone} alt="" />
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className=" lg:mr-[30%] sm:mr-0"
        >
          <LottieAnimation />
        </motion.div>
      </div>
    </main>
  );
}

export default Hero;

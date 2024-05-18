import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import img from "../assets/images/iphone01.png";

function SoundSection() {
  return (
    <section className="sound-section wrapper bg-black">
      <div className="body">
        <div className="sound-section-content lg:flex lg:gap-5 justify-between sm:flex sm:flex-wrap">
          <div className="lg:w-[30%] min-[320px]:w-[50%] min-[320px]:ml-28  mt-20">
            <img src={img} alt="" />
          </div>
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

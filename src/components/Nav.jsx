import React from "react";
import logo from "../assets/images/logo.svg";
import search from "../assets/images/search.svg";
import shop from "../assets/images/store.svg";
import { motion } from "framer-motion";

function Nav() {
  return (
    <div>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <motion.ul
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, staggerChildren: 0.2 }}
            className="list-styled"
          >
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="nav-item"
            >
              <a href="#">
                <img src={logo} alt="apple" />
              </a>
            </motion.li>
            {[
              "Store",
              "Products",
              "whats-New",
              "iMac",
              "iPad",
              "Accesories",
              "Support",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="nav-item"
              >
                <a href="#" className={`link-styled`}>
                  {item}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="nav-item"
            >
              <a href="#">
                {" "}
                <img src={search} alt="" />
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="nav-item"
            >
              <a href="#">
                {" "}
                <img src={shop} alt="shop" />
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

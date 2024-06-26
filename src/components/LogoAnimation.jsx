import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../assets/images/react.png";
import img2 from "../assets/images/framer.png";
import img3 from "../assets/images/threejs.png";
import img4 from "../assets/images/tailwind.png";
import img5 from "../assets/images/node.png";

function LogoAnimation() {
  return (
    <div>
      <Marquee
        gradient
        gradientColor="#000"
        direction="right"
        gradientWidth={300}
        speed={25}
        pauseOnHover
      >
        <div className=" lg:flex min-[320px]:flex min-[320px]:justify-center lg:justify-center lg:gap-10 min-[320px]:gap-4">
          <img className=" w-16 h-12" src={img1} alt="" />
          <img className=" w-16 h-12" src={img2} alt="" />
          <img className=" w-16 h-12" src={img3} alt="" />
          <img className=" w-16 h-12" src={img4} alt="" />
          <img className=" w-16 h-12" src={img1} alt="" />
          <img className=" w-16 h-12" src={img2} alt="" />
          <img className=" w-16 h-12" src={img3} alt="" />
          <img className=" w-16 h-12" src={img4} alt="" />
          <img className=" w-18 h-12" src={img5} alt="" />
        </div>
      </Marquee>
    </div>
  );
}

export default LogoAnimation;

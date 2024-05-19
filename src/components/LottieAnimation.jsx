import React from "react";
import Lottie from "lottie-react";
import animationData from "../animations/Animation - 1716155596238.json";

const LottieAnimation = () => {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;

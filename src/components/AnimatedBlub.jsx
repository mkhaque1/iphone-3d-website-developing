import React from "react";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";

export default function AnimatedBlub() {
  return (
    <Float
      speed={1} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[0, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <Sphere visible args={[1, 100, 200]} scale={1.5}>
        <MeshDistortMaterial
          color="#8352FD"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
}

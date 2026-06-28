"use client";

import { useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import GlobeMesh from "./GlobeMesh";

export default function Globe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="h-[300px] w-full md:h-[350px] lg:h-[400px]">
      {mounted && (
        <Canvas
          camera={{
            position: [0, 0, 250],
            fov: 50,
          }}
        >
          <ambientLight intensity={10} />

          <GlobeMesh />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.6}
          />
        </Canvas>
      )}
    </div>
  );
}
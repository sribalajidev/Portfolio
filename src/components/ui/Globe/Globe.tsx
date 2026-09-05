"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import GlobeMesh from "./GlobeMesh";

interface GlobeProps {
  locations: string[];
}

export default function Globe({
  locations,
}: GlobeProps) {
  return (
    <div className="h-[300px] w-full md:h-[350px] lg:h-[400px]">
      <Canvas
        camera={{
          position: [0, 0, 250],
          fov: 50,
        }}
      >
        <ambientLight intensity={10} />

        <GlobeMesh locations={locations} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
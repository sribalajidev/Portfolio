import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import ThreeGlobe from "three-globe";
import * as THREE from "three";
import json from "./globe.json";

export default function GlobeMesh() {
  const ref = useRef();

  // ✅ Create globe inside React lifecycle
  const globe = useMemo(() => {
    const g = new ThreeGlobe()
      .hexPolygonsData(json.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.6)
      .hexPolygonColor(() => "#ffffff")

      .arcsData([
        {
          startLat: 20.5937,
          startLng: 78.9629,
          endLat: 37.7749,
          endLng: -122.4194,
        },
        {
          startLat: 20.5937,
          startLng: 78.9629,
          endLat: 51.5072,
          endLng: -0.1276,
        },
        {
          startLat: 20.5937,
          startLng: 78.9629,
          endLat: 23.4241,
          endLng: 53.8478,
        },
        {
          startLat: 20.5937,
          startLng: 78.9629,
          endLat: -25.2744,
          endLng: 133.7751,
        },
      ])
      .arcColor(() => "#ffffff")
      .arcStroke(0.6)
      .arcAltitude(0.2)
      .arcDashLength(0.4)
      .arcDashGap(0.2)
      .arcDashAnimateTime(4000)
      .showAtmosphere(true)
      .atmosphereColor("#ffffff")
      .atmosphereAltitude(0.1);

    const material = g.globeMaterial();
    material.color = new THREE.Color("#000");
    material.emissive = new THREE.Color("#000");
    material.shininess = 0;

    return g;
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.rotation.y = -((78.9629 * Math.PI) / 180);
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.008;
  });

  return (
    <group ref={ref}>
      {/* ✅ Better scale */}
      <primitive object={globe} scale={[1, 1, 1]} />
    </group>
  );
}
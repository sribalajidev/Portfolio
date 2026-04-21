import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import ThreeGlobe from "three-globe";
import * as THREE from "three";
import json from "./globe.json";

/* =========================
   📍 Locations
========================= */
const locations = {
  India: { lat: 20.5937, lng: 78.9629 },
  USA: { lat: 37.7749, lng: -122.4194 },
  UK: { lat: 51.5072, lng: -0.1276 },
  Australia: { lat: -25.2744, lng: 133.7751 },
  UAE: { lat: 23.4241, lng: 53.8478 },
};

/* =========================
   🔗 Connections
========================= */
const arcs = [
  {
    startLat: locations.India.lat,
    startLng: locations.India.lng,
    endLat: locations.USA.lat,
    endLng: locations.USA.lng,
  },
  {
    startLat: locations.India.lat,
    startLng: locations.India.lng,
    endLat: locations.UK.lat,
    endLng: locations.UK.lng,
  },
  {
    startLat: locations.India.lat,
    startLng: locations.India.lng,
    endLat: locations.UAE.lat,
    endLng: locations.UAE.lng,
  },
  {
    startLat: locations.India.lat,
    startLng: locations.India.lng,
    endLat: locations.Australia.lat,
    endLng: locations.Australia.lng,
  },
];

/* =========================
   🌍 Globe Setup
========================= */
const GlobeObj = new ThreeGlobe()
  .hexPolygonsData(json.features)
  .hexPolygonResolution(3)
  .hexPolygonMargin(0.6)
  .hexPolygonColor(() => "#ffffff")

  // ✨ CONNECTION LINES
  .arcsData(arcs)
  .arcColor(() => "#ffffff")
  .arcStroke(0.6)
  .arcAltitude(0.2)
  .arcDashLength(0.4)
  .arcDashGap(0.2)
  .arcDashAnimateTime(4000)

  .showAtmosphere(true)
  .atmosphereColor("#ffffff")
  .atmosphereAltitude(0.1);

// 🎨 Clean globe material
const material = GlobeObj.globeMaterial();
material.color = new THREE.Color("#000");
material.emissive = new THREE.Color("#000");
material.shininess = 0;

/* =========================
   🌍 Mesh
========================= */
export default function GlobeMesh() {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    // Start from India
    ref.current.rotation.y = -((78.9629 * Math.PI) / 180);
  }, []);

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.008;
  });

  return (
    <group ref={ref}>
      <primitive object={GlobeObj} scale={[0.03, 0.03, 0.03]} />
    </group>
  );
}
"use client";

import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import ThreeGlobe from "three-globe";
import * as THREE from "three";
import type { Group } from "three";

import json from "./globe.json";

import { globeCoordinates } from "@/lib/globeCoordinates";

interface GlobeMeshProps {
  locations: string[];
}

export default function GlobeMesh({
  locations,
}: GlobeMeshProps) {
  const ref = useRef<Group>(null);

  const globe = useMemo(() => {
    const origin = globeCoordinates["India"];

    const arcs = locations
      .filter(
        (location) =>
          location !== "India" &&
          globeCoordinates[location]
      )
      .map((location) => ({
        startLat: origin.lat,
        startLng: origin.lng,
        endLat: globeCoordinates[location].lat,
        endLng: globeCoordinates[location].lng,
      }));

    const g = new ThreeGlobe()
      .hexPolygonsData(
        (json as { features: object[] }).features
      )
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.6)
      .hexPolygonColor(() => "#ffffff")

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

    const material =
      g.globeMaterial() as THREE.MeshPhongMaterial;

    material.color = new THREE.Color("#000000");
    material.emissive = new THREE.Color("#000000");
    material.shininess = 0;

    return g;
  }, [locations]);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.rotation.y =
      -((78.9629 * Math.PI) / 180);
  }, []);

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.008;
  });

  return (
    <group ref={ref}>
      <primitive object={globe} />
    </group>
  );
}
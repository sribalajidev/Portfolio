import './GlobeCard.scss';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GlobeMesh from "./GlobeMesh";

export default function GlobeCard() {
  return (
    <div className='globe-card w-full min-w-0'>
      <div className='globe-copy p-5'>
        <p className='text-2xl font-bold'>Flexible across time zones</p>
        <p className='text-[16px] text-[#a2a2a2]'>India · USA · UK · UAE · Australia</p>
      </div>
      <div className="globe-container">
        <div style={{ width: 400, height: 400 }}>
          <Canvas camera={{ position: [0, 0, 250], fov: 50 }}>
            <ambientLight intensity={10} />
            <GlobeMesh />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.6}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
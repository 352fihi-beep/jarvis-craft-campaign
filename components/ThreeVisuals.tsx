"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Orb({ color, intensity }: { color: string; intensity: number }) {
  const mesh = useRef<any>();
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
      mesh.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.05 * intensity);
    }
  });
  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <MeshDistortMaterial color={color} distort={0.4} speed={2} roughness={0.2} />
    </mesh>
  );
}

export default function ThreeVisuals({ active, color }: { active: number; color: string }) {
  return (
    <div className="absolute inset-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3.5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Orb color={color} intensity={Math.min(active / 5, 2)} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import type * as THREE from "three";
import { inSphere } from "maath/random";

const Particles = (props: JSX.IntrinsicElements["points"]) => {
  const ref = useRef<THREE.Points>(null!);
  const sphere = inSphere(new Float32Array(5000), {
    radius: 1.5,
  }) as Float32Array;

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const Space3d = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Particles />
    </Canvas>
  );
};

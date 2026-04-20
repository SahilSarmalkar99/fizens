import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function Model() {
  const { scene } = useGLTF("/model/scene.gltf");
  const ref = useRef();

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center); // ✅ perfect centering
  }, [scene]);

  // 🔥 slight floating rotation (premium feel)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.35}                // 🔥 reduced zoom
      rotation={[-0.2, Math.PI / 4, 0]} // 🔥 45° angle
      position={[0, -0.5, 0]}     // 🔥 vertical balance
    />
  );
}

useGLTF.preload("/model/scene.gltf");
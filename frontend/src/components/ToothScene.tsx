"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useFBX, Environment } from "@react-three/drei";
import * as THREE from "three";

function Tooth() {
  const fbx = useFBX("/models/teeth.fbx");
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const [scene] = useState(() => {
    const clone = fbx.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const s = maxDim > 0 ? 3.5 / maxDim : 1;
    clone.scale.setScalar(s);
    clone.position.set(-center.x * s, -center.y * s, -center.z * s);

    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
          color: "#d4d4d4",
          roughness: 0.35,
          metalness: 0.12,
          clearcoat: 0.3,
          clearcoatRoughness: 0.4,
          reflectivity: 0.5,
        });
      }
    });
    return clone;
  });

  useEffect(() => {
    return () => {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.geometry?.dispose();
          if (mesh.material instanceof THREE.Material) mesh.material.dispose();
        }
      });
    };
  }, [scene]);

  useFrame(() => {
    if (!groupRef.current) return;
    const targetY = -pointer.x * 0.3;
    const targetX = pointer.y * 0.2;
    groupRef.current.rotation.y +=
      (targetY - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x +=
      (targetX - groupRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

export default function ToothScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: "auto" }}
      frameloop="always"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={1.1} />
      <directionalLight position={[-4, -2, 3]} intensity={0.35} />
      <Environment preset="city" environmentIntensity={0.5} />
      <Suspense fallback={null}>
        <Tooth />
      </Suspense>
    </Canvas>
  );
}

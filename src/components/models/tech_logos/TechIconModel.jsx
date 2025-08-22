import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

const TechIconModel = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    // Special handling for Interactive Developer model
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }

    // Cleanup function
    return () => {
      if (scene) {
        // Dispose of geometries and materials
        scene.scene.traverse((child) => {
          if (child.isMesh) {
            child.geometry.dispose();
            if (child.material.dispose) {
              child.material.dispose();
            }
          }
        });
      }
    };
  }, [scene, model.name]);

  return (
    <group scale={model.scale} rotation={model.rotation}>
      <primitive object={scene.scene} />
    </group>
  );
};

// Preload all models to improve performance
useGLTF.preload([
  "/models/react_logo-transformed.glb",
  "/models/python-transformed.glb",
  "/models/node-transformed.glb",
  "/models/three.js-transformed.glb",
  "/models/git-svg-transformed.glb",
]);

export default TechIconModel;
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TechIconModel from "./TechIconModel";

const TechStackScene = ({ techIcons }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
      <Environment preset="city" />

      {techIcons.map((icon, index) => (
        <Float
          key={icon.name}
          speed={5.5}
          rotationIntensity={0.5}
          floatIntensity={0.9}
          position={[
            (index - (techIcons.length - 1) / 2) * 2.5, // Spread models horizontally
            0,
            0,
          ]}
        >
          <TechIconModel model={icon} />
        </Float>
      ))}

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechStackScene;
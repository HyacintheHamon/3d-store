import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { Suspense, useLayoutEffect, useRef } from "react";
import { TextureLoader } from "expo-three";
import { Dimensions } from "react-native";
import { useAnimatedSensor, SensorType } from "react-native-reanimated";

function Shoe(props) {
  const [base, normal, rough] = useLoader(TextureLoader, [
    require("./assets/Airmax/textures/BaseColor.jpg"),
    require("./assets/Airmax/textures/Normal.jpg"),
    require("./assets/Airmax/textures/Roughness.png"),
  ]);

  const material = useLoader(MTLLoader, require("./assets/Airmax/shoe.mtl"));

  const obj = useLoader(
    OBJLoader,
    require("./assets/Airmax/shoe.obj"),
    (loader) => {
      material.preload();
      loader.setMaterials(material);
    }
  );

  const mesh = useRef();

  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = base;
        child.material.normalMap = normal;
        child.material.roughnessMap = rough;
      }
    });
  }, [obj]);

  // useFrame((state, delta) => {
  //   let { x, y, z } = props.animatedSensor.sensor.value;
  //   x = ~~(x * 100) / 5000;
  //   y = ~~(y * 100) / 5000;
  //   mesh.current.rotation.x += x;
  //   mesh.current.rotation.y += y;
  // });

  useFrame((state, delta) => (mesh.current.rotation.y += delta));

  return (
    <mesh ref={mesh} rotation={[0.7, 0, 0]}>
      <primitive object={obj} scale={17} />
    </mesh>
  );
}

export const Object = () => {
  const animatedSensor = useAnimatedSensor(SensorType.GYROSCOPE, {
    interval: 100,
  });

  return (
    <Canvas shadows colorManagement>
      <ambientLight intensity={0.3} />
      {/* <directionalLight
      castShadow
      position={[0, 7, 13]}
      intensity={0.5}
      shadow-mapSize-height={2048}
      shadow-mapSize-width={2048}
    /> */}
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        {/* <Scene animatedSensor={animatedSensor} /> */}
        <Shoe animatedSensor={animatedSensor} />
      </Suspense>
    </Canvas>
  );
};

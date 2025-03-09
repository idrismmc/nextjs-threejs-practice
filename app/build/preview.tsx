"use client";

import {
  Environment,
  Preload,
  CameraControls,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { useCustomizerControls } from "./context";
import { Skateboard } from "@/components/skateboard";
import * as THREE from "three";
import { Mesh } from "three";
type Props = {
  wheelTextureURLs: string[];
  deckTextureURLs: string[];
};

const DEFAULT_WHEEL_TEXTURE = "/skateboard/SkateWheel1.png";
const DEFAULT_DECK_TEXTURE = "/skateboard/Deck.webp";
const DEFAULT_TRUCK_COLOR = "#6F6E6A";
const DEFAULT_BOLT_COLOR = "#6F6E6A";
const ENVIRONMENT_COLOR = "#3B3A3A";

export default function Preview({ wheelTextureURLs, deckTextureURLs }: Props) {
  const cameraControls = useRef<CameraControls>(null);
  const floor = useRef<Mesh>(null);
  const { selectedWheel, selectedDeck, selectedTruck, selectedBolt } =
    useCustomizerControls();

  const wheelTextureURL = selectedWheel?.image || DEFAULT_WHEEL_TEXTURE;
  const deckTextureURL = selectedDeck?.image || DEFAULT_DECK_TEXTURE;
  const truckColor = selectedTruck?.color || DEFAULT_TRUCK_COLOR;
  const boltColor = selectedBolt?.color || DEFAULT_BOLT_COLOR;

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(0, 0.3, 0),
      new THREE.Vector3(1.5, 0.8, 0)
    );
  }, [selectedDeck]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.12, 0.29, 0.57),
      new THREE.Vector3(0.1, 0.25, 0.9)
    );
  }, [selectedTruck]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.08, 0.54, 0.64),
      new THREE.Vector3(0.09, 1, 0.9)
    );
  }, [selectedWheel]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.25, 0.3, 0.62),
      new THREE.Vector3(-0.5, 0.35, 0.8)
    );
  }, [selectedBolt]);

  function setCameraControls(target: THREE.Vector3, pos: THREE.Vector3) {
    if (!cameraControls.current) return;

    cameraControls.current.setTarget(target.x, target.y, target.z, true);
    cameraControls.current.setPosition(pos.x, pos.y, pos.z, true);
  }

  useEffect(() => {
    console.log(selectedTruck);
  }, [selectedTruck]);

  function onCameraControlStart() {
    if (
      !cameraControls.current ||
      !floor.current ||
      cameraControls.current.colliderMeshes.length > 0
    )
      return;

    cameraControls.current.colliderMeshes = [floor.current];
  }

  return (
    <Canvas camera={{ position: [2.5, 1, 0], fov: 50 }} shadows>
      <Suspense fallback={null}>
        <Environment
          files={"/hdr/warehouse-512.hdr"}
          environmentIntensity={0.6}
        />
        <directionalLight
          lookAt={[0, 0, 0]}
          position={[1, 1, 1]}
          castShadow
          intensity={1.6}
        />
        <fog attach="fog" args={[ENVIRONMENT_COLOR, 3, 10]} />
        <color attach="background" args={[ENVIRONMENT_COLOR]} />
        <StageFloor />
        <mesh ref={floor} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[6, 6]} />
          <meshStandardMaterial visible={false} />
        </mesh>
        <Skateboard
          wheelTexturesURLs={wheelTextureURLs}
          wheelTextureURL={wheelTextureURL}
          deckTexturesURLs={deckTextureURLs}
          deckTextureURL={deckTextureURL}
          truckColor={truckColor}
          boltColor={boltColor}
          pose="side"
        />
        <CameraControls
          ref={cameraControls}
          minDistance={1}
          maxDistance={4}
          onStart={onCameraControlStart}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

function StageFloor() {
  const normalMap = useTexture("/concrete-normal.avif");
  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.repeat.set(30, 30);
  normalMap.anisotropy = 16;
  const material = new THREE.MeshStandardMaterial({
    roughness: 0.5,
    color: ENVIRONMENT_COLOR,
    normalMap: normalMap,
  });
  return (
    <mesh
      material={material}
      castShadow
      receiveShadow
      position={[0, -0.005, 0]}
      rotation-x={-Math.PI / 2}
    >
      <circleGeometry args={[20, 32]} />
    </mesh>
  );
}

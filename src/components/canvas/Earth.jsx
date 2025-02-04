import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./saguaro/scene.gltf')

  return (
    <primitive 
      object={earth.scene}
      scale={.4}
      position-y={-2}
      position-x={0}/>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameLoop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov: 45,
        near: .2,
        far: 200,
        position: [-7, 2, 6]

      }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}/>

          <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;
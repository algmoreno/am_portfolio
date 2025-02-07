import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader'

const Saguaro = () => {
  const saguaro = useGLTF('./saguaro/scene.gltf')

  return (
    <primitive       
      object={saguaro.scene}
      scale={.4}
      position-y={-4}
      position-x={0}/>
  )
}

const SaguaroCanvas = () => {
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

          <Saguaro />
      </Suspense>
    </Canvas>
  )
}

export default SaguaroCanvas;
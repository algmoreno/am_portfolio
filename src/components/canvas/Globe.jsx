import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Globe = () => {
  const earth = useGLTF('./earth/scene.gltf')

  return (
    <mesh> 
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={0}/>
      <spotLight position={[-20, 50, 10]} 
                  angle={.12}
                  penumbra={1}
                  intensity={1}
                  castShadow
                  shadow-mapSize={1024}/>
      <primitive object={earth.scene}
                  scale={1}
                  position={[0, 1.25, 0]}
                  rotation={[-.1, 0, -.2]}
                  />
    </mesh>
  )
}

const GlobeCanvas = () => {
  return (
    <Canvas frameLoop="demand"
      shadows
      camera={{ position: [30, 10, 45], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}>
    {/* <Suspense> */}
    <Suspense fallback={<CanvasLoader />}>
    <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}/>
    <Globe />
    </Suspense>

    <Preload all/>
    </Canvas>
  )
}

export default GlobeCanvas;
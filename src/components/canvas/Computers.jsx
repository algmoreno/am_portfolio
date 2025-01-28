import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./master_sword/scene.gltf')

  return (
    <mesh> 
      <hemisphereLight intensity={.15} groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight position={[-20, 50, 10]} 
                  angle={.12}
                  penumbra={1}
                  intensity={1}
                  castShadow
                  shadow-mapSize={1024}/>
      <primitive object={computer.scene}
                  scale={3}
                  position={[0, 1.25, 5.5]}
                  rotation={[-.1, -1, -.1]}
                  />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas frameLoop="demand"
      shadows
      camera={{ position: [40, 30, 15], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}>
    <Suspense>
    {/* <Suspense fallback={<CanvasLoader />}> */}
    <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}/>
    <Computers />
    </Suspense>

    <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;
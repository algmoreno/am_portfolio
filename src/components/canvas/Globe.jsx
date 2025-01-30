import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Globe = ({ isMobile }) => {
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
                  scale={isMobile ? .5 : 1}
                  position={isMobile ? [0, 1, 0] : [0, 1.25, 0]}
                  rotation={[-.1, 0, -.2]}
                  />
    </mesh>
  )
}

const GlobeCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  }, []);

  return (
    <Canvas frameLoop="demand"
      shadows
      camera={{ position: [30, 10, 45], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<CanvasLoader />}>
    <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}/>
    <Globe isMobile={isMobile}/>
    </Suspense>

    <Preload all/>
    </Canvas>
  )
}

export default GlobeCanvas;
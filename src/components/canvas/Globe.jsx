import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Globe = ({ isMobile }) => {
  const earth = useGLTF('./earth/scene.gltf')
  const globeRef = useRef();

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0009; // Adjust speed as needed
    }
  });

  return (
    <mesh useRef={globeRef}> 
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={0}/>
      <spotLight position={[-20, 50, 10]} 
                  angle={.12}
                  penumbra={1}
                  intensity={1}
                  castShadow
                  shadow-mapSize={1024}/>
      <primitive object={earth.scene}
                  scale={isMobile ? 1.1 : 2}
                  position={isMobile ? [-.5, -2.5, 0] : [1, 1.25, 0]}
                  rotation={[-.1, 0, -.2]}
                  ref={globeRef}
                  />
    </mesh>
  )
}

const GlobeCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
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
      <Canvas 
        frameLoop="demand"
        shadows
        camera={{ position: [30, 10, 45], fov: 10 }}
        gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
        <Globe isMobile={isMobile}/>
        </Suspense>
        <Preload all/>
      </Canvas>
  )
}

export default GlobeCanvas;
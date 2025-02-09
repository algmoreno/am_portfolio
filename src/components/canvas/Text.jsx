import React, { Suspense, useState, useRef } from 'react'
import { Text3D, Center, useMatcapTexture } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import CanvasLoader from '../Loader'

const Text = () => {
  const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
  const ref = useRef();
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
      <Center scale={[.2, .2, .2]}>
        <Text3D
          position={[-10, 0, 1]}
          scale={[-1, 1, 1]}
          ref={ref}
          size={w / 10}
          font={"/gt.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.08}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          {`Hi, I'm Alan\n  This is my portfolio `}
          <meshMatcapMaterial color="blue" matcap={matcapTexture} />
        </Text3D>
      </Center>
  )
}

const TextCanvas = () => {
  return (
    <Canvas style={{ backgroundColor: 'transparent' }} camera={{ position: [-4, 2, -10], fov: 60 }}>
      <Suspense fallback={<CanvasLoader />}>
        <Text />
      </Suspense>
      <ambientLight intensity={0.6} color={"#000000"} />
    </Canvas>
  )
}

export default TextCanvas

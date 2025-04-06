import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, MeshDistortMaterial, MeshWobbleMaterial, RoundedBox } from '@react-three/drei'
import { Mesh } from 'three'
import * as THREE from 'three'

export default function Car3DModel() {
  const mesh = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2
      
      // Add a gentle floating motion
      mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <group>
      {/* Base car shape */}
      <RoundedBox
        ref={mesh}
        args={[3, 0.8, 1.2]} // Width, height, depth
        radius={0.2}
        smoothness={4}
        position={[0, 0.5, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshWobbleMaterial
          color={hovered ? "#FF8600" : "#3E92CC"}
          factor={0.2}
          speed={2}
          metalness={0.6}
          roughness={0.2}
          envMapIntensity={0.8}
        />
      </RoundedBox>

      {/* Wheels */}
      <Wheel position={[-0.9, 0, 0.6]} />
      <Wheel position={[0.9, 0, 0.6]} />
      <Wheel position={[-0.9, 0, -0.6]} />
      <Wheel position={[0.9, 0, -0.6]} />

      {/* Roof */}
      <RoundedBox
        args={[2, 0.5, 1]}
        radius={0.2}
        smoothness={4}
        position={[0, 1.2, 0]}
      >
        <MeshDistortMaterial
          color="#0A2463"
          speed={1.5}
          distort={0.2}
          radius={1}
          metalness={0.8}
          roughness={0.1}
        />
      </RoundedBox>
    </group>
  )
}

function Wheel({ position }: { position: [number, number, number] }) {
  const wheelRef = useRef<Mesh>(null)
  
  useFrame((state) => {
    if (wheelRef.current) {
      // Rotate the wheels
      wheelRef.current.rotation.z = -state.clock.elapsedTime * 2
    }
  })
  
  return (
    <group position={position}>
      <mesh ref={wheelRef} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.15, 32]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

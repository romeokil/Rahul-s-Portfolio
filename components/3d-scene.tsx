"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, OrbitControls, Text3D, Center } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"

function Stars(props: any) {
  const ref = useRef<any>()
  const [sphere] = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#8b5cf6" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

function FloatingCubes() {
  const meshRef = useRef<any>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#8b5cf6" transparent opacity={0.6} />
    </mesh>
  )
}

function AnimatedSphere() {
  const meshRef = useRef<any>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[-2, 1, -1]}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="#3b82f6" wireframe />
    </mesh>
  )
}

function CodeText() {
  return (
    <Center position={[0, -1, -3]}>
      <Text3D font="/fonts/Inter_Bold.json" size={0.2} height={0.05} curveSegments={12}>
        {"<Developer />"}
        <meshStandardMaterial color="#4f46e5" />
      </Text3D>
    </Center>
  )
}

export function Enhanced3DScene() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} />
      <Stars />
      <FloatingCubes />
      <AnimatedSphere />
      <CodeText />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}

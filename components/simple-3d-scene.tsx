"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, OrbitControls } from "@react-three/drei"
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

function FloatingCube() {
  const meshRef = useRef<any>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[-2, 1, -1]}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial
        color="#4f46e5"
        transparent
        opacity={0.7}
        wireframe
        emissive="#4f46e5"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

function GlowingSphere() {
  const meshRef = useRef<any>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh ref={meshRef} position={[2, 0, -1]}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} transparent opacity={0.8} />
    </mesh>
  )
}

export function Simple3DScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
      <directionalLight position={[0, 10, 5]} intensity={0.4} color="#8b5cf6" />

      {/* 3D Objects */}
      <Stars />
      <FloatingCube />
      <GlowingSphere />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
    </Canvas>
  )
}

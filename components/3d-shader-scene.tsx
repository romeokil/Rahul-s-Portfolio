"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, extend } from "@react-three/fiber"
import { OrbitControls, shaderMaterial } from "@react-three/drei"
import * as THREE from "three"
import { waveVertexShader, hologramVertexShader, particleVertexShader } from "./shaders/vertex-shaders"
import {
  waveFragmentShader,
  hologramFragmentShader,
  particleFragmentShader,
  matrixFragmentShader,
} from "./shaders/fragment-shaders"

// Create custom shader materials
const WaveMaterial = shaderMaterial(
  {
    uTime: 0,
    uAmplitude: 0.1,
    uFrequency: 2.0,
    uColor1: new THREE.Color("#3b82f6"),
    uColor2: new THREE.Color("#8b5cf6"),
    uColor3: new THREE.Color("#06b6d4"),
  },
  waveVertexShader,
  waveFragmentShader,
)

const HologramMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color("#00ffff"),
    uOpacity: 0.6,
  },
  hologramVertexShader,
  hologramFragmentShader,
)

const ParticleMaterial = shaderMaterial(
  {
    uTime: 0,
    uSize: 30.0,
  },
  particleVertexShader,
  particleFragmentShader,
)

const MatrixMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(1024, 1024),
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  matrixFragmentShader,
)

// Extend materials for use in JSX
extend({ WaveMaterial, HologramMaterial, ParticleMaterial, MatrixMaterial })

function WavePlane() {
  const meshRef = useRef<any>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uTime = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef} position={[0, -2, -3]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[8, 8, 64, 64]} />
      <waveMaterial transparent side={THREE.DoubleSide} />
    </mesh>
  )
}

function HologramSphere() {
  const meshRef = useRef<any>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uTime = state.clock.elapsedTime
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <hologramMaterial transparent />
    </mesh>
  )
}

function ShaderParticles() {
  const pointsRef = useRef<any>()

  const particlesGeometry = useMemo(() => {
    const count = 2000
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    const randomness = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Position
      positions[i3] = (Math.random() - 0.5) * 10
      positions[i3 + 1] = (Math.random() - 0.5) * 10
      positions[i3 + 2] = (Math.random() - 0.5) * 10

      // Scale
      scales[i] = Math.random()

      // Randomness
      randomness[i3] = (Math.random() - 0.5) * 2
      randomness[i3 + 1] = (Math.random() - 0.5) * 2
      randomness[i3 + 2] = (Math.random() - 0.5) * 2
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1))
    geometry.setAttribute("aRandomness", new THREE.BufferAttribute(randomness, 3))

    return geometry
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.material.uTime = state.clock.elapsedTime
    }
  })

  return (
    <points ref={pointsRef} geometry={particlesGeometry}>
      <particleMaterial transparent depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  )
}

function MatrixBackground() {
  const meshRef = useRef<any>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uTime = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[20, 20]} />
      <matrixMaterial transparent />
    </mesh>
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
    <mesh ref={meshRef} position={[0, 2, -1]}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} transparent opacity={0.8} />
    </mesh>
  )
}

export function ShaderScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
      <directionalLight position={[0, 10, 5]} intensity={0.4} color="#8b5cf6" />

      {/* Shader-based components */}
      <MatrixBackground />
      <WavePlane />
      <HologramSphere />
      <ShaderParticles />

      {/* Standard 3D objects with enhanced materials */}
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

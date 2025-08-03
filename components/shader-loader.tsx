"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import { extend } from "@react-three/fiber"
import { motion } from "framer-motion"

const LoaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uProgress: 0,
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform float uTime;
    uniform float uProgress;
    varying vec2 vUv;
    
    void main() {
      vec2 uv = vUv;
      
      // Create loading ring
      float dist = distance(uv, vec2(0.5));
      float ring = smoothstep(0.3, 0.32, dist) - smoothstep(0.38, 0.4, dist);
      
      // Animated progress
      float angle = atan(uv.y - 0.5, uv.x - 0.5) + 3.14159;
      float progress = angle / (2.0 * 3.14159);
      
      ring *= step(progress, uProgress);
      
      // Add glow effect
      vec3 color = vec3(0.2, 0.6, 1.0) * ring;
      color += vec3(0.6, 0.2, 1.0) * ring * sin(uTime * 5.0) * 0.5;
      
      gl_FragColor = vec4(color, ring);
    }
  `,
)

extend({ LoaderMaterial })

function LoaderRing({ progress }: { progress: number }) {
  const meshRef = useRef<any>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uTime = state.clock.elapsedTime
      meshRef.current.material.uProgress = progress
    }
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <loaderMaterial transparent />
    </mesh>
  )
}

export function ShaderLoader({ progress = 0.5 }: { progress?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="text-center space-y-8">
        <div className="w-32 h-32">
          <Canvas>
            <LoaderRing progress={progress} />
          </Canvas>
        </div>

        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Loading Experience
          </h2>
          <p className="text-muted-foreground mt-2">Initializing WebGL shaders...</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

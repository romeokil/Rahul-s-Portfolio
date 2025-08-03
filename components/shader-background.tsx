"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import { extend } from "@react-three/fiber"
import * as THREE from "three"

const BackgroundMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(1, 1),
    uMouse: new THREE.Vector2(0, 0),
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uMouse;
    varying vec2 vUv;
    
    vec3 palette(float t) {
      vec3 a = vec3(0.5, 0.5, 0.5);
      vec3 b = vec3(0.5, 0.5, 0.5);
      vec3 c = vec3(1.0, 1.0, 1.0);
      vec3 d = vec3(0.263, 0.416, 0.557);
      
      return a + b * cos(6.28318 * (c * t + d));
    }
    
    void main() {
      vec2 uv = (vUv * 2.0 - 1.0) * vec2(uResolution.x / uResolution.y, 1.0);
      vec2 uv0 = uv;
      vec3 finalColor = vec3(0.0);
      
      for (float i = 0.0; i < 4.0; i++) {
        uv = fract(uv * 1.5) - 0.5;
        
        float d = length(uv) * exp(-length(uv0));
        
        vec3 col = palette(length(uv0) + i * 0.4 + uTime * 0.4);
        
        d = sin(d * 8.0 + uTime) / 8.0;
        d = abs(d);
        
        d = pow(0.01 / d, 1.2);
        
        finalColor += col * d;
      }
      
      gl_FragColor = vec4(finalColor, 0.3);
    }
  `,
)

extend({ BackgroundMaterial })

function AnimatedBackground() {
  const meshRef = useRef<any>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uTime = state.clock.elapsedTime
      meshRef.current.material.uResolution.set(state.size.width, state.size.height)
    }
  })

  return (
    <mesh ref={meshRef} scale={[2, 2, 1]}>
      <planeGeometry args={[2, 2]} />
      <backgroundMaterial transparent />
    </mesh>
  )
}

export function ShaderBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <AnimatedBackground />
      </Canvas>
    </div>
  )
}

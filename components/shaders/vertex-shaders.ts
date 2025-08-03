export const waveVertexShader = `
  uniform float uTime;
  uniform float uAmplitude;
  uniform float uFrequency;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void main() {
    vUv = uv;
    vNormal = normal;
    
    vec3 pos = position;
    
    // Create wave distortion
    float wave = sin(pos.x * uFrequency + uTime) * uAmplitude;
    wave += sin(pos.z * uFrequency * 0.5 + uTime * 0.7) * uAmplitude * 0.5;
    
    pos.y += wave;
    
    vPosition = pos;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

export const hologramVertexShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void main() {
    vUv = uv;
    vNormal = normal;
    vPosition = position;
    
    vec3 pos = position;
    
    // Add subtle vertex displacement for hologram effect
    pos += normal * sin(uTime * 2.0 + position.y * 10.0) * 0.01;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

export const particleVertexShader = `
  uniform float uTime;
  uniform float uSize;
  
  attribute float aScale;
  attribute vec3 aRandomness;
  
  varying vec3 vColor;
  
  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    // Add movement based on time and randomness
    modelPosition.xyz += aRandomness * sin(uTime * 0.5 + aRandomness.x * 10.0) * 0.1;
    
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    
    gl_Position = projectedPosition;
    gl_PointSize = uSize * aScale * (1.0 / -viewPosition.z);
    
    // Color based on position
    vColor = vec3(
      0.5 + 0.5 * sin(uTime + position.x),
      0.5 + 0.5 * sin(uTime + position.y + 2.0),
      0.5 + 0.5 * sin(uTime + position.z + 4.0)
    );
  }
`

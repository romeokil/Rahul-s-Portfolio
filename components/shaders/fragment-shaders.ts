export const waveFragmentShader = `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void main() {
    // Create animated gradient based on position and time
    float mixValue = sin(vPosition.x * 0.5 + uTime) * 0.5 + 0.5;
    mixValue += sin(vPosition.z * 0.3 + uTime * 0.7) * 0.3;
    
    vec3 color = mix(uColor1, uColor2, mixValue);
    color = mix(color, uColor3, sin(uTime * 0.5) * 0.5 + 0.5);
    
    // Add fresnel effect
    vec3 viewDirection = normalize(cameraPosition - vPosition);
    float fresnel = 1.0 - dot(vNormal, viewDirection);
    fresnel = pow(fresnel, 2.0);
    
    color += fresnel * 0.3;
    
    gl_FragColor = vec4(color, 0.8);
  }
`

export const hologramFragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uOpacity;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void main() {
    // Hologram scan lines
    float scanlines = sin(vUv.y * 100.0 + uTime * 5.0) * 0.1 + 0.9;
    
    // Hologram flicker
    float flicker = sin(uTime * 10.0) * 0.1 + 0.9;
    
    // Edge glow effect
    vec3 viewDirection = normalize(cameraPosition - vPosition);
    float fresnel = 1.0 - dot(vNormal, viewDirection);
    fresnel = pow(fresnel, 3.0);
    
    // Noise pattern
    float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
    noise = smoothstep(0.3, 0.7, noise);
    
    vec3 color = uColor;
    color *= scanlines * flicker;
    color += fresnel * 0.5;
    color *= (1.0 + noise * 0.1);
    
    float alpha = uOpacity * scanlines * flicker * (0.7 + fresnel * 0.3);
    
    gl_FragColor = vec4(color, alpha);
  }
`

export const particleFragmentShader = `
  varying vec3 vColor;
  
  void main() {
    // Create circular particles
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    float strength = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
    
    // Add glow effect
    strength = pow(strength, 3.0);
    
    vec3 color = vColor * strength;
    float alpha = strength;
    
    gl_FragColor = vec4(color, alpha);
  }
`

export const matrixFragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  
  varying vec2 vUv;
  
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }
  
  void main() {
    vec2 st = vUv * 20.0;
    vec2 ipos = floor(st);
    vec2 fpos = fract(st);
    
    float time = uTime * 2.0;
    
    // Create matrix-like falling characters
    float char = step(0.5, random(ipos + floor(time)));
    char *= step(fpos.y, fract(time + random(ipos) * 10.0));
    
    // Green matrix color
    vec3 color = vec3(0.0, char, 0.0);
    
    // Add fade effect
    color *= (1.0 - vUv.y);
    
    gl_FragColor = vec4(color, char * 0.8);
  }
`

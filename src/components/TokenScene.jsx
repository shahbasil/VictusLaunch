import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Token() {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <group ref={meshRef}>
      {/* Main Token */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.3, 64]} />
        <meshStandardMaterial 
          color="#8A3BFF" 
          metalness={0.8}
          roughness={0.2}
          emissive="#8A3BFF"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Inner Glow */}
      <mesh position={[0, 0, 0.15]}>
        <cylinderGeometry args={[0.7, 0.7, 0.05, 32]} />
        <meshBasicMaterial color="#00D1FF" transparent opacity={0.6} />
      </mesh>

      {/* Podium */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2, 1.8, 0.3, 32]} />
        <meshStandardMaterial 
          color="#E0E0E0"
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Particles */}
      {[...Array(50)].map((_, i) => (
        <Particle key={i} index={i} />
      ))}
    </group>
  )
}

function Particle({ index }) {
  const meshRef = useRef()
  const radius = 3 + Math.random() * 2
  const angle = (index / 50) * Math.PI * 2
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh 
      ref={meshRef}
      position={[
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 0.5,
        Math.sin(angle) * radius
      ]}
    >
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial 
        color={index % 2 === 0 ? '#00D1FF' : '#8A3BFF'} 
        transparent 
        opacity={0.6}
      />
    </mesh>
  )
}

export default Token


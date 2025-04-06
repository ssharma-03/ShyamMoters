import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import Link from 'next/link'
import Car3DModel from '../3d/Car3DModel'
import ParticleBackground from '../ParticleBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10 dark:from-transparent dark:via-dark/5 dark:to-dark/10 z-5"></div>

      {/* 3D Model */}
      <div className="absolute inset-0 z-10">
        <Canvas dpr={[1, 2]} shadows>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
          <color attach="background" args={['transparent']} />
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <Suspense fallback={null}>
            <Car3DModel />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 mt-16">
        <div
          className="text-center opacity-0 animate-fadeInUp"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-sm">
              Shree Shyam Motors
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
            Your Premier Destination for Premium Automotive Solutions in Dhamnod
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-3 bg-white dark:bg-gray-800 border border-primary text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-fadeIn animate-delay-1000"
      >
        <div className="w-6 h-10 border-2 border-primary dark:border-light rounded-full p-2 backdrop-blur-sm bg-white/30 dark:bg-dark/30">
          <div
            className="w-1.5 h-1.5 bg-primary dark:bg-light rounded-full mx-auto animate-bounce"
          />
        </div>
      </div>
    </section>
  )
}

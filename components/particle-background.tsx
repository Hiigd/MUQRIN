"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  type: "star" | "sparkle"
  rotation: number
  rotationSpeed: number
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 8 + 4,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          type: ["star", "sparkle"][Math.floor(Math.random() * 2)] as "star" | "sparkle",
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 1,
        })
      }
      setParticles(newParticles)
    }

    createParticles()

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          const distanceToMouse = Math.sqrt(
            Math.pow(particle.x - mousePosition.x, 2) + Math.pow(particle.y - mousePosition.y, 2),
          )

          const repulsionForce = Math.max(0, 100 - distanceToMouse) / 100
          const repulsionX = repulsionForce * (particle.x - mousePosition.x) * 0.01
          const repulsionY = repulsionForce * (particle.y - mousePosition.y) * 0.01

          let newX = particle.x + particle.speedX + repulsionX
          let newY = particle.y + particle.speedY + repulsionY

          if (newX > window.innerWidth) newX = 0
          if (newX < 0) newX = window.innerWidth
          if (newY > window.innerHeight) newY = 0
          if (newY < 0) newY = window.innerHeight

          return {
            ...particle,
            x: newX,
            y: newY,
            rotation: particle.rotation + particle.rotationSpeed,
            opacity: Math.max(0.1, Math.min(0.4, particle.opacity + (Math.random() - 0.5) * 0.01)),
          }
        }),
      )
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    const interval = setInterval(animateParticles, 60)

    return () => {
      clearInterval(interval)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mousePosition])

  const renderParticle = (particle: Particle) => {
    if (particle.type === "star") {
      return (
        <div className="relative" style={{ width: particle.size, height: particle.size }}>
          <div className="absolute inset-0 bg-primary rotate-45 rounded-sm opacity-80" />
          <div className="absolute inset-0 bg-primary rounded-sm opacity-80" />
        </div>
      )
    } else {
      return (
        <div className="bg-secondary rounded-full opacity-60" style={{ width: particle.size, height: particle.size }} />
      )
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute transition-all duration-1000 ease-linear"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.opacity,
            transform: `rotate(${particle.rotation}deg)`,
          }}
          whileHover={{
            scale: 1.3,
            opacity: 0.6,
            transition: { duration: 0.2 },
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {renderParticle(particle)}
        </motion.div>
      ))}

      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute w-12 h-12 border border-primary/10 rounded-lg"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05],
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: Math.random() * 25 + 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

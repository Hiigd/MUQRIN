"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import IntroPage from "@/components/intro-page"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import EventsSection from "@/components/events-section"
import GallerySection from "@/components/gallery-section"
import TeachersSection from "@/components/teachers-section"
import NationalMessage from "@/components/national-message"
import Footer from "@/components/footer"

const ParticleBackground = dynamic(
  () => import("@/components/particle-background"),
  {
    ssr: false,
  },
)

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true)
      setTimeout(() => setShowIntro(false), 1000)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (showIntro) {
    return <IntroPage isComplete={introComplete} />
  }

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Header />
      <main>
        <HeroSection />
        <EventsSection />
        <GallerySection />
        <TeachersSection />
        <NationalMessage />
      </main>
      <Footer />
    </div>
  )
}

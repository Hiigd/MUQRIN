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

import TargetCursor from '@/components/TargetCursor';




const ParticleBackground = dynamic(
  () => import("@/components/particle-background"),
  {
    ssr: false,
  },
)
const Silk = dynamic(() => import("@/components/Silk"), { ssr: false })

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)
  const [headerOpen, setHeaderOpen] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true)
      setTimeout(() => setShowIntro(false), 1000)
  }, 6100)

    return () => clearTimeout(timer)
  }, [])

  if (showIntro) {
    return <IntroPage isComplete={introComplete} />
  }

  return (
    <div className="relative min-h-screen">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      {/* خلفية حريرية متحركة */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Silk speed={5} scale={1} color="#0c672fff" noiseIntensity={1.5} rotation={0} />
      </div>
      <Header onHeaderToggle={setHeaderOpen} />
  <main>
    <HeroSection />
  <EventsSection />
  <GallerySection />
    <TeachersSection />
    <NationalMessage />
  </main>
      <Footer />
      {/* تم حذف منطقة البطاقة التجريبية بناءً على طلب المستخدم */}
    </div>
  )
}

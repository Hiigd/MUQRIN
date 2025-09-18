"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Flag, School, Star, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

interface IntroPageProps {
  isComplete: boolean
}

export default function IntroPage({ isComplete }: IntroPageProps) {
  const [currentText, setCurrentText] = useState(0)
  const texts = ["ثانوية الأمير مقرن بن عبدالعزيز", "نحتفل معاً باليوم الوطني تحت شعار", "عِزنا بطبعنا"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-secondary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              scale: 0,
            }}
            animate={{
              y: -50,
              scale: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="text-center text-white relative z-10 drop-shadow-2xl">
        <motion.div
          initial={{ scale: 0, opacity: 0, rotateY: -180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 1.2, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <motion.div
            className="relative mx-auto w-40 h-40 mb-6"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 40px rgba(255,255,255,0.6)",
                "0 0 20px rgba(255,255,255,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="absolute inset-0 bg-white/20 rounded-full backdrop-blur-sm border border-white/30"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0"
            >
              <School className="absolute inset-0 m-auto w-20 h-20 text-white" />
            </motion.div>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "0 0",
                }}
                animate={{
                  rotate: 360,
                  x: Math.cos((i * 60 * Math.PI) / 180) * 60,
                  y: Math.sin((i * 60 * Math.PI) / 180) * 60,
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: i * 0.2,
                }}
              >
                <Star className="w-3 h-3 text-secondary" fill="currentColor" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
          className="mb-6"
        >
          <motion.div
            animate={{
              rotateY: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <Flag className="mx-auto w-20 h-20 mb-4 text-secondary drop-shadow-lg" />
          </motion.div>
        </motion.div>

        <div className="h-32 flex items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentText}
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-3xl md:text-5xl font-bold text-center leading-tight text-white"
              style={{
                textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
              }}
            >
              {texts[currentText]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-8 relative"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="mx-auto w-16 h-16 mb-4 relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full backdrop-blur-sm"></div>
              <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-secondary" />
            </div>
          </motion.div>

          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-40px)`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            >
              <div className="w-2 h-2 bg-secondary rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: isComplete ? "100%" : "0%", opacity: 1 }}
          transition={{ duration: 2.5, delay: 2 }}
          className="relative h-2 bg-gradient-to-r from-secondary via-primary to-secondary rounded-full mx-auto max-w-md overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-white/30"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="mt-4 text-lg font-medium text-white"
          style={{
            textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
          }}
        >
          جاري التحضير للاحتفال...
        </motion.p>
      </div>
    </div>
  )
}

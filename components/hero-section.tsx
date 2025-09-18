"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "ثانوية الأمير مقرن بن عبدالعزيز تحتفل باليوم الوطني 94",
    subtitle: "هي لنا دار 🇸🇦",
    description:
      "نحتفل بيومنا الوطني الـ95 بكل فخر واعتزاز، ونجدد العهد لوطننا الغالي المملكة العربية السعودية تحت قيادة خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز وولي عهده الأمين الأمير محمد بن سلمان",
    image: "/saudi-flag-colors-festival-students-art.jpg",
  },
  {
    id: 2,
    title: "رؤية 2030 نحو مستقبل مشرق",
    subtitle: "نحلم ونحقق",
    description:
      "نساهم في تحقيق رؤية المملكة 2030 من خلال إعداد جيل واعٍ ومبدع قادر على قيادة المستقبل وخدمة الوطن في جميع المجالات",
    image: "/saudi-arabia-history-seminar-educational.jpg",
  },
  {
    id: 3,
    title: "التراث السعودي أصالة وعراقة",
    subtitle: "نفخر بتراثنا",
    description:
      "نحتفي بتراثنا العريق وثقافتنا الأصيلة، ونعمل على نقلها للأجيال القادمة من خلال الأنشطة والفعاليات التراثية المتنوعة",
    image: "/saudi-heritage-exhibition-traditional-items.jpg",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="hero" className="relative h-screen overflow-hidden mt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.2, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />

          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 border border-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: 360,
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 8 + 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ x: 100, opacity: 0, rotateX: 15 }}
                animate={{ x: 0, opacity: 1, rotateX: 0 }}
                exit={{ x: -100, opacity: 0, rotateX: -15 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-white"
              >
                <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  {slides[currentSlide].title.split(" ").map((word, index) => (
                    <motion.span
                      key={`${currentSlide}-${index}`}
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.1 * index,
                        type: "spring",
                        bounce: 0.4,
                      }}
                      className="inline-block mr-3"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.h2
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="text-2xl md:text-3xl font-medium mb-6 text-secondary overflow-hidden whitespace-nowrap"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.6, type: "spring" }}
                >
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <a href="https://pmss.pw/" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-secondary to-yellow-400 hover:from-secondary/90 hover:to-yellow-400/90 text-white px-8 py-4 text-lg relative overflow-hidden group"
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 flex items-center gap-2">
                          زيارة الموقع الرسمي
                          <Sparkles className="w-5 h-5" />
                        </span>
                      </Button>
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <motion.div whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }} whileTap={{ scale: 0.9 }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 glass text-white hover:bg-white/20 w-14 h-14 backdrop-blur-md border border-white/20"
        >
          <ChevronLeft className="w-7 h-7" />
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }} whileTap={{ scale: 0.9 }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 glass text-white hover:bg-white/20 w-14 h-14 backdrop-blur-md border border-white/20"
        >
          <ChevronRight className="w-7 h-7" />
        </Button>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="relative group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={`w-12 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-secondary" : "bg-white/30 hover:bg-white/50"
              }`}
            >
              {index === currentSlide && (
                <motion.div
                  className="h-full bg-gradient-to-r from-secondary to-yellow-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
            </div>
          </motion.button>
        ))}
      </div>

      <motion.button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-8 right-8 z-20 glass text-white hover:bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Play className={`w-5 h-5 ${isAutoPlaying ? "opacity-100" : "opacity-50"}`} />
      </motion.button>
    </section>
  )
}

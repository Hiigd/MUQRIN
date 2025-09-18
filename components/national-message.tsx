"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

const message = `في هذا اليوم المبارك، يوم توحيد المملكة العربية السعودية، نقف بكل فخر واعتزاز لنحتفل بوطننا الغالي. إن ما حققته المملكة من إنجازات عظيمة على مدى عقود من الزمن، بدءاً من توحيدها على يد الملك المؤسس عبدالعزيز بن عبدالرحمن آل سعود، وصولاً إلى رؤية 2030 الطموحة، يجعلنا نفخر بانتمائنا لهذه الأرض المباركة.

نحن في ثانوية الأمير مقرن بن عبدالعزيز، نؤمن بأن التعليم هو الأساس في بناء الأوطان وتقدم الشعوب. طلابنا اليوم هم قادة المستقبل، وهم من سيحملون راية التقدم والازدهار لهذا الوطن العزيز.

في هذا اليوم الوطني المجيد، نجدد العهد والولاء لخادم الحرمين الشريفين وولي عهده الأمين، ونعاهد الله ثم وطننا على أن نكون خير خلف لخير سلف، وأن نساهم في بناء مستقبل مشرق لهذه الأرض الطيبة.

كل عام ووطننا الغالي بخير وعزة ومنعة، وكل عام وشعبنا الكريم في تقدم وازدهار.`

export default function NationalMessage() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible && currentIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayedText(message.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 30)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, isVisible, message])

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart className="w-12 h-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">رسالتنا في اليوم الوطني المجيد</h2>
            <Heart className="w-12 h-12 text-primary" />
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-right"
          >
            <div className="relative">
              <div className="absolute top-0 right-0 text-8xl text-primary/10 leading-none font-serif">"</div>
              <div className="absolute bottom-0 left-0 text-8xl text-primary/10 leading-none font-serif rotate-180">
                "
              </div>

              <p className="text-lg md:text-xl leading-relaxed text-foreground relative z-10 px-12">
                {displayedText}
                {currentIndex < message.length && <span className="animate-pulse">|</span>}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <div className="h-1 w-16 bg-primary rounded-full"></div>
            <Heart className="w-8 h-8 text-primary" />
            <div className="h-1 w-16 bg-primary rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

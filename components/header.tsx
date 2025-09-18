"use client"

import { motion } from "framer-motion"
import { School, Flag } from "lucide-react"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-40 glass-card"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                <School className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">ثانوية الأمير مقرن بن عبدالعزيز</h1>
              <p className="text-sm text-muted-foreground">بيئة تعليمية متميزة لبناء قادة المستقبل</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="https://pmss.pw/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                الموقع الرسمي
              </a>
              <a
                href="https://pmss.pw/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                من نحن
              </a>
              <a href="#events" className="text-foreground hover:text-primary transition-colors">
                الأنشطة
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
                المعرض
              </a>
              <a href="#teachers" className="text-foreground hover:text-primary transition-colors">
                المعلمون
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Flag className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

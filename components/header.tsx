"use client"


import { motion } from "framer-motion"
import { Flag, ChevronDown } from "lucide-react"
import PillNav from "./PillNav"
import { useState, forwardRef } from "react"

interface HeaderProps {
  onHeaderToggle?: (open: boolean) => void
}

const Header = forwardRef<HTMLElement, HeaderProps>(
  function Header({ onHeaderToggle }, ref) {
    const [showHeader, setShowHeader] = useState(true)
    // إعلام الصفحة الرئيسية عند التغيير
    const handleToggle = () => {
      setShowHeader((v) => {
        onHeaderToggle?.(!v)
        return !v
      })
    }
    return (
      <>
        <button
          className="fixed top-4 left-4 z-50 bg-white/80 rounded-full p-2 shadow hover:bg-white transition-all border border-primary/30"
          onClick={handleToggle}
          aria-label={showHeader ? "إخفاء الشريط" : "إظهار الشريط"}
          style={{ direction: 'ltr' }}
        >
          <ChevronDown className={`w-6 h-6 text-primary transition-transform ${showHeader ? '' : 'rotate-180'}`} />
        </button>
        <motion.header
          ref={ref}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: showHeader ? 0 : -120, opacity: showHeader ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 right-0 z-40 glass-card"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-8 w-full">
              {/* شعار المدرسة */}
              <div className="flex items-center gap-4 shrink-0">
                <img src="/logo.jpg" alt="شعار المدرسة" className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 p-2" />
                <div>
                  <h1 className="text-lg font-bold text-primary">ثانوية الأمير مقرن بن عبدالعزيز</h1>
                  <p className="text-sm text-muted-foreground">بيئة تعليمية متميزة لبناء قادة المستقبل</p>
                </div>
              </div>
              {/* الروابط PillNav */}
              <div className="flex-1 flex items-center justify-end min-w-0">
                <PillNav
                  logo=""
                  logoAlt="شعار المدرسة"
                  items={[
                    { label: 'الموقع الرسمي', href: 'https://pmss.pw/' },
                    { label: 'من نحن', href: 'https://pmss.pw/about' },
                    { label: 'الأنشطة', href: '#events' },
                    { label: 'المعرض', href: '#gallery' },
                    { label: 'المعلمون', href: '#teachers' },
                  ]}
                  activeHref={typeof window !== 'undefined' ? window.location.hash || window.location.pathname : '/'}
                  className="max-w-full"
                  ease="power2.easeOut"
                  baseColor="#0c3a2d"
                  pillColor="#fff"
                  hoveredPillTextColor="#fff"
                  pillTextColor="#0c3a2d"
                />
                <Flag className="w-6 h-6 text-primary ml-4 shrink-0" />
              </div>
            </div>
          </div>
        </motion.header>
      </>
    )
  }
)
export default Header

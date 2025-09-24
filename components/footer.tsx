"use client"

import { motion } from "framer-motion"
import { LinkPreview } from "@/components/ui/link-preview"
import { Mail, Phone, MapPin, Twitter, Instagram, Youtube, School, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
      {/* Saudi Arabia Map Outline Background */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1000 600" className="w-full h-full object-cover" fill="currentColor">
          <path d="M100,300 Q200,200 400,250 Q600,300 800,280 Q900,320 950,400 Q900,500 700,480 Q500,520 300,500 Q150,450 100,300 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* School Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <School className="w-8 h-8 text-secondary" />
              <h3 className="text-lg md:text-xl font-bold cursor-target">ثانوية الأمير مقرن</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-4 cursor-target text-sm md:text-base">
              مدرسة رائدة في التعليم والتربية، نسعى لإعداد جيل واعٍ ومبدع يساهم في بناء وطننا الغالي المملكة العربية
              السعودية.
            </p>
            <div className="flex gap-4">
              <a
                href="https://pmss.pw/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary/20 transition-colors cursor-pointer cursor-target"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/MOE_RYH_17_0088"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary/20 transition-colors cursor-pointer cursor-target"
                aria-label="تويتر / X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary/20 transition-colors cursor-pointer">
                <a
                  href="https://www.youtube.com/@muqrinschool1059/videos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="يوتيوب"
                  className="flex items-center justify-center w-full h-full"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-secondary cursor-target">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <LinkPreview url="https://pmss.pw/">
                  <span className="text-white/80 hover:text-secondary transition-colors flex items-center gap-2 cursor-pointer cursor-target">
                    الموقع الرسمي
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </LinkPreview>
              </li>
              <li>
                <a href="#events" className="text-white/80 hover:text-secondary transition-colors cursor-target"> 
                  الفعاليات
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-secondary transition-colors cursor-target">
                  المعرض
                </a>
              </li>
              <li>
                <a href="#teachers" className="text-white/80 hover:text-secondary transition-colors cursor-target">
                  المعلمون
                </a>
              </li>
              <li>
                <a
                  href="https://pmss.pw/html/about-us.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-secondary transition-colors flex items-center gap-2 cursor-target"
                >
                  عن المدرسة
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              {/* الأخبار تم إخفاؤها */}
            </ul>
          </motion.div>

          {/* Other Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-secondary cursor-target">روابط أخرى</h3>
            <ul className="space-y-3">
              <li>
                <LinkPreview url="https://pmss.pw/html/store.html">
                  <span className="text-white/80 hover:text-secondary transition-colors flex items-center gap-2 cursor-pointer cursor-target">
                    المتجر
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </LinkPreview>
              </li>
              <li>
                <LinkPreview url="https://pmss.pw/html/ctivities.html#clubs">
                  <span className="text-white/80 hover:text-secondary transition-colors flex items-center gap-2 cursor-pointer cursor-target">
                    النوادي
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </LinkPreview>
              </li>
              <li>
                <LinkPreview url="https://pmss.pw/index.html#link-footer-3">
                  <span className="text-white/80 hover:text-secondary transition-colors flex items-center gap-2 cursor-pointer cursor-target">
                    الجوائز والشراكات
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </LinkPreview>
              </li>
              <li>
                <LinkPreview url="https://pmss.pw/index.html#link-footer-4">
                  <span className="text-white/80 hover:text-secondary transition-colors flex items-center gap-2 cursor-pointer cursor-target">
                    سوق العمل الحر
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </LinkPreview>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-secondary cursor-target">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-white/80 cursor-target">الرياض, المملكة العربية السعود</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+966501669572" className="text-white/80 hover:text-secondary transition-colors cursor-target" dir="ltr">
                  +966 50 166 9572
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:muqrinschool2121@gmail.com" className="text-white/80 hover:text-secondary transition-colors cursor-target">
                  muqrinschool2121@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="https://pmss.pw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-secondary transition-colors cursor-target"
                >
                  pmss.pw
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-secondary"></div>
            <School className="w-6 h-6 text-secondary" />
            <div className="h-px w-16 bg-secondary"></div>
          </div>
          <p className="text-white/60 mb-2">© 2024 ثانوية الأمير مقرن بن عبدالعزيز. جميع الحقوق محفوظة.</p>
          <p className="text-white/40 text-sm">تم التطوير بكل فخر واعتزاز احتفالاً باليوم الوطني السعودي المجيد ღ</p>
          <div className="text-white/40 text-sm mt-2">
            <span className="hover:text-secondary transition-colors cursor-pointer cursor-target">
              تم تطويره من قبل أحمد عبدالله زكور و محمد مسفر القحطاني
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

"use client"


import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import RollingGallery from "./RollingGallery"

const galleryImages = [
  {
    id: 1,
    src: "/asl.jpg",
    alt: "",
    title: "طلاب يرسمون لوحة فنية احتفالاً باليوم الوطني.",
  },
  {
    id: 2,
    src: "/ssd.jpg",
    alt: "برنامج توعوي يهدف إلى غرس ثقافة الوقاية وتعزيز وعي طلاب ثانوية الأمير مقرن بإجراءات الأمن والسلامة داخل المدرسة.",
    title: "تدريب الطلاب على وسائل الأمن والسلامة",
  },
  {
    id: 3,
    src: "/msmr.jpg",
    alt: "",
    title: "عمل الطلاب على مشروع فني باستخدام المسامير والخيوط.",
  },
  {
    id: 4,
    src: "/tawn.jpg",
    alt: "",
    title: "طلاب يزينون الممرات بلافتات وطنية.",
  },
  {
    id: 5,
    src: "/rbt.jpg",
    alt: "",
    title: "مشروع برمجي باستخدام الروبوتات.",
  },
  {
    id: 6,
    src: "/sta.jpg",
    alt: "",
    title: "معلم يشرف على طلاب يرسمون لوحة وطنية.",
  },
  {
  id: 7,
  src: "/me.jpg",
  alt: "",
  title: "طلاب يشاركون في فعالية تقنية لليوم الوطني."
  },
  {
    id: 4,
    src: "/man.jpg",
    alt: "مسابقة أفضل زي تراثي.",
    title: "مسابقة أفضل زي تراثي.",
  }
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [zoomed, setZoomed] = useState(false)

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6 cursor-target"
            style={{ textShadow: "0 2px 24px #0c672f, 0 0 8px #93DBB2, 0 0 2px #fff" }}
          >
            معرض الصور
          </h2>
          <p
            className="text-xl text-white max-w-3xl mx-auto leading-relaxed"
            style={{ textShadow: "0 2px 12px #0c672f, 0 0 8px #93DBB2" }}
          >
            لحظات مميزة من احتفالاتنا وفعالياتنا المدرسية التي تعكس روح الانتماء والفخر بوطننا الغالي
          </p>
        </motion.div>
        <div className="mb-12">
          <RollingGallery
            autoplay={true}
            pauseOnHover={true}
            images={galleryImages.map(img => img.src)}
          />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-xl glass-card hover:shadow-2xl transition-all duration-500">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => { setSelectedImage(null); setZoomed(false); }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-row-reverse items-center gap-6">
                <img
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  className="block mx-auto my-0 max-h-[80vh] max-w-full object-contain rounded-lg cursor-zoom-in"
                  style={{ transition: 'transform 0.3s', transform: zoomed ? 'scale(1.7)' : 'scale(1)' }}
                  onClick={() => setZoomed(!zoomed)}
                />
                <h3 className="text-white text-xl font-semibold whitespace-pre-line max-w-xs text-right">{selectedImage.title}</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => { setSelectedImage(null); setZoomed(false); }}
                className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white"
              >
                <X className="w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

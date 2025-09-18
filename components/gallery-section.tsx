"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    id: 1,
    src: "/saudi-national-day-school-celebration.jpg",
    alt: "احتفال اليوم الوطني في المدرسة",
    title: "احتفال اليوم الوطني",
  },
  {
    id: 2,
    src: "/saudi-students-flag-ceremony.jpg",
    alt: "طلاب يرفعون العلم السعودي",
    title: "رفع العلم السعودي",
  },
  {
    id: 3,
    src: "/saudi-traditional-dance-students.jpg",
    alt: "الرقص الشعبي السعودي",
    title: "الرقص الشعبي",
  },
  {
    id: 4,
    src: "/saudi-calligraphy-exhibition.jpg",
    alt: "معرض الخط العربي",
    title: "معرض الخط العربي",
  },
  {
    id: 5,
    src: "/saudi-poetry-competition.jpg",
    alt: "مسابقة الشعر الوطني",
    title: "مسابقة الشعر",
  },
  {
    id: 6,
    src: "/saudi-heritage-display.jpg",
    alt: "عرض التراث السعودي",
    title: "التراث السعودي",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=450&width=350",
    alt: "تكريم الطلاب المتفوقين",
    title: "تكريم المتفوقين",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=400",
    alt: "جوقة المدرسة",
    title: "جوقة المدرسة",
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

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
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">معرض الصور</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            لحظات مميزة من احتفالاتنا وفعالياتنا المدرسية التي تعكس روح الانتماء والفخر بوطننا الغالي
          </p>
        </motion.div>

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
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedImage(null)}
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

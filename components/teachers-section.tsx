"use client"

import { motion } from "framer-motion"
import { Quote, Award, BookOpen, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const teachers = [
 {
  id: 1,
  name: "الأستاذ: شرف مذحل الهذيلي",
  position: "مدير المدرسة",
  experience: "15 سنة",
  message: `بسم الله الرحمن الرحيم والصلاة والسلام على أشرف الأنبياء والمرسلين نبينا محمد وعلى آلة وصحبة أجمعين.
نحن في ثانوية الأمير مقرن بن عبدالعزيز نسعى بعون الله إلى الريادة في التعليم والمساهمة في تحقيق رؤية 2030 والتي من أهم مرتكزاتها تنمية القدرات البشرية لبناء مجتمع حيوي ووطن طموح والاعتزاز بتاريخنا وتراثنا الممتد، وترسيخ القيم الإسلامية وذلك من خلال المبادرات والبرامج والأنشطة المدرسية.
عملنا على توفير بيئة مدرسية محفزة على الإبداع والتميز والتي أثمرت برامج ومبادرات نوعية تحقق أهداف ورؤية المدرسة. وفي الختام كل الشكر والتقدير لكل من كان له بصمة إبداع وتميز من معلمين وكادر إداري وطلاب وأولياء أمور، سائلين المولى عز وجل المزيد من التقدم والنجاح.`,
  image: "/images/teachers/teacher-1.jpg",
  icon: Award,
  specialty: "القيادة التربوية",
},
  {
    id: 2,
    name: "الأستاذة فاطمة الزهراني",
    position: "معلمة اللغة العربية",
    experience: "12 سنة",
    message:
      "اللغة العربية هي لغة القرآن الكريم ولغة أجدادنا العظماء. في يومنا الوطني، نؤكد على أهمية الحفاظ على هويتنا العربية والإسلامية. طلابنا هم حملة الرسالة للأجيال القادمة.",
    image: "/images/teachers/teacher-2.jpg", // Updated to use actual image path
    icon: BookOpen,
    specialty: "الأدب والبلاغة",
  },
  {
    id: 3,
    name: "الأستاذ محمد الغامدي",
    position: "معلم التاريخ",
    experience: "18 سنة",
    message:
      "تاريخ المملكة العربية السعودية مليء بالإنجازات والبطولات. من توحيد المملكة على يد الملك عبدالعزيز إلى رؤية 2030، نحن نشهد نهضة حقيقية. أبناؤنا الطلاب هم صناع المستقبل.",
    image: "/images/teachers/teacher-3.jpg", // Updated to use actual image path
    icon: Users,
    specialty: "التاريخ السعودي",
  },
  {
    id: 4,
    name: "الأستاذة نورا السلمي",
    position: "معلمة العلوم",
    experience: "10 سنوات",
    message:
      "العلم والتكنولوجيا هما مفتاح التقدم في عصرنا الحالي. المملكة تستثمر في التعليم والبحث العلمي، ونحن نعد جيلاً قادراً على المساهمة في بناء اقتصاد المعرفة. فخورة بكوني جزءاً من هذه المسيرة.",
    image: "/images/teachers/teacher-4.jpg", // Updated to use actual image path
    icon: BookOpen,
    specialty: "العلوم التطبيقية",
  },
]

export default function TeachersSection() {
  return (
    <section id="teachers" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-primary rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: 360,
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <Quote className="w-16 h-16 text-secondary mx-auto" />
          </motion.div>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            رسائل معلمينا
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            كلمات من القلب من معلمينا الأفاضل في هذا اليوم الوطني المجيد
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ y: 100, opacity: 0, rotateX: -15 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
              className="group perspective-1000"
            >
              <Card className="glass-card hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative flex-shrink-0">
                      <motion.div className="relative" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-secondary/50 transition-colors duration-300 relative">
                          <motion.img
                            src={teacher.image}
                            alt={teacher.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <motion.div
                          className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-secondary to-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Quote className="w-5 h-5 text-white" />
                        </motion.div>

                        <motion.div
                          className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <teacher.icon className="w-4 h-4 text-white" />
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="flex-1">
                      <motion.h3
                        className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {teacher.name}
                      </motion.h3>
                      <p className="text-muted-foreground mb-1">{teacher.position}</p>
                      <p className="text-sm text-secondary font-medium mb-2">خبرة {teacher.experience}</p>
                      <motion.p
                        className="text-xs text-primary/70 bg-primary/10 px-2 py-1 rounded-full inline-block"
                        whileHover={{ scale: 1.05 }}
                      >
                        {teacher.specialty}
                      </motion.p>
                    </div>
                  </div>

                  <motion.blockquote className="relative" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                    <div className="absolute top-0 right-0 text-6xl text-primary/10 leading-none font-serif">״</div>
                    <p className="text-foreground leading-relaxed text-lg relative z-10 pr-8 font-medium">
                      {teacher.message}
                    </p>
                    <div className="absolute bottom-0 left-0 text-6xl text-primary/10 leading-none rotate-180 font-serif">
                      ״
                    </div>

                    <motion.div
                      className="w-16 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mt-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: 64 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </motion.blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

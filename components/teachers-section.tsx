"use client"

import { motion } from "framer-motion"
import { Quote, Award, BookOpen, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const teachers = [
 {
  id: 1,
  name: "الأستاذ: شرف مذحل الهذيلي",
  position: "مدير المدرسة",
  experience: "24 سنة",
  message: `بسم الله الرحمن الرحيم والصلاة والسلام على أشرف الأنبياء والمرسلين نبينا محمد وعلى آلة وصحبة أجمعين.
نحن في ثانوية الأمير مقرن بن عبدالعزيز نسعى بعون الله إلى الريادة في التعليم والمساهمة في تحقيق رؤية 2030 والتي من أهم مرتكزاتها تنمية القدرات البشرية لبناء مجتمع حيوي ووطن طموح والاعتزاز بتاريخنا وتراثنا الممتد، وترسيخ القيم الإسلامية وذلك من خلال المبادرات والبرامج والأنشطة المدرسية.
عملنا على توفير بيئة مدرسية محفزة على الإبداع والتميز والتي أثمرت برامج ومبادرات نوعية تحقق أهداف ورؤية المدرسة. وفي الختام كل الشكر والتقدير لكل من كان له بصمة إبداع وتميز من معلمين وكادر إداري وطلاب وأولياء أمور، سائلين المولى عز وجل المزيد من التقدم والنجاح.`,
  image: "/images/teachers/teacher-1.jpg",
  icon: Award,
  specialty: "القيادة التربوية",
},
  {
    id: 2,
    name: "الأستاذ عبدالعزيز ال عريج",
    position: "رائد نشاط",
    experience: "27 سنة",
    message:
      "في هذا اليوم الغالي نجدد العهد والولاء لوطننا العزيز، ونستذكر مسيرة العطاء التي بناها الآباء والأجداد، ونفخر بالمنجزات التي تحققت في عهد قيادتنا الرشيدة. اليوم الوطني مناسبة لترسيخ قيم الانتماء والفخر، ولغرس حب الوطن في نفوس أبنائنا الطلاب، ليكونوا جيلًا واعيًا يواصل مسيرة البناء والعطاء.",
    image: "/images/teachers/teacher-2.jpg", // Updated to use actual image path
    icon: BookOpen,
    specialty: "ادارة النشاطات والمناسبات",
  },
  {
    id: 3,
    name: "الأستاذ بندر الظويلمي",
    position: "معلم الرياضيات",
    experience: "10 سنة",
    message:
      "في ذكرى اليوم الوطني الخامس والتسعين، نستشعر نعمة هذا الوطن المعطاء الذي جمعنا على الأمن والإيمان، ووحّد صفوفنا تحت راية التوحيد. هي مناسبة نجدد فيها الولاء لقيادتنا الرشيدة، ونغرس معاني الانتماء والفخر في نفوس أبنائنا، ليواصلوا مسيرة العطاء والبناء. دام عزك يا وطن، ودمت شامخًا في القلوب والوجدان.",

    image: "/images/teachers/teacher-3.jpg", // Updated to use actual image path
    icon: Users,
    specialty: "علم الرياضيات",
  },
  {
    id: 4,
    name: "الأستاذ فواز غازي",
    position: "معلم الدين والتاريخ والجغرافيا",
    experience: "28 سنوات",
    message:
      "بسم الله الرحمن الرحيم الحمد لله رب العالمين والصلاة والسلام على أشرف الأمم المرسلين من نعم الله عز وجل علينا في هذا البلد العظيم وفي هذا البلد المحفاة نعمة الأمن والأمان التي من الله بها علينا في هذا البلد المبارك العظيم فمثل هذه النعمة ينبغي للإنسان وللمسلم أن يشكر الله عز وجل وأن يؤدي شكر هذه النعمة بالدعاء لهذا البلد وكذلك بالدعاء لولاة أمره الذين بذلوا الغالي والرخيص في تثبيت مثل هذه الأمور نعمة الأمن وراحة المواطن أسأل الله عز وجل أن يديمها علينا وأن يحفظ لولاة أمورنا وصلى الله وسلم على نبينا محمد.",
    image: "/images/teachers/teacher-4.jpg", // Updated to use actual image path
    icon: BookOpen,
    specialty: "الدراسات الادبية والاجتماعية",
  },
]



export default function TeachersSection() {
  /* Apply the same style as "رسائل معلمينا" */
  const messageStyle = {
    color: "#ffffff", // White text color
    textShadow: "0 2px 24px #0c672f, 0 0 8px #93DBB2, 0 0 2px #fff", // Same neon effect as heading
  };

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
            className="text-4xl md:text-5xl font-bold text-white mb-6 cursor-target"
            style={{ textShadow: "0 2px 24px #0c672f, 0 0 8px #93DBB2, 0 0 2px #fff" }}
          >
            رسائل معلمينا
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-white max-w-3xl mx-auto leading-relaxed"
            style={{ textShadow: "0 2px 12px #0c672f, 0 0 8px #93DBB2, 0 0 2px #fff", color: '#fff' }}
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

                <CardContent className="p-8 relative z-10" style={messageStyle}>
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
                        </div>
                      </motion.div>
                    </div>

                    <div className="flex-1">
                      <motion.h3
                        className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {teacher.name}
                      </motion.h3>
                      <p className="text-white mb-1">{teacher.position}</p>
                      <p className="text-sm" style={{ color: '#FFD700', fontWeight: 'bold' }}>خبرة {teacher.experience}</p>
                      <motion.p
                        className="text-xs text-white bg-primary/10 px-2 py-1 rounded-full inline-block"
                        whileHover={{ scale: 1.05 }}
                      >
                        {teacher.specialty}
                      </motion.p>
                    </div>
                  </div>

                  <motion.blockquote className="relative" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                    <div className="absolute top-0 right-0 text-6xl text-primary/10 leading-none font-serif">״</div>
                    <p className="text-white leading-relaxed text-lg relative z-10 pr-8 font-medium" style={{textShadow: "0 2px 24px #0c672f, 0 0 8px #93DBB2, 0 0 2px #fff"}}>
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


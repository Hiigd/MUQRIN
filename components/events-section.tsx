
"use client"


import { motion } from "framer-motion"
import { Calendar, Trophy, Users, BookOpen, Star, Award, ArrowLeft, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

import { useState } from "react"

const events = [
	{
		id: 1,
		title: "مسابقة الشعر الوطني - اليوم الوطني 95",
		description:
			"مسابقة شعرية تحتفي بحب الوطن والانتماء للمملكة العربية السعودية في ذكرى اليوم الوطني",
		icon: BookOpen,
		date: "23 سبتمبر 2024",
		participants: 120,
		image: "/arabic-poetry-competition-saudi-students.jpg",
		status: "مكتملة",
		color: "from-emerald-500 to-green-600",
	},
	{
		id: 2,
		title: "ورشة الابتكار والتقنية",
		description:
			"ورشة عملية تُمكّن طلاب ثانوية الأمير مقرن من تنمية مهاراتهم في البرمجة والتقنية وصناعة الروبوتات، وسط أجواء من التعاون والإبداع.",
		icon: Star,
		date: "24 سبتمبر 2024",
		participants: 200,
		image: "/نادي الربوت 2.jpg",
		status: "جارية",
		color: "from-amber-500 to-orange-600",
	},
	{
		id: 3,
		title: "مهرجان الألوان الوطنية - عِزنا بطبعنا",
		description:
			"فعالية فنية تجمع الطلاب للاحتفال بألوان العلم السعودي تحت شعار 'عِزنا بطبعنا'",
		icon: Trophy,
		date: "25 سبتمبر 2024",
		participants: 150,
		image: "/saudi-flag-colors-festival-students-art.jpg",
		status: "قريباً",
		color: "from-blue-500 to-indigo-600",
	},
	{
		id: 4,
		title: "ندوة تاريخ المملكة ورؤية 2030",
		description:
			"ندوة تعليمية عن تاريخ المملكة العربية السعودية وإنجازاتها ورؤية 2030 المستقبلية",
		icon: Users,
		date: "26 سبتمبر 2024",
		participants: 180,
		image: "/saudi-arabia-history-seminar-educational.jpg",
		status: "قريباً",
		color: "from-purple-500 to-violet-600",
	},
	{
		id: 5,
		title: "معرض العلوم والتجارب المخبرية",
		description:
			"فعالية علمية تتيح لطلاب ثانوية الأمير مقرن استكشاف أسرار الطبيعة عبر التجارب العملية والتعلم بالنمذجة في بيئة محفزة على البحث والاكتشاف.",
		icon: Award,
		date: "27 سبتمبر 2024",
		participants: 80,
		image: "/edu.jpg",
		status: "قريباً",
		color: "from-red-500 to-pink-600",
	},
	{
		id: 6,
		title: "مسابقة الخط العربي الوطنية",
		description:
			"مسابقة في فن الخط العربي بعبارات وطنية مميزة احتفالاً باليوم الوطني السعودي",
		icon: Calendar,
		date: "28 سبتمبر 2024",
		participants: 90,
		image: "/arabic-calligraphy-competition-patriotic-phrases.jpg",
		status: "قريباً",
		color: "from-teal-500 to-cyan-600",
	},
]

export default function EventsSection() {


  return (
    <section id="events" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="w-full h-full border-2 border-primary rounded-lg transform rotate-45" />
          </motion.div>
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
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <Zap className="w-20 h-20 text-secondary mx-auto" />
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-primary rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0 0",
                  }}
                  animate={{
                    rotate: 360,
                    x: Math.cos((i * 60 * Math.PI) / 180) * 50,
                    y: Math.sin((i * 60 * Math.PI) / 180) * 50,
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <div className="flex items-center gap-4 mb-6 justify-center text-center">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white cursor-target"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.85), 0 0 2px #93DBB2" }}
            >
              فعالياتنا وإنجازاتنا
            </motion.h2>

          </div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-white max-w-3xl mx-auto leading-relaxed"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7), 0 0 8px #93DBB2" }}
          >
            نفخر بتنظيم فعاليات متنوعة تعزز الهوية الوطنية وتنمي مواهب طلابنا في جو من الإبداع والتميز
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ y: 100, opacity: 0, rotateY: -15 }}
              whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                bounce: 0.4,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="group perspective-1000"
            >
              <Card className="glass-card hover:shadow-2xl transition-all duration-500 overflow-hidden h-full relative">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  animate={{
                    background: [
                      `linear-gradient(45deg, ${event.color})`,
                      `linear-gradient(135deg, ${event.color})`,
                      `linear-gradient(225deg, ${event.color})`,
                      `linear-gradient(315deg, ${event.color})`,
                      `linear-gradient(45deg, ${event.color})`,
                    ],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className="relative overflow-hidden">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.6 }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    whileHover={{
                      background: [
                        "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                        "linear-gradient(to top, rgba(57,142,85,0.6), transparent)",
                        "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <motion.div
                    className="absolute top-4 left-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${event.color} backdrop-blur-sm`}
                    >
                      {event.status}
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-4 right-4"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-12 h-12 bg-secondary/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>

                <CardContent className="p-6 relative z-10">
                  <motion.h3
                    className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {event.title}
                  </motion.h3>

                  <motion.p className="text-muted-foreground mb-4 leading-relaxed" whileHover={{ x: 3 }}>
                    {event.description}
                  </motion.p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    {/* تم حذف التاريخ وعدد المشاركين */}
                  </div>


                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

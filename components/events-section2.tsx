"use client"

import { motion } from "framer-motion"
import { Calendar, Trophy, Users, BookOpen, Star, Award, ArrowLeft, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import StickerPeel from "@/components/StickerPeel"
import { useState, useRef, useEffect } from "react"
import { Dialog } from "@/components/ui/dialog"
import ProfileCard from "@/components/ui/ProfileCard";

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  participants: number;
  date: string;
  status: string;
  color: string;
  icon: any;
}

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
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
		title: "معرض التراث السعودي الأصيل",
		description:
			"معرض يعرض التراث الشعبي والثقافة السعودية الأصيلة بمشاركة طلاب ثانوية الأمير مقرن",
		icon: Star,
		date: "24 سبتمبر 2024",
		participants: 200,
		image: "/saudi-heritage-exhibition-traditional-items.jpg",
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
		status: "مكتملة",
		color: "from-fuchsia-500 to-pink-600",
	},
];


  return (
    <>
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <motion.div key={event.id} className="group perspective-1000">
                <Card className="glass-card hover:shadow-2xl transition-all duration-500 overflow-hidden h-full relative">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6 relative z-10">
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.participants} مشارك</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 bg-transparent"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <span>المزيد من التفاصيل</span>
                      <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {selectedEvent && (
          <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="w-full max-w-md mx-auto">
                <ProfileCard
                  avatarUrl={selectedEvent.image}
                  name={selectedEvent.title}
                  title="تفاصيل الفعالية"
                  description={selectedEvent.description}
                  status={`${selectedEvent.participants} مشارك`}
                  contactText="إغلاق"
                  onContactClick={() => setSelectedEvent(null)}
                />
              </div>
            </div>
          </Dialog>
        )}
      </section>
    </>
  );
}

"use client"

import { motion } from "framer-motion"
import { Calendar, Trophy, Users, BookOpen, Star, Award, ArrowLeft, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { useState, useRef, useEffect } from "react"
import { Dialog } from "@/components/ui/dialog"
import ProfileCard from "@/components/ui/ProfileCard";


interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  icon: any;
}

export default function EventsSection2() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [stickers, setStickers] = useState<{x: number, y: number, id: number}[]>([]);
  const stickerId = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'j') {
        document.body.style.cursor = 'crosshair';
        const handleClick = (ev: MouseEvent) => {
          stickerId.current += 1;
          setStickers((prev) => [...prev, { x: ev.clientX, y: ev.clientY, id: stickerId.current }]);
          document.body.style.cursor = '';
          window.removeEventListener('click', handleClick, true);
        };
        window.addEventListener('click', handleClick, true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const events: Event[] = [
    {
      id: 1,
      title: "مسابقة الشعر الوطني - اليوم الوطني 95",
      description: "مسابقة شعرية تحتفي بحب الوطن والانتماء للمملكة العربية السعودية في ذكرى اليوم الوطني",
      icon: BookOpen,
      image: "/arabic-poetry-competition-saudi-students.jpg",
      color: "from-emerald-500 to-green-600",
    },
    {
      id: 2,
      title: "معرض التراث السعودي الأصيل",
      description: "معرض يعرض التراث الشعبي والثقافة السعودية الأصيلة بمشاركة طلاب ثانوية الأمير مقرن",
      icon: Star,
      image: "/saudi-heritage-exhibition-traditional-items.jpg",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 3,
      title: "مهرجان الألوان الوطنية - عِزنا بطبعنا",
      description: "فعالية فنية تجمع الطلاب للاحتفال بألوان العلم السعودي تحت شعار 'عِزنا بطبعنا'",
      icon: Trophy,
      image: "/draw.jpg",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 4,
      title: "ندوة تاريخ المملكة ورؤية 2030",
      description: "ندوة تعليمية عن تاريخ المملكة العربية السعودية وإنجازاتها ورؤية 2030 المستقبلية",
      icon: Users,
      image: "/saudi-arabia-history-seminar-educational.jpg",
      color: "from-fuchsia-500 to-pink-600",
    },
  ];


  return (
    <>
      <section className="py-20 relative overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <Zap className="w-10 h-10 text-yellow-400 drop-shadow-lg" />
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{textShadow:'0 2px 16px rgba(0,0,0,0.85),0 0 2px #93DBB2'}}>فعالياتنا وإنجازاتنا</h2>
            <div className="ml-2"></div>
          </div>
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
                    {/* تم حذف التاريخ وعدد المشاركين وحالة الفعالية */}
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
          {selectedEvent && (
            <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
              <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="w-full max-w-md mx-auto">
                  <ProfileCard
                    avatarUrl={selectedEvent.image}
                    name={selectedEvent.title}
                    title="تفاصيل الفعالية"
                    description={selectedEvent.description}
                    // تم حذف حالة الفعالية وعدد المشاركين
                    contactText="إغلاق"
                    onContactClick={() => setSelectedEvent(null)}
                  />
                </div>
              </div>
            </Dialog>
          )}
        </div>
      </section>
    </>
  );
}

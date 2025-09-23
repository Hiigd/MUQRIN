
import React from "react";
import { motion } from "motion/react";

const DOTS_COUNT = 10;

export default function ClientOnlyDots() {
  const [dots, setDots] = React.useState<React.ReactNode>(null);

  React.useEffect(() => {
    const generated = Array.from({ length: DOTS_COUNT }).map((_, i) => {
      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight + 50;
      const duration = Math.random() * 4 + 3;
      const delay = Math.random() * 2;
      return (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-secondary/30 rounded-full"
          initial={{ x, y, scale: 0 }}
          animate={{ y: -50, scale: [0, 1, 0], rotate: 360 }}
          transition={{ duration, repeat: Number.POSITIVE_INFINITY, delay, ease: "linear" }}
        />
      );
    });
    setDots(generated);
  }, []);

  return <div className="absolute inset-0">{dots}</div>;
}
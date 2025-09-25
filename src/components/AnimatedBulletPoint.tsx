"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

interface AnimatedBulletPointProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedBulletPoint = ({ children, delay = 0 }: AnimatedBulletPointProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/40 hover:bg-card/70 transition-all duration-300 hover:scale-105"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
      >
        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
      </motion.div>
      <span className="text-foreground">{children}</span>
    </motion.div>
  );
};

export default AnimatedBulletPoint;
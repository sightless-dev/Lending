import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "../lib/cn";

const base: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.99, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.2, 0.9, 0.2, 1] },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={base}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds (useful inside grids). */
  delay?: number;
  className?: string;
  /** Render element type — defaults to a div. */
  as?: "div" | "section" | "li" | "article";
};

/**
 * Lightweight scroll-reveal wrapper.
 * Fades + lifts content into view once, and fully disables motion when the
 * user prefers reduced motion (renders a plain element instead).
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

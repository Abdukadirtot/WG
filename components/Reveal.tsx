"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type Ref,
} from "react";
import { useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds (useful inside grids). */
  delay?: number;
  className?: string;
  /** Render element type — defaults to a div. */
  as?: "div" | "section" | "li" | "article";
};

/**
 * Scroll-reveal wrapper.
 *
 * Fades + lifts content in the first time it enters the viewport, driven by a
 * self-contained IntersectionObserver + CSS transition.
 *
 * Robustness is the priority here: content is NEVER left permanently hidden.
 * - If motion is reduced or IntersectionObserver is unavailable, it shows at once.
 * - A safety timeout reveals content even if the observer never fires (this is
 *   the failure mode that caused blank sections on some mobile browsers).
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;

    // Show immediately when animation is unwanted or unsupported.
    if (!el || reduceMotion || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // If the element is already within the viewport at mount, reveal now.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );
    observer.observe(el);

    // Safety net: never leave content hidden if the observer doesn't fire.
    const fallback = window.setTimeout(() => setShown(true), 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [reduceMotion]);

  const style: CSSProperties = reduceMotion
    ? {}
    : {
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        willChange: "opacity, transform",
      };

  const Tag = as;

  return (
    <Tag ref={ref as Ref<never>} className={className} style={style}>
      {children}
    </Tag>
  );
}

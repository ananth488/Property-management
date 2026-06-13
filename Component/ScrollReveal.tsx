"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out";
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  threshold?: number;
  once?: boolean;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.05,
  once = true,
  style = {},
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Use IntersectionObserver to toggle visible state
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // triggers slightly before entering the full screen view
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // CSS transition configurations
  const getAnimationStyles = () => {
    switch (animation) {
      case "fade-in":
        return isVisible ? "opacity-100" : "opacity-0";
      case "fade-up":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
      case "fade-down":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10";
      case "fade-left":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10";
      case "fade-right":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10";
      case "zoom-in":
        return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95";
      case "zoom-out":
        return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105";
      default:
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
    }
  };

  const combinedStyle: React.CSSProperties = {
    ...style,
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${getAnimationStyles()} ${className}`}
      style={combinedStyle}
    >
      {children}
    </div>
  );
}

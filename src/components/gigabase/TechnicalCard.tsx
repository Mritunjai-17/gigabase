"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

interface TechnicalCardProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  interactiveLevel?: "high" | "medium" | "subtle";
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  showScanline?: boolean;
}

export default function TechnicalCard({
  children,
  className = "",
  isActive = false,
  interactiveLevel = "medium",
  onClick,
  onMouseEnter,
  onMouseLeave,
  showScanline = true,
}: TechnicalCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [scanKey, setScanKey] = useState(0);

  // Detect coarse pointer (mobile / tablet touch)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(pointer: coarse)");
      setIsTouch(mq.matches);
      const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, []);

  // Motion values for smooth 3D tilt & cursor spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);

  // Smooth damped spring for physical feel
  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Calibrate max rotation angle: 1.5 deg for 'high', 1.0 deg for 'medium', 0.5 deg for 'subtle'
  const maxTilt = interactiveLevel === "high" ? 1.5 : interactiveLevel === "medium" ? 1.0 : 0.5;
  const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || shouldReduceMotion) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Spotlight pixel positions
    spotX.set(x);
    spotY.set(y);

    // Normalized coordinates (-0.5 to 0.5) for tilt
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (showScanline && !isTouch && !shouldReduceMotion && interactiveLevel === "high") {
      setScanKey((k) => k + 1);
    }
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    onMouseLeave?.();
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        isTouch || shouldReduceMotion
          ? undefined
          : {
              perspective: 1200,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }
      }
      className={`relative overflow-hidden transition-colors duration-200 ${className}`}
    >
      {/* Subtle cursor-position reactive spotlight */}
      {!isTouch && !shouldReduceMotion && isHovered && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(380px circle at ${spotX.get()}px ${spotY.get()}px, rgba(61, 174, 255, 0.08), transparent 75%)`,
          }}
        />
      )}

      {/* Subtle technical scan line: 1px laser sweep running once on hover */}
      {!isTouch && !shouldReduceMotion && showScanline && interactiveLevel === "high" && isHovered && (
        <motion.div
          key={`scan-${scanKey}`}
          initial={{ top: "-5%", opacity: 0 }}
          animate={{ top: "105%", opacity: [0, 0.55, 0.55, 0] }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          className="pointer-events-none absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3daeff]/60 to-transparent z-20 shadow-[0_0_8px_rgba(61,174,255,0.4)]"
        />
      )}

      {/* Card Content with subtle 3D internal depth */}
      <div
        style={
          isTouch || shouldReduceMotion
            ? undefined
            : {
                transform: "translateZ(0px)",
              }
        }
        className="relative z-10 w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
}

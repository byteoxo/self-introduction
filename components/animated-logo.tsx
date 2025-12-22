"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import type { Variants, Easing } from "framer-motion";

interface AnimatedLogoProps {
  /** Logo size - width in pixels */
  size?: number;
  /** Show text label alongside logo */
  showText?: boolean;
  /** Custom class name */
  className?: string;
}

// Type-safe easing definition
const easeOutQuart: Easing = [0.25, 0.46, 0.45, 0.94];
const easeOut: Easing = "easeOut";
const easeInOut: Easing = "easeInOut";
const linear: Easing = "linear";

/**
 * AnimatedLogo Component
 *
 * A dynamic, interactive infinity symbol logo that matches the favicon design.
 * Features:
 * - Smooth entrance animation with path drawing effect
 * - Hover interactions with glow and rotation effects
 * - Dark/light theme adaptive colors
 * - Performance optimized with GPU acceleration
 * - Reduced motion support for accessibility
 * - Mobile-friendly with simplified animations
 */
export function AnimatedLogo({
  size = 32,
  showText = true,
  className = "",
}: AnimatedLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);

  // Detect if device is mobile for performance optimization
  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Trigger entrance animation
    if (!prefersReducedMotion) {
      controls.start("visible");
    } else {
      controls.set("visible");
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, [controls, prefersReducedMotion]);

  // Mouse move handler for subtle 3D tilt effect
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || isMobile || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = ((e.clientY - centerY) / rect.height) * -10;
      const rotateY = ((e.clientX - centerX) / rect.width) * 10;

      containerRef.current.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    [prefersReducedMotion, isMobile]
  );

  const handleMouseLeave = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.transform =
        "perspective(500px) rotateX(0deg) rotateY(0deg)";
    }
    setIsHovered(false);
  }, []);

  // SVG path for infinity symbol - carefully crafted to match the 3D ribbon look
  const infinityPath =
    "M32 24C32 20 29 16 24 16C18 16 16 20 16 24C16 28 14 32 8 32C4 32 0 28 0 24C0 20 4 16 8 16C14 16 16 20 16 24C16 28 18 32 24 32C29 32 32 28 32 24Z";

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOutQuart,
        staggerChildren: 0.1,
      },
    },
  };

  const pathVariants: Variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: prefersReducedMotion ? 0 : 1.2,
          ease: easeInOut,
        },
        opacity: {
          duration: 0.3,
        },
      },
    },
  };

  const glowVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: isHovered ? 0.6 : 0.3,
      scale: isHovered ? 1.2 : 1,
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.3,
        ease: easeOut,
      },
    },
  };

  // Unique gradient IDs to avoid conflicts
  const gradientId = "logo-gradient";
  const filterId = "logo-glow-filter";

  // Generate stable particle keys
  const particleKeys = ["particle-0", "particle-1", "particle-2"];

  return (
    <motion.div
      className={`flex items-center gap-2 cursor-pointer select-none ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        willChange: "transform",
      }}
    >
      {/* Logo SVG Container */}
      <div
        ref={containerRef}
        className="relative transition-transform duration-200 ease-out"
        style={{
          width: size,
          height: size * 0.6,
          willChange: "transform",
        }}
      >
        {/* Glow effect background */}
        <motion.div
          className="absolute inset-0 rounded-full blur-lg"
          variants={glowVariants}
          animate={isHovered ? "visible" : "hidden"}
          style={{
            background:
              "linear-gradient(135deg, var(--accent, #00d4ff) 0%, var(--accent-secondary, #7c3aed) 100%)",
            transform: "scale(1.5)",
            willChange: "opacity, transform",
          }}
        />

        {/* Main SVG */}
        <svg
          viewBox="0 0 32 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-full h-full"
          style={{
            filter: isHovered ? `url(#${filterId})` : "none",
            willChange: "filter",
          }}
          aria-label="Byteoxo infinity logo"
          role="img"
        >
          <title>Byteoxo Logo</title>
          <defs>
            {/* Main gradient matching favicon colors */}
            <linearGradient id={gradientId} x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#0891B2" />
              <stop offset="30%" stopColor="#06B6D4" />
              <stop offset="70%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>

            {/* Glow filter for hover effect */}
            <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="1"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Shadow/depth layer */}
          <motion.path
            d={infinityPath}
            stroke="rgba(0, 0, 0, 0.2)"
            strokeWidth={isMobile ? "5" : "4"}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            transform="translate(0, 2)"
            style={{
              opacity: isHovered ? 0.4 : 0.2,
            }}
          />

          {/* Main infinity path with gradient */}
          <motion.path
            d={infinityPath}
            stroke={`url(#${gradientId})`}
            strokeWidth={isMobile ? "5" : "4"}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            variants={pathVariants}
            animate={
              isHovered && !prefersReducedMotion
                ? {
                    strokeDashoffset: [0, -200],
                    transition: {
                      duration: 3,
                      ease: linear,
                      repeat: Infinity,
                    },
                  }
                : undefined
            }
            style={{
              strokeDasharray: isHovered ? "10 5" : "none",
            }}
          />

          {/* Highlight layer for 3D glass effect */}
          <motion.path
            d={infinityPath}
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            transform="translate(0, -0.5)"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.5 : 0.2 }}
            transition={{ duration: 0.3 }}
          />
        </svg>

        {/* Particle effects on hover (reduced on mobile) */}
        {isHovered && !prefersReducedMotion && !isMobile && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {particleKeys.map((key, i) => (
              <motion.div
                key={key}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: `var(--accent, #00d4ff)`,
                  left: `${30 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                }}
                animate={{
                  y: [-5, -15, -5],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: easeInOut,
                }}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Brand text */}
      {showText && (
        <motion.span
          className="text-xl font-bold"
          variants={textVariants}
          style={{
            background:
              "linear-gradient(135deg, var(--gradient-start, #00d4ff), var(--gradient-end, #7c3aed))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          byteoxo
        </motion.span>
      )}
    </motion.div>
  );
}

/**
 * Simple static logo for SSR/fallback scenarios
 */
export function StaticLogo({
  size = 32,
  showText = true,
  className = "",
}: AnimatedLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 32 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: size,
          height: size * 0.6,
        }}
        aria-label="Byteoxo infinity logo"
        role="img"
      >
        <title>Byteoxo Logo</title>
        <defs>
          <linearGradient
            id="static-gradient"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop offset="0%" stopColor="#0891B2" />
            <stop offset="30%" stopColor="#06B6D4" />
            <stop offset="70%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
        <path
          d="M32 24C32 20 29 16 24 16C18 16 16 20 16 24C16 28 14 32 8 32C4 32 0 28 0 24C0 20 4 16 8 16C14 16 16 20 16 24C16 28 18 32 24 32C29 32 32 28 32 24Z"
          stroke="url(#static-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {showText && (
        <span
          className="text-xl font-bold"
          style={{
            background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          byteoxo
        </span>
      )}
    </div>
  );
}

export default AnimatedLogo;

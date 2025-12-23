"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {
  ExternalLink,
  Terminal,
  Apple,
  Play,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "AI Hub",
    platform: "Android",
    platformIcon: Play,
    tagline: "ChatGPT-like AI chat app",
    description:
      "Bring your own API key, connect to various LLMs via OpenRouter. Your key, your models, your privacy.",
    features: [
      "OpenRouter Integration",
      "Privacy-First",
      "Multi-Model Support",
      "Custom API Keys",
    ],
    storeLink: "#",
    storeLinkText: "Play Store",
    learnMoreLink: "/products/android/ai-hub",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    accentColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    shadowColor: "hover:shadow-emerald-500/20",
  },
  {
    id: 2,
    name: "Crunch",
    platform: "macOS",
    platformIcon: Apple,
    tagline: "Native media compression tool",
    description:
      "Compress images, videos, and audio locally. Apple Silicon optimized, privacy-first, no uploads needed.",
    features: [
      "Apple Silicon Optimized",
      "Local Processing",
      "Images & Videos",
      "Privacy-First",
    ],
    storeLink: "#",
    storeLinkText: "Mac App Store",
    learnMoreLink: "/products/macos/crunch",
    gradient: "from-blue-500 to-purple-500",
    bgGradient: "from-blue-500/10 to-purple-500/10",
    accentColor: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    shadowColor: "hover:shadow-purple-500/20",
  },
  {
    id: 3,
    name: "Crunch CLI",
    platform: "Cross-Platform",
    platformIcon: Terminal,
    tagline: "Blazingly fast parallel media compression",
    description:
      "Process entire directories with one command. Available on Windows, Linux, and macOS.",
    features: [
      "Parallel Processing",
      "Directory Batch",
      "Cross-Platform",
      "Open Source",
    ],
    storeLink: "https://github.com/byteoxo/crunch",
    storeLinkText: "GitHub",
    learnMoreLink: "https://github.com/byteoxo/crunch",
    learnMoreExternal: true,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    accentColor: "text-orange-400",
    borderColor: "hover:border-orange-500/50",
    shadowColor: "hover:shadow-orange-500/20",
    installCommand: "brew install byteoxo/tap/crunch",
  },
];

export function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative px-4 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-gradient">Products</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted md:text-xl">
            Tools and applications I&apos;ve built to solve real-world problems
          </p>
        </motion.div>

        {/* Products Scrollable Container */}
        <ScrollArea.Root className="w-full overflow-hidden">
          <ScrollArea.Viewport className="w-full max-h-[700px] rounded-xl">
            <motion.div
              className="grid gap-6 pb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className="flex touch-none select-none p-0.5 transition-colors duration-150 ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="relative flex-1 rounded-full bg-card-border before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
    </section>
  );
}

interface Product {
  id: number;
  name: string;
  platform: string;
  platformIcon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  features: string[];
  storeLink: string;
  storeLinkText: string;
  learnMoreLink: string;
  learnMoreExternal?: boolean;
  gradient: string;
  bgGradient: string;
  accentColor: string;
  borderColor: string;
  shadowColor: string;
  installCommand?: string;
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const PlatformIcon = product.platformIcon;

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container - No absolute overlays that could block clicks */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-card-border bg-card/80 p-6 md:p-8",
          "backdrop-blur-md transition-all duration-500",
          product.borderColor,
          product.shadowColor,
          "hover:shadow-xl"
        )}
      >
        {/* Animated gradient background - positioned behind content with pointer-events-none */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
            product.bgGradient,
            isHovered && "opacity-100"
          )}
        />

        {/* Animated border glow - z-index below content */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br opacity-0 blur-md transition-opacity duration-500",
            product.gradient,
            isHovered && "opacity-40"
          )}
        />

        {/* Main content container - high z-index to ensure clickability */}
        <div className="relative z-20 flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
          {/* Icon & Platform with floating animation */}
          <div className="flex-shrink-0">
            <motion.div
              className={cn(
                "relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg",
                product.gradient
              )}
              animate={
                isHovered
                  ? {
                      y: [-2, 2, -2],
                      rotate: [0, 2, -2, 0],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <PlatformIcon className="h-8 w-8 text-white" />
              {/* Sparkle effect on hover */}
              {isHovered && (
                <motion.div
                  className="absolute -right-1 -top-1"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles className="h-4 w-4 text-yellow-400" />
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold">{product.name}</h3>
              <span
                className={cn(
                  "rounded-full border border-card-border bg-background/50 px-3 py-1 text-xs font-medium transition-colors duration-300",
                  isHovered ? product.accentColor : "text-muted"
                )}
              >
                {product.platform}
              </span>
            </div>

            <p className={cn("mb-2 text-lg font-medium", product.accentColor)}>
              {product.tagline}
            </p>
            <p className="mb-4 text-muted">{product.description}</p>

            {/* Features with stagger animation */}
            <div className="mb-4 flex flex-wrap gap-2">
              {product.features.map((feature, featureIndex) => (
                <motion.span
                  key={feature}
                  className={cn(
                    "rounded-full bg-card-border/50 px-3 py-1 text-xs font-medium",
                    "transition-all duration-300",
                    isHovered && "bg-card-border/80"
                  )}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + featureIndex * 0.05,
                  }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>

            {/* Install command (for CLI) */}
            {product.installCommand && (
              <div
                className={cn(
                  "mb-4 overflow-hidden rounded-lg border border-card-border bg-background/50 p-3",
                  "transition-all duration-300",
                  isHovered && "border-card-border/80 bg-background/70"
                )}
              >
                <code className={cn("text-sm", product.accentColor)}>
                  {product.installCommand}
                </code>
              </div>
            )}

            {/* Action Buttons - All using native anchor/Link with proper z-index */}
            <div className="relative z-30 flex flex-wrap items-center gap-3">
              {/* Store Link - Native anchor for external */}
              <a
                href={product.storeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group/btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium text-white",
                  "bg-gradient-to-r shadow-md transition-all duration-300",
                  product.gradient,
                  "hover:scale-105 hover:shadow-lg active:scale-95"
                )}
              >
                <span>{product.storeLinkText}</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
              </a>

              {/* Learn More Button - Conditional rendering for internal vs external */}
              {product.learnMoreExternal ? (
                <a
                  href={product.learnMoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group/learn inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium",
                    "border border-card-border bg-card/50 text-foreground",
                    "transition-all duration-300",
                    "hover:scale-105 hover:border-accent/50 hover:text-accent hover:shadow-lg hover:shadow-accent/10",
                    "active:scale-95"
                  )}
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/learn:translate-x-1" />
                </a>
              ) : (
                <Link
                  href={product.learnMoreLink}
                  className={cn(
                    "group/learn inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium",
                    "border border-card-border bg-card/50 text-foreground",
                    "transition-all duration-300",
                    "hover:scale-105 hover:border-accent/50 hover:text-accent hover:shadow-lg hover:shadow-accent/10",
                    "active:scale-95"
                  )}
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/learn:translate-x-1" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

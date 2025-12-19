"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {
  ExternalLink,
  Smartphone,
  Monitor,
  Terminal,
  Apple,
  Play,
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
    link: "#",
    linkText: "Play Store",
    gradient: "from-green-500 to-emerald-500",
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
    link: "#",
    linkText: "Mac App Store",
    gradient: "from-blue-500 to-purple-500",
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
    link: "https://github.com/byteoxo/crunch",
    linkText: "GitHub",
    gradient: "from-orange-500 to-red-500",
    installCommand:
      "brew tap byteoxo/tools && brew install byteoxo/tools/crunch",
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
  link: string;
  linkText: string;
  gradient: string;
  installCommand?: string;
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [10, -10]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const PlatformIcon = product.platformIcon;

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      <motion.div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-card-border bg-card/50 p-6 md:p-8",
          "backdrop-blur-sm transition-colors duration-300",
          "hover:border-accent/30"
        )}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Gradient glow effect on hover */}
        <motion.div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-br",
            product.gradient
          )}
          style={{ opacity: isHovered ? 0.05 : 0 }}
        />

        {/* Glow border effect */}
        <motion.div
          className={cn(
            "absolute -inset-[1px] rounded-2xl opacity-0 blur-sm bg-gradient-to-br",
            product.gradient
          )}
          style={{ opacity: isHovered ? 0.3 : 0 }}
        />

        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
          {/* Icon & Platform */}
          <div className="flex-shrink-0">
            <div
              className={cn(
                "flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br",
                product.gradient
              )}
            >
              <PlatformIcon className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold">{product.name}</h3>
              <span className="rounded-full border border-card-border bg-background/50 px-3 py-1 text-xs font-medium text-muted">
                {product.platform}
              </span>
            </div>

            <p className="mb-2 text-lg font-medium text-accent">
              {product.tagline}
            </p>
            <p className="mb-4 text-muted">{product.description}</p>

            {/* Features */}
            <div className="mb-4 flex flex-wrap gap-2">
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full bg-card-border/50 px-3 py-1 text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Install command (for CLI) */}
            {product.installCommand && (
              <div className="mb-4 overflow-hidden rounded-lg border border-card-border bg-background/50 p-3">
                <code className="text-sm text-accent">
                  {product.installCommand}
                </code>
              </div>
            )}

            {/* Link */}
            <motion.a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium text-white",
                "bg-gradient-to-r transition-all duration-300",
                product.gradient,
                "hover:shadow-lg hover:shadow-accent/20"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{product.linkText}</span>
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

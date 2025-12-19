"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ExternalLink,
  Terminal,
  Apple,
  Play,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  GridBackground,
  MouseFollower,
  ScrollProgress,
  ParticlesEffect,
} from "@/components/background-effects";

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
    category: "Mobile",
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
    category: "Desktop",
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
    category: "CLI",
  },
];

const categories = ["All", "Mobile", "Desktop", "CLI"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Background Effects */}
      <GridBackground />
      <ParticlesEffect />
      <MouseFollower />
      <ScrollProgress />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="mb-8 inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </motion.div>

            {/* Page Header */}
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Sparkles className="h-4 w-4" />
                <span>Built with passion</span>
              </motion.div>

              <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                <span className="text-gradient">Products</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted md:text-xl">
                A collection of tools and applications I&apos;ve built to solve
                real-world problems. Each project is crafted with care,
                performance, and user experience in mind.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              className="mb-12 flex flex-wrap items-center justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
                    activeCategory === category
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeCategory === category && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-card border border-card-border"
                      layoutId="category-active"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Products Grid */}
            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div
                className="py-20 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-lg text-muted">
                  No products in this category yet.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
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
  category: string;
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
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
          "relative flex h-full flex-col overflow-hidden rounded-2xl border border-card-border bg-card/50 p-6",
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

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="mb-4 flex items-start justify-between">
            <div
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br",
                product.gradient
              )}
            >
              <PlatformIcon className="h-7 w-7 text-white" />
            </div>
            <span className="rounded-full border border-card-border bg-background/50 px-3 py-1 text-xs font-medium text-muted">
              {product.platform}
            </span>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
            <p className="mb-2 text-sm font-medium text-accent">
              {product.tagline}
            </p>
            <p className="mb-4 text-sm text-muted leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-4 flex flex-wrap gap-1.5">
              {product.features.slice(0, 3).map((feature) => (
                <span
                  key={feature}
                  className="rounded-full bg-card-border/50 px-2.5 py-1 text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
              {product.features.length > 3 && (
                <span className="rounded-full bg-card-border/50 px-2.5 py-1 text-xs font-medium text-muted">
                  +{product.features.length - 3}
                </span>
              )}
            </div>

            {/* Install command (for CLI) */}
            {product.installCommand && (
              <div className="mb-4 overflow-hidden rounded-lg border border-card-border bg-background/50 p-2.5">
                <code className="text-xs text-accent break-all">
                  {product.installCommand}
                </code>
              </div>
            )}
          </div>

          {/* Link */}
          <motion.a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-medium text-white",
              "bg-gradient-to-r transition-all duration-300",
              product.gradient,
              "hover:shadow-lg hover:shadow-accent/20"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{product.linkText}</span>
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

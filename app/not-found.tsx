"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Package,
  Search,
  HelpCircle,
  ArrowRight,
  X,
  Play,
  Apple,
  Terminal,
  ExternalLink,
  Github,
  Mail,
  MessageCircle,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GridBackground, MouseFollower } from "@/components/background-effects";
import { Navigation } from "@/components/navigation";

// Featured products for the showcase section
const featuredProducts = [
  {
    id: 1,
    name: "AI Hub",
    platform: "Android",
    platformIcon: Play,
    tagline: "ChatGPT-like AI chat app",
    description:
      "Bring your own API key, connect to various LLMs via OpenRouter.",
    link: "/products/android/ai-hub",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 2,
    name: "Crunch",
    platform: "macOS",
    platformIcon: Apple,
    tagline: "Native media compression",
    description:
      "Compress images, videos, and audio locally with Apple Silicon.",
    link: "/products/macos/crunch",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    id: 3,
    name: "Crunch CLI",
    platform: "Cross-Platform",
    platformIcon: Terminal,
    tagline: "Blazingly fast compression",
    description: "Process entire directories with one command. Open source.",
    link: "https://github.com/byteoxo/crunch",
    gradient: "from-orange-500 to-red-500",
    external: true,
  },
];

// Quick navigation links
const quickLinks = [
  { name: "Home", href: "/", icon: Home, description: "Return to homepage" },
  {
    name: "Products",
    href: "/products",
    icon: Package,
    description: "Browse our products",
  },
  {
    name: "Search",
    href: "/#products",
    icon: Search,
    description: "Find what you need",
  },
  {
    name: "Contact",
    href: "mailto:developer@byteoxo.io",
    icon: HelpCircle,
    description: "Get help",
  },
];

const COUNTDOWN_DURATION = 3;

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(COUNTDOWN_DURATION);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(100);

  const handleRedirect = useCallback(() => {
    router.push("/");
  }, [router]);

  useEffect(() => {
    if (isPaused || countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleRedirect();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, countdown, handleRedirect]);

  useEffect(() => {
    if (isPaused) return;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - 100 / (COUNTDOWN_DURATION * 10);
        return newProgress < 0 ? 0 : newProgress;
      });
    }, 100);

    return () => clearInterval(progressTimer);
  }, [isPaused]);

  const cancelRedirect = () => {
    setIsPaused(true);
  };

  const goHomeNow = () => {
    router.push("/");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <>
      {/* Background Effects */}
      <GridBackground />
      <MouseFollower />

      {/* Navigation */}
      <Navigation />

      <main
        className="relative z-10 min-h-screen pt-20"
        aria-label="Page not found"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Error Message Section */}
            <motion.section
              variants={itemVariants}
              className="mb-16 text-center"
              aria-labelledby="error-title"
            >
              {/* Animated 404 */}
              <motion.div
                className="mb-8 inline-block"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.1,
                }}
              >
                <h1
                  id="error-title"
                  className="text-8xl font-bold tracking-tighter md:text-9xl lg:text-[12rem]"
                >
                  <span className="text-gradient animate-gradient">4</span>
                  <motion.span
                    className="inline-block text-gradient animate-gradient"
                    animate={{
                      rotate: [0, -10, 10, -5, 5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    0
                  </motion.span>
                  <span className="text-gradient animate-gradient">4</span>
                </h1>
              </motion.div>

              {/* Friendly Error Message */}
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                  Oops! This page took a coffee break ☕
                </h2>
                <p className="mx-auto max-w-md text-lg text-muted">
                  Looks like this page decided to explore the digital void.
                  Don&apos;t worry, we&apos;ll help you find your way back!
                </p>
              </motion.div>

              {/* Countdown Timer with Progress */}
              <motion.div
                variants={itemVariants}
                className="mb-8"
                role="timer"
                aria-live="polite"
                aria-label={`Redirecting to home in ${countdown} seconds`}
              >
                <AnimatePresence mode="wait">
                  {!isPaused ? (
                    <motion.div
                      key="countdown"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="inline-flex flex-col items-center gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-muted">Redirecting in</span>
                        <motion.span
                          key={countdown}
                          initial={{ scale: 1.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-xl font-bold text-accent"
                        >
                          {countdown}
                        </motion.span>
                        <span className="text-muted">seconds</span>
                      </div>

                      {/* Progress Bar */}
                      <div
                        className="h-1.5 w-64 overflow-hidden rounded-full bg-card-border"
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent to-accent-secondary"
                          style={{ width: `${progress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>

                      {/* Control Buttons */}
                      <div className="flex items-center gap-3">
                        <motion.button
                          onClick={cancelRedirect}
                          className={cn(
                            "flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-4 py-2",
                            "text-sm font-medium text-muted transition-all",
                            "hover:border-red-500/50 hover:text-red-400"
                          )}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Cancel automatic redirect"
                        >
                          <X className="h-4 w-4" />
                          <span>Cancel</span>
                        </motion.button>
                        <motion.button
                          onClick={goHomeNow}
                          className={cn(
                            "flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-5 py-2",
                            "text-sm font-medium text-white transition-all",
                            "hover:shadow-lg hover:shadow-accent/20"
                          )}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Go to homepage immediately"
                        >
                          <Home className="h-4 w-4" />
                          <span>Go Home Now</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="cancelled"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="inline-flex flex-col items-center gap-4"
                    >
                      <p className="text-muted">
                        Auto-redirect cancelled. Take your time exploring!
                      </p>
                      <motion.button
                        onClick={goHomeNow}
                        className={cn(
                          "flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-6 py-3",
                          "font-medium text-white transition-all",
                          "hover:shadow-lg hover:shadow-accent/20"
                        )}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Home className="h-5 w-5" />
                        <span>Take Me Home</span>
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.section>

            {/* Quick Navigation Links */}
            <motion.section
              variants={itemVariants}
              className="mb-16"
              aria-labelledby="quick-links-title"
            >
              <h3
                id="quick-links-title"
                className="mb-6 text-center text-lg font-semibold text-muted"
              >
                Quick Links
              </h3>
              <nav
                className="grid grid-cols-2 gap-4 md:grid-cols-4"
                aria-label="Quick navigation"
              >
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.name}
                      variants={itemVariants}
                      custom={index}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "group flex flex-col items-center gap-3 rounded-xl border border-card-border bg-card/50 p-6",
                          "transition-all duration-300",
                          "hover:border-accent/30 hover:bg-card hover:shadow-lg hover:shadow-accent/5"
                        )}
                      >
                        <motion.div
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-secondary/20 text-accent"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="h-6 w-6" />
                        </motion.div>
                        <span className="font-medium">{link.name}</span>
                        <span className="text-center text-xs text-muted">
                          {link.description}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.section>

            {/* Featured Products Section */}
            <motion.section
              variants={itemVariants}
              className="mb-16"
              aria-labelledby="featured-products-title"
            >
              <div className="mb-8 text-center">
                <h3
                  id="featured-products-title"
                  className="mb-2 text-2xl font-bold"
                >
                  <span className="text-gradient">
                    While you&apos;re here...
                  </span>
                </h3>
                <p className="text-muted">
                  Check out some of our popular products
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {featuredProducts.map((product, index) => {
                  const PlatformIcon = product.platformIcon;
                  const LinkComponent = product.external ? "a" : Link;
                  const linkProps = product.external
                    ? {
                        href: product.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : { href: product.link };

                  return (
                    <motion.div
                      key={product.id}
                      variants={itemVariants}
                      custom={index}
                      className="group"
                    >
                      <LinkComponent
                        {...linkProps}
                        className={cn(
                          "block h-full overflow-hidden rounded-2xl border border-card-border bg-card/50 p-6",
                          "transition-all duration-300",
                          "hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10"
                        )}
                      >
                        {/* Product Header */}
                        <div className="mb-4 flex items-start justify-between">
                          <div
                            className={cn(
                              "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br",
                              product.gradient
                            )}
                          >
                            <PlatformIcon className="h-6 w-6 text-white" />
                          </div>
                          <motion.div
                            className="text-muted transition-colors group-hover:text-accent"
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                          >
                            {product.external ? (
                              <ExternalLink className="h-5 w-5" />
                            ) : (
                              <ArrowRight className="h-5 w-5" />
                            )}
                          </motion.div>
                        </div>

                        {/* Product Info */}
                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <h4 className="text-lg font-bold">
                              {product.name}
                            </h4>
                            <span className="rounded-full border border-card-border bg-background/50 px-2 py-0.5 text-xs font-medium text-muted">
                              {product.platform}
                            </span>
                          </div>
                          <p className="mb-2 text-sm font-medium text-accent">
                            {product.tagline}
                          </p>
                          <p className="text-sm text-muted">
                            {product.description}
                          </p>
                        </div>

                        {/* Hover gradient effect */}
                        <motion.div
                          className={cn(
                            "absolute inset-0 opacity-0 transition-opacity bg-gradient-to-br",
                            product.gradient
                          )}
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 0.05 }}
                        />
                      </LinkComponent>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Fun Easter Egg */}
            <motion.section
              variants={itemVariants}
              className="text-center"
              aria-hidden="true"
            >
              <motion.p
                className="text-sm text-muted/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                🎯 Pro tip: The best adventures start with a wrong turn
              </motion.p>
            </motion.section>
          </motion.div>
        </div>
      </main>

      {/* Simplified Footer for 404 Page */}
      <footer className="relative border-t border-card-border bg-card/30 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Logo */}
            <Link href="/" className="group">
              <span className="text-xl font-bold text-gradient">byteoxo</span>
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/byteoxo"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  "border border-card-border bg-card/50 transition-all duration-300",
                  "hover:border-accent/50 hover:bg-card hover:text-accent hover:shadow-lg hover:shadow-accent/10"
                )}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:developer@byteoxo.io"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  "border border-card-border bg-card/50 transition-all duration-300",
                  "hover:border-accent/50 hover:bg-card hover:text-accent hover:shadow-lg hover:shadow-accent/10"
                )}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://discord.gg/Bwp267Jq"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  "border border-card-border bg-card/50 transition-all duration-300",
                  "hover:border-accent/50 hover:bg-card hover:text-accent hover:shadow-lg hover:shadow-accent/10"
                )}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Discord"
              >
                <MessageCircle className="h-5 w-5" />
              </motion.a>
            </div>

            {/* Divider */}
            <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-card-border to-transparent" />

            {/* Copyright */}
            <p className="flex items-center gap-1 text-sm text-muted">
              Built with{" "}
              <Heart
                className="inline-block h-4 w-4 text-red-500"
                fill="currentColor"
              />{" "}
              by byteoxo
            </p>
          </motion.div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </footer>
    </>
  );
}

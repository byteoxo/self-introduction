"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import { Github, Mail, MessageCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const taglines = [
  "Full-Stack Developer",
  "Building AI-powered apps",
  "Creating blazingly fast tools",
  "Exploring ML & Web Dev",
];

export function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const updateText = useCallback(() => {
    const currentText = taglines[currentTagline];

    if (!isDeleting && displayText === currentText) {
      return { action: "pause-before-delete" as const };
    }

    if (isDeleting && displayText === "") {
      return { action: "next-tagline" as const };
    }

    return {
      action: "type" as const,
      text: isDeleting
        ? currentText.substring(0, displayText.length - 1)
        : currentText.substring(0, displayText.length + 1),
    };
  }, [currentTagline, displayText, isDeleting]);

  useEffect(() => {
    const result = updateText();
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseTime = 2000;

    if (result.action === "pause-before-delete") {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (result.action === "next-tagline") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
      }, 500);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayText(result.text);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [updateText, isDeleting]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="mb-4 text-lg text-muted md:text-xl"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">byteoxo</span>
          <motion.span
            className="ml-4 inline-block origin-bottom-right"
            animate={{ rotate: [0, 20, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            👋
          </motion.span>
        </motion.h1>

        {/* Typewriter tagline */}
        <motion.div
          variants={itemVariants}
          className="mb-8 h-10 text-2xl font-medium text-muted md:text-3xl"
        >
          <span>{displayText}</span>
          <motion.span
            className="ml-1 inline-block w-[3px] bg-accent"
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            &nbsp;
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          A passionate developer exploring the intersection of software
          development and AI Technology. I love creating tools that solve real
          problems.
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <SocialButton
            href="https://github.com/byteoxo"
            icon={<Github className="h-5 w-5" />}
            label="GitHub"
          />
          <SocialButton
            href="mailto:developer@byteoxo.io"
            icon={<Mail className="h-5 w-5" />}
            label="Email"
          />
          <SocialButton
            href="https://discord.gg/Bwp267Jq"
            icon={<MessageCircle className="h-5 w-5" />}
            label="Discord"
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-muted transition-colors hover:text-foreground"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}

function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-6 py-3",
        "backdrop-blur-sm transition-all duration-300",
        "hover:border-accent/50 hover:bg-card hover:shadow-lg hover:shadow-accent/10"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="transition-colors group-hover:text-accent">{icon}</span>
      <span className="font-medium">{label}</span>
    </motion.a>
  );
}

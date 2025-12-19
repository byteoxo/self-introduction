"use client";

import { motion } from "framer-motion";
import { Github, Mail, MessageCircle, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/byteoxo",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:developer@byteoxo.io",
    icon: Mail,
  },
  {
    name: "Discord",
    href: "https://discord.gg/Bwp267Jq",
    icon: MessageCircle,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-card-border bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold">
              <span className="text-gradient">byteoxo</span>
            </h3>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map((link) => (
              <SocialLink key={link.name} {...link} />
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-1">
              <a
                href="mailto:developer@byteoxo.io"
                className="transition-colors hover:text-accent"
              >
                developer@byteoxo.io
              </a>
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-card-border to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />

          {/* Copyright */}
          <motion.div
            className="flex flex-col items-center gap-2 text-center text-sm text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>
              Built with{" "}
              <Heart
                className="inline-block h-4 w-4 text-red-500"
                fill="currentColor"
              />{" "}
              using Next.js, TailwindCSS & Framer Motion
            </p>
            <p>© {currentYear} byteoxo. All rights reserved.</p>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </footer>
  );
}

function SocialLink({
  name,
  href,
  icon: Icon,
}: {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full",
        "border border-card-border bg-card/50 transition-all duration-300",
        "hover:border-accent/50 hover:bg-card hover:text-accent hover:shadow-lg hover:shadow-accent/10"
      )}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label={name}
    >
      <Icon className="h-5 w-5" />
    </motion.a>
  );
}

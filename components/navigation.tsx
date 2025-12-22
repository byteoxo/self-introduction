"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Package,
  Menu,
  X,
  Github,
  Mail,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedLogo } from "@/components/animated-logo";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "/products", icon: Package },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/byteoxo", icon: Github },
  { name: "Email", href: "mailto:developer@byteoxo.io", icon: Mail },
  { name: "Discord", href: "https://discord.gg/Bwp267Jq", icon: MessageCircle },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu handler for links
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-card-border"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <AnimatedLogo size={28} showText={true} />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <Link key={link.href} href={link.href}>
                    <motion.div
                      className={cn(
                        "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-card border border-card-border"
                          layoutId="nav-active"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      <Icon className="relative z-10 h-4 w-4" />
                      <span className="relative z-10">{link.name}</span>
                    </motion.div>
                  </Link>
                );
              })}

              {/* Divider */}
              <div className="mx-2 h-6 w-px bg-card-border" />

              {/* Social Links */}
              <div className="flex items-center gap-1">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full text-muted",
                        "transition-colors hover:bg-card hover:text-accent"
                      )}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.name}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card/50 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-16 left-0 right-0 z-30 border-b border-card-border bg-card/95 backdrop-blur-lg md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="mx-auto max-w-6xl px-4 py-6">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={handleLinkClick}
                          className={cn(
                            "flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium transition-all",
                            isActive
                              ? "bg-accent/10 text-accent"
                              : "text-muted hover:bg-card-border/50 hover:text-foreground"
                          )}
                        >
                          <Icon className="h-5 w-5" />
                          <span>{link.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Social Links in Mobile */}
                <motion.div
                  className="mt-6 flex items-center justify-center gap-4 border-t border-card-border pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-full",
                          "border border-card-border bg-card/50 text-muted",
                          "transition-all hover:border-accent/50 hover:text-accent"
                        )}
                        aria-label={link.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

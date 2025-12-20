"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Play,
  Shield,
  Sparkles,
  MessageSquare,
  History,
  ImageIcon,
  Video,
  FileText,
  Mic,
  Search,
  Key,
  CheckCircle,
  Zap,
  Lock,
  ChevronLeft,
  ChevronRight,
  Download,
  Star,
  Layers,
  Settings,
  Trash2,
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

// App screenshot mockups data
const appScreenshots = [
  {
    id: 1,
    title: "Chat Interface",
    description: "Fluid conversations with AI",
    screen: "chat",
  },
  {
    id: 2,
    title: "Model Selection",
    description: "Browse hundreds of AI models",
    screen: "models",
  },
  {
    id: 3,
    title: "Settings",
    description: "Secure API configuration",
    screen: "settings",
  },
  {
    id: 4,
    title: "History",
    description: "Organized conversation history",
    screen: "history",
  },
];

// Feature sections
const features = [
  {
    icon: Shield,
    title: "Secure API Configuration",
    description:
      "Connect your own OpenRouter API key with encrypted local storage. One-tap validation ensures your credentials work perfectly, giving you full control over your AI access.",
    gradient: "from-green-500 to-emerald-500",
    highlights: ["Encrypted Storage", "One-Tap Validation", "Full Control"],
  },
  {
    icon: Layers,
    title: "Extensive Model Library",
    description:
      "Browse and select from hundreds of AI models with detailed specs including context length, pricing, and capabilities. Smart search and filtering help you find the perfect model for your needs.",
    gradient: "from-blue-500 to-cyan-500",
    highlights: ["100+ Models", "Smart Search", "Detailed Specs"],
  },
  {
    icon: MessageSquare,
    title: "Intelligent Chat Experience",
    description:
      "Enjoy fluid conversations with real-time streaming responses. Beautiful Markdown rendering for code blocks and formatted text, easy message copying, and graceful error recovery.",
    gradient: "from-purple-500 to-pink-500",
    highlights: [
      "Streaming Responses",
      "Markdown Support",
      "Code Highlighting",
    ],
  },
  {
    icon: History,
    title: "Conversation Management",
    description:
      "Keep your chats organized with automatic titling, model tracking, message counts, and timestamps. Swipe-to-delete, bulk management, and seamless conversation resumption.",
    gradient: "from-orange-500 to-red-500",
    highlights: ["Auto-Titling", "Swipe Actions", "Bulk Management"],
  },
];

// Coming soon features
const comingSoonFeatures = [
  { icon: ImageIcon, name: "Image Analysis", color: "text-pink-500" },
  { icon: Video, name: "Video Support", color: "text-purple-500" },
  { icon: FileText, name: "Document Processing", color: "text-blue-500" },
  { icon: Mic, name: "Voice Input", color: "text-green-500" },
];

export function AIHubPageClient() {
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

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
        <section
          ref={heroRef}
          className="relative px-4 py-20 md:py-28 overflow-hidden"
        >
          <div className="mx-auto max-w-6xl">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Products</span>
              </Link>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Hero Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <motion.div
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-500"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Play className="h-4 w-4" fill="currentColor" />
                  <span>Available on Android</span>
                </motion.div>

                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  <span className="text-gradient">AI Hub</span>
                </h1>

                <p className="mb-4 text-xl font-medium text-accent">
                  Your Personal AI Chat Companion
                </p>

                <p className="mb-8 text-lg text-muted leading-relaxed">
                  A privacy-first AI chat app that puts you in control. Bring
                  your own OpenRouter API key, access hundreds of AI models, and
                  enjoy intelligent conversations with complete privacy. Your
                  key, your models, your data.
                </p>

                {/* Key Points */}
                <div className="mb-8 flex flex-wrap gap-3">
                  {[
                    "Privacy-First",
                    "100+ Models",
                    "Offline Capable",
                    "No Subscriptions",
                  ].map((point) => (
                    <span
                      key={point}
                      className="inline-flex items-center gap-1.5 rounded-full bg-card border border-card-border px-3 py-1.5 text-sm"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                      <span>{point}</span>
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-green-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-5 w-5" fill="currentColor" />
                    <span>Get on Play Store</span>
                  </motion.a>
                  <motion.a
                    href="#features"
                    className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-6 py-3 font-medium transition-all hover:border-accent/50 hover:bg-card"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Sparkles className="h-5 w-5" />
                    <span>Explore Features</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Hero Phone Mockup */}
              <motion.div
                className="relative flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <PhoneMockup screen="chat" />
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -left-4 rounded-2xl border border-card-border bg-card/80 p-3 backdrop-blur-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium">Streaming</span>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-4 rounded-2xl border border-card-border bg-card/80 p-3 backdrop-blur-sm"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Encrypted</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* App Screenshots Carousel */}
        <ScreenshotsCarousel />

        {/* Features Section */}
        <section id="features" className="px-4 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                <span className="text-gradient">Powerful Features</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted">
                Everything you need for intelligent AI conversations, designed
                with privacy and flexibility in mind.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="px-4 py-20 md:py-28 bg-card/30">
          <div className="mx-auto max-w-6xl">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-4 w-4" />
                <span>Coming Soon</span>
              </motion.div>

              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                <span className="text-gradient">Multimodal Future</span>
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-lg text-muted">
                We&apos;re working on expanding AI Hub&apos;s capabilities
                beyond text. Soon you&apos;ll be able to interact with AI using
                multiple input types.
              </p>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {comingSoonFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    className="rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(0, 212, 255, 0.3)",
                    }}
                  >
                    <feature.icon
                      className={cn("mx-auto mb-3 h-8 w-8", feature.color)}
                    />
                    <p className="font-medium">{feature.name}</p>
                    <p className="mt-1 text-xs text-muted">Coming Soon</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why AI Hub Section */}
        <section className="px-4 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Why <span className="text-gradient">AI Hub</span>?
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                      <Key className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Bring Your Own Key</h3>
                      <p className="text-muted">
                        No subscriptions, no hidden fees. Pay only for what you
                        use through OpenRouter&apos;s transparent pricing.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Privacy First</h3>
                      <p className="text-muted">
                        Your API key is encrypted locally. Your conversations
                        never touch our servers. Complete privacy guaranteed.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">
                        Real-Time Streaming
                      </h3>
                      <p className="text-muted">
                        Watch AI responses appear word by word with seamless SSE
                        streaming. No waiting for complete responses.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative flex justify-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <PhoneMockup screen="models" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="px-4 py-20 md:py-28">
          <div className="mx-auto max-w-4xl">
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-card-border bg-gradient-to-br from-card via-card to-card/50 p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10" />

              <div className="relative z-10 text-center">
                <motion.div
                  className="mb-6 inline-flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg shadow-green-500/25">
                    <Play
                      className="h-10 w-10 text-white"
                      fill="currentColor"
                    />
                  </div>
                </motion.div>

                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-lg text-muted">
                  Download AI Hub today and experience the freedom of AI
                  conversations on your terms. Free to download, pay only for
                  your API usage.
                </p>

                <motion.a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 text-lg font-medium text-white transition-all hover:shadow-xl hover:shadow-green-500/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="h-6 w-6" />
                  <span>Download from Play Store</span>
                </motion.a>

                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1">
                    <Star
                      className="h-4 w-4 text-yellow-500"
                      fill="currentColor"
                    />
                    4.8 Rating
                  </span>
                  <span className="h-4 w-px bg-card-border" />
                  <span>Free Download</span>
                  <span className="h-4 w-px bg-card-border" />
                  <span>Android 8.0+</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Legal Links Section */}
        <section className="px-4 py-12 border-t border-card-border">
          <div className="mx-auto max-w-4xl">
            <motion.div
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-muted">Legal & Support</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/products/android/ai-hub/terms-of-service"
                  className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-5 py-2.5 text-sm font-medium transition-all hover:border-accent/50 hover:bg-card"
                >
                  <FileText className="h-4 w-4" />
                  <span>Terms of Service</span>
                </Link>
                <Link
                  href="/products/android/ai-hub/privacy-policy"
                  className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-5 py-2.5 text-sm font-medium transition-all hover:border-accent/50 hover:bg-card"
                >
                  <Shield className="h-4 w-4" />
                  <span>Privacy Policy</span>
                </Link>
              </div>
              <p className="text-xs text-muted text-center max-w-md">
                By downloading and using AI Hub, you agree to our Terms of
                Service and Privacy Policy.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

// Phone Mockup Component with different screens
function PhoneMockup({ screen }: { screen: string }) {
  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="relative h-[600px] w-[300px] rounded-[3rem] border-[14px] border-gray-800 bg-gray-900 shadow-xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-20 h-7 w-32 -translate-x-1/2 rounded-b-2xl bg-gray-800" />

        {/* Screen Content */}
        <div className="h-full w-full overflow-hidden rounded-[2.2rem] bg-background">
          {screen === "chat" && <ChatScreen />}
          {screen === "models" && <ModelsScreen />}
          {screen === "settings" && <SettingsScreen />}
          {screen === "history" && <HistoryScreen />}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-gray-600" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-3xl" />
    </div>
  );
}

// Chat Screen Mockup
function ChatScreen() {
  return (
    <div className="flex h-full flex-col bg-background text-foreground">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-card-border p-4 pt-10">
        <div>
          <h3 className="text-sm font-semibold">AI Hub Chat</h3>
          <p className="text-xs text-muted">GPT-4 Turbo</p>
        </div>
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-full bg-card" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-hidden p-4">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-md bg-accent/20 px-4 py-2 text-sm">
            How do I create a React component?
          </div>
        </div>

        {/* AI message */}
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-card px-4 py-2 text-sm">
            <p className="mb-2">Here&apos;s how to create a React component:</p>
            <div className="rounded-lg bg-background/50 p-2 font-mono text-xs">
              <span className="text-purple-400">function</span>{" "}
              <span className="text-blue-400">MyComponent</span>() {"{"}
              <br />
              {"  "}return &lt;div&gt;Hello&lt;/div&gt;
              <br />
              {"}"}
            </div>
          </div>
        </div>

        {/* Streaming indicator */}
        <div className="flex justify-start">
          <div className="flex gap-1 rounded-2xl bg-card px-4 py-3">
            <motion.div
              className="h-2 w-2 rounded-full bg-accent"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.div
              className="h-2 w-2 rounded-full bg-accent"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="h-2 w-2 rounded-full bg-accent"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            />
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-card-border p-4">
        <div className="flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-2">
          <span className="flex-1 text-sm text-muted">Type a message...</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
            <span className="text-xs">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Models Screen Mockup
function ModelsScreen() {
  const models = [
    { name: "GPT-4 Turbo", context: "128K", price: "$10/1M" },
    { name: "Claude 3 Opus", context: "200K", price: "$15/1M" },
    { name: "Gemini Pro", context: "32K", price: "$0.5/1M" },
  ];

  return (
    <div className="flex h-full flex-col bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-card-border p-4 pt-10">
        <h3 className="mb-2 text-sm font-semibold">Select Model</h3>
        <div className="flex items-center gap-2 rounded-lg border border-card-border bg-card px-3 py-2">
          <Search className="h-4 w-4 text-muted" />
          <span className="text-xs text-muted">Search models...</span>
        </div>
      </div>

      {/* Models List */}
      <div className="flex-1 overflow-hidden p-4 space-y-3">
        {models.map((model, i) => (
          <div
            key={model.name}
            className={cn(
              "rounded-xl border border-card-border bg-card p-3",
              i === 0 && "border-accent/50 bg-accent/5"
            )}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium">{model.name}</p>
                <p className="text-xs text-muted">Context: {model.context}</p>
              </div>
              {i === 0 && <CheckCircle className="h-5 w-5 text-accent" />}
            </div>
            <div className="mt-2 flex gap-2">
              <span className="rounded-full bg-card-border/50 px-2 py-0.5 text-xs">
                {model.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Settings Screen Mockup
function SettingsScreen() {
  return (
    <div className="flex h-full flex-col bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-card-border p-4 pt-10">
        <h3 className="text-sm font-semibold">Settings</h3>
      </div>

      {/* Settings Content */}
      <div className="flex-1 overflow-hidden p-4 space-y-4">
        {/* API Key Section */}
        <div className="rounded-xl border border-card-border bg-card p-4">
          <div className="flex items-center gap-2 mb-3">
            <Key className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">API Key</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-card-border bg-background px-3 py-2 mb-2">
            <span className="flex-1 text-xs text-muted">sk-or-v1-••••••••</span>
          </div>
          <button
            type="button"
            className="w-full rounded-lg bg-green-500/20 px-3 py-2 text-xs font-medium text-green-500"
          >
            Verify Key ✓
          </button>
        </div>

        {/* Model Section */}
        <div className="rounded-xl border border-card-border bg-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <Settings className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Current Model</span>
          </div>
          <p className="text-xs text-muted">GPT-4 Turbo</p>
        </div>

        {/* Capabilities */}
        <div className="rounded-xl border border-card-border bg-card p-4">
          <p className="text-sm font-medium mb-3">Capabilities</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs">Text</span>
              <div className="h-4 w-8 rounded-full bg-green-500/30" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted">Image</span>
              <span className="text-xs text-muted">Soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// History Screen Mockup
function HistoryScreen() {
  const chats = [
    {
      title: "React component help",
      model: "GPT-4",
      messages: 12,
      time: "2h ago",
    },
    { title: "Python debugging", model: "Claude", messages: 8, time: "5h ago" },
    {
      title: "API design questions",
      model: "GPT-4",
      messages: 24,
      time: "1d ago",
    },
  ];

  return (
    <div className="flex h-full flex-col bg-background text-foreground">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-card-border p-4 pt-10">
        <h3 className="text-sm font-semibold">Chat History</h3>
        <Trash2 className="h-4 w-4 text-muted" />
      </div>

      {/* History List */}
      <div className="flex-1 overflow-hidden p-4 space-y-3">
        {chats.map((chat) => (
          <div
            key={chat.title}
            className="rounded-xl border border-card-border bg-card p-3"
          >
            <div className="flex items-start justify-between mb-1">
              <p className="text-sm font-medium truncate max-w-[180px]">
                {chat.title}
              </p>
              <span className="text-xs text-muted">{chat.time}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted">{chat.model}</span>
              <span className="flex items-center gap-1 text-xs text-muted">
                <MessageSquare className="h-3 w-3" />
                {chat.messages}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Screenshots Carousel Component
function ScreenshotsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % appScreenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length
    );
  };

  return (
    <section className="px-4 py-20 md:py-28 overflow-hidden bg-card/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="text-gradient">App Screenshots</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Take a tour through AI Hub&apos;s beautiful and intuitive interface
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-8">
            {/* Prev Button */}
            <motion.button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-card-border bg-card/50 text-muted transition-colors hover:bg-card hover:text-foreground"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            {/* Screenshots */}
            <div className="relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <PhoneMockup screen={appScreenshots[activeIndex].screen} />
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-semibold">
                      {appScreenshots[activeIndex].title}
                    </h3>
                    <p className="text-muted">
                      {appScreenshots[activeIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-card-border bg-card/50 text-muted transition-colors hover:bg-card hover:text-foreground"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {appScreenshots.map((screenshot) => (
              <button
                type="button"
                key={screenshot.id}
                onClick={() =>
                  setActiveIndex(
                    appScreenshots.findIndex((s) => s.id === screenshot.id)
                  )
                }
                className={cn(
                  "h-2 rounded-full transition-all",
                  appScreenshots.findIndex((s) => s.id === screenshot.id) ===
                    activeIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-card-border hover:bg-muted"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      className="group relative rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-accent/30"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Gradient glow on hover */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 bg-gradient-to-br group-hover:opacity-5",
          feature.gradient
        )}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={cn(
            "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br",
            feature.gradient
          )}
        >
          <feature.icon className="h-6 w-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
        <p className="mb-4 text-muted leading-relaxed">{feature.description}</p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2">
          {feature.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full bg-card-border/50 px-3 py-1 text-xs font-medium"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

import type { Metadata } from "next";
import { Hero } from "@/components/hero";

export const metadata: Metadata = {
  title: "byteoxo | Full-Stack Developer & AI Enthusiast",
  description:
    "A passionate Full-Stack Developer exploring the intersection of software development and AI Technology. Building AI-powered apps and blazingly fast tools for mobile, desktop, and CLI.",
  openGraph: {
    title: "byteoxo | Full-Stack Developer & AI Enthusiast",
    description:
      "A passionate Full-Stack Developer exploring the intersection of software development and AI Technology. Building AI-powered apps and blazingly fast tools.",
    url: "https://byteoxo.dev",
  },
  twitter: {
    title: "byteoxo | Full-Stack Developer & AI Enthusiast",
    description:
      "A passionate Full-Stack Developer exploring the intersection of software development and AI Technology. Building AI-powered apps and blazingly fast tools.",
  },
};
import { Skills } from "@/components/skills";
import { Products } from "@/components/products";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import {
  GridBackground,
  MouseFollower,
  ScrollProgress,
  ParticlesEffect,
} from "@/components/background-effects";

export default function Home() {
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
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Products />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

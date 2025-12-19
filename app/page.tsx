import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Products } from "@/components/products";
import { Footer } from "@/components/footer";
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

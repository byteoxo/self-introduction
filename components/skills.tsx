"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    name: "Languages",
    color: "from-cyan-500 to-blue-500",
    skills: [
      "Rust",
      "C++",
      "Go",
      "TypeScript",
      "Python",
      "Swift",
      "Java",
      "Lua",
      "JavaScript",
    ],
  },
  {
    name: "Web",
    color: "from-purple-500 to-pink-500",
    skills: [
      "React",
      "Next.js",
      "Bun",
      "Express",
      "FastAPI",
      "Flask",
      "TailwindCSS",
      "WebGL",
      "tRPC",
    ],
  },
  {
    name: "Database",
    color: "from-green-500 to-emerald-500",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Supabase",
      "Elasticsearch",
    ],
  },
  {
    name: "Tools",
    color: "from-orange-500 to-amber-500",
    skills: [
      "Docker",
      "Git",
      "AWS",
      "GCP",
      "Figma",
      "Neovim",
      "Zed",
      "Linux",
      "macOS",
    ],
  },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-4 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted md:text-xl">
            Currently working as a Full-Stack Developer, I specialize in
            building high-performance applications using modern technologies and
            best practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={categoryVariants}
              className="group rounded-2xl border border-card-border bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-card/50"
            >
              {/* Category Header */}
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={cn(
                    "h-3 w-3 rounded-full bg-gradient-to-r",
                    category.color
                  )}
                />
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <SkillTag
                    key={skill}
                    skill={skill}
                    color={category.color}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillTag({
  skill,
  color,
  delay,
}: {
  skill: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.span
      className={cn(
        "relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium",
        "border border-card-border bg-background/50 transition-all duration-300",
        "hover:border-transparent hover:shadow-lg"
      )}
      whileHover={{ scale: 1.05, y: -2 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
    >
      {/* Hover gradient background */}
      <span
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-r",
          color,
          "group-hover:opacity-10"
        )}
      />
      <span className="relative z-10">{skill}</span>
    </motion.span>
  );
}

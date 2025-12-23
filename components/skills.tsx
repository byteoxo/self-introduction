"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

// Proficiency levels for visual indicators
type ProficiencyLevel = "expert" | "advanced" | "intermediate" | "learning";

interface Skill {
  name: string;
  proficiency?: ProficiencyLevel;
  badge?: string; // For achievements like ratings
}

interface SkillCategory {
  name: string;
  color: string;
  icon: string;
  skills: (string | Skill)[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    color: "from-cyan-500 to-blue-500",
    icon: "💻",
    skills: [
      "C++",
      "Go",
      "Rust",
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
    icon: "🌐",
    skills: [
      "SolidJs",
      "Gin",
      "GORM",
      "Lit-lit",
      "Actix-web",
      "Next.js",
      "Bun",
      "FastAPI",
      "TailwindCSS",
      "WebGPU",
      "gRPC",
    ],
  },
  {
    name: "Database",
    color: "from-green-500 to-emerald-500",
    icon: "🗄️",
    skills: [
      "PostgreSQL",
      "sqlite",
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
    icon: "🛠️",
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
      "Cursor",
    ],
  },
  {
    name: "Systems Programming",
    color: "from-red-500 to-rose-500",
    icon: "⚙️",
    skills: [
      { name: "Cross-compilation", proficiency: "advanced" },
      { name: "FFI (Foreign Function Interface)", proficiency: "advanced" },
      { name: "Memory Management", proficiency: "expert" },
      { name: "Unsafe Programming", proficiency: "advanced" },
      { name: "SIMD/Vectorization", proficiency: "intermediate" },
      { name: "WebAssembly", proficiency: "advanced" },
      { name: "Custom Allocators", proficiency: "intermediate" },
      { name: "Lock-free Data Structures", proficiency: "advanced" },
      { name: "Concurrent Programming", proficiency: "expert" },
      { name: "Kernel Modules", proficiency: "intermediate" },
      { name: "Reverse Engineering", proficiency: "intermediate" },
      { name: "Binary Analysis", proficiency: "intermediate" },
      { name: "JIT Compilation", proficiency: "learning" },
    ],
  },
  {
    name: "Game Backend",
    color: "from-fuchsia-500 to-purple-600",
    icon: "🎮",
    skills: [
      { name: "Real-time Replication", proficiency: "advanced" },
      { name: "Lockstep / Determinism", proficiency: "intermediate" },
      { name: "Lag Compensation", proficiency: "advanced" },
      { name: "Spatial Hashing / Quadtrees", proficiency: "expert" },
      { name: "NavMesh / Pathfinding", proficiency: "intermediate" },
      { name: "KCP / ENet / QUIC", proficiency: "advanced" },
      { name: "FlatBuffers / Cap'n Proto", proficiency: "advanced" },
      { name: "ECS Architecture", proficiency: "expert" },
      { name: "Agones / GameLift", proficiency: "intermediate" },
      { name: "Actor Model", proficiency: "advanced" },
    ],
  },
  {
    name: "Competitive Programming",
    color: "from-yellow-500 to-orange-500",
    icon: "🏆",
    skills: [
      { name: "Codeforces", proficiency: "advanced", badge: "Expert" },
      { name: "ICPC", proficiency: "advanced", badge: "Regional" },
      { name: "AtCoder", proficiency: "intermediate", badge: "Cyan" },
      // { name: "LeetCode", proficiency: "expert", badge: "Top 5%" },
      // { name: "Google Code Jam", proficiency: "intermediate" },
      // { name: "Kick Start", proficiency: "intermediate" },
      // { name: "TopCoder SRM", proficiency: "intermediate" },
    ],
  },
  {
    name: "Algorithm Specializations",
    color: "from-indigo-500 to-violet-500",
    icon: "🧮",
    skills: [
      { name: "Network Flow", proficiency: "advanced" },
      { name: "Heavy-Light Decomposition", proficiency: "intermediate" },
      { name: "Computational Geometry", proficiency: "intermediate" },
      { name: "Suffix Arrays", proficiency: "advanced" },
      { name: "Aho-Corasick", proficiency: "advanced" },
      { name: "DP Optimization", proficiency: "expert" },
      { name: "Convex Hull Trick", proficiency: "intermediate" },
      { name: "Number Theory", proficiency: "advanced" },
      { name: "Cryptographic Algorithms", proficiency: "intermediate" },
      { name: "Segment Trees", proficiency: "expert" },
      { name: "Fenwick Trees", proficiency: "expert" },
    ],
  },
];

// Proficiency level colors and labels
const proficiencyConfig: Record<
  ProficiencyLevel,
  { color: string; label: string; dots: number }
> = {
  expert: { color: "bg-green-500", label: "Expert", dots: 4 },
  advanced: { color: "bg-blue-500", label: "Advanced", dots: 3 },
  intermediate: { color: "bg-yellow-500", label: "Intermediate", dots: 2 },
  learning: { color: "bg-gray-400", label: "Learning", dots: 1 },
};

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
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={categoryVariants}
              className={cn(
                "group rounded-2xl border border-card-border bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-card/50",
                // Make advanced categories span full width on larger screens
                (category.name === "Systems Programming" ||
                  category.name === "Game Backend" ||
                  category.name === "Competitive Programming" ||
                  category.name === "Algorithm Specializations") &&
                  "md:col-span-2 lg:col-span-1"
              )}
            >
              {/* Category Header */}
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
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
                {category.skills.map((skill, index) => {
                  const skillData =
                    typeof skill === "string" ? { name: skill } : skill;
                  return (
                    <SkillTag
                      key={skillData.name}
                      skill={skillData}
                      color={category.color}
                      delay={index * 0.05}
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Legend */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <span className="font-medium">Proficiency Levels:</span>
          {(
            Object.entries(proficiencyConfig) as [
              ProficiencyLevel,
              (typeof proficiencyConfig)[ProficiencyLevel]
            ][]
          ).map(([level, config]) => (
            <div key={level} className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {["dot-1", "dot-2", "dot-3", "dot-4"].map((dotId, i) => (
                  <div
                    key={`${level}-${dotId}`}
                    className={cn(
                      "h-2 w-2 rounded-full",
                      i < config.dots ? config.color : "bg-gray-700"
                    )}
                  />
                ))}
              </div>
              <span>{config.label}</span>
            </div>
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
  skill: Skill;
  color: string;
  delay: number;
}) {
  const { name, proficiency, badge } = skill;
  const config = proficiency ? proficiencyConfig[proficiency] : null;

  return (
    <motion.span
      className={cn(
        "relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium",
        "border border-card-border bg-background/50 transition-all duration-300",
        "hover:border-transparent hover:shadow-lg",
        "flex items-center gap-2"
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
      <span className="relative z-10 flex items-center gap-2">
        {name}
        {/* Proficiency dots */}
        {config && (
          <span className="flex gap-0.5" title={config.label}>
            {["d1", "d2", "d3", "d4"].map((dotId, i) => (
              <span
                key={`${name}-${dotId}`}
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  i < config.dots ? config.color : "bg-gray-600"
                )}
              />
            ))}
          </span>
        )}
        {/* Badge for achievements */}
        {badge && (
          <span
            className={cn(
              "ml-1 rounded-md px-1.5 py-0.5 text-xs font-bold",
              "bg-gradient-to-r",
              color,
              "text-white"
            )}
          >
            {badge}
          </span>
        )}
      </span>
    </motion.span>
  );
}

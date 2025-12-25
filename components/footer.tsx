'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    Github,
    Mail,
    MessageCircle,
    Heart,
    Home,
    Package,
    Code,
    FileText,
    ExternalLink,
    MapPin,
    Play,
    Apple,
    Terminal,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/byteoxo',
        icon: Github,
    },
    {
        name: 'Email',
        href: 'mailto:developer@byteoxo.io',
        icon: Mail,
    },
    {
        name: 'Discord',
        href: 'https://discord.gg/Bwp267Jq',
        icon: MessageCircle,
    },
]

const navigationLinks = [
    {
        title: 'Navigation',
        links: [
            { name: 'Home', href: '/', icon: Home },
            { name: 'Products', href: '/products', icon: Package },
            { name: 'Skills', href: '/#skills', icon: Code },
        ],
    },
    {
        title: 'Products',
        links: [
            { name: 'AI Hub', href: '/products/android/ai-hub', icon: Play },
            { name: 'Crunch', href: '/products/macos/crunch', icon: Apple },
            {
                name: 'Crunch CLI',
                href: 'https://github.com/byteoxo/crunch',
                icon: Terminal,
                external: true,
            },
        ],
    },
    {
        title: 'Legal',
        links: [
            {
                name: 'AI Hub Privacy',
                href: '/products/android/ai-hub/privacy-policy',
                icon: FileText,
            },
            {
                name: 'AI Hub Terms',
                href: '/products/android/ai-hub/terms-of-service',
                icon: FileText,
            },
            {
                name: 'Crunch Privacy',
                href: '/products/macos/crunch/privacy-policy',
                icon: FileText,
            },
            {
                name: 'Crunch Terms',
                href: '/products/macos/crunch/terms-of-service',
                icon: FileText,
            },
        ],
    },
]

const techStack = [
    'Next.js',
    'React',
    'TypeScript',
    'TailwindCSS',
    'Framer Motion',
]

export function Footer() {
    const currentYear = new Date().getFullYear()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
            },
        },
    }

    return (
        <footer className="relative border-t border-card-border bg-card/30 backdrop-blur-sm">
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Main Footer Content */}
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                        {/* Brand Section */}
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-1"
                        >
                            <Link href="/" className="group inline-block">
                                <h3 className="mb-4 text-2xl font-bold">
                                    <span className="text-gradient">
                                        byteoxo
                                    </span>
                                </h3>
                            </Link>
                            <p className="mb-6 text-sm leading-relaxed text-muted">
                                A passionate Full-Stack Developer exploring the
                                intersection of software development and AI
                                Technology. Building AI-powered apps and
                                blazingly fast tools.
                            </p>

                            {/* Location */}
                            <div className="mb-6 flex items-center gap-2 text-sm text-muted">
                                <MapPin className="h-4 w-4 text-accent" />
                                <span>Building from anywhere 🌍</span>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                {socialLinks.map((link) => (
                                    <SocialLink key={link.name} {...link} />
                                ))}
                            </div>
                        </motion.div>

                        {/* Navigation Columns */}
                        {navigationLinks.map((section, index) => (
                            <motion.div
                                key={section.title}
                                variants={itemVariants}
                                className="lg:col-span-1"
                            >
                                <h4 className="mb-4 font-semibold text-foreground">
                                    {section.title}
                                </h4>
                                <ul className="space-y-3">
                                    {section.links.map((link) => {
                                        const Icon = link.icon
                                        const isExternal =
                                            'external' in link && link.external

                                        return (
                                            <li key={link.name}>
                                                {isExternal ? (
                                                    <a
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={cn(
                                                            'group flex items-center gap-2 text-sm text-muted',
                                                            'transition-colors hover:text-accent'
                                                        )}
                                                    >
                                                        <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                                                        <span>{link.name}</span>
                                                        <ExternalLink className="h-3 w-3 opacity-50" />
                                                    </a>
                                                ) : (
                                                    <Link
                                                        href={link.href}
                                                        className={cn(
                                                            'group flex items-center gap-2 text-sm text-muted',
                                                            'transition-colors hover:text-accent'
                                                        )}
                                                    >
                                                        <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                                                        <span>{link.name}</span>
                                                    </Link>
                                                )}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tech Stack Banner */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 rounded-xl border border-card-border bg-card/50 p-6"
                    >
                        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
                            <div className="text-center md:text-left">
                                <h4 className="mb-1 font-semibold">
                                    Built with modern tech
                                </h4>
                                <p className="text-sm text-muted">
                                    This portfolio is open source and built with
                                    the latest tools
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-2">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-card-border bg-background/50 px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-accent/50 hover:text-accent"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        variants={itemVariants}
                        className="my-8 h-px w-full bg-gradient-to-r from-transparent via-card-border to-transparent"
                    />

                    {/* Bottom Section */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center gap-4 md:flex-row md:justify-between"
                    >
                        {/* Copyright */}
                        <div className="flex flex-col items-center gap-2 text-center text-sm text-muted md:flex-row md:gap-4 md:text-left">
                            <p className="flex items-center gap-1">
                                Built with{' '}
                                <Heart
                                    className="inline-block h-4 w-4 text-red-500"
                                    fill="currentColor"
                                />{' '}
                                by byteoxo
                            </p>
                            <span className="hidden md:inline">•</span>
                            <p>© {currentYear} byteoxo. All rights reserved.</p>
                        </div>

                        {/* Quick Links */}
                        <div className="flex items-center gap-4 text-sm text-muted">
                            <a
                                href="mailto:developer@byteoxo.io"
                                className="transition-colors hover:text-accent"
                            >
                                Contact
                            </a>
                            <span>•</span>
                            <a
                                href="https://github.com/byteoxo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-accent"
                            >
                                Source Code
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        </footer>
    )
}

function SocialLink({
    name,
    href,
    icon: Icon,
}: {
    name: string
    href: string
    icon: React.ComponentType<{ className?: string }>
}) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                'flex h-10 w-10 items-center justify-center rounded-full',
                'border border-card-border bg-card/50 transition-all duration-300',
                'hover:border-accent/50 hover:bg-card hover:text-accent hover:shadow-lg hover:shadow-accent/10'
            )}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={name}
        >
            <Icon className="h-5 w-5" />
        </motion.a>
    )
}

'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
    ExternalLink,
    Terminal,
    Apple,
    Play,
    ArrowLeft,
    Sparkles,
    ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import {
    GridBackground,
    MouseFollower,
    ScrollProgress,
    ParticlesEffect,
} from '@/components/background-effects'

const products = [
    {
        id: 1,
        name: 'AI Hub',
        platform: 'Android',
        platformIcon: Play,
        tagline: 'ChatGPT-like AI chat app',
        description:
            'Bring your own API key, connect to various LLMs via OpenRouter. Your key, your models, your privacy.',
        features: [
            'OpenRouter Integration',
            'Privacy-First',
            'Multi-Model Support',
            'Custom API Keys',
        ],
        link: 'https://play.google.com/store',
        linkText: 'Play Store',
        gradient: 'from-green-500 to-emerald-500',
        category: 'Mobile',
        detailPage: '/products/android/ai-hub',
    },
    {
        id: 2,
        name: 'Crunch',
        platform: 'macOS',
        platformIcon: Apple,
        tagline: 'Native media compression tool',
        description:
            'Compress images, videos, and audio locally. Apple Silicon optimized, privacy-first, no uploads needed.',
        features: [
            'Apple Silicon Optimized',
            'Local Processing',
            'Images & Videos',
            'Privacy-First',
        ],
        link: 'https://apps.apple.com/app',
        linkText: 'Mac App Store',
        gradient: 'from-blue-500 to-purple-500',
        category: 'Desktop',
        detailPage: '/products/macos/crunch',
    },
    {
        id: 3,
        name: 'Crunch CLI',
        platform: 'Cross-Platform',
        platformIcon: Terminal,
        tagline: 'Blazingly fast parallel media compression',
        description:
            'Process entire directories with one command. Available on Windows, Linux, and macOS.',
        features: [
            'Parallel Processing',
            'Directory Batch',
            'Cross-Platform',
            'Open Source',
        ],
        link: 'https://github.com/byteoxo/crunch',
        linkText: 'GitHub',
        gradient: 'from-orange-500 to-red-500',
        installCommand: 'brew install byteoxo/tap/crunch',
        category: 'CLI',
    },
]

const categories = ['All', 'Mobile', 'Desktop', 'CLI']

export function ProductsPageClient() {
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredProducts =
        activeCategory === 'All'
            ? products
            : products.filter((p) => p.category === activeCategory)

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
                <section className="px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-6xl">
                        {/* Back Link */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link
                                href="/"
                                className="mb-8 inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                <span>Back to Home</span>
                            </Link>
                        </motion.div>

                        {/* Page Header */}
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <motion.div
                                className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Sparkles className="h-4 w-4" />
                                <span>Built with passion</span>
                            </motion.div>

                            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                                <span className="text-gradient">Products</span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg text-muted md:text-xl">
                                A collection of tools and applications I&apos;ve
                                built to solve real-world problems. Each project
                                is crafted with care, performance, and user
                                experience in mind.
                            </p>
                        </motion.div>

                        {/* Category Filter */}
                        <motion.div
                            className="mb-12 flex flex-wrap items-center justify-center gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={cn(
                                        'relative rounded-full px-5 py-2 text-sm font-medium transition-colors',
                                        activeCategory === category
                                            ? 'text-foreground'
                                            : 'text-muted hover:text-foreground'
                                    )}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {activeCategory === category && (
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-card border border-card-border"
                                            layoutId="category-active"
                                            transition={{
                                                type: 'spring',
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                    <span className="relative z-10">
                                        {category}
                                    </span>
                                </motion.button>
                            ))}
                        </motion.div>

                        {/* Products Grid */}
                        <motion.div
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {filteredProducts.map((product, index) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    index={index}
                                />
                            ))}
                        </motion.div>

                        {/* Empty State */}
                        {filteredProducts.length === 0 && (
                            <motion.div
                                className="py-20 text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <p className="text-lg text-muted">
                                    No products in this category yet.
                                </p>
                            </motion.div>
                        )}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}

interface Product {
    id: number
    name: string
    platform: string
    platformIcon: React.ComponentType<{ className?: string }>
    tagline: string
    description: string
    features: string[]
    link: string
    linkText: string
    gradient: string
    installCommand?: string
    category: string
    detailPage?: string
}

function ProductCard({ product, index }: { product: Product; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(cardRef, { once: true, margin: '-50px' })
    const [isHovered, setIsHovered] = useState(false)

    const PlatformIcon = product.platformIcon

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut' as const,
            },
        },
    }

    const iconVariants = {
        idle: { rotate: 0, scale: 1 },
        hover: {
            rotate: [0, -10, 10, 0],
            scale: 1.1,
            transition: { duration: 0.5 },
        },
    }

    const featureVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: index * 0.1 + 0.3 + i * 0.05 },
        }),
    }

    const buttonVariants = {
        idle: { scale: 1 },
        hover: { scale: 1.02 },
        tap: { scale: 0.98 },
    }

    return (
        <motion.article
            ref={cardRef}
            className="group relative flex h-full flex-col rounded-2xl border border-card-border bg-card/80 backdrop-blur-sm overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' },
            }}
        >
            {/* Animated gradient accent bar at top */}
            <motion.div
                className={cn('h-1 w-full bg-gradient-to-r', product.gradient)}
                initial={{ scaleX: 0, originX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            />

            {/* Hover glow effect */}
            <motion.div
                className={cn(
                    'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0',
                    product.gradient
                )}
                animate={{ opacity: isHovered ? 0.05 : 0 }}
                transition={{ duration: 0.3 }}
            />

            <div className="flex flex-col h-full p-6 relative z-10">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                    <motion.div
                        className={cn(
                            'flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg',
                            product.gradient
                        )}
                        variants={iconVariants}
                        animate={isHovered ? 'hover' : 'idle'}
                    >
                        <PlatformIcon className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.span
                        className="rounded-full border border-card-border bg-background/80 px-3 py-1 text-xs font-medium text-muted"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + 0.3 }}
                    >
                        {product.platform}
                    </motion.span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                    <motion.h3
                        className="mb-1 text-xl font-bold text-foreground"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.1 + 0.2 }}
                    >
                        {product.name}
                    </motion.h3>
                    <motion.p
                        className="mb-3 text-sm font-medium text-accent"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.1 + 0.25 }}
                    >
                        {product.tagline}
                    </motion.p>
                    <motion.p
                        className="mb-4 text-sm text-muted leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.1 + 0.3 }}
                    >
                        {product.description}
                    </motion.p>

                    {/* Features with staggered animation */}
                    <div className="mb-4 flex flex-wrap gap-1.5">
                        {product.features.slice(0, 3).map((feature, i) => (
                            <motion.span
                                key={feature}
                                className="rounded-full bg-accent/10 border border-accent/20 px-2.5 py-1 text-xs font-medium text-accent"
                                variants={featureVariants}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                custom={i}
                            >
                                {feature}
                            </motion.span>
                        ))}
                        {product.features.length > 3 && (
                            <motion.span
                                className="rounded-full bg-card-border/50 px-2.5 py-1 text-xs font-medium text-muted"
                                variants={featureVariants}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                custom={3}
                            >
                                +{product.features.length - 3}
                            </motion.span>
                        )}
                    </div>

                    {/* Install command (for CLI) */}
                    {product.installCommand && (
                        <motion.div
                            className="mb-4 overflow-hidden rounded-lg border border-card-border bg-background/80 p-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 + 0.4 }}
                        >
                            <code className="text-xs text-accent break-all font-mono">
                                {product.installCommand}
                            </code>
                        </motion.div>
                    )}
                </div>

                {/* Action Buttons */}
                <motion.div
                    className="mt-auto flex flex-col gap-2 pt-4 border-t border-card-border/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                >
                    {product.detailPage && (
                        <motion.div
                            variants={buttonVariants}
                            initial="idle"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Link
                                href={product.detailPage}
                                className={cn(
                                    'w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium text-sm',
                                    'border border-card-border bg-background/50 transition-all duration-200',
                                    'hover:border-accent hover:bg-accent/10 hover:text-accent'
                                )}
                            >
                                <span>Learn More</span>
                                <motion.span
                                    animate={{ x: isHovered ? 4 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ArrowRight className="h-4 w-4" />
                                </motion.span>
                            </Link>
                        </motion.div>
                    )}
                    <motion.a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            'w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium text-sm text-white',
                            'bg-gradient-to-r shadow-md transition-all duration-200',
                            product.gradient,
                            'hover:shadow-lg hover:brightness-110'
                        )}
                        variants={buttonVariants}
                        initial="idle"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <span>{product.linkText}</span>
                        <ExternalLink className="h-4 w-4" />
                    </motion.a>
                </motion.div>
            </div>
        </motion.article>
    )
}

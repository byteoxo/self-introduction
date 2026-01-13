'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
    ArrowLeft,
    Apple,
    Sparkles,
    FolderOpen,
    Settings2,
    Zap,
    Image,
    Video,
    Music,
    FileArchive,
    CheckCircle,
    HardDrive,
    Cpu,
    Shield,
    ChevronLeft,
    ChevronRight,
    Download,
    Star,
    FileText,
    Folder,
    Check,
    X,
    ArrowRight,
    RefreshCw,
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

// App screenshot mockups data
const appScreenshots = [
    {
        id: 1,
        title: 'File Browser',
        description: 'Smart media file discovery with batch selection',
        screen: 'browser',
    },
    {
        id: 2,
        title: 'Compression Settings',
        description: 'Flexible quality presets and format options',
        screen: 'settings',
    },
    {
        id: 3,
        title: 'Progress View',
        description: 'Real-time compression progress tracking',
        screen: 'progress',
    },
    {
        id: 4,
        title: 'Results Summary',
        description: 'Detailed compression analytics',
        screen: 'results',
    },
]

// Feature sections
const features = [
    {
        icon: FolderOpen,
        title: 'Smart File Management',
        description:
            'Select folders via native macOS dialogs, recursively scan for media files, and manage your compression queue with ease. Sort by name, size, or type, and filter by media category.',
        gradient: 'from-blue-500 to-cyan-500',
        highlights: [
            'Recursive Scanning',
            'Batch Selection',
            'Smart Filtering',
        ],
    },
    {
        icon: Settings2,
        title: 'Flexible Compression',
        description:
            'Choose from Low, Medium, or High quality presets with optimized ffmpeg parameters. Output to WebP, MP4, MP3, and more. Customize exactly how you want your media compressed.',
        gradient: 'from-purple-500 to-pink-500',
        highlights: ['Quality Presets', 'Multiple Formats', 'Custom Output'],
    },
    {
        icon: Zap,
        title: 'Blazingly Fast',
        description:
            'Leverage Apple Silicon for hardware-accelerated compression. Process entire folders while preserving directory structure. Get results in a neatly organized ZIP archive.',
        gradient: 'from-orange-500 to-red-500',
        highlights: ['Apple Silicon', 'Parallel Processing', 'ZIP Output'],
    },
    {
        icon: Shield,
        title: 'Privacy First',
        description:
            'All compression happens locally on your Mac. No cloud uploads, no data collection. Your files never leave your device. Complete privacy guaranteed.',
        gradient: 'from-green-500 to-emerald-500',
        highlights: ['Local Processing', 'No Uploads', 'Zero Tracking'],
    },
]

// Supported formats
const supportedFormats = {
    images: ['WebP', 'JPG', 'PNG', 'HEIC'],
    video: ['MP4', 'WebM', 'MOV', 'H.265'],
    audio: ['MP3', 'AAC', 'WAV', 'FLAC'],
}

// Pricing plans
const pricingPlans = [
    {
        name: 'Free',
        subtitle: 'Try It Out',
        description: 'Perfect for occasional compression needs',
        price: 'Free',
        priceYearly: null,
        savePercent: null,
        features: [
            { text: '10 files per month', included: true, highlight: true },
            {
                text: 'Supports all image / video / audio formats',
                included: true,
            },
            {
                text: 'File size limits: Images 8MB | Videos 80MB | Audio 2.5MB',
                included: true,
            },
            { text: 'No batch processing', included: false },
        ],
        gradient: 'from-gray-500 to-gray-600',
        recommended: false,
    },
    {
        name: 'Plus',
        subtitle: 'Personal',
        description: 'Ideal for individuals with regular compression needs',
        price: '$3 / month',
        priceYearly: '$30 / year',
        savePercent: '17',
        features: [
            { text: '6 files per day', included: true, highlight: true },
            {
                text: 'Supports all image / video / audio formats',
                included: true,
            },
            {
                text: 'File size limits: Images 20MB | Videos 200MB | Audio 5MB',
                included: true,
            },
            { text: 'No batch processing', included: false },
        ],
        gradient: 'from-blue-500 to-cyan-500',
        recommended: false,
    },
    {
        name: 'Pro',
        subtitle: 'Professional',
        description: 'Built for creators, designers, and power users',
        price: '$6.99 / month',
        priceYearly: '$49.99 / year',
        savePercent: '40',
        features: [
            { text: 'Unlimited files', included: true, highlight: true },
            { text: 'Unlimited file size', included: true, highlight: true },
            {
                text: 'Supports all image / video / audio formats',
                included: true,
            },
            {
                text: 'Batch processing for multiple files',
                included: true,
                highlight: true,
            },
            {
                text: 'Priority customer support',
                included: true,
                highlight: true,
            },
        ],
        gradient: 'from-purple-500 to-pink-500',
        recommended: true,
    },
]

export function ShrinkrPageClient() {
    const heroRef = useRef<HTMLElement>(null)
    const isHeroInView = useInView(heroRef, { once: true })

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
                                animate={
                                    isHeroInView ? { opacity: 1, y: 0 } : {}
                                }
                                transition={{ duration: 0.6 }}
                            >
                                {/* Badge */}
                                <motion.div
                                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <Apple className="h-4 w-4" />
                                    <span>Native macOS App</span>
                                </motion.div>

                                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                                    <span className="text-gradient">
                                        Shrinkr
                                    </span>
                                </h1>

                                <p className="mb-4 text-xl font-medium text-accent">
                                    Powerful Media Compression for Mac
                                </p>

                                <p className="mb-8 text-lg text-muted leading-relaxed">
                                    Compress images, videos, and audio files
                                    with just a few clicks. Apple Silicon
                                    optimized, completely local, and blazingly
                                    fast. Shrink your media library without
                                    sacrificing quality.
                                </p>

                                {/* Key Points */}
                                <div className="mb-8 flex flex-wrap gap-3">
                                    {[
                                        'Apple Silicon',
                                        '100% Local',
                                        'Batch Processing',
                                        'ZIP Output',
                                    ].map((point) => (
                                        <span
                                            key={point}
                                            className="inline-flex items-center gap-1.5 rounded-full bg-card border border-card-border px-3 py-1.5 text-sm"
                                        >
                                            <CheckCircle className="h-3.5 w-3.5 text-blue-400" />
                                            <span>{point}</span>
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <motion.a
                                        href="https://apps.apple.com/app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/25"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Apple className="h-5 w-5" />
                                        <span>Download on Mac App Store</span>
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

                            {/* Hero Desktop Mockup */}
                            <motion.div
                                className="relative flex justify-center lg:justify-end"
                                initial={{ opacity: 0, x: 50 }}
                                animate={
                                    isHeroInView ? { opacity: 1, x: 0 } : {}
                                }
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <DesktopMockup screen="browser" />
                                {/* Floating elements */}
                                <motion.div
                                    className="absolute -top-4 -left-4 rounded-2xl border border-card-border bg-card/80 p-3 backdrop-blur-sm"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <div className="flex items-center gap-2">
                                        <Cpu className="h-5 w-5 text-blue-400" />
                                        <span className="text-sm font-medium">
                                            Apple Silicon
                                        </span>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="absolute -bottom-4 -right-4 rounded-2xl border border-card-border bg-card/80 p-3 backdrop-blur-sm"
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <div className="flex items-center gap-2">
                                        <HardDrive className="h-5 w-5 text-green-500" />
                                        <span className="text-sm font-medium">
                                            100% Local
                                        </span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Supported Formats Section */}
                <section className="px-4 py-16 bg-card/30">
                    <div className="mx-auto max-w-6xl">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold mb-4">
                                <span className="text-gradient">
                                    Supported Formats
                                </span>
                            </h2>
                            <p className="text-muted">
                                Compress all your media types with optimized
                                codecs
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Images */}
                            <motion.div
                                className="rounded-2xl border border-card-border bg-card/50 p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
                                        <Image className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="font-semibold">Images</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {supportedFormats.images.map((format) => (
                                        <span
                                            key={format}
                                            className="rounded-full bg-card-border/50 px-3 py-1 text-xs font-medium"
                                        >
                                            {format}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Video */}
                            <motion.div
                                className="rounded-2xl border border-card-border bg-card/50 p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500">
                                        <Video className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="font-semibold">Video</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {supportedFormats.video.map((format) => (
                                        <span
                                            key={format}
                                            className="rounded-full bg-card-border/50 px-3 py-1 text-xs font-medium"
                                        >
                                            {format}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Audio */}
                            <motion.div
                                className="rounded-2xl border border-card-border bg-card/50 p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                                        <Music className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="font-semibold">Audio</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {supportedFormats.audio.map((format) => (
                                        <span
                                            key={format}
                                            className="rounded-full bg-card-border/50 px-3 py-1 text-xs font-medium"
                                        >
                                            {format}
                                        </span>
                                    ))}
                                </div>
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
                                <span className="text-gradient">
                                    Powerful Features
                                </span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-muted">
                                Everything you need for efficient media
                                compression, designed for power users and casual
                                users alike.
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

                {/* How It Works Section */}
                <section className="px-4 py-20 md:py-28 bg-card/30">
                    <div className="mx-auto max-w-6xl">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                                <span className="text-gradient">
                                    How It Works
                                </span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-muted">
                                Three simple steps to compress your entire media
                                library
                            </p>
                        </motion.div>

                        <div className="grid gap-8 md:grid-cols-3">
                            {[
                                {
                                    step: '1',
                                    title: 'Select Files',
                                    description:
                                        'Choose a folder and Shrinkr will recursively find all media files. Select individually or batch select by type.',
                                    icon: FolderOpen,
                                    gradient: 'from-blue-500 to-cyan-500',
                                },
                                {
                                    step: '2',
                                    title: 'Configure',
                                    description:
                                        'Pick your quality preset and output formats. Set your compression level for the perfect balance of size and quality.',
                                    icon: Settings2,
                                    gradient: 'from-purple-500 to-pink-500',
                                },
                                {
                                    step: '3',
                                    title: 'Compress',
                                    description:
                                        'Hit start and watch the magic happen. Get a ZIP archive with compressed files preserving your folder structure.',
                                    icon: FileArchive,
                                    gradient: 'from-orange-500 to-red-500',
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.step}
                                    className="relative rounded-2xl border border-card-border bg-card/50 p-6 text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <div
                                        className={cn(
                                            'mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br',
                                            item.gradient
                                        )}
                                    >
                                        <item.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold">
                                        Step {item.step}
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted text-sm">
                                        {item.description}
                                    </p>
                                    {index < 2 && (
                                        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 md:block">
                                            <ArrowRight className="h-6 w-6 text-card-border" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Shrinkr Section */}
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
                                    Why{' '}
                                    <span className="text-gradient">
                                        Shrinkr
                                    </span>
                                    ?
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                                            <Cpu className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold">
                                                Apple Silicon Native
                                            </h3>
                                            <p className="text-muted">
                                                Built specifically for M1/M2/M3
                                                chips. Hardware accelerated
                                                video encoding for maximum
                                                performance.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                                            <Shield className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold">
                                                Complete Privacy
                                            </h3>
                                            <p className="text-muted">
                                                Your files never leave your Mac.
                                                No cloud processing, no uploads,
                                                no tracking. 100% local.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                                            <FileArchive className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold">
                                                Organized Output
                                            </h3>
                                            <p className="text-muted">
                                                Get your compressed files in a
                                                neat ZIP archive with original
                                                folder structure preserved.
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
                                <DesktopMockup screen="results" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section
                    id="pricing"
                    className="px-4 py-20 md:py-28 bg-card/30"
                >
                    <div className="mx-auto max-w-7xl">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                                <span className="text-gradient">
                                    Choose Your Plan
                                </span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-muted">
                                Start free and upgrade as your needs grow
                            </p>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                            {pricingPlans.map((plan, index) => (
                                <PricingCard
                                    key={plan.name}
                                    plan={plan}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* Regional Pricing Note */}
                        <motion.p
                            className="mt-8 text-center text-sm text-muted"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            * Prices shown are approximate and may vary by
                            region. Actual prices may differ — please check the
                            App Store for details.
                        </motion.p>
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
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

                            <div className="relative z-10 text-center">
                                <motion.div
                                    className="mb-6 inline-flex items-center justify-center"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25">
                                        <Apple className="h-10 w-10 text-white" />
                                    </div>
                                </motion.div>

                                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                                    Ready to Shrink Your Media?
                                </h2>
                                <p className="mx-auto mb-8 max-w-xl text-lg text-muted">
                                    Download Shrinkr today and reclaim your disk
                                    space. Compress images, videos, and audio
                                    without compromising quality.
                                </p>

                                <motion.a
                                    href="https://apps.apple.com/app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 text-lg font-medium text-white transition-all hover:shadow-xl hover:shadow-blue-500/30"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Download className="h-6 w-6" />
                                    <span>Download from Mac App Store</span>
                                </motion.a>

                                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted">
                                    <span className="flex items-center gap-1">
                                        <Star
                                            className="h-4 w-4 text-yellow-500"
                                            fill="currentColor"
                                        />
                                        4.9 Rating
                                    </span>
                                    <span className="h-4 w-px bg-card-border" />
                                    <span>Free Download</span>
                                    <span className="h-4 w-px bg-card-border" />
                                    <span>macOS 13.0+</span>
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
                            <p className="text-sm text-muted">
                                Legal & Support
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Link
                                    href="/products/macos/shrinkr/terms-of-service"
                                    className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-5 py-2.5 text-sm font-medium transition-all hover:border-accent/50 hover:bg-card"
                                >
                                    <FileText className="h-4 w-4" />
                                    <span>Terms of Service</span>
                                </Link>
                                <Link
                                    href="/products/macos/shrinkr/privacy-policy"
                                    className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-5 py-2.5 text-sm font-medium transition-all hover:border-accent/50 hover:bg-card"
                                >
                                    <Shield className="h-4 w-4" />
                                    <span>Privacy Policy</span>
                                </Link>
                                <Link
                                    href="/products/macos/shrinkr/return-policy"
                                    className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-5 py-2.5 text-sm font-medium transition-all hover:border-accent/50 hover:bg-card"
                                >
                                    <RefreshCw className="h-4 w-4" />
                                    <span>Return Policy</span>
                                </Link>
                            </div>
                            <p className="text-xs text-muted text-center max-w-md">
                                By downloading and using Shrinkr, you agree to
                                our Terms of Service and Privacy Policy.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}

// Desktop Mockup Component with different screens
function DesktopMockup({ screen }: { screen: string }) {
    return (
        <div className="relative">
            {/* Desktop Frame */}
            <div className="relative w-[500px] rounded-xl border border-gray-700 bg-gray-900 shadow-2xl overflow-hidden">
                {/* Title Bar */}
                <div className="flex items-center gap-2 border-b border-gray-700 bg-gray-800 px-4 py-3">
                    <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center">
                        <span className="text-xs text-gray-400">Shrinkr</span>
                    </div>
                    <div className="w-12" />
                </div>

                {/* Screen Content */}
                <div className="h-[320px] bg-background">
                    {screen === 'browser' && <BrowserScreen />}
                    {screen === 'settings' && <SettingsScreen />}
                    {screen === 'progress' && <ProgressScreen />}
                    {screen === 'results' && <ResultsScreen />}
                </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
        </div>
    )
}

// Browser Screen Mockup
function BrowserScreen() {
    const files = [
        {
            name: 'vacation_photo.jpg',
            path: '/Photos/2024',
            size: '4.2 MB',
            type: 'Image',
            selected: true,
        },
        {
            name: 'birthday_video.mp4',
            path: '/Videos',
            size: '128 MB',
            type: 'Video',
            selected: true,
        },
        {
            name: 'podcast_ep12.mp3',
            path: '/Audio/Podcasts',
            size: '45 MB',
            type: 'Audio',
            selected: false,
        },
        {
            name: 'screenshot.png',
            path: '/Screenshots',
            size: '1.8 MB',
            type: 'Image',
            selected: true,
        },
        {
            name: 'concert_clip.mov',
            path: '/Videos/Events',
            size: '256 MB',
            type: 'Video',
            selected: false,
        },
    ]

    return (
        <div className="flex h-full flex-col text-xs">
            {/* Toolbar */}
            <div className="flex items-center justify-between border-b border-card-border px-4 py-2">
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        className="flex items-center gap-1 rounded bg-blue-500/20 px-2 py-1 text-blue-400"
                    >
                        <Folder className="h-3 w-3" />
                        <span>Select Folder</span>
                    </button>
                    <span className="text-muted">|</span>
                    <span className="text-muted">/Users/demo/Media</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-muted">5 files</span>
                    <span className="text-green-400">3 selected</span>
                </div>
            </div>

            {/* File List */}
            <div className="flex-1 overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-card-border bg-card/50 text-left text-muted">
                            <th className="px-3 py-2 w-8">
                                <input
                                    type="checkbox"
                                    className="rounded"
                                    defaultChecked
                                />
                            </th>
                            <th className="px-3 py-2">Name</th>
                            <th className="px-3 py-2">Path</th>
                            <th className="px-3 py-2">Size</th>
                            <th className="px-3 py-2">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((file, i) => (
                            <tr
                                key={file.name}
                                className={cn(
                                    'border-b border-card-border/50',
                                    file.selected && 'bg-blue-500/10'
                                )}
                            >
                                <td className="px-3 py-2">
                                    <input
                                        type="checkbox"
                                        className="rounded"
                                        defaultChecked={file.selected}
                                    />
                                </td>
                                <td className="px-3 py-2 font-medium">
                                    {file.name}
                                </td>
                                <td className="px-3 py-2 text-muted">
                                    {file.path}
                                </td>
                                <td className="px-3 py-2">{file.size}</td>
                                <td className="px-3 py-2">
                                    <span
                                        className={cn(
                                            'rounded-full px-2 py-0.5 text-[10px]',
                                            file.type === 'Image' &&
                                                'bg-pink-500/20 text-pink-400',
                                            file.type === 'Video' &&
                                                'bg-purple-500/20 text-purple-400',
                                            file.type === 'Audio' &&
                                                'bg-green-500/20 text-green-400'
                                        )}
                                    >
                                        {file.type}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Bottom Bar */}
            <div className="flex items-center justify-between border-t border-card-border px-4 py-2">
                <div className="flex gap-2">
                    <button
                        type="button"
                        className="rounded bg-card-border/50 px-2 py-1"
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className="rounded px-2 py-1 text-muted"
                    >
                        Images
                    </button>
                    <button
                        type="button"
                        className="rounded px-2 py-1 text-muted"
                    >
                        Video
                    </button>
                    <button
                        type="button"
                        className="rounded px-2 py-1 text-muted"
                    >
                        Audio
                    </button>
                </div>
                <button
                    type="button"
                    className="rounded bg-blue-500 px-3 py-1 text-white"
                >
                    Next →
                </button>
            </div>
        </div>
    )
}

// Settings Screen Mockup
function SettingsScreen() {
    return (
        <div className="flex h-full flex-col text-xs">
            {/* Header */}
            <div className="border-b border-card-border px-4 py-3">
                <h3 className="font-semibold">Compression Settings</h3>
            </div>

            <div className="flex-1 overflow-auto p-4 space-y-4">
                {/* Quality Preset */}
                <div className="rounded-lg border border-card-border bg-card/50 p-3">
                    <p className="font-medium mb-2">Quality Preset</p>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            className="flex-1 rounded bg-card-border/50 py-2 text-muted"
                        >
                            Low
                        </button>
                        <button
                            type="button"
                            className="flex-1 rounded bg-blue-500 py-2 text-white"
                        >
                            Medium
                        </button>
                        <button
                            type="button"
                            className="flex-1 rounded bg-card-border/50 py-2 text-muted"
                        >
                            High
                        </button>
                    </div>
                </div>

                {/* Output Formats */}
                <div className="rounded-lg border border-card-border bg-card/50 p-3">
                    <p className="font-medium mb-2">Output Formats</p>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-muted flex items-center gap-2">
                                <Image className="h-3 w-3 text-pink-400" />{' '}
                                Images
                            </span>
                            <span className="rounded bg-card-border/50 px-2 py-0.5">
                                WebP
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-muted flex items-center gap-2">
                                <Video className="h-3 w-3 text-purple-400" />{' '}
                                Video
                            </span>
                            <span className="rounded bg-card-border/50 px-2 py-0.5">
                                MP4
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-muted flex items-center gap-2">
                                <Music className="h-3 w-3 text-green-400" />{' '}
                                Audio
                            </span>
                            <span className="rounded bg-card-border/50 px-2 py-0.5">
                                MP3
                            </span>
                        </div>
                    </div>
                </div>

                {/* Output Location */}
                <div className="rounded-lg border border-card-border bg-card/50 p-3">
                    <p className="font-medium mb-2">Output Location</p>
                    <div className="flex items-center gap-2 rounded bg-background/50 px-3 py-2">
                        <Folder className="h-3 w-3 text-muted" />
                        <span className="flex-1 text-muted truncate">
                            ~/Downloads/compressed.zip
                        </span>
                        <button type="button" className="text-blue-400">
                            Change
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex items-center justify-between border-t border-card-border px-4 py-2">
                <button type="button" className="text-muted">
                    ← Back
                </button>
                <button
                    type="button"
                    className="rounded bg-blue-500 px-4 py-1.5 text-white"
                >
                    Start Compression
                </button>
            </div>
        </div>
    )
}

// Progress Screen Mockup
function ProgressScreen() {
    return (
        <div className="flex h-full flex-col text-xs">
            {/* Header */}
            <div className="border-b border-card-border px-4 py-3">
                <h3 className="font-semibold">Compressing...</h3>
            </div>

            <div className="flex-1 p-4 space-y-4">
                {/* Current File */}
                <div className="rounded-lg border border-card-border bg-card/50 p-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Current File</span>
                        <span className="text-muted">2 of 3</span>
                    </div>
                    <p className="text-muted mb-3 truncate">
                        birthday_video.mp4
                    </p>
                    <div className="h-2 rounded-full bg-card-border overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            animate={{ width: ['0%', '67%'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                    <div className="flex justify-between mt-1 text-muted">
                        <span>67%</span>
                        <span>~45s remaining</span>
                    </div>
                </div>

                {/* Overall Progress */}
                <div className="rounded-lg border border-card-border bg-card/50 p-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Overall Progress</span>
                        <span className="text-green-400">1 complete</span>
                    </div>
                    <div className="h-2 rounded-full bg-card-border overflow-hidden">
                        <div className="h-full w-[45%] bg-gradient-to-r from-green-500 to-emerald-500" />
                    </div>
                    <div className="flex justify-between mt-1 text-muted">
                        <span>45%</span>
                        <span>~2 min remaining</span>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg border border-card-border bg-card/50 p-3 text-center">
                        <p className="text-lg font-bold text-blue-400">
                            128 MB
                        </p>
                        <p className="text-muted">Original</p>
                    </div>
                    <div className="rounded-lg border border-card-border bg-card/50 p-3 text-center">
                        <p className="text-lg font-bold text-green-400">
                            32 MB
                        </p>
                        <p className="text-muted">Compressed</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex items-center justify-center border-t border-card-border px-4 py-2">
                <button
                    type="button"
                    className="flex items-center gap-2 rounded border border-red-500/50 bg-red-500/10 px-4 py-1.5 text-red-400"
                >
                    <X className="h-3 w-3" />
                    Cancel
                </button>
            </div>
        </div>
    )
}

// Results Screen Mockup
function ResultsScreen() {
    const results = [
        {
            name: 'vacation_photo.jpg',
            original: '4.2 MB',
            compressed: '0.8 MB',
            ratio: '81%',
        },
        {
            name: 'birthday_video.mp4',
            original: '128 MB',
            compressed: '32 MB',
            ratio: '75%',
        },
        {
            name: 'screenshot.png',
            original: '1.8 MB',
            compressed: '0.3 MB',
            ratio: '83%',
        },
    ]

    return (
        <div className="flex h-full flex-col text-xs">
            {/* Header */}
            <div className="border-b border-card-border px-4 py-3 flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                <h3 className="font-semibold text-green-400">
                    Compression Complete!
                </h3>
            </div>

            <div className="flex-1 overflow-auto p-4 space-y-4">
                {/* Summary */}
                <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-lg border border-card-border bg-card/50 p-3 text-center">
                        <p className="text-lg font-bold">134 MB</p>
                        <p className="text-muted text-[10px]">Original</p>
                    </div>
                    <div className="rounded-lg border border-card-border bg-card/50 p-3 text-center">
                        <p className="text-lg font-bold text-green-400">
                            33.1 MB
                        </p>
                        <p className="text-muted text-[10px]">Compressed</p>
                    </div>
                    <div className="rounded-lg border border-card-border bg-card/50 p-3 text-center">
                        <p className="text-lg font-bold text-blue-400">75%</p>
                        <p className="text-muted text-[10px]">Saved</p>
                    </div>
                </div>

                {/* File List */}
                <div className="rounded-lg border border-card-border bg-card/50 overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-card-border bg-card/50 text-left text-muted">
                                <th className="px-3 py-2">File</th>
                                <th className="px-3 py-2">Original</th>
                                <th className="px-3 py-2">Compressed</th>
                                <th className="px-3 py-2">Saved</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((file) => (
                                <tr
                                    key={file.name}
                                    className="border-b border-card-border/50"
                                >
                                    <td className="px-3 py-2 truncate max-w-[120px]">
                                        {file.name}
                                    </td>
                                    <td className="px-3 py-2 text-muted">
                                        {file.original}
                                    </td>
                                    <td className="px-3 py-2 text-green-400">
                                        {file.compressed}
                                    </td>
                                    <td className="px-3 py-2 text-blue-400">
                                        {file.ratio}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex items-center justify-between border-t border-card-border px-4 py-2">
                <button type="button" className="text-muted">
                    ← New Batch
                </button>
                <button
                    type="button"
                    className="flex items-center gap-2 rounded bg-green-500 px-3 py-1.5 text-white"
                >
                    <Folder className="h-3 w-3" />
                    Show in Finder
                </button>
            </div>
        </div>
    )
}

// Screenshots Carousel Component
function ScreenshotsCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % appScreenshots.length)
    }

    const prevSlide = () => {
        setActiveIndex(
            (prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length
        )
    }

    return (
        <section className="px-4 py-20 md:py-28 overflow-hidden">
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
                        See Shrinkr&apos;s clean and intuitive interface in
                        action
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative">
                    <div className="flex items-center justify-center gap-8">
                        {/* Prev Button */}
                        <motion.button
                            type="button"
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
                                    <DesktopMockup
                                        screen={
                                            appScreenshots[activeIndex].screen
                                        }
                                    />
                                    <div className="mt-6 text-center">
                                        <h3 className="text-xl font-semibold">
                                            {appScreenshots[activeIndex].title}
                                        </h3>
                                        <p className="text-muted">
                                            {
                                                appScreenshots[activeIndex]
                                                    .description
                                            }
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Next Button */}
                        <motion.button
                            type="button"
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
                                        appScreenshots.findIndex(
                                            (s) => s.id === screenshot.id
                                        )
                                    )
                                }
                                className={cn(
                                    'h-2 rounded-full transition-all',
                                    appScreenshots.findIndex(
                                        (s) => s.id === screenshot.id
                                    ) === activeIndex
                                        ? 'w-8 bg-accent'
                                        : 'w-2 bg-card-border hover:bg-muted'
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Feature Card Component
function FeatureCard({
    feature,
    index,
}: {
    feature: (typeof features)[0]
    index: number
}) {
    const cardRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(cardRef, { once: true, margin: '-50px' })

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
                    'absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 bg-gradient-to-br group-hover:opacity-5',
                    feature.gradient
                )}
            />

            <div className="relative z-10">
                {/* Icon */}
                <div
                    className={cn(
                        'mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br',
                        feature.gradient
                    )}
                >
                    <feature.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="mb-4 text-muted leading-relaxed">
                    {feature.description}
                </p>

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
    )
}

// Pricing Card Component
function PricingCard({
    plan,
    index,
}: {
    plan: (typeof pricingPlans)[0]
    index: number
}) {
    const cardRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(cardRef, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={cardRef}
            className={cn(
                'relative rounded-2xl border bg-card/50 p-6 backdrop-blur-sm transition-all',
                plan.recommended
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/10'
                    : 'border-card-border hover:border-accent/30'
            )}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {/* Recommended badge */}
            {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white">
                        <Star className="h-3 w-3" fill="currentColor" />
                        Recommended
                    </span>
                </div>
            )}

            {/* Header */}
            <div className="mb-6 pt-2">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <span className="text-muted">·</span>
                    <span className="text-sm text-muted">{plan.subtitle}</span>
                </div>
                <p className="text-sm text-muted">{plan.description}</p>
            </div>

            {/* Price */}
            <div className="mb-6">
                <div className="text-2xl font-bold">{plan.price}</div>
                {plan.priceYearly && (
                    <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm text-muted">
                            or {plan.priceYearly}
                        </span>
                        {plan.savePercent && (
                            <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400">
                                Save {plan.savePercent}%
                            </span>
                        )}
                    </div>
                )}
            </div>

            {/* Features */}
            <div className="space-y-3">
                {plan.features.map((feature) => (
                    <div key={feature.text} className="flex items-start gap-2">
                        {feature.included ? (
                            <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-400" />
                        ) : (
                            <X className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted" />
                        )}
                        <span
                            className={cn(
                                'text-sm',
                                feature.included
                                    ? 'text-foreground'
                                    : 'text-muted',
                                feature.highlight &&
                                    feature.included &&
                                    'font-medium'
                            )}
                        >
                            {feature.text}
                        </span>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="mt-6">
                <motion.button
                    type="button"
                    className={cn(
                        'w-full rounded-full px-4 py-2.5 text-sm font-medium transition-all',
                        plan.recommended
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                            : 'border border-card-border bg-card/50 hover:border-accent/50 hover:bg-card'
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {plan.price === 'Free' ? 'Get Started' : 'Subscribe'}
                </motion.button>
            </div>
        </motion.div>
    )
}

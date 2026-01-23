'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    ArrowLeft,
    Shield,
    Database,
    Share2,
    UserCheck,
    Clock,
    Globe,
    Mail,
    Lock,
    Eye,
    Apple,
    HardDrive,
    FileText,
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import {
    GridBackground,
    MouseFollower,
    ScrollProgress,
} from '@/components/background-effects'

export default function PrivacyPolicyPage() {
    const lastUpdated = 'December 19, 2024'
    const effectiveDate = 'December 19, 2024'

    return (
        <>
            {/* Background Effects */}
            <GridBackground />
            <MouseFollower />
            <ScrollProgress />

            {/* Navigation */}
            <Navigation />

            {/* Main Content */}
            <main className="relative z-10 pt-16">
                <article className="px-4 py-20 md:py-28">
                    <div className="mx-auto max-w-4xl">
                        {/* Breadcrumb */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8"
                        >
                            <Link
                                href="/products/macos/Shrinkr"
                                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                <span>Back to Shrinkr</span>
                            </Link>
                        </motion.div>

                        {/* Header */}
                        <motion.header
                            className="mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-4 py-2 text-sm text-muted">
                                <Shield className="h-4 w-4" />
                                <span>Legal Document</span>
                            </div>
                            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                                <span className="text-gradient">
                                    Privacy Policy
                                </span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                                    <Apple className="h-4 w-4" />
                                    <span>Shrinkr for macOS</span>
                                </div>
                                <p className="text-muted">
                                    Last updated: {lastUpdated}
                                </p>
                            </div>
                        </motion.header>

                        {/* Privacy Commitment Banner */}
                        <motion.div
                            className="mb-12 rounded-2xl border border-green-500/30 bg-green-500/10 p-6 md:p-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                                    <Lock className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-green-400 mb-2">
                                        Privacy by Design
                                    </h2>
                                    <p className="text-muted">
                                        Shrinkr is built with privacy at its
                                        core. All media processing happens
                                        locally on your Mac. Your files never
                                        leave your computer, and we don&apos;t
                                        collect, transmit, or store any of your
                                        media content. Period.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            className="prose prose-invert prose-lg max-w-none"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {/* Introduction */}
                            <section className="mb-12 rounded-2xl border border-card-border bg-card/30 p-6 md:p-8">
                                <p className="text-muted leading-relaxed">
                                    This Privacy Policy describes how byteoxo
                                    (&quot;we,&quot; &quot;us,&quot; or
                                    &quot;our&quot;) handles information when
                                    you use Shrinkr (&quot;the App&quot;), a
                                    media compression application for macOS. We
                                    are committed to protecting your privacy and
                                    being transparent about our data practices.
                                </p>
                            </section>

                            {/* Section 1 - Local Processing */}
                            <Section
                                icon={<HardDrive className="h-5 w-5" />}
                                title="1. Local-Only Processing"
                                gradient="from-green-500 to-emerald-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    1.1 Your Files Stay on Your Mac
                                </h3>
                                <p className="text-muted mb-4">
                                    Shrinkr processes all media files entirely
                                    on your local machine. This means:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                                    <li>
                                        Your images, videos, and audio files are
                                        never uploaded to any server
                                    </li>
                                    <li>
                                        Compression occurs using your Mac&apos;s
                                        CPU and Apple Silicon GPU
                                    </li>
                                    <li>
                                        Output files are saved directly to your
                                        chosen location on disk
                                    </li>
                                    <li>
                                        No internet connection is required for
                                        compression operations
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    1.2 No Cloud Services
                                </h3>
                                <p className="text-muted mb-4">
                                    Unlike many modern apps, Shrinkr does not
                                    use cloud services for any core
                                    functionality:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2">
                                    <li>No cloud storage integration</li>
                                    <li>No remote processing servers</li>
                                    <li>No sync services</li>
                                    <li>No account system required</li>
                                </ul>
                            </Section>

                            {/* Section 2 - Data Collection */}
                            <Section
                                icon={<Database className="h-5 w-5" />}
                                title="2. Data Collection"
                                gradient="from-blue-500 to-cyan-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    2.1 What We Collect
                                </h3>
                                <p className="text-muted mb-4">
                                    To improve Shrinkr and provide support, we
                                    may collect minimal, anonymized information:
                                </p>
                                <div className="overflow-x-auto mb-6">
                                    <table className="w-full border-collapse text-sm">
                                        <thead>
                                            <tr className="border-b border-card-border">
                                                <th className="text-left py-3 pr-4">
                                                    Data Type
                                                </th>
                                                <th className="text-left py-3 pr-4">
                                                    Purpose
                                                </th>
                                                <th className="text-left py-3">
                                                    Storage
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted">
                                            <tr className="border-b border-card-border/50">
                                                <td className="py-3 pr-4">
                                                    Crash Reports
                                                </td>
                                                <td className="py-3 pr-4">
                                                    Bug fixing and stability
                                                    improvement
                                                </td>
                                                <td className="py-3">
                                                    90 days
                                                </td>
                                            </tr>
                                            <tr className="border-b border-card-border/50">
                                                <td className="py-3 pr-4">
                                                    App Usage Stats
                                                </td>
                                                <td className="py-3 pr-4">
                                                    Feature prioritization
                                                    (anonymized)
                                                </td>
                                                <td className="py-3">
                                                    Aggregated only
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-4">
                                                    macOS Version
                                                </td>
                                                <td className="py-3 pr-4">
                                                    Compatibility testing
                                                </td>
                                                <td className="py-3">
                                                    Aggregated only
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-lg font-semibold mb-3">
                                    2.2 What We Do NOT Collect
                                </h3>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                                    <li>Your media files or their contents</li>
                                    <li>File names or folder structures</li>
                                    <li>Personal identification information</li>
                                    <li>Precise location data</li>
                                    <li>
                                        Contact information (unless you contact
                                        support)
                                    </li>
                                    <li>Browsing history or other app usage</li>
                                    <li>
                                        Device serial numbers or unique
                                        identifiers
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    2.3 Opt-Out
                                </h3>
                                <p className="text-muted">
                                    You can disable analytics collection in
                                    Shrinkr&apos;s preferences. Crash reports
                                    can be disabled through macOS System
                                    Settings &gt; Privacy &amp; Security &gt;
                                    Analytics &amp; Improvements.
                                </p>
                            </Section>

                            {/* Section 3 - Third Party */}
                            <Section
                                icon={<Share2 className="h-5 w-5" />}
                                title="3. Third-Party Services"
                                gradient="from-purple-500 to-pink-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    3.1 Mac App Store
                                </h3>
                                <p className="text-muted mb-4">
                                    If you download Shrinkr from the Mac App
                                    Store, Apple may collect certain information
                                    in accordance with their privacy policy.
                                    This includes:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                                    <li>Purchase information</li>
                                    <li>
                                        App updates and usage statistics (if
                                        enabled)
                                    </li>
                                    <li>
                                        Crash reports (if enabled in System
                                        Settings)
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    3.2 Apple Frameworks
                                </h3>
                                <p className="text-muted mb-4">
                                    Shrinkr uses standard macOS frameworks that
                                    may interact with Apple services:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                                    <li>
                                        AVFoundation for media processing (local
                                        only)
                                    </li>
                                    <li>
                                        Metal for GPU acceleration (local only)
                                    </li>
                                    <li>
                                        AppKit for user interface (local only)
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    3.3 No Advertising or Tracking
                                </h3>
                                <p className="text-muted">
                                    Shrinkr does not include any advertising
                                    SDKs, tracking pixels, or analytics
                                    frameworks that report user behavior to
                                    third parties.
                                </p>
                            </Section>

                            {/* Section 4 - User Rights */}
                            <Section
                                icon={<UserCheck className="h-5 w-5" />}
                                title="4. Your Privacy Rights"
                                gradient="from-orange-500 to-red-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    4.1 Control Over Your Data
                                </h3>
                                <p className="text-muted mb-3">
                                    Since Shrinkr processes files locally, you
                                    have complete control:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                                    <li>
                                        <strong>Access:</strong> Your files
                                        remain on your Mac at all times
                                    </li>
                                    <li>
                                        <strong>Deletion:</strong> Delete any
                                        files directly from Finder
                                    </li>
                                    <li>
                                        <strong>Portability:</strong> Your files
                                        are standard formats, readily usable
                                        anywhere
                                    </li>
                                    <li>
                                        <strong>Restriction:</strong> You can
                                        stop using the app at any time
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    4.2 For EU Residents (GDPR)
                                </h3>
                                <p className="text-muted mb-4">
                                    Since we don&apos;t collect or process
                                    personal data from your media files,
                                    GDPR&apos;s data protection requirements are
                                    inherently satisfied by our local-only
                                    architecture. For any anonymized analytics
                                    data:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                                    <li>
                                        Legal basis: Legitimate interest in
                                        improving the App
                                    </li>
                                    <li>
                                        You can opt-out of analytics in
                                        preferences
                                    </li>
                                    <li>
                                        Data is anonymized and cannot be linked
                                        to individuals
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    4.3 For California Residents (CCPA)
                                </h3>
                                <p className="text-muted">
                                    We do not sell personal information. Since
                                    Shrinkr doesn&apos;t collect personal
                                    information from your media files, there is
                                    no personal information to sell, share, or
                                    disclose.
                                </p>
                            </Section>

                            {/* Section 5 - Data Retention */}
                            <Section
                                icon={<Clock className="h-5 w-5" />}
                                title="5. Data Retention"
                                gradient="from-indigo-500 to-purple-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    5.1 Local Data
                                </h3>
                                <p className="text-muted mb-4">
                                    All files processed by Shrinkr remain on
                                    your Mac:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                                    <li>
                                        <strong>Source files:</strong>{' '}
                                        Untouched, remain where you stored them
                                    </li>
                                    <li>
                                        <strong>Output files:</strong> Saved to
                                        your chosen destination
                                    </li>
                                    <li>
                                        <strong>App preferences:</strong> Stored
                                        locally in ~/Library/Preferences
                                    </li>
                                    <li>
                                        <strong>Cache files:</strong> Temporary,
                                        automatically cleaned
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    5.2 Crash Reports
                                </h3>
                                <p className="text-muted mb-4">
                                    If crash reporting is enabled, reports are
                                    retained for 90 days to aid in debugging,
                                    then automatically deleted.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    5.3 Complete Removal
                                </h3>
                                <p className="text-muted">
                                    To completely remove Shrinkr and all
                                    associated data from your Mac:
                                </p>
                                <ol className="list-decimal pl-6 text-muted space-y-2 mt-2">
                                    <li>Move Shrinkr.app to Trash</li>
                                    <li>
                                        Delete
                                        ~/Library/Preferences/io.byteoxo.Shrinkr.plist
                                    </li>
                                    <li>
                                        Delete
                                        ~/Library/Caches/io.byteoxo.Shrinkr (if
                                        exists)
                                    </li>
                                    <li>Empty Trash</li>
                                </ol>
                            </Section>

                            {/* Section 6 - Security */}
                            <Section
                                icon={<Shield className="h-5 w-5" />}
                                title="6. Security"
                                gradient="from-cyan-500 to-blue-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    6.1 App Security
                                </h3>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                                    <li>
                                        Shrinkr is code-signed and notarized by
                                        Apple
                                    </li>
                                    <li>
                                        Runs in macOS sandbox with limited
                                        permissions
                                    </li>
                                    <li>
                                        Only requests access to folders you
                                        explicitly select
                                    </li>
                                    <li>
                                        No network connections for core
                                        functionality
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    6.2 File Access
                                </h3>
                                <p className="text-muted mb-4">
                                    Shrinkr only accesses files and folders you
                                    explicitly grant permission to:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                                    <li>
                                        Input folders selected through the file
                                        picker
                                    </li>
                                    <li>
                                        Output location you choose for
                                        compressed files
                                    </li>
                                    <li>
                                        No background file access or monitoring
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    6.3 Gatekeeper &amp; Notarization
                                </h3>
                                <p className="text-muted">
                                    Shrinkr distributed through the Mac App
                                    Store undergoes Apple&apos;s review process
                                    and is notarized, ensuring the app is free
                                    from known malware.
                                </p>
                            </Section>

                            {/* Section 7 - Updates */}
                            <Section
                                icon={<Eye className="h-5 w-5" />}
                                title="7. Policy Updates"
                                gradient="from-amber-500 to-orange-500"
                            >
                                <p className="text-muted mb-4">
                                    We may update this Privacy Policy to reflect
                                    changes in our practices or for legal
                                    reasons. When we make changes:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                                    <li>
                                        We will update the &quot;Last
                                        Updated&quot; date
                                    </li>
                                    <li>
                                        For material changes, we will notify you
                                        through the App
                                    </li>
                                    <li>
                                        Continued use of Shrinkr indicates
                                        acceptance of updates
                                    </li>
                                </ul>
                                <p className="text-muted">
                                    Our privacy principles—local processing, no
                                    data collection from your files, no cloud
                                    uploads—are fundamental to Shrinkr and will
                                    not change.
                                </p>
                            </Section>

                            {/* Section 8 - Children */}
                            <Section
                                icon={<Shield className="h-5 w-5" />}
                                title="8. Children's Privacy"
                                gradient="from-pink-500 to-rose-500"
                            >
                                <p className="text-muted mb-4">
                                    Shrinkr is a general-purpose media
                                    compression tool suitable for all ages.
                                    Since we don&apos;t collect personal
                                    information from users, there are no special
                                    provisions needed for children&apos;s data.
                                </p>
                                <p className="text-muted">
                                    Parents and guardians should supervise their
                                    children&apos;s use of any software and
                                    ensure appropriate content is being
                                    processed.
                                </p>
                            </Section>

                            {/* Contact Section */}
                            <section className="mt-12 rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold mb-2">
                                            Contact Us
                                        </h2>
                                        <p className="text-muted mb-4">
                                            If you have questions about this
                                            Privacy Policy or Shrinkr&apos;s
                                            privacy practices:
                                        </p>
                                        <ul className="text-muted space-y-2">
                                            <li>
                                                <strong>
                                                    Privacy Inquiries:
                                                </strong>{' '}
                                                <a
                                                    href="mailto:privacy@byteoxo.io"
                                                    className="text-accent hover:underline"
                                                >
                                                    privacy@byteoxo.io
                                                </a>
                                            </li>
                                            <li>
                                                <strong>
                                                    Shrinkr Support:
                                                </strong>{' '}
                                                <a
                                                    href="mailto:Shrinkr@byteoxo.io"
                                                    className="text-accent hover:underline"
                                                >
                                                    Shrinkr@byteoxo.io
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Navigation Links */}
                            <div className="mt-12 flex flex-wrap gap-4">
                                <Link
                                    href="/products/macos/Shrinkr/terms-of-service"
                                    className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-6 py-3 font-medium transition-all hover:border-accent/50 hover:bg-card"
                                >
                                    <FileText className="h-4 w-4" />
                                    <span>Terms of Service</span>
                                </Link>
                                <Link
                                    href="/products/macos/Shrinkr"
                                    className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-6 py-3 font-medium transition-all hover:border-accent/50 hover:bg-card"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    <span>Back to Shrinkr</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </article>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}

function Section({
    icon,
    title,
    gradient,
    children,
}: {
    icon: React.ReactNode
    title: string
    gradient: string
    children: React.ReactNode
}) {
    return (
        <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-3 mb-6">
                <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}
                >
                    {icon}
                </div>
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <div className="rounded-2xl border border-card-border bg-card/30 p-6 md:p-8">
                {children}
            </div>
        </motion.section>
    )
}

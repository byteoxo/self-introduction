'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    ArrowLeft,
    Shield,
    RefreshCw,
    MessageCircle,
    HelpCircle,
    Apple,
    ExternalLink,
    AlertCircle,
    CheckCircle,
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import {
    GridBackground,
    MouseFollower,
    ScrollProgress,
} from '@/components/background-effects'

export default function ReturnPolicyPage() {
    const lastUpdated = 'January 7, 2026'

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
                                href="/products/macos/crunch"
                                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                <span>Back to Crunch</span>
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
                                    Return Policy
                                </span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                                    <Apple className="h-4 w-4" />
                                    <span>Crunch for macOS</span>
                                </div>
                                <p className="text-muted">
                                    Last updated: {lastUpdated}
                                </p>
                            </div>
                        </motion.header>

                        {/* Banner */}
                        <motion.div
                            className="mb-12 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6 md:p-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                                    <RefreshCw className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-blue-400 mb-2">
                                        App Store Refunds
                                    </h2>
                                    <p className="text-muted">
                                        Crunch is sold exclusively through the
                                        Mac App Store. All transactions,
                                        billing, and refunds are handled
                                        directly by Apple in accordance with
                                        their policies.
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
                                    We want you to be completely satisfied with
                                    Crunch. However, because we sell our app
                                    through the Apple Mac App Store, we do not
                                    have the ability to process refunds
                                    directly. Apple handles all payment
                                    processing and refund requests.
                                </p>
                            </section>

                            {/* Section 1 - How to Request */}
                            <Section
                                icon={<HelpCircle className="h-5 w-5" />}
                                title="1. How to Request a Refund"
                                gradient="from-purple-500 to-pink-500"
                            >
                                <p className="text-muted mb-6">
                                    If you are unsatisfied with your purchase,
                                    you can request a refund directly from
                                    Apple. Apple typically approves refunds for
                                    accidental purchases or apps that do not
                                    work as described, subject to their specific
                                    terms.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    Steps to Request a Refund:
                                </h3>
                                <div className="space-y-4 mb-6">
                                    {[
                                        {
                                            title: "Visit Apple's Report a Problem page",
                                            desc: 'Go to reportaproblem.apple.com in your web browser.',
                                            link: 'https://reportaproblem.apple.com',
                                        },
                                        {
                                            title: 'Sign In',
                                            desc: 'Log in with the Apple ID used to purchase Crunch.',
                                        },
                                        {
                                            title: 'Select "Request a refund"',
                                            desc: 'From the "I\'d like to" dropdown menu, select "Request a refund".',
                                        },
                                        {
                                            title: 'Choose a Reason',
                                            desc: 'Tell Apple why you want a refund, then choose "Next".',
                                        },
                                        {
                                            title: 'Submit',
                                            desc: 'Select "Crunch" from the list of purchases and click "Submit".',
                                        },
                                    ].map((step, i) => (
                                        <div
                                            key={step.title}
                                            className="flex gap-4 rounded-xl bg-card/50 p-4 border border-card-border/50"
                                        >
                                            <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-sm">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-foreground mb-1">
                                                    {step.link ? (
                                                        <a
                                                            href={step.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-1 hover:text-accent transition-colors"
                                                        >
                                                            {step.title}
                                                            <ExternalLink className="h-3 w-3" />
                                                        </a>
                                                    ) : (
                                                        step.title
                                                    )}
                                                </h4>
                                                <p className="text-sm text-muted">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Section>

                            {/* Section 2 - Limitations */}
                            <Section
                                icon={<AlertCircle className="h-5 w-5" />}
                                title="2. Refund Policy Limitations"
                                gradient="from-red-500 to-orange-500"
                            >
                                <p className="text-muted mb-6">
                                    While Apple handles all refund requests, we
                                    want to set clear expectations. Refunds are
                                    generally <strong>NOT</strong> granted in
                                    the following situations:
                                </p>

                                <div className="grid gap-4 md:grid-cols-2 mb-6">
                                    <div className="p-4 rounded-xl bg-card/50 border border-card-border/50">
                                        <h3 className="font-medium text-foreground mb-2">
                                            Change of Mind
                                        </h3>
                                        <p className="text-sm text-muted">
                                            You simply changed your mind after
                                            purchasing or downloading the app.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-card/50 border border-card-border/50">
                                        <h3 className="font-medium text-foreground mb-2">
                                            Functional as Described
                                        </h3>
                                        <p className="text-sm text-muted">
                                            The app works as described, but does
                                            not include features that were never
                                            advertised.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-card/50 border border-card-border/50">
                                        <h3 className="font-medium text-foreground mb-2">
                                            Incompatibility
                                        </h3>
                                        <p className="text-sm text-muted">
                                            The issue is due to not meeting the
                                            minimum system requirements (e.g.,
                                            macOS version).
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-card/50 border border-card-border/50">
                                        <h3 className="font-medium text-foreground mb-2">
                                            Price Differences
                                        </h3>
                                        <p className="text-sm text-muted">
                                            You found the app or a similar
                                            product for a lower price elsewhere
                                            after purchase.
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                                    <h4 className="flex items-center gap-2 font-medium text-blue-400 mb-2">
                                        <CheckCircle className="h-4 w-4" />
                                        Try Before You Buy
                                    </h4>
                                    <p className="text-sm text-muted">
                                        We offer a comprehensive{' '}
                                        <strong>Free Plan</strong> that lets you
                                        test all core compression features with
                                        generous daily limits. We strongly
                                        encourage trying the free version to
                                        ensure Crunch meets your needs before
                                        upgrading to Pro.
                                    </p>
                                </div>
                            </Section>

                            {/* Section 3 - Technical Support */}
                            <Section
                                icon={<MessageCircle className="h-5 w-5" />}
                                title="3. Technical Issues?"
                                gradient="from-green-500 to-emerald-500"
                            >
                                <p className="text-muted mb-4">
                                    Before requesting a refund, we encourage you
                                    to contact our support team. Many issues can
                                    be resolved quickly with a simple setting
                                    change or update.
                                </p>

                                <div className="grid gap-4 md:grid-cols-2 mb-6">
                                    <div className="p-4 rounded-xl bg-card/50 border border-card-border">
                                        <h3 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                            <AlertCircle className="h-4 w-4 text-orange-400" />
                                            Common Issues
                                        </h3>
                                        <ul className="text-sm text-muted space-y-2 list-disc pl-4">
                                            <li>File format compatibility</li>
                                            <li>Compression settings help</li>
                                            <li>Performance optimization</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 rounded-xl bg-card/50 border border-card-border">
                                        <h3 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-400" />
                                            We Can Help
                                        </h3>
                                        <p className="text-sm text-muted mb-2">
                                            We typically respond within 24
                                            hours.
                                        </p>
                                        <a
                                            href="mailto:support@byteoxo.io"
                                            className="text-sm font-medium text-accent hover:underline"
                                        >
                                            support@byteoxo.io
                                        </a>
                                    </div>
                                </div>
                            </Section>

                            {/* Section 4 - Subscription Cancellation */}
                            <Section
                                icon={<RefreshCw className="h-5 w-5" />}
                                title="4. Subscription Cancellation"
                                gradient="from-purple-500 to-indigo-500"
                            >
                                <p className="text-muted mb-4">
                                    If you have subscribed to Crunch Pro, you
                                    can cancel your subscription at any time
                                    through your Mac's App Store settings.
                                </p>
                                <h3 className="text-lg font-semibold mb-3">
                                    How to cancel:
                                </h3>
                                <ol className="list-decimal pl-6 text-muted space-y-2 mb-6">
                                    <li>Open the App Store app on your Mac.</li>
                                    <li>
                                        Click on your name at the bottom of the
                                        sidebar.
                                    </li>
                                    <li>
                                        Click "Account Settings" at the top of
                                        the window.
                                    </li>
                                    <li>
                                        Scroll to "Manage" and click the link
                                        next to "Subscriptions".
                                    </li>
                                    <li>Click "Edit" next to Crunch.</li>
                                    <li>Click "Cancel Subscription".</li>
                                </ol>
                                <p className="text-sm text-muted italic">
                                    Note: If you don't see "Cancel
                                    Subscription," the subscription is already
                                    canceled and will not renew.
                                </p>
                            </Section>

                            {/* Contact Section */}
                            <section className="mt-12 rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                                        <Apple className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold mb-2">
                                            Apple's Role
                                        </h2>
                                        <p className="text-muted mb-2">
                                            As the merchant of record, Apple
                                            reserves the right to grant or deny
                                            refunds according to their policy.
                                            We cannot override Apple's decision.
                                        </p>
                                        <a
                                            href="https://www.apple.com/legal/internet-services/itunes/us/terms.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent hover:underline text-sm inline-flex items-center gap-1"
                                        >
                                            Read Apple Media Services Terms and
                                            Conditions
                                            <ExternalLink className="h-3 w-3" />
                                        </a>
                                    </div>
                                </div>
                            </section>

                            {/* Navigation Links */}
                            <div className="mt-12 flex flex-wrap gap-4">
                                <Link
                                    href="/products/macos/crunch/privacy-policy"
                                    className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-6 py-3 font-medium transition-all hover:border-accent/50 hover:bg-card"
                                >
                                    <Shield className="h-4 w-4" />
                                    <span>Privacy Policy</span>
                                </Link>
                                <Link
                                    href="/products/macos/crunch"
                                    className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-6 py-3 font-medium transition-all hover:border-accent/50 hover:bg-card"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    <span>Back to Crunch</span>
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

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    ArrowLeft,
    FileText,
    Shield,
    AlertTriangle,
    Scale,
    Globe,
    Mail,
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import {
    GridBackground,
    MouseFollower,
    ScrollProgress,
} from '@/components/background-effects'

export default function TermsOfServicePage() {
    const lastUpdated = 'December 19, 2024'

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
                                href="/products/android/ai-hub"
                                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                <span>Back to AI Hub</span>
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
                                <FileText className="h-4 w-4" />
                                <span>Legal Document</span>
                            </div>
                            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                                <span className="text-gradient">
                                    Terms of Service
                                </span>
                            </h1>
                            <p className="text-lg text-muted">
                                Last updated: {lastUpdated}
                            </p>
                        </motion.header>

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
                                    Welcome to AI Hub (&quot;the App&quot;),
                                    developed and operated by byteoxo
                                    (&quot;we,&quot; &quot;us,&quot; or
                                    &quot;our&quot;). By downloading,
                                    installing, or using AI Hub, you agree to be
                                    bound by these Terms of Service
                                    (&quot;Terms&quot;). If you do not agree to
                                    these Terms, please do not use the App.
                                </p>
                            </section>

                            {/* Section 1 */}
                            <Section
                                icon={<Shield className="h-5 w-5" />}
                                title="1. Service Description and Scope"
                                gradient="from-green-500 to-emerald-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    1.1 About AI Hub
                                </h3>
                                <p className="text-muted mb-4">
                                    AI Hub is a mobile application that enables
                                    users to interact with various Large
                                    Language Models (LLMs) through the
                                    OpenRouter API. The App serves as an
                                    interface between you and third-party AI
                                    service providers, allowing you to conduct
                                    AI-powered conversations using your own API
                                    credentials.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    1.2 Service Limitations
                                </h3>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                                    <li>
                                        AI Hub does not provide AI models
                                        directly; we facilitate access to
                                        third-party AI services
                                    </li>
                                    <li>
                                        The quality, accuracy, and availability
                                        of AI responses depend on the chosen
                                        model and OpenRouter&apos;s service
                                    </li>
                                    <li>
                                        We do not guarantee uninterrupted access
                                        to any particular AI model
                                    </li>
                                    <li>
                                        Features may be modified, suspended, or
                                        discontinued without prior notice
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    1.3 Geographic Availability
                                </h3>
                                <p className="text-muted">
                                    AI Hub is available worldwide, subject to
                                    local laws and regulations. Users are
                                    responsible for ensuring their use of the
                                    App complies with applicable local,
                                    national, and international laws.
                                </p>
                            </Section>

                            {/* Section 2 */}
                            <Section
                                icon={<FileText className="h-5 w-5" />}
                                title="2. User Responsibilities"
                                gradient="from-blue-500 to-cyan-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    2.1 API Key Management
                                </h3>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                                    <li>
                                        You are solely responsible for
                                        obtaining, securing, and managing your
                                        OpenRouter API key
                                    </li>
                                    <li>
                                        Your API key is stored locally on your
                                        device using encrypted storage
                                        mechanisms
                                    </li>
                                    <li>
                                        Do not share your API key with others or
                                        use it in unauthorized applications
                                    </li>
                                    <li>
                                        You are responsible for all charges
                                        incurred through your API key,
                                        regardless of who initiated the usage
                                    </li>
                                    <li>
                                        Report any suspected unauthorized use of
                                        your API key to OpenRouter immediately
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    2.2 Account Security
                                </h3>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                                    <li>
                                        Maintain the security of your device and
                                        any credentials used with the App
                                    </li>
                                    <li>
                                        Enable device security features (screen
                                        lock, biometric authentication) to
                                        protect your data
                                    </li>
                                    <li>
                                        Notify us immediately if you believe
                                        your account or API key has been
                                        compromised
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    2.3 Compliance Obligations
                                </h3>
                                <p className="text-muted">
                                    You agree to comply with OpenRouter&apos;s
                                    Terms of Service, the terms of any LLM
                                    provider you access, and all applicable laws
                                    and regulations in your jurisdiction.
                                </p>
                            </Section>

                            {/* Section 3 */}
                            <Section
                                icon={<AlertTriangle className="h-5 w-5" />}
                                title="3. Acceptable Use Policy"
                                gradient="from-orange-500 to-red-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    3.1 Prohibited Activities
                                </h3>
                                <p className="text-muted mb-3">
                                    You agree NOT to use AI Hub to:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                                    <li>
                                        Generate, distribute, or store illegal,
                                        harmful, or offensive content
                                    </li>
                                    <li>
                                        Create content that promotes violence,
                                        discrimination, or hatred
                                    </li>
                                    <li>
                                        Produce sexually explicit material,
                                        especially involving minors
                                    </li>
                                    <li>
                                        Generate malware, phishing content, or
                                        engage in cybercriminal activities
                                    </li>
                                    <li>
                                        Impersonate individuals, organizations,
                                        or AI systems
                                    </li>
                                    <li>
                                        Spread misinformation, disinformation,
                                        or propaganda
                                    </li>
                                    <li>
                                        Violate intellectual property rights of
                                        third parties
                                    </li>
                                    <li>
                                        Circumvent security measures or access
                                        restrictions
                                    </li>
                                    <li>
                                        Engage in activities that violate
                                        applicable laws or regulations
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    3.2 AI-Generated Content Guidelines
                                </h3>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                                    <li>
                                        You acknowledge that AI-generated
                                        content may contain inaccuracies or
                                        errors
                                    </li>
                                    <li>
                                        Verify important information from
                                        reliable sources before relying on AI
                                        outputs
                                    </li>
                                    <li>
                                        Do not present AI-generated content as
                                        human-created without appropriate
                                        disclosure
                                    </li>
                                    <li>
                                        Comply with disclosure requirements in
                                        your jurisdiction regarding AI-generated
                                        content
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    3.3 China-Specific Compliance
                                </h3>
                                <p className="text-muted mb-3">
                                    Users in the People&apos;s Republic of China
                                    must additionally comply with:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2">
                                    <li>
                                        Provisions on the Management of Deep
                                        Synthesis of Internet Information
                                        Services
                                    </li>
                                    <li>
                                        Interim Measures for the Management of
                                        Generative Artificial Intelligence
                                        Services
                                    </li>
                                    <li>
                                        Content must not endanger national
                                        security or public interests
                                    </li>
                                    <li>
                                        AI-generated content must be
                                        appropriately labeled where required by
                                        law
                                    </li>
                                </ul>
                            </Section>

                            {/* Section 4 */}
                            <Section
                                icon={<Scale className="h-5 w-5" />}
                                title="4. Intellectual Property Rights"
                                gradient="from-purple-500 to-pink-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    4.1 App Ownership
                                </h3>
                                <p className="text-muted mb-4">
                                    AI Hub, including its code, design,
                                    features, and documentation, is owned by
                                    byteoxo and protected by copyright,
                                    trademark, and other intellectual property
                                    laws. Your use of the App does not grant you
                                    any ownership rights.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    4.2 User Input Rights
                                </h3>
                                <p className="text-muted mb-4">
                                    You retain ownership of the original content
                                    you input into AI Hub. By using the App, you
                                    grant us a limited, non-exclusive license to
                                    process your inputs solely for the purpose
                                    of facilitating AI interactions.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    4.3 AI Output Rights
                                </h3>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                                    <li>
                                        AI-generated outputs may be subject to
                                        the terms of the underlying LLM provider
                                    </li>
                                    <li>
                                        We make no claims of ownership over
                                        AI-generated content
                                    </li>
                                    <li>
                                        Your rights to use AI outputs may vary
                                        depending on the model used and
                                        applicable laws
                                    </li>
                                    <li>
                                        Some jurisdictions may not recognize
                                        copyright in AI-generated content
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    4.4 Third-Party Content
                                </h3>
                                <p className="text-muted">
                                    AI models may generate content that
                                    resembles or reproduces third-party
                                    copyrighted material. You are responsible
                                    for ensuring your use of AI outputs does not
                                    infringe on others&apos; intellectual
                                    property rights.
                                </p>
                            </Section>

                            {/* Section 5 */}
                            <Section
                                icon={<AlertTriangle className="h-5 w-5" />}
                                title="5. Limitation of Liability"
                                gradient="from-yellow-500 to-orange-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    5.1 Third-Party Services
                                </h3>
                                <p className="text-muted mb-4">
                                    AI Hub relies on third-party services
                                    including OpenRouter and various LLM
                                    providers. We are not responsible for:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                                    <li>
                                        Service interruptions, outages, or
                                        discontinuation of third-party services
                                    </li>
                                    <li>
                                        Changes to third-party pricing, terms,
                                        or service availability
                                    </li>
                                    <li>
                                        The accuracy, quality, or
                                        appropriateness of AI-generated
                                        responses
                                    </li>
                                    <li>
                                        Data handling practices of third-party
                                        service providers
                                    </li>
                                    <li>
                                        Any damages resulting from third-party
                                        service failures
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    5.2 Disclaimer of Warranties
                                </h3>
                                <p className="text-muted mb-4">
                                    AI HUB IS PROVIDED &quot;AS IS&quot; AND
                                    &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES
                                    OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
                                    BUT NOT LIMITED TO WARRANTIES OF
                                    MERCHANTABILITY, FITNESS FOR A PARTICULAR
                                    PURPOSE, AND NON-INFRINGEMENT.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    5.3 Limitation of Damages
                                </h3>
                                <p className="text-muted mb-4">
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW,
                                    BYTEOXO SHALL NOT BE LIABLE FOR ANY
                                    INDIRECT, INCIDENTAL, SPECIAL,
                                    CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                                    INCLUDING BUT NOT LIMITED TO LOSS OF
                                    PROFITS, DATA, OR BUSINESS OPPORTUNITIES.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    5.4 Maximum Liability
                                </h3>
                                <p className="text-muted">
                                    Our total liability for any claims arising
                                    from your use of AI Hub shall not exceed the
                                    amount you paid to us (if any) in the twelve
                                    (12) months preceding the claim.
                                </p>
                            </Section>

                            {/* Section 6 */}
                            <Section
                                icon={<Shield className="h-5 w-5" />}
                                title="6. Termination and Data Handling"
                                gradient="from-red-500 to-pink-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    6.1 Your Right to Terminate
                                </h3>
                                <p className="text-muted mb-4">
                                    You may stop using AI Hub at any time by
                                    uninstalling the App. Upon uninstallation,
                                    locally stored data will be removed from
                                    your device.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    6.2 Our Right to Terminate
                                </h3>
                                <p className="text-muted mb-3">
                                    We may suspend or terminate your access to
                                    AI Hub if:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                                    <li>
                                        You violate these Terms or our
                                        Acceptable Use Policy
                                    </li>
                                    <li>
                                        Your usage poses a security risk to our
                                        services or other users
                                    </li>
                                    <li>
                                        Required by law or regulatory authority
                                    </li>
                                    <li>We discontinue the service</li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    6.3 Effect of Termination
                                </h3>
                                <p className="text-muted mb-4">
                                    Upon termination, your right to use AI Hub
                                    ceases immediately. Provisions that by their
                                    nature should survive termination will
                                    remain in effect, including intellectual
                                    property rights, disclaimers, and
                                    limitations of liability.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    6.4 Data Deletion
                                </h3>
                                <p className="text-muted">
                                    Since AI Hub stores data locally on your
                                    device, uninstalling the App will remove
                                    your chat history, API keys, and settings.
                                    We do not retain copies of your local data
                                    on our servers.
                                </p>
                            </Section>

                            {/* Section 7 */}
                            <Section
                                icon={<Globe className="h-5 w-5" />}
                                title="7. Governing Law and Jurisdiction"
                                gradient="from-cyan-500 to-blue-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    7.1 General Governing Law
                                </h3>
                                <p className="text-muted mb-4">
                                    These Terms shall be governed by and
                                    construed in accordance with the laws of the
                                    jurisdiction where byteoxo is registered,
                                    without regard to conflict of law
                                    principles.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    7.2 Multi-Jurisdictional Compliance
                                </h3>
                                <p className="text-muted mb-3">
                                    We strive to comply with applicable laws in
                                    major markets, including but not limited to:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                                    <li>
                                        <strong>European Union:</strong> GDPR
                                        and Digital Services Act
                                    </li>
                                    <li>
                                        <strong>United States:</strong> Federal
                                        and state consumer protection laws
                                    </li>
                                    <li>
                                        <strong>China:</strong> Cybersecurity
                                        Law, Personal Information Protection Law
                                        (PIPL), and AI-related regulations
                                    </li>
                                    <li>
                                        <strong>Other jurisdictions:</strong>{' '}
                                        Applicable local data protection and
                                        consumer laws
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-3">
                                    7.3 Users in China
                                </h3>
                                <p className="text-muted">
                                    For users in the People&apos;s Republic of
                                    China, these Terms are supplemented by
                                    applicable Chinese laws and regulations. In
                                    case of conflict between these Terms and
                                    mandatory Chinese law, Chinese law shall
                                    prevail.
                                </p>
                            </Section>

                            {/* Section 8 */}
                            <Section
                                icon={<Scale className="h-5 w-5" />}
                                title="8. Dispute Resolution"
                                gradient="from-indigo-500 to-purple-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    8.1 Informal Resolution
                                </h3>
                                <p className="text-muted mb-4">
                                    Before initiating formal dispute resolution,
                                    you agree to contact us at{' '}
                                    <a
                                        href="mailto:legal@byteoxo.io"
                                        className="text-accent hover:underline"
                                    >
                                        legal@byteoxo.io
                                    </a>{' '}
                                    to attempt to resolve any dispute informally
                                    within 30 days.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    8.2 Arbitration Agreement
                                </h3>
                                <p className="text-muted mb-4">
                                    If informal resolution fails, any dispute
                                    arising from these Terms shall be resolved
                                    through binding arbitration, except where
                                    prohibited by law. The arbitration shall be
                                    conducted in English and administered by a
                                    mutually agreed arbitration institution.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    8.3 Class Action Waiver
                                </h3>
                                <p className="text-muted mb-4">
                                    TO THE EXTENT PERMITTED BY LAW, YOU AGREE TO
                                    RESOLVE DISPUTES ONLY ON AN INDIVIDUAL BASIS
                                    AND WAIVE ANY RIGHT TO PARTICIPATE IN CLASS
                                    ACTIONS OR CLASS ARBITRATIONS.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    8.4 Exceptions
                                </h3>
                                <p className="text-muted">
                                    Notwithstanding the above, either party may
                                    seek injunctive relief in any court of
                                    competent jurisdiction to prevent
                                    irreparable harm, and disputes involving
                                    intellectual property rights may be brought
                                    before appropriate courts.
                                </p>
                            </Section>

                            {/* Section 9 */}
                            <Section
                                icon={<FileText className="h-5 w-5" />}
                                title="9. General Provisions"
                                gradient="from-gray-500 to-slate-500"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    9.1 Entire Agreement
                                </h3>
                                <p className="text-muted mb-4">
                                    These Terms, together with our Privacy
                                    Policy, constitute the entire agreement
                                    between you and byteoxo regarding AI Hub and
                                    supersede all prior agreements.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    9.2 Severability
                                </h3>
                                <p className="text-muted mb-4">
                                    If any provision of these Terms is found
                                    unenforceable, the remaining provisions will
                                    continue in full force and effect.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    9.3 Waiver
                                </h3>
                                <p className="text-muted mb-4">
                                    Our failure to enforce any right or
                                    provision of these Terms does not constitute
                                    a waiver of such right or provision.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    9.4 Assignment
                                </h3>
                                <p className="text-muted mb-4">
                                    You may not assign or transfer these Terms
                                    without our prior written consent. We may
                                    assign these Terms in connection with a
                                    merger, acquisition, or sale of assets.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    9.5 Modifications
                                </h3>
                                <p className="text-muted">
                                    We reserve the right to modify these Terms
                                    at any time. Material changes will be
                                    notified through the App or via email. Your
                                    continued use of AI Hub after changes take
                                    effect constitutes acceptance of the
                                    modified Terms.
                                </p>
                            </Section>

                            {/* Contact Section */}
                            <section className="mt-12 rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-secondary">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold mb-2">
                                            Contact Us
                                        </h2>
                                        <p className="text-muted mb-4">
                                            If you have any questions about
                                            these Terms of Service, please
                                            contact us:
                                        </p>
                                        <ul className="text-muted space-y-2">
                                            <li>
                                                <strong>Email:</strong>{' '}
                                                <a
                                                    href="mailto:legal@byteoxo.io"
                                                    className="text-accent hover:underline"
                                                >
                                                    legal@byteoxo.io
                                                </a>
                                            </li>
                                            <li>
                                                <strong>
                                                    General Support:
                                                </strong>{' '}
                                                <a
                                                    href="mailto:developer@byteoxo.io"
                                                    className="text-accent hover:underline"
                                                >
                                                    developer@byteoxo.io
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Navigation Links */}
                            <div className="mt-12 flex flex-wrap gap-4">
                                <Link
                                    href="/products/android/ai-hub/privacy-policy"
                                    className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-6 py-3 font-medium transition-all hover:border-accent/50 hover:bg-card"
                                >
                                    <Shield className="h-4 w-4" />
                                    <span>Privacy Policy</span>
                                </Link>
                                <Link
                                    href="/products/android/ai-hub"
                                    className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-6 py-3 font-medium transition-all hover:border-accent/50 hover:bg-card"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    <span>Back to AI Hub</span>
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

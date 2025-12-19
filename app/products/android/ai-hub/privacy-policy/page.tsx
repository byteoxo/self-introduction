"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  Database,
  Share2,
  UserCheck,
  Clock,
  Baby,
  Globe,
  Mail,
  Lock,
  Eye,
  Trash2,
  Server,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  GridBackground,
  MouseFollower,
  ScrollProgress,
} from "@/components/background-effects";

export default function PrivacyPolicyPage() {
  const lastUpdated = "December 19, 2024";
  const effectiveDate = "December 19, 2024";

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
                <Shield className="h-4 w-4" />
                <span>Legal Document</span>
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                <span className="text-gradient">Privacy Policy</span>
              </h1>
              <div className="flex flex-wrap gap-4 text-muted">
                <p>Last updated: {lastUpdated}</p>
                <span className="hidden md:inline">•</span>
                <p>Effective: {effectiveDate}</p>
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
                    Our Privacy Commitment
                  </h2>
                  <p className="text-muted">
                    AI Hub is designed with privacy at its core. We believe you
                    should have complete control over your data. Your API keys
                    are encrypted locally, your conversations stay on your
                    device, and we never sell your personal information.
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
                  This Privacy Policy describes how byteoxo (&quot;we,&quot;
                  &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares
                  information when you use AI Hub (&quot;the App&quot;). We are
                  committed to protecting your privacy and ensuring transparency
                  about our data practices.
                </p>
              </section>

              {/* Section 1 - Data Collection */}
              <Section
                icon={<Database className="h-5 w-5" />}
                title="1. Data Collection Practices"
                gradient="from-blue-500 to-cyan-500"
              >
                <h3 className="text-lg font-semibold mb-3">
                  1.1 Information You Provide
                </h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-card-border">
                        <th className="text-left py-3 pr-4">Data Type</th>
                        <th className="text-left py-3 pr-4">Purpose</th>
                        <th className="text-left py-3">Storage Location</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted">
                      <tr className="border-b border-card-border/50">
                        <td className="py-3 pr-4">API Key</td>
                        <td className="py-3 pr-4">
                          Authentication with OpenRouter
                        </td>
                        <td className="py-3">Encrypted local storage</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3 pr-4">Chat Messages</td>
                        <td className="py-3 pr-4">Conversation history</td>
                        <td className="py-3">Local device storage</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3 pr-4">Model Preferences</td>
                        <td className="py-3 pr-4">User settings</td>
                        <td className="py-3">Local device storage</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">App Settings</td>
                        <td className="py-3 pr-4">Personalization</td>
                        <td className="py-3">Local device storage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-3">
                  1.2 Automatically Collected Information
                </h3>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                  <li>
                    <strong>Device Information:</strong> Device model, operating
                    system version, unique device identifiers (for crash
                    reporting only)
                  </li>
                  <li>
                    <strong>Usage Analytics:</strong> App feature usage, session
                    duration, button interactions (anonymized)
                  </li>
                  <li>
                    <strong>Crash Reports:</strong> Technical logs when the app
                    encounters errors
                  </li>
                  <li>
                    <strong>Performance Data:</strong> App load times, response
                    times (aggregated)
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  1.3 Information We Do NOT Collect
                </h3>
                <ul className="list-disc pl-6 text-muted space-y-2">
                  <li>Contents of your conversations with AI</li>
                  <li>Your API key in plain text</li>
                  <li>Personal identification documents</li>
                  <li>Financial information</li>
                  <li>Precise location data</li>
                  <li>Contact lists or phone records</li>
                </ul>
              </Section>

              {/* Section 2 - Local vs Cloud Storage */}
              <Section
                icon={<Server className="h-5 w-5" />}
                title="2. Local Storage vs Cloud Data"
                gradient="from-purple-500 to-pink-500"
              >
                <h3 className="text-lg font-semibold mb-3">
                  2.1 Local-First Architecture
                </h3>
                <p className="text-muted mb-4">
                  AI Hub is designed with a local-first architecture. This
                  means:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                  <li>Your chat history never leaves your device</li>
                  <li>
                    API keys are encrypted using Android&apos;s
                    EncryptedSharedPreferences
                  </li>
                  <li>Settings and preferences are stored locally</li>
                  <li>No cloud backup of conversation data</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  2.2 Data That Leaves Your Device
                </h3>
                <p className="text-muted mb-3">
                  When you send a message, the following data is transmitted to
                  OpenRouter and the selected LLM provider:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                  <li>Your message content (to generate a response)</li>
                  <li>Your API key (for authentication)</li>
                  <li>Model selection and parameters</li>
                  <li>Conversation context (if enabled)</li>
                </ul>

                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
                  <p className="text-yellow-400 text-sm">
                    <strong>⚠️ Important:</strong> Data transmitted to
                    OpenRouter and LLM providers is subject to their respective
                    privacy policies. We encourage you to review
                    OpenRouter&apos;s privacy policy and the policies of the AI
                    model providers you use.
                  </p>
                </div>
              </Section>

              {/* Section 3 - Third Party Sharing */}
              <Section
                icon={<Share2 className="h-5 w-5" />}
                title="3. Third-Party Data Sharing"
                gradient="from-orange-500 to-red-500"
              >
                <h3 className="text-lg font-semibold mb-3">
                  3.1 Service Providers
                </h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-card-border">
                        <th className="text-left py-3 pr-4">Provider</th>
                        <th className="text-left py-3 pr-4">Purpose</th>
                        <th className="text-left py-3">Data Shared</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted">
                      <tr className="border-b border-card-border/50">
                        <td className="py-3 pr-4">OpenRouter</td>
                        <td className="py-3 pr-4">API Gateway for LLMs</td>
                        <td className="py-3">
                          Messages, API key, model selection
                        </td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3 pr-4">LLM Providers</td>
                        <td className="py-3 pr-4">AI Response Generation</td>
                        <td className="py-3">
                          Message content (via OpenRouter)
                        </td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3 pr-4">Google Play</td>
                        <td className="py-3 pr-4">App Distribution</td>
                        <td className="py-3">Standard store analytics</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Firebase Crashlytics</td>
                        <td className="py-3 pr-4">Crash Reporting</td>
                        <td className="py-3">Anonymized crash logs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-3">
                  3.2 We Do NOT Share Data With
                </h3>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                  <li>Advertising networks or ad platforms</li>
                  <li>Data brokers or data resellers</li>
                  <li>Social media platforms</li>
                  <li>Marketing agencies</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  3.3 Legal Disclosures
                </h3>
                <p className="text-muted">
                  We may disclose information if required by law, court order,
                  or government request, or when necessary to protect our
                  rights, safety, or the safety of others.
                </p>
              </Section>

              {/* Section 4 - User Rights */}
              <Section
                icon={<UserCheck className="h-5 w-5" />}
                title="4. Your Privacy Rights"
                gradient="from-green-500 to-emerald-500"
              >
                <h3 className="text-lg font-semibold mb-3">
                  4.1 Universal Rights
                </h3>
                <p className="text-muted mb-3">All users have the right to:</p>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                  <li>
                    <strong>Access:</strong> Know what data we collect and how
                    it&apos;s used
                  </li>
                  <li>
                    <strong>Deletion:</strong> Delete your local data by
                    uninstalling the app
                  </li>
                  <li>
                    <strong>Portability:</strong> Export your chat history
                    (feature in development)
                  </li>
                  <li>
                    <strong>Objection:</strong> Opt-out of analytics collection
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  4.2 For European Users (GDPR)
                </h3>
                <p className="text-muted mb-3">
                  Under the General Data Protection Regulation, EU residents
                  have additional rights:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                  <li>Right to rectification of inaccurate personal data</li>
                  <li>Right to restrict processing in certain circumstances</li>
                  <li>Right to withdraw consent at any time</li>
                  <li>
                    Right to lodge a complaint with a supervisory authority
                  </li>
                </ul>
                <p className="text-muted mb-4">
                  <strong>Legal Basis for Processing:</strong> We process data
                  based on legitimate interests (app functionality) and your
                  consent (analytics).
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  4.3 For California Residents (CCPA/CPRA)
                </h3>
                <p className="text-muted mb-3">
                  California residents have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                  <li>
                    Know what personal information is collected and disclosed
                  </li>
                  <li>Delete personal information held by businesses</li>
                  <li>
                    Opt-out of the sale or sharing of personal information
                  </li>
                  <li>Non-discrimination for exercising these rights</li>
                </ul>
                <p className="text-muted mb-4">
                  <strong>Notice:</strong> We do not sell or share personal
                  information as defined under CCPA/CPRA.
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  4.4 For Users in China (PIPL)
                </h3>
                <p className="text-muted mb-3">
                  Under the Personal Information Protection Law of the
                  People&apos;s Republic of China, you have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2">
                  <li>
                    Know and decide about the processing of your personal
                    information
                  </li>
                  <li>
                    Restrict or refuse processing (except as required by law)
                  </li>
                  <li>Access and copy your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>
                    Request deletion when processing purposes are achieved
                  </li>
                  <li>Withdraw consent at any time</li>
                  <li>
                    Request explanation of personal information processing rules
                  </li>
                </ul>
              </Section>

              {/* Section 5 - Data Retention */}
              <Section
                icon={<Clock className="h-5 w-5" />}
                title="5. Data Retention and Deletion"
                gradient="from-indigo-500 to-purple-500"
              >
                <h3 className="text-lg font-semibold mb-3">
                  5.1 Local Data Retention
                </h3>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                  <li>
                    <strong>Chat History:</strong> Retained until you delete
                    conversations or uninstall the app
                  </li>
                  <li>
                    <strong>API Key:</strong> Stored until you remove it or
                    uninstall the app
                  </li>
                  <li>
                    <strong>Settings:</strong> Retained until you reset them or
                    uninstall the app
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  5.2 Server-Side Data Retention
                </h3>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                  <li>
                    <strong>Analytics:</strong> Aggregated for 24 months, then
                    deleted
                  </li>
                  <li>
                    <strong>Crash Logs:</strong> Retained for 90 days
                  </li>
                  <li>
                    <strong>Support Tickets:</strong> Retained for 3 years for
                    legal compliance
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  5.3 How to Delete Your Data
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-card text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">
                        Delete Individual Conversations
                      </p>
                      <p className="text-muted text-sm">
                        Swipe left on any chat in the History tab and tap delete
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-card text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Clear All Data</p>
                      <p className="text-muted text-sm">
                        Go to Settings → Clear App Data to remove all local data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-card text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Complete Removal</p>
                      <p className="text-muted text-sm">
                        Uninstall the app to remove all data from your device
                      </p>
                    </div>
                  </div>
                </div>
              </Section>

              {/* Section 6 - Children's Privacy */}
              <Section
                icon={<Baby className="h-5 w-5" />}
                title="6. Children's Privacy"
                gradient="from-pink-500 to-rose-500"
              >
                <h3 className="text-lg font-semibold mb-3">
                  6.1 Age Requirements
                </h3>
                <p className="text-muted mb-4">
                  AI Hub is not intended for children under the age of 13 (or
                  equivalent minimum age in your jurisdiction). We do not
                  knowingly collect personal information from children.
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  6.2 COPPA Compliance
                </h3>
                <p className="text-muted mb-4">
                  In compliance with the Children&apos;s Online Privacy
                  Protection Act (COPPA), we:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                  <li>
                    Do not knowingly collect personal information from children
                    under 13
                  </li>
                  <li>Will delete any such information upon discovery</li>
                  <li>
                    Encourage parents to monitor their children&apos;s online
                    activities
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  6.3 Parental Rights
                </h3>
                <p className="text-muted">
                  If you believe your child has provided us with personal
                  information, please contact us at{" "}
                  <a
                    href="mailto:privacy@byteoxo.io"
                    className="text-accent hover:underline"
                  >
                    privacy@byteoxo.io
                  </a>
                  . We will promptly delete such information from our records.
                </p>
              </Section>

              {/* Section 7 - Cross-Border Transfers */}
              <Section
                icon={<Globe className="h-5 w-5" />}
                title="7. Cross-Border Data Transfers"
                gradient="from-cyan-500 to-blue-500"
              >
                <h3 className="text-lg font-semibold mb-3">
                  7.1 International Data Flows
                </h3>
                <p className="text-muted mb-4">
                  When you use AI Hub, your message data may be processed by
                  OpenRouter and LLM providers in various countries, including
                  the United States. These transfers are necessary to provide
                  you with AI chat functionality.
                </p>

                <h3 className="text-lg font-semibold mb-3">7.2 Safeguards</h3>
                <p className="text-muted mb-3">
                  For cross-border data transfers, we implement:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                  <li>
                    Standard Contractual Clauses approved by relevant
                    authorities
                  </li>
                  <li>Data processing agreements with all service providers</li>
                  <li>
                    Technical measures (encryption in transit and at rest)
                  </li>
                  <li>
                    Regular security assessments of data handling practices
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  7.3 China-Specific Requirements
                </h3>
                <p className="text-muted mb-3">
                  For users in China, in compliance with the Cybersecurity Law
                  and Data Security Law:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2">
                  <li>
                    We disclose that your message data is processed outside
                    China through OpenRouter
                  </li>
                  <li>
                    By using the app, you consent to this cross-border data
                    transfer
                  </li>
                  <li>
                    We implement security measures in accordance with Chinese
                    cybersecurity standards
                  </li>
                  <li>
                    No &quot;important data&quot; as defined by Chinese law is
                    collected or exported
                  </li>
                </ul>
              </Section>

              {/* Section 8 - Security */}
              <Section
                icon={<Shield className="h-5 w-5" />}
                title="8. Security Measures"
                gradient="from-slate-500 to-gray-500"
              >
                <h3 className="text-lg font-semibold mb-3">
                  8.1 Technical Safeguards
                </h3>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                  <li>
                    API keys encrypted using Android&apos;s
                    EncryptedSharedPreferences
                  </li>
                  <li>TLS 1.3 encryption for all data in transit</li>
                  <li>No plain-text storage of sensitive information</li>
                  <li>Regular security updates and vulnerability patching</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  8.2 Organizational Measures
                </h3>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
                  <li>Minimal data collection principle</li>
                  <li>Access controls and authentication requirements</li>
                  <li>Regular security audits and code reviews</li>
                  <li>Incident response procedures</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  8.3 Your Role in Security
                </h3>
                <p className="text-muted mb-3">
                  You can help protect your data by:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2">
                  <li>
                    Enabling device screen lock and biometric authentication
                  </li>
                  <li>Keeping your device&apos;s operating system updated</li>
                  <li>Not sharing your device with untrusted individuals</li>
                  <li>Regularly updating AI Hub to the latest version</li>
                </ul>
              </Section>

              {/* Section 9 - Updates */}
              <Section
                icon={<Eye className="h-5 w-5" />}
                title="9. Policy Updates"
                gradient="from-amber-500 to-orange-500"
              >
                <p className="text-muted mb-4">
                  We may update this Privacy Policy from time to time. When we
                  make changes:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                  <li>
                    We will update the &quot;Last Updated&quot; date at the top
                    of this policy
                  </li>
                  <li>
                    For material changes, we will notify you through the app or
                    via email
                  </li>
                  <li>
                    Your continued use of AI Hub after changes indicates
                    acceptance
                  </li>
                  <li>We encourage you to review this policy periodically</li>
                </ul>
                <p className="text-muted">
                  Previous versions of this Privacy Policy are available upon
                  request.
                </p>
              </Section>

              {/* Contact Section */}
              <section className="mt-12 rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-secondary">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                    <p className="text-muted mb-4">
                      If you have questions about this Privacy Policy or want to
                      exercise your privacy rights:
                    </p>
                    <ul className="text-muted space-y-2">
                      <li>
                        <strong>Privacy Inquiries:</strong>{" "}
                        <a
                          href="mailto:privacy@byteoxo.io"
                          className="text-accent hover:underline"
                        >
                          privacy@byteoxo.io
                        </a>
                      </li>
                      <li>
                        <strong>Data Protection Officer:</strong>{" "}
                        <a
                          href="mailto:dpo@byteoxo.io"
                          className="text-accent hover:underline"
                        >
                          dpo@byteoxo.io
                        </a>
                      </li>
                      <li>
                        <strong>General Support:</strong>{" "}
                        <a
                          href="mailto:developer@byteoxo.io"
                          className="text-accent hover:underline"
                        >
                          developer@byteoxo.io
                        </a>
                      </li>
                    </ul>
                    <p className="text-muted mt-4 text-sm">
                      We will respond to all privacy-related inquiries within 30
                      days.
                    </p>
                  </div>
                </div>
              </section>

              {/* Navigation Links */}
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/products/android/ai-hub/terms-of-service"
                  className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-6 py-3 font-medium transition-all hover:border-accent/50 hover:bg-card"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Terms of Service</span>
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
  );
}

function Section({
  icon,
  title,
  gradient,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  gradient: string;
  children: React.ReactNode;
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
  );
}

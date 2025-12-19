"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  FileText,
  Shield,
  AlertTriangle,
  Scale,
  Globe,
  Mail,
  Apple,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  GridBackground,
  MouseFollower,
  ScrollProgress,
} from "@/components/background-effects";

export default function TermsOfServicePage() {
  const lastUpdated = "December 19, 2024";

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
                <FileText className="h-4 w-4" />
                <span>Legal Document</span>
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                <span className="text-gradient">Terms of Service</span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  <Apple className="h-4 w-4" />
                  <span>Crunch for macOS</span>
                </div>
                <p className="text-muted">Last updated: {lastUpdated}</p>
              </div>
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
                  Welcome to Crunch (&quot;the App&quot;), a media compression
                  application for macOS developed by byteoxo (&quot;we,&quot;
                  &quot;us,&quot; or &quot;our&quot;). By downloading,
                  installing, or using Crunch, you agree to be bound by these
                  Terms of Service (&quot;Terms&quot;). If you do not agree to
                  these Terms, please do not use the App.
                </p>
              </section>

              {/* Section 1 */}
              <Section
                icon={<Shield className="h-5 w-5" />}
                title="1. Service Description"
                gradient="from-blue-500 to-purple-500"
              >
                <h3 className="text-lg font-semibold mb-3">1.1 About Crunch</h3>
                <p className="text-muted mb-4">
                  Crunch is a native macOS application that compresses media
                  files (images, videos, and audio) locally on your device. The
                  App uses ffmpeg and other compression libraries to reduce file
                  sizes while maintaining quality according to your selected
                  preferences.
                </p>

                <h3 className="text-lg font-semibold mb-3">1.2 Key Features</h3>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                  <li>Recursive folder scanning for media file discovery</li>
                  <li>Batch compression of images, videos, and audio files</li>
                  <li>Configurable quality presets (Low, Medium, High)</li>
                  <li>Multiple output format support</li>
                  <li>ZIP archive output with preserved directory structure</li>
                  <li>Hardware-accelerated encoding on Apple Silicon</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  1.3 Local Processing
                </h3>
                <p className="text-muted">
                  All compression operations are performed locally on your Mac.
                  Your files are never uploaded to any server. This ensures
                  complete privacy and allows the App to function without an
                  internet connection.
                </p>
              </Section>

              {/* Section 2 */}
              <Section
                icon={<FileText className="h-5 w-5" />}
                title="2. License Grant"
                gradient="from-purple-500 to-pink-500"
              >
                <h3 className="text-lg font-semibold mb-3">
                  2.1 License Terms
                </h3>
                <p className="text-muted mb-4">
                  Subject to your compliance with these Terms, we grant you a
                  limited, non-exclusive, non-transferable, revocable license to
                  download, install, and use Crunch on any Mac computer that you
                  own or control, solely for your personal, non-commercial
                  purposes.
                </p>

                <h3 className="text-lg font-semibold mb-3">2.2 Restrictions</h3>
                <p className="text-muted mb-3">You agree NOT to:</p>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                  <li>Copy, modify, or distribute the App</li>
                  <li>Reverse engineer, decompile, or disassemble the App</li>
                  <li>Remove or alter any proprietary notices or labels</li>
                  <li>Use the App for any illegal purpose</li>
                  <li>Sublicense, rent, or lease the App to third parties</li>
                  <li>
                    Use the App in any way that could damage or impair our
                    services
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  2.3 Third-Party Components
                </h3>
                <p className="text-muted">
                  Crunch incorporates open-source components including ffmpeg,
                  which are subject to their own license terms. A list of
                  third-party components and their licenses is available within
                  the App under &quot;About Crunch &gt; Acknowledgments.&quot;
                </p>
              </Section>

              {/* Section 3 */}
              <Section
                icon={<AlertTriangle className="h-5 w-5" />}
                title="3. Acceptable Use"
                gradient="from-orange-500 to-red-500"
              >
                <h3 className="text-lg font-semibold mb-3">
                  3.1 Permitted Use
                </h3>
                <p className="text-muted mb-4">
                  You may use Crunch to compress media files that you own or
                  have the right to modify. Common use cases include:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                  <li>
                    Compressing personal photos and videos to save storage space
                  </li>
                  <li>Preparing media files for web upload or sharing</li>
                  <li>Converting media formats for compatibility</li>
                  <li>Batch processing media libraries</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  3.2 Prohibited Use
                </h3>
                <p className="text-muted mb-3">
                  You agree NOT to use Crunch to:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                  <li>Process files you do not have rights to modify</li>
                  <li>Circumvent copy protection or DRM mechanisms</li>
                  <li>Create or distribute illegal content</li>
                  <li>Violate any intellectual property rights</li>
                  <li>
                    Process classified or restricted government materials
                    without authorization
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  3.3 Your Responsibility
                </h3>
                <p className="text-muted">
                  You are solely responsible for ensuring you have the necessary
                  rights and permissions to compress any media files using the
                  App. We are not responsible for any unauthorized use of
                  copyrighted or protected content.
                </p>
              </Section>

              {/* Section 4 */}
              <Section
                icon={<Scale className="h-5 w-5" />}
                title="4. Intellectual Property"
                gradient="from-cyan-500 to-blue-500"
              >
                <h3 className="text-lg font-semibold mb-3">4.1 Our Rights</h3>
                <p className="text-muted mb-4">
                  Crunch, including its code, design, user interface, and
                  documentation, is owned by byteoxo and protected by copyright,
                  trademark, and other intellectual property laws. All rights
                  not expressly granted in these Terms are reserved.
                </p>

                <h3 className="text-lg font-semibold mb-3">4.2 Your Content</h3>
                <p className="text-muted mb-4">
                  You retain all ownership rights to your original media files
                  and any compressed versions created using the App. We do not
                  claim any ownership over your content.
                </p>

                <h3 className="text-lg font-semibold mb-3">4.3 Feedback</h3>
                <p className="text-muted">
                  If you provide us with feedback, suggestions, or bug reports,
                  you grant us a perpetual, royalty-free license to use such
                  feedback to improve the App without any obligation to you.
                </p>
              </Section>

              {/* Section 5 */}
              <Section
                icon={<AlertTriangle className="h-5 w-5" />}
                title="5. Disclaimers and Limitations"
                gradient="from-yellow-500 to-orange-500"
              >
                <h3 className="text-lg font-semibold mb-3">
                  5.1 As-Is Provision
                </h3>
                <p className="text-muted mb-4">
                  CRUNCH IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                  AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
                  IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT.
                </p>

                <h3 className="text-lg font-semibold mb-3">5.2 No Guarantee</h3>
                <p className="text-muted mb-3">We do not warrant that:</p>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                  <li>The App will meet your specific requirements</li>
                  <li>
                    The App will be uninterrupted, timely, secure, or error-free
                  </li>
                  <li>
                    Compression results will achieve any particular file size
                    reduction
                  </li>
                  <li>Output quality will match your expectations</li>
                  <li>Errors or defects will be corrected</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  5.3 Limitation of Liability
                </h3>
                <p className="text-muted mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, BYTEOXO SHALL NOT BE
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                  OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc pl-6 text-muted space-y-2 mb-4">
                  <li>Loss of data or corruption of files</li>
                  <li>Loss of profits or business opportunities</li>
                  <li>Damage to hardware or software</li>
                  <li>Cost of substitute services</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">
                  5.4 Maximum Liability
                </h3>
                <p className="text-muted">
                  Our total liability for any claims arising from your use of
                  Crunch shall not exceed the amount you paid to purchase the
                  App.
                </p>
              </Section>

              {/* Section 6 */}
              <Section
                icon={<Shield className="h-5 w-5" />}
                title="6. Data Safety Recommendations"
                gradient="from-green-500 to-emerald-500"
              >
                <h3 className="text-lg font-semibold mb-3">
                  6.1 Backup Your Files
                </h3>
                <p className="text-muted mb-4">
                  While Crunch is designed to preserve your original files, we
                  strongly recommend maintaining backups of any important media
                  before compression. Unexpected errors, power failures, or
                  system crashes could potentially result in data loss.
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  6.2 Verify Results
                </h3>
                <p className="text-muted mb-4">
                  Always verify compressed output files before deleting
                  originals. Check that the quality meets your standards and
                  that all files were processed correctly.
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  6.3 Storage Considerations
                </h3>
                <p className="text-muted">
                  Ensure you have sufficient disk space for both the original
                  files and compressed output during the compression process.
                  The App requires temporary storage space while processing
                  files.
                </p>
              </Section>

              {/* Section 7 */}
              <Section
                icon={<Globe className="h-5 w-5" />}
                title="7. Governing Law"
                gradient="from-indigo-500 to-purple-500"
              >
                <h3 className="text-lg font-semibold mb-3">
                  7.1 Applicable Law
                </h3>
                <p className="text-muted mb-4">
                  These Terms shall be governed by and construed in accordance
                  with the laws of the jurisdiction where byteoxo is registered,
                  without regard to conflict of law principles.
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  7.2 Dispute Resolution
                </h3>
                <p className="text-muted mb-4">
                  Any disputes arising from these Terms shall first be attempted
                  to be resolved through informal negotiation. If informal
                  resolution fails, disputes shall be resolved through binding
                  arbitration.
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  7.3 App Store Terms
                </h3>
                <p className="text-muted">
                  If you downloaded Crunch from the Mac App Store, your use of
                  the App is also subject to Apple&apos;s Terms and Conditions
                  and the Licensed Application End User License Agreement.
                </p>
              </Section>

              {/* Section 8 */}
              <Section
                icon={<FileText className="h-5 w-5" />}
                title="8. General Provisions"
                gradient="from-gray-500 to-slate-500"
              >
                <h3 className="text-lg font-semibold mb-3">
                  8.1 Entire Agreement
                </h3>
                <p className="text-muted mb-4">
                  These Terms, together with our Privacy Policy, constitute the
                  entire agreement between you and byteoxo regarding Crunch.
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  8.2 Modifications
                </h3>
                <p className="text-muted mb-4">
                  We reserve the right to modify these Terms at any time.
                  Changes will be posted within the App or on our website. Your
                  continued use of Crunch after changes take effect constitutes
                  acceptance.
                </p>

                <h3 className="text-lg font-semibold mb-3">8.3 Severability</h3>
                <p className="text-muted mb-4">
                  If any provision of these Terms is found unenforceable, the
                  remaining provisions will continue in full force and effect.
                </p>

                <h3 className="text-lg font-semibold mb-3">8.4 Termination</h3>
                <p className="text-muted">
                  You may terminate these Terms by uninstalling the App. We may
                  terminate or suspend your access if you violate these Terms.
                </p>
              </Section>

              {/* Contact Section */}
              <section className="mt-12 rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                    <p className="text-muted mb-4">
                      If you have any questions about these Terms of Service,
                      please contact us:
                    </p>
                    <ul className="text-muted space-y-2">
                      <li>
                        <strong>Email:</strong>{" "}
                        <a
                          href="mailto:legal@byteoxo.io"
                          className="text-accent hover:underline"
                        >
                          legal@byteoxo.io
                        </a>
                      </li>
                      <li>
                        <strong>Support:</strong>{" "}
                        <a
                          href="mailto:crunch@byteoxo.io"
                          className="text-accent hover:underline"
                        >
                          crunch@byteoxo.io
                        </a>
                      </li>
                    </ul>
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

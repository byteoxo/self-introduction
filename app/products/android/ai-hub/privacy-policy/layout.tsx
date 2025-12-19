import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - AI Hub | byteoxo",
  description:
    "AI Hub Privacy Policy. Learn how we protect your privacy with local-first architecture. Your API keys are encrypted locally, your conversations stay on your device, and we never sell your personal information.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - AI Hub | byteoxo",
    description:
      "Learn how AI Hub protects your privacy. Local-first architecture ensures your conversations stay on your device.",
    url: "https://byteoxo.dev/products/android/ai-hub/privacy-policy",
  },
  twitter: {
    title: "Privacy Policy - AI Hub | byteoxo",
    description:
      "Learn how AI Hub protects your privacy. Local-first architecture ensures your conversations stay on your device.",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

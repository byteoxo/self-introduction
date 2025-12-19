import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Crunch for macOS | byteoxo",
  description:
    "Crunch Privacy Policy. Privacy by design - all media processing happens locally on your Mac. Your files never leave your computer, and we don't collect, transmit, or store any of your media content.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - Crunch for macOS | byteoxo",
    description:
      "Privacy by design - all media processing happens locally on your Mac. Your files never leave your computer.",
    url: "https://byteoxo.dev/products/macos/crunch/privacy-policy",
  },
  twitter: {
    title: "Privacy Policy - Crunch for macOS | byteoxo",
    description:
      "Privacy by design - all media processing happens locally on your Mac. Your files never leave your computer.",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

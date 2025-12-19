import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Hub - Privacy-First AI Chat App for Android | byteoxo",
  description:
    "AI Hub is a privacy-first AI chat app for Android. Bring your own OpenRouter API key, access 100+ AI models, and enjoy intelligent conversations with complete privacy. Your key, your models, your data.",
  keywords: [
    "AI Hub",
    "AI chat app",
    "Android",
    "OpenRouter",
    "LLM",
    "ChatGPT alternative",
    "privacy-first",
    "byteoxo",
  ],
  openGraph: {
    title: "AI Hub - Privacy-First AI Chat App for Android",
    description:
      "Bring your own OpenRouter API key, access 100+ AI models, and enjoy intelligent conversations with complete privacy.",
    url: "https://byteoxo.dev/products/android/ai-hub",
  },
  twitter: {
    title: "AI Hub - Privacy-First AI Chat App for Android",
    description:
      "Bring your own OpenRouter API key, access 100+ AI models, and enjoy intelligent conversations with complete privacy.",
  },
};

export default function AIHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

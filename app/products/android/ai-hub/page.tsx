import type { Metadata } from 'next'
import { AIHubPageClient } from './ai-hub-client'

export const metadata: Metadata = {
    title: 'AI Hub - Privacy-First AI Chat App | byteoxo',
    description:
        'A privacy-first AI chat app for Android. Bring your own OpenRouter API key, access 100+ AI models, and enjoy intelligent conversations with complete privacy. Your key, your models, your data.',
    openGraph: {
        title: 'AI Hub - Privacy-First AI Chat App',
        description:
            'Bring your own OpenRouter API key, access 100+ AI models, and enjoy intelligent conversations with complete privacy.',
        url: 'https://byteoxo.dev/products/android/ai-hub',
    },
    twitter: {
        title: 'AI Hub - Privacy-First AI Chat App',
        description:
            'Bring your own OpenRouter API key, access 100+ AI models, and enjoy intelligent conversations with complete privacy.',
    },
}

export default function AIHubPage() {
    return <AIHubPageClient />
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Service - AI Hub | byteoxo',
    description:
        'AI Hub Terms of Service. Review the terms and conditions for using AI Hub, including service description, user responsibilities, acceptable use policy, intellectual property rights, and limitation of liability.',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Terms of Service - AI Hub | byteoxo',
        description:
            'Review the terms and conditions for using AI Hub, the privacy-first AI chat app for Android.',
        url: 'https://byteoxo.dev/products/android/ai-hub/terms-of-service',
    },
    twitter: {
        title: 'Terms of Service - AI Hub | byteoxo',
        description:
            'Review the terms and conditions for using AI Hub, the privacy-first AI chat app for Android.',
    },
}

export default function TermsOfServiceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}

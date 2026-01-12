import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Service - Shrinkr for macOS | byteoxo',
    description:
        'Shrinkr Terms of Service. Review the terms and conditions for using Shrinkr, including service description, license grant, acceptable use, intellectual property, disclaimers, and data safety recommendations.',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Terms of Service - Shrinkr for macOS | byteoxo',
        description:
            'Review the terms and conditions for using Shrinkr, the powerful media compression app for macOS.',
        url: 'https://byteoxo.dev/products/macos/Shrinkr/terms-of-service',
    },
    twitter: {
        title: 'Terms of Service - Shrinkr for macOS | byteoxo',
        description:
            'Review the terms and conditions for using Shrinkr, the powerful media compression app for macOS.',
    },
}

export default function TermsOfServiceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}

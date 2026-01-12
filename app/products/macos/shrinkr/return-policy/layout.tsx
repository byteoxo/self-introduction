import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Return Policy - Shrinkr for macOS | byteoxo',
    description:
        'Return Policy for Shrinkr macOS app. Information about Mac App Store refunds, subscription cancellations, and billing support.',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Return Policy - Shrinkr for macOS | byteoxo',
        description:
            'Return Policy for Shrinkr macOS app. Information about Mac App Store refunds and billing support.',
        url: 'https://byteoxo.dev/products/macos/Shrinkr/return-policy',
    },
    twitter: {
        title: 'Return Policy - Shrinkr for macOS | byteoxo',
        description:
            'Return Policy for Shrinkr macOS app. Information about Mac App Store refunds and billing support.',
    },
}

export default function ReturnPolicyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}

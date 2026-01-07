import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Return Policy - Crunch for macOS | byteoxo',
    description:
        'Return Policy for Crunch macOS app. Information about Mac App Store refunds, subscription cancellations, and billing support.',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Return Policy - Crunch for macOS | byteoxo',
        description:
            'Return Policy for Crunch macOS app. Information about Mac App Store refunds and billing support.',
        url: 'https://byteoxo.dev/products/macos/crunch/return-policy',
    },
    twitter: {
        title: 'Return Policy - Crunch for macOS | byteoxo',
        description:
            'Return Policy for Crunch macOS app. Information about Mac App Store refunds and billing support.',
    },
}

export default function ReturnPolicyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}

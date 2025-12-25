import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Products | byteoxo',
    description:
        "Explore byteoxo's collection of tools and applications: AI Hub for Android, Crunch for macOS, and Crunch CLI. Built with passion, performance, and user experience in mind.",
    openGraph: {
        title: 'Products | byteoxo',
        description:
            "Explore byteoxo's collection of tools and applications: AI Hub for Android, Crunch for macOS, and Crunch CLI.",
        url: 'https://byteoxo.dev/products',
    },
    twitter: {
        title: 'Products | byteoxo',
        description:
            "Explore byteoxo's collection of tools and applications: AI Hub for Android, Crunch for macOS, and Crunch CLI.",
    },
}

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}

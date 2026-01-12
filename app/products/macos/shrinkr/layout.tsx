import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Shrinkr - Powerful Media Compression for Mac | byteoxo',
    description:
        'Shrinkr is a native macOS media compression app. Compress images, videos, and audio files locally with Apple Silicon acceleration. Privacy-first, blazingly fast, batch processing with ZIP output.',
    keywords: [
        'Shrinkr',
        'media compression',
        'macOS',
        'Apple Silicon',
        'image compression',
        'video compression',
        'audio compression',
        'ffmpeg',
        'byteoxo',
    ],
    openGraph: {
        title: 'Shrinkr - Powerful Media Compression for Mac',
        description:
            'Compress images, videos, and audio files locally with Apple Silicon acceleration. Privacy-first and blazingly fast.',
        url: 'https://byteoxo.dev/products/macos/Shrinkr',
    },
    twitter: {
        title: 'Shrinkr - Powerful Media Compression for Mac',
        description:
            'Compress images, videos, and audio files locally with Apple Silicon acceleration. Privacy-first and blazingly fast.',
    },
}

export default function ShrinkrLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}

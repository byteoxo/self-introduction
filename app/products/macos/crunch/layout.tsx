import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Crunch - Powerful Media Compression for Mac | byteoxo',
    description:
        'Crunch is a native macOS media compression app. Compress images, videos, and audio files locally with Apple Silicon acceleration. Privacy-first, blazingly fast, batch processing with ZIP output.',
    keywords: [
        'Crunch',
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
        title: 'Crunch - Powerful Media Compression for Mac',
        description:
            'Compress images, videos, and audio files locally with Apple Silicon acceleration. Privacy-first and blazingly fast.',
        url: 'https://byteoxo.dev/products/macos/crunch',
    },
    twitter: {
        title: 'Crunch - Powerful Media Compression for Mac',
        description:
            'Compress images, videos, and audio files locally with Apple Silicon acceleration. Privacy-first and blazingly fast.',
    },
}

export default function CrunchLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}

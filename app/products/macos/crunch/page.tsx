import type { Metadata } from 'next'
import { CrunchPageClient } from './crunch-client'

export const metadata: Metadata = {
    title: 'Crunch - Native Media Compression for Mac | byteoxo',
    description:
        'Powerful media compression tool for macOS. Compress images, videos, and audio files locally with Apple Silicon optimization. Batch processing, privacy-first, blazingly fast.',
    openGraph: {
        title: 'Crunch - Native Media Compression for Mac',
        description:
            'Compress images, videos, and audio files locally with Apple Silicon optimization. Batch processing, privacy-first, blazingly fast.',
        url: 'https://byteoxo.dev/products/macos/crunch',
    },
    twitter: {
        title: 'Crunch - Native Media Compression for Mac',
        description:
            'Compress images, videos, and audio files locally with Apple Silicon optimization. Batch processing, privacy-first, blazingly fast.',
    },
}

export default function CrunchPage() {
    return <CrunchPageClient />
}

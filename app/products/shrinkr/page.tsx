import type { Metadata } from 'next'
import { ShrinkrPageClient } from './shrinkr-client'

export const metadata: Metadata = {
    title: 'Shrinkr - Native Media Compression for Mac | byteoxo',
    description:
        'Powerful media compression tool for macOS. Compress images, videos, and audio files locally with Apple Silicon optimization. Batch processing, privacy-first, blazingly fast.',
    openGraph: {
        title: 'Shrinkr - Native Media Compression for Mac',
        description:
            'Compress images, videos, and audio files locally with Apple Silicon optimization. Batch processing, privacy-first, blazingly fast.',
        url: 'https://byteoxo.dev/products/macos/Shrinkr',
    },
    twitter: {
        title: 'Shrinkr - Native Media Compression for Mac',
        description:
            'Compress images, videos, and audio files locally with Apple Silicon optimization. Batch processing, privacy-first, blazingly fast.',
    },
}

export default function ShrinkrPage() {
    return <ShrinkrPageClient />
}

import type { Metadata } from 'next'
import { ProductsPageClient } from './products-client'

export const metadata: Metadata = {
    title: 'Products | byteoxo - Full-Stack Developer & AI Enthusiast',
    description:
        'Explore my collection of tools and applications. AI-powered apps, media compression tools, and CLI utilities built with modern technologies.',
    openGraph: {
        title: 'Products | byteoxo',
        description:
            'Explore my collection of tools and applications. AI-powered apps, media compression tools, and CLI utilities.',
        url: 'https://byteoxo.dev/products',
    },
    twitter: {
        title: 'Products | byteoxo',
        description:
            'Explore my collection of tools and applications. AI-powered apps, media compression tools, and CLI utilities.',
    },
}

export default function ProductsPage() {
    return <ProductsPageClient />
}

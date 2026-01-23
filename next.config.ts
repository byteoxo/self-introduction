import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/products/android/ai-hub',
                destination: '/products/ai-hub',
                permanent: true,
            },
            {
                source: '/products/android/ai-hub/privacy-policy',
                destination: '/products/ai-hub/privacy-policy',
                permanent: true,
            },
            {
                source: '/products/android/ai-hub/terms-of-service',
                destination: '/products/ai-hub/terms-of-service',
                permanent: true,
            },
            {
                source: '/products/macos/shrinkr',
                destination: '/products/shrinkr',
                permanent: true,
            },
            {
                source: '/products/macos/shrinkr/privacy-policy',
                destination: '/products/shrinkr/privacy-policy',
                permanent: true,
            },
            {
                source: '/products/macos/shrinkr/terms-of-service',
                destination: '/products/shrinkr/terms-of-service',
                permanent: true,
            },
            {
                source: '/products/macos/shrinkr/return-policy',
                destination: '/products/shrinkr/return-policy',
                permanent: true,
            },
        ]
    },
}

export default nextConfig

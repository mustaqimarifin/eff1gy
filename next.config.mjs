/**
 * @type {import('next').NextConfig}
 */
export default {
    eslint: {
        ignoreDuringBuilds: true,
    },
    transpilePackages: ['react-tweet'],
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            { protocol: 'https', hostname: '*.twimg.com', pathname: '/**' },
            { protocol: 'https', hostname: 'i.postimg.cc', pathname: '/**' },
            { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/**' },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
                pathname: '/**',
            },
        ],
        dangerouslyAllowSVG: true,
    },
}

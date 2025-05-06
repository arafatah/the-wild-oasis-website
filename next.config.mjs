/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dlctrxppsskpzoexjsoj.supabase.co',
                pathname: '/storage/v1/object/public/cabin-img/**',
            },
            {
                protocol: 'https',
                hostname: 'dlctrxppsskpzoexjsoj.supabase.co',
                pathname: '/storage/v1/object/public/cabin-images/**',
            },
        ],
    },
};

export default nextConfig;

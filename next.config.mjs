/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://dlctrxppsskpzoexjsoj.supabase.co/storage/v1/object/public/cabin-img/**"
      ),
    ],
  },
};

export default nextConfig;

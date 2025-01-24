/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
    async redirects() {
        return [
            // Basic redirect
            {
                source: '/',
                destination: '/login',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;

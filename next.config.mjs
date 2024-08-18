/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
                pathname: '/t/p/**'
            }
            // {
            //     protocol: 'https',
            //     hostname: 'image.tmdb.org',
            //     port: '',
            //     pathname: '/t/p/w400/**'
            // },
            // {
            //     protocol: 'https',
            //     hostname: 'image.tmdb.org',
            //     port: '',
            //     pathname: '/t/p/w200/null'
            // },
            // {
            //     protocol: 'https',
            //     hostname: 'image.tmdb.org',
            //     port: '',
            //     pathname: '/t/p/w400/null'
            // }
        ]
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    formats: ['image/webp'],
    domains: ['https://via.placeholder.com',
      'https://placeholder.com/',
      'https://jirehtropical.s3.amazonaws.com/',
      'https://jirehtropical.s3.amazonaws.com'
    ],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: '/semicode',
        destination: 'https://unstop.com/hackathons/acm-semicode-mukesh-patel-school-of-technology-management-and-engineering-nmims-mumbai-1365088',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

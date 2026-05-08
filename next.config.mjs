/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: {
    autoPrerender: false,
    buildActivity: false, // отключает индикатор сборки
  },
}

export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimizações de imagem
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // Otimizações de performance
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },

  // Compressão e otimização
  compress: true,
  poweredByHeader: false,
  generateEtags: false,

  // Headers de segurança e performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=300, stale-while-revalidate=600",
          },
        ],
      },
    ];
  },

  // Redirecionamentos para SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/marketing",
        destination: "/#servicos",
        permanent: true,
      },
      {
        source: "/facebook-ads",
        destination: "/#servicos",
        permanent: true,
      },
      {
        source: "/google-ads",
        destination: "/#servicos",
        permanent: true,
      },
      {
        source: "/sobre",
        destination: "/#sobre",
        permanent: true,
      },
      {
        source: "/depoimentos",
        destination: "/#depoimentos",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/#faq",
        permanent: true,
      },
      {
        source: "/contato",
        destination: "/#contato",
        permanent: true,
      },
    ];
  },

  // Rewrites para URLs amigáveis
  async rewrites() {
    return [
      {
        source: "/facebook-ads",
        destination: "/#servicos",
      },
      {
        source: "/google-ads",
        destination: "/#servicos",
      },
      {
        source: "/marketing-digital",
        destination: "/#servicos",
      },
      {
        source: "/social-media",
        destination: "/#servicos",
      },
      {
        source: "/resultados",
        destination: "/#depoimentos",
      },
      {
        source: "/casos-sucesso",
        destination: "/#depoimentos",
      },
      {
        source: "/consultoria-gratuita",
        destination: "/#contato",
      },
    ];
  },

  // Bundle analyzer (opcional)
  webpack: (config, { dev, isServer }) => {
    // Otimizações para produção
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          common: {
            name: "common",
            minChunks: 2,
            chunks: "all",
            enforce: true,
          },
        },
      };
    }

    return config;
  },
};

module.exports = nextConfig;

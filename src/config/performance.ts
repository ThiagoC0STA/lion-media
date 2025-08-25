export const performanceConfig = {
  // Otimizações de imagem
  images: {
    formats: ["webp", "avif"],
    sizes: {
      hero: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      testimonial: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      service: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    },
    quality: 85,
    priority: ["hero", "logo", "favicon"],
  },

  // Preload de recursos críticos
  preload: ["/fonts/inter-var.woff2", "/lion.png", "/results.png"],

  // Prefetch de páginas importantes
  prefetch: ["/politica-privacidade", "/termos-uso", "/contato"],

  // Lazy loading
  lazyLoad: ["testimonials", "services", "about", "faq"],

  // Cache strategies
  cache: {
    static: "public, max-age=31536000, immutable",
    dynamic: "public, max-age=3600, must-revalidate",
    api: "public, max-age=300, stale-while-revalidate=600",
  },

  // Compression
  compression: {
    gzip: true,
    brotli: true,
    minify: {
      html: true,
      css: true,
      js: true,
    },
  },

  // Critical CSS
  criticalCSS: ["globals.css", "components.css"],

  // Service Worker
  serviceWorker: {
    enabled: true,
    scope: "/",
    cacheName: "lion-media-v1",
    strategies: {
      cacheFirst: ["images", "fonts", "static"],
      networkFirst: ["api", "pages"],
      staleWhileRevalidate: ["css", "js"],
    },
  },

  // PWA
  pwa: {
    name: "Lion Media - Marketing Digital",
    shortName: "Lion Media",
    description: "Agência de Marketing Digital #1 com ROI de 400%",
    themeColor: "#c28a32",
    backgroundColor: "#000000",
    display: "standalone",
    orientation: "portrait",
    startUrl: "/",
    scope: "/",
    icons: [
      {
        src: "/lion.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/lion.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  // Analytics e tracking
  analytics: {
    googleAnalytics: {
      id: "G-XXXXXXXXXX",
      anonymizeIp: true,
      respectDnt: true,
    },
    googleTagManager: {
      id: "GTM-XXXXXXX",
    },
    facebookPixel: {
      id: "123456789",
    },
    hotjar: {
      id: "1234567",
    },
  },

  // SEO técnico
  seo: {
    canonical: true,
    hreflang: [
      { lang: "pt-BR", url: "https://lionmediadigital.com" },
      { lang: "en", url: "https://lionmediadigital.com/en" },
      { lang: "es", url: "https://lionmediadigital.com/es" },
    ],
    structuredData: true,
    sitemap: true,
    robots: true,
    openGraph: true,
    twitterCards: true,
  },

  // Performance monitoring
  monitoring: {
    webVitals: true,
    coreWebVitals: true,
    performanceObserver: true,
    errorTracking: true,
    userExperience: true,
  },
};

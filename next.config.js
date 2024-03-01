const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"))

    // Push custom SVG handling rules
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    )

    // Exclude *.svg from the existing file loader rule
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },

  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig

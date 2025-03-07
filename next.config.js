const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  devIndicators: false,
  webpack(config) {
    const warning = [
      ...(config.ignoreWarnings || []),
      { module: /typeorm/ },
      {
        module: /app-root-path/,
        message: /the request of a dependency is an expression/,
      },
    ];
    config.ignoreWarnings = warning;
    return config;
  },
});

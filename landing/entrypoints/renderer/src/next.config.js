module.exports = {
  env: {
    GQL_URI: process.env.GQL_URI,
  },
  experimental: {
    externalDir: true,
    swcFileReading: false,
    workerThreads: true,
    esmExternals: 'loose',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

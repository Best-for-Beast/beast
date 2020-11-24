const production = !process.env.ROLLUP_WATCH
module.exports = {
  future: {
    // for tailwind 2.0 compatibility
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ['./src/**/*.svelte', './public/index.html'],
    enabled: production,
  },
}

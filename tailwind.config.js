const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

module.exports = {
  content: [
    './docs/.vitepress/theme/**/*.{js,vue,ts,json,md}',
    './docs/.vitepress/config.js',
    './docs/**/*.md',
  ],
  darkMode: 'class',
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      // You can also ignore this option to automatically discover all icon collections you have installed
      collections: getIconCollections(['mdi']),
    }),
  ],
}

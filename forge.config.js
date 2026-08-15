module.exports = {
  packagerConfig: {
    asar: true
  },
  rebuildConfig: {},
  plugins: [
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './src/renderer/index.html',
              js: './src/renderer/renderer.tsx',
              name: 'main_window'
            }
          ]
        }
      }
    }
  ]
};

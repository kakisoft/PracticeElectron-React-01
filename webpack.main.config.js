module.exports = {
  /**
   * ElectronメインプロセスのTypeScriptソースエントリ。
   * ForgeがElectron起動前に.webpack/mainへビルドする。
   */
  entry: './src/main/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
  }
};

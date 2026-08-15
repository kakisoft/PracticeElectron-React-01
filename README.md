# PracticeElectron-01

Electron Forge + Webpack + React 17 + TypeScript の学習用サンプルです。

## 起動

```powershell
npm install
npm run dev
```

`npm run dev`では、Electron ForgeがWebpackを起動し、TypeScriptを開発用成果物へビルドしてからElectronを起動します。レンダラープロセスはHMRに対応します。

## パッケージ生成

```powershell
npm run build
```

パッケージ成果物は`out/`に生成されます。

## エントリ構成

- `package.json`の`main`: `.webpack/main`（Electronが実行するWebpack成果物）
- `webpack.main.config.js`の`entry`: `src/main/main.ts`（メインプロセスのTypeScriptソース）
- `forge.config.js`: Electron ForgeとWebpack Pluginの統合設定
- `src/renderer/renderer.tsx`: Reactレンダラーのソースエントリ

`.webpack/`はForgeが開発起動時に生成するため、Gitでは管理しません。

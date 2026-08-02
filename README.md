# PracticeElectron-01

Electron + React の学習用サンプルです。  
用途は「学習のための超シンプルな雛形」です。

## 構成
- Electron
- React 17
- 最小限の UI
- メインプロセスとレンダラープロセスの基本を体験しやすい構成

## 使い方
1. 依存関係をインストールする
   - npm install
2. アプリを起動する
   - npm start

## 画面内容
- ボタンを押すと React の state が変わる
- 学習後に捨てやすいように、機能は最小限です

## 学習ポイント
- main.js: Electron のメインプロセス
- index.html: 画面の土台
- renderer.js: React で描画する内容
- styles.css: 見た目の調整

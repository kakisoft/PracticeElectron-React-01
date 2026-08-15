## Electron
https://chatgpt.com/g/g-p-6a3958fd19d08191a19479103a10980e-work/c/6a620211-5408-83ee-8c73-ff79484fd5ca

Webブラウザ(Chromium)をアプリの中に丸ごと入れたもの。  
なので、React・Svelte・Vue・素のJavaScript・TypeScript、全部そのまま使える。  

```
┌────────────────────────────┐
│ Windows / macOS / Linux    │
└────────────┬───────────────┘
             │
        Electron アプリ
             │
    ┌────────┴────────┐
    │                 │
Main Process      Renderer Process
(Node.js)         (Chromium)
    │                 │
    │          HTML / CSS / JS
    │          React / Svelte
    │          Vue
    │
ファイル操作
DB
OS機能
```

### Main Process（バックエンド）
Node.js が動いている。

### Renderer Process（フロントエンド）
Electronは内部でChromiumを起動している。

つまり
```html
<body>
  <div id="app"></div>
</body>
```
を表示しているだけ。



## IPC（Inter-Process Communication）
MainプロセスとRendererプロセスが通信するための仕組み。

```
+--------------------+
| Main Process       |
| (Node.js)          |
|                    |
| ファイル操作        |
| OS操作             |
| ウィンドウ管理      |
+---------▲----------+
          │ IPC
          ▼
+--------------------+
| Renderer Process   |
| (Chromium)         |
|                    |
| HTML/CSS/JS        |
| ボタンや画面        |
+--------------------+

```



## 


| カテゴリ        | 技術                                          | バージョン         |
| ----------- | ------------------------------------------- | ------------- |
| デスクトップ      | Electron                                    | 17.4.9        |
| ビルド         | Electron Forge + Webpack                    | 6.0.3         |
| 言語          | TypeScript                                  | 4.4.3         |
| UI          | React                                       | 17.0.2        |
| ルーティング      | react-router-dom                            | v5            |
| 状態管理        | Redux Toolkit                               | 1.6.x         |
| フォーム        | react-hook-form + yup                       | 7.x / 0.32.x  |
| スタイル        | CSS Modules (typescript-plugin-css-modules) | —             |
| ローカルDB      | better-sqlite3 + TypeORM                    | 7.5.x / 0.2.x |
| HTTPクライアント  | axios + axios-retry                         | 0.21.x        |
| APIコード生成    | openapi-generator-cli                       | 2.4.x         |
| IPC         | Electron IPC（型安全ラッパー）                       | -     |
| 帳票          | Stimulsoft Reports JS                       | 2021.4.3      |
| .NET連携      | electron-edge-js + edge-cs                  | 17.x / 1.2.x  |
| エラー監視       | @sentry/electron                            | 3.0.x         |
| テスト         | Jest + React Testing Library                | 27.x          |
| 数値計算        | big.js                                      | 6.x           |
| パターンマッチ     | ts-pattern                                  | 3.3.x         |
| 日付処理        | dayjs                                       | 1.10.x        |
| PDF操作       | pdf-lib                                     | 1.17.x        |
| 画像処理        | jimp                                        | 0.22.x        |
| シリアルポート     | serialport                                  | 9.2.x         |
| ユニークID      | ulid                                        | 2.3.x         |
| XML解析       | fast-xml-parser                             | 4.0.x         |
| DnD         | react-beautiful-dnd                         | 13.x          |
| XSSサニタイズ    | dompurify                                   | 3.0.x         |
| Lint/Format | ESLint + Prettier                           | —             |


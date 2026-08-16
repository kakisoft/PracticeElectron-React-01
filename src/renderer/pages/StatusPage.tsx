import * as React from 'react';

export function StatusPage(): JSX.Element {
  return (
    <section className="page-panel">
      <p className="page-label">MENU 02</p>
      <h1>システムステータス</h1>
      <p>アプリケーションの現在の状態です。</p>
      <div className="status-card">
        <span className="status-dot" aria-hidden="true" />
        <div>
          <strong>正常に稼働中</strong>
          <p>すべてのサービスを利用できます。</p>
        </div>
      </div>
      <dl className="details-list">
        <div><dt>接続</dt><dd>オンライン</dd></div>
        <div><dt>最終確認</dt><dd>たった今</dd></div>
        <div><dt>バージョン</dt><dd>1.0.0</dd></div>
      </dl>
    </section>
  );
}

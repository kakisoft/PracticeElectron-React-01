import * as React from 'react';

export function SettingsPage(): JSX.Element {
  const [notifications, setNotifications] = React.useState(true);
  const [compactMode, setCompactMode] = React.useState(false);

  return (
    <section className="page-panel">
      <p className="page-label">MENU 03</p>
      <h1>設定</h1>
      <p>アプリケーションの表示を変更できます。</p>
      <div className="settings-list">
        <label className="setting-row">
          <span>
            <strong>通知を表示</strong>
            <small>更新情報を画面に表示します。</small>
          </span>
          <input
            checked={notifications}
            onChange={(event) => setNotifications(event.target.checked)}
            type="checkbox"
          />
        </label>
        <label className="setting-row">
          <span>
            <strong>コンパクト表示</strong>
            <small>一覧の余白を小さくします。</small>
          </span>
          <input
            checked={compactMode}
            onChange={(event) => setCompactMode(event.target.checked)}
            type="checkbox"
          />
        </label>
      </div>
    </section>
  );
}

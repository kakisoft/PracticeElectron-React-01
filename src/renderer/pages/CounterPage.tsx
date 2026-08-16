import * as React from 'react';

export function CounterPage(): JSX.Element {
  const [count, setCount] = React.useState(0);

  return (
    <section className="page-panel">
      <p className="page-label">MENU 01</p>
      <h1>Electron + React 17</h1>
      <p>学習用サンプル</p>
      <div className="card counter-card">
        <p className="count">カウント: {count}</p>
        <button className="primary-button" onClick={() => setCount(count + 1)} type="button">
          カウントアップ
        </button>
      </div>
      <p className="hint">ボタンを押すとReactの状態が変わります。</p>
    </section>
  );
}

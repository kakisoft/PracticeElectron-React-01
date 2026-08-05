import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App(): JSX.Element {
  const [count, setCount] = React.useState(0);

  return (
    <div className="app">
      <h1>Electron + React 17</h1>
      <p>学習用サンプル</p>
      <div className="card">
        <p className="count">カウント: {count}</p>
        <button onClick={() => setCount(count + 1)}>カウントアップ</button>
      </div>
      <p className="hint">ボタンを押すと React の状態が変わります。</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

(function () {
  function App() {
    const [count, setCount] = React.useState(0);

    return React.createElement(
      'div',
      { className: 'app' },
      React.createElement('h1', null, 'Electron + React 17'),
      React.createElement('p', null, '超シンプルな学習用サンプルです。'),
      React.createElement(
        'div',
        { className: 'card' },
        React.createElement('p', { className: 'count' }, `カウント: ${count}`),
        React.createElement('button', { onClick: () => setCount(count + 1) }, 'カウントアップ')
      ),
      React.createElement('p', { className: 'hint' }, 'ボタンを押すと React の状態が変わります。')
    );
  }

  ReactDOM.render(React.createElement(App), document.getElementById('root'));
})();

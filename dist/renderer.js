"use strict";
function App() {
    const [count, setCount] = React.useState(0);
    return (React.createElement("div", { className: "app" },
        React.createElement("h1", null, "Electron + React 17"),
        React.createElement("p", null, "\u5B66\u7FD2\u7528\u30B5\u30F3\u30D7\u30EB"),
        React.createElement("div", { className: "card" },
            React.createElement("p", { className: "count" },
                "\u30AB\u30A6\u30F3\u30C8: ",
                count),
            React.createElement("button", { onClick: () => setCount(count + 1) }, "\u30AB\u30A6\u30F3\u30C8\u30A2\u30C3\u30D7")),
        React.createElement("p", { className: "hint" }, "\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068 React \u306E\u72B6\u614B\u304C\u5909\u308F\u308A\u307E\u3059\u3002")));
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

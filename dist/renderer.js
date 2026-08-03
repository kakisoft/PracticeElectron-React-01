"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const ReactDOM = __importStar(require("react-dom"));
function App() {
    const [count, setCount] = React.useState(0);
    return (React.createElement("div", { className: "app" },
        React.createElement("h1", null, "Electron + React 17"),
        React.createElement("p", null, "TypeScript \u3067\u66F8\u304D\u76F4\u3057\u305F\u5B66\u7FD2\u7528\u30B5\u30F3\u30D7\u30EB\u3067\u3059\u3002"),
        React.createElement("div", { className: "card" },
            React.createElement("p", { className: "count" },
                "\u30AB\u30A6\u30F3\u30C8: ",
                count),
            React.createElement("button", { onClick: () => setCount(count + 1) }, "\u30AB\u30A6\u30F3\u30C8\u30A2\u30C3\u30D7")),
        React.createElement("p", { className: "hint" }, "\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068 React \u306E\u72B6\u614B\u304C\u5909\u308F\u308A\u307E\u3059\u3002")));
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

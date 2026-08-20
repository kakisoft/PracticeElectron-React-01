# useEffect
特定のイベントが起こったら、それをトリガーに何かをする、と言う仕組み。  
バニラJSで言うイベントリスナー。  
（例）： 変数 count が変更されたら、その変更を検知して何か処理をする。  
```ts
const [count, setCount] = React.useState(0);

React.useEffect(() => {
  console.log(`countが${count}になった`);
}, [count]);
```
※↑countに変更が無い場合でも、１回はコールされる。


引数が無い場合、init処理。（慣用句みたいなもの）
```ts
React.useEffect(() => {
  console.log("画面が表示された！");
}, []);
```

＜型指定＞
```ts
React.useState<PageId>('counter')

export type PageId = 'counter' | 'status' | 'settings';
```


# useState
変更内容をリアルタイムで画面に反映する機能。  
（値を保持し、変更内容をリアルタイムで画面に反映する機能。）  
```ts
const [count, setCount] = React.useState(0);

<button onClick={() => setCount(count + 1)} type="button">
```

```
const [count, setCount] = React.useState(0);
```
このコードで、
```
function setCount{

}
```
が定義されたと同等。（概念上）


＜JSの妙な部分（個人的に）＞  
onClick に関数を指定できるが、引数が必要な関数は指定できない。  
そのため、引数が必要な関数を指定したい場合、匿名関数でラップするといった工夫をする必要がある。（個人的には超不満）  
```ts
onClick={setCount(count + 1)}  //NG
onClick={() => setCount(count + 1)}
```

＜JSのルール＞
関数に「()」を付けるか付けないかで、意味が変わる。  
```ts
onClick={countUp}    // クリック時にcountUpを実行
onClick={countUp()}  // 描画時にcountUpを即実行
```


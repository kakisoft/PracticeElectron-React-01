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



# useCallback
コンポーネント再描画の時、関数を使い回して処理速度を早くする。  


# useMemo
↑と同じ。useCallback でできる事は useMemo でもできる。  
クラスごと作り直すか、インスタンス変数だけを作り直すかの違い。  

補足：React の欠陥をカバーするために人間が手間かけて書く構文。（超乱暴な要約）  
何か凄い事をしているような説明があちこちで見られるが、結局そんな感じ。  
特に useCallback なんて、「プライベート変数書き換えるだけなのに、クラスごと作り直すとか何事？」と言う感じだし、そもそもクラスとインスタン変数を一緒くたにして保持するとか意味不明だし。  

最近は、React Compiler のおかげで少しはマシになっているらしい。  

***備考：***  
console.log(val);  
↑こんな感じでメッセージを可変にして渡す方法が存在しないので、仕方なく↓のような方法を取っている。  
console.log("Hello");  
console.log("World");  
そのため、「関数を書き換えて渡す」という所作が必要になっている。  



# hook / Hook
「状態が変わったら、自動で画面を書き換えたい」

 * useState
 * useReduce
 * useEffect
 * useContext
 * useRef

Reducer を実現するライブラリが Redux


# Reducer
「現在の状態（State）」と「命令（Action）」を受け取り、「新しい状態」を返して更新する。



PHPにすると、こんな感じ。
```php
function reducer(int $currentCount, string $action, int $value = 0): int
{
  switch ($action) {
    case 'ADD':
      return $currentCount + $value;
    case 'SUB':
        return $currentCount - $value;
      default:

    return $currentCount;
  }
}

// 実行
$count = 0;

$count = reducer($count, 'ADD', 10); // 10
$count = reducer($count, 'SUB', 3); // 7
```

正直、「$action」の部分はメソッドにした方がいい気がするが、React の画面更新検知メカニズムが大雑把すぎるんでこうなった。（乱暴な要約）

# mutate
update
React の状態変化検知イベントが発火しない

# Immutable
delete insert
React は「アドレスが変わっていないから、データは変更されていない」と判断するため、こういう事をする必要がある。
対義語である「mutate」に対し、こっちは形容詞。
「Immutableにする」と動詞化させる必要がある。何やねんこの名称。


# action.payload
ペイロード。マジでただのペイロード。
~こじらせて~歴史的経緯で余計な接頭語が付くようになった。


# モジュールスコープ
ファイル直下に書いたグローバル変数


# Promise
非同期処理。
一度非同期処理が完了（resolve）して値が確定すると


# useReducer
useStateの上位互換


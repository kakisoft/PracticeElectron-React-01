Redux > Store

__________________
Redux - 巨大倉庫

Store   - 倉庫全体
slice   - 部署
state   - 部署の中の荷物
reducer - 倉庫作業員。           （≒ メソッド）
action  - 部署で何するかという内容（≒ メソッド。部署の中で作業員がいて、それが何するか） -> APIコール


無理してバックエンドで理解しない。


state - 複数保持？

class Albuls

albumInstance01 = new Albuls("santiano")
albumInstance02 = new Albuls("aaa")


'------------
state - こういうのがいっぱい入ってる。
albumInstance01 = new Albuls("santiano")
albumInstance02 = new Albuls("aaa")
'------------


```js
const cartSlice = createSlice({
  name: "albums",
  initialState: [
    name : " ",
    cover: " "
    //↑がコメントの状態はある
  ],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },


    add(state, action) {
      state.push(action.payload);
    },
    // state  - レスポンス（受け取る値）
    // action - 受け取ったものをどうするか


    // ToDo - レスポンスをもらう。-> プロパティに値をセットする
    add(state) {
      this.name  = state.cover;
      this.cover = state.cover;
    },


    add(state, action) {
      state.push(action.payload);
    },
    // state  - レスポンス（受け取る値）
    // action - 受け取ったものをどうするか　-> API

    // action → POST /api/albums/
    // payload - name:Santiano best
    // state - 一次的にあるデータ



    setAlbum {
        this.name  = ret.name
        this.cover = cover.name
    },
    setName {
        this.name = name
    }
    setArtistId {
        this.artist_id = artist_id  // ↑ initialState に宣言されていなくても、プロパティ artist_id を使用できる。
    }
  }
});
```

プロジェクトによって、定義する人としない人が居る。




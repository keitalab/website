# Website
研究室のWebサイト

## 主なファイル構造
### いじるとこ
- `sass`: cssを便利に書ける`sass`のファイルを入れるところ
- `src`: htmlを便利に書ける`nunjucks`のファイルを入れるところ
- `font`: フォントを入れるところ
- `js`: JSファイルを入れるところ

### いじらないところ
- `css`: sassから生成されたcssファイルが入るところ
- `node_modules`: node.jsのパッケージがインストールされる場所
- ルートのhtmlファイル: nunjucksで生成するのでいじりたければ`src`をいじろう

## 開発の準備
- Node.jsいれましょう
- gitいれましょう

### Node.jsのインストール
- 各位ググってくれ!!
- nodebrewを使うのがおすすめ
- Macの人は[Homebrew](brew.sh)を入れて...

```
$ brew install nodebrew
$ nodebrew install latest
$ nodebrew use latest
$ node -v
```

- これでちゃんとバージョンが出ればOK

### gitのインストール，repo clone
- Macの人はgit入ってるはず．

```
$ git clone git@github.com:keitalab/website.git
```

### NPM packagesのinstall
- 開発に必要なあれこれをいれよう．
- gulpなど諸々がはいります．

```
$ npm i
```

これで準備完了!

## コマンド集
### いまのとこ使えるコマンド
- `npm run watch`: ファイルの変更を監視して保存したらhtmlとかcss生成
- `npm run nunjucks`: `src/`の中身をhtmlとして変換しルートに置く
- `npm run sass`: `sass/`の中身をhtmlとして変換し`css/`に置く

### 後で増える予定のコマンド
- `npm run dev`: 開発用
  - `npm run watch`の機能をベースに
  - `live-reload`できるようにする

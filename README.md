# Website
研究室のWebサイト

## 主なファイル構造
### いじるとこ
- `dist`: 実際に公開するファイルを入れておく．
  - `npm run build` するとここが更新される．
  - `npm run watch` しても同様．
  - `npm run publish` すると公開できる．
- `sass`: cssを便利に書ける`sass`のファイルを入れるところ
- `pages`: htmlを便利に書ける`nunjucks`のファイルを入れるところ
- `font`: フォントを入れるところ
- `js`: JSファイルを入れるところ
- `image`: 画像を入れるところ

### いじらないところ
- `node_modules`: node.jsのパッケージがインストールされる場所

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

## ワークフロー

1. `$ npm run watch`
2. 適当に編集．
3. `$ git push origin master`
  a. 自動でwerckerがpushします

## コマンド集
### いまのとこ使えるコマンド
- `npm run watch`: ファイルの変更を監視して保存したらhtmlとかcss生成
- `npm run nunjucks`: `pages/`の中身をhtmlとして変換しルートに置く
- `npm run sass`: `sass/`の中身をhtmlとして変換し`css/`に置く
- `npm run build`: `dist/`の中身を更新

### 後で増える予定のコマンド
- `npm run dev`: 開発用
  - `npm run watch`の機能をベースに
  - `live-reload`できるようにする

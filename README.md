# Website
研究室のWebサイト

## 開発する
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

### 使えるコマンド
- ここに色々コマンドをかく．いまは`npm run sass`だけ
  - livereloadとかあとで

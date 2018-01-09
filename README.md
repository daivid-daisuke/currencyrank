# currency-rank-log

## 概要

ちょっと依頼されて作ってみたアプリです。  
このリポジトリを覗いても嬉しいことは何もないと思います。

## 挙動

[CoinMarketCap](https://coinmarketcap.com/) の [API](https://coinmarketcap.com/api/) を利用して仮想通貨の相場を表示します。  
システムトレイに常駐して 5 時間ごとにリフレッシュします。  
リフレッシュ時に各通貨のランキングを TSV 形式で ranks.tsv へ追記します。

## 使い方

* 依存関係のインストール（初回のみ）

```
npm i
```

* 起動

```
npm start
```

* 終了

システムトレイアイコンをクリックしてメニューから「Quit」を選択します。

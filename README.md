# docker-rpi-node-api

RaspberryPi(64bit)に Docker で Express/NodeJS の API サーバを構築

## 環境

- kernel：Linux ホスト名 5.15.32-v8+ #1538 SMP PREEMPT Thu Mar 31 19:40:39 BST 2022 aarch64 GNU/Linux
- OS：Debian GNU/Linux 11 (bullseye)

## Docker コマンド

```bash
# Docker-compose実行
$ docker-compose up -d --build

# Docker コンテナ確認
$ docker ps

# Docker イメージ確認
$ docker images

# Docker コンテナの中に入る
$ docker exec -it [コンテナID] bash

# dokcer-composeのリビルド
$ docker-compose up -d --build  --force-recreate

# dokcer-composeの一括削除（滅びの呪文）
$ docker-compose down --rmi all --volumes --remove-orphans
```

## API の呼び出し方

```js
http://[サーバIP]:3000/api/v1/helloworld-aaa
http://[サーバIP]:3000/api/v1/helloworld-bbb
```

## 参考サイト

dockerfile の書き方

- [Node.js で作成した REST API を Docker 化](https://tech-blog.s-yoshiki.com/entry/249)
- [Node.js Web アプリケーションを Docker 化する](https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/)

dokcer-compose の書き方

- [Docker で Node.js アプリケーションを開発する (1) Express.js をコンテナ内で動かす](https://ishida-it.com/blog/post/2019-11-21-docker-nodejs/)

エラー：Cannot find module 'express'の対処方法

- [Cannot find module 'express' | docker で Node.js](https://qiita.com/nikoro/items/13d08056063f334df911)
- [node_modules/ and Docker volume mount 問題と対策](https://castaneai.hatenablog.com/entry/2019/01/29/151257)

API サーバのフォルダ構成

- [サルでも分かる Express での jsonAPI サーバーの作り方](https://qiita.com/ngmr_mo/items/73cc7160d002a4989416)

## ライセンス

- [MIT ライセンス](https://licenses.opensource.jp/MIT/MIT.html)

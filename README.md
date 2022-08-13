# DockerBuild-RaspberryPi-ExpressApi
RaspberryPi(64bit)にDockerでExpress/NodeJSのAPIサーバを構築

## 環境
- kernel：Linux ホスト名 5.15.32-v8+ #1538 SMP PREEMPT Thu Mar 31 19:40:39 BST 2022 aarch64 GNU/Linux
- OS：Debian GNU/Linux 11 (bullseye)

## Dockerコマンド
```bash
# Docker-compose実行
$ docker-compose up -d

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

## 参考サイト
- [Node.js で作成した REST API を Docker化](https://tech-blog.s-yoshiki.com/entry/249)
- [Node.js Web アプリケーションを Docker 化する](https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/)
- [Cannot find module 'express' | dockerでNode.js](https://qiita.com/nikoro/items/13d08056063f334df911)
- [node_modules/ and Docker volume mount 問題と対策](https://castaneai.hatenablog.com/entry/2019/01/29/151257)
- [DockerでNode.jsアプリケーションを開発する (1) Express.jsをコンテナ内で動かす]( https://ishida-it.com/blog/post/2019-11-21-docker-nodejs/)


## ライセンス
- [MITライセンス](https://licenses.opensource.jp/MIT/MIT.html)

# typescript-tutorial

#### TypeScript 学習記録

<p>
参考書籍: プロを目指す人 TypeScript入門</br>
学習環境: Docker
</p>

```bash
# bash

# 起動用
$ docker-compose up --build

# 停止用
$ docker-compose down -v

# tsc 実行コマンド
$ docker-compose run --rm app npx ts
$ docker-compose run --rm app npx tsc src/file_01/p_01.ts --outDir dist
$ docker-compose run --rm app node dist/index.js

# 簡略版(上から順番に実行)
$ bash npx.sh file_01/p_01.ts
$ bash node.sh p_01.js
```

#!/bin/bash
# TypeScriptのビルドと実行をまとめて行うスクリプト

if [ $# -eq 0 ]; then
  echo "実行するjsファイル名を指定してください。"
  exit 1
fi

JS_FILE="dist/$1"

docker-compose run --rm app node "$JS_FILE"
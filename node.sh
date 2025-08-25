#!/bin/bash
# TypeScriptのビルドと実行をまとめて行うスクリプト

if [ $? -eq 0 ]; then
  docker-compose run --rm app node dist/
else
  echo "TypeScriptのビルドに失敗しました。"
  exit 1
fi

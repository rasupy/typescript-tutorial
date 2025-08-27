#!/bin/bash
# TypeScriptのビルドと実行をまとめて行うスクリプト

if [ -z "$1" ]; then
    echo "TypeScriptファイルのパスを指定してください。"
    exit 1
else
    TS_FILE="$1"
    docker-compose run --rm app npx tsc src/$TS_FILE --outDir dist
fi


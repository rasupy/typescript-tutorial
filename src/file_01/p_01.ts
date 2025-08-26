import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("文字列を入力してください:", (line: string) => {
  // 入力された文字列を表示
  console.log(`入力された文字列: ${line}`);
  rl.close();
});

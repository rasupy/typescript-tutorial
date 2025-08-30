import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("数値を入力してください:", (line) => {
  const num = Number(line);

  if (0 <= num && num < 100) {
    console.log(`${num}は0以上100未満です`);
  } else {
    console.log(`${num}は0以上100未満ではありません`);
  }
  rl.close();
});

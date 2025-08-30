import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("パスワードを入力してください:", (password) => {
  if (password === "hogehoge") {
    console.log("ようこそ！");
  } else {
    console.log("誰？");
  }
  rl.close();
});

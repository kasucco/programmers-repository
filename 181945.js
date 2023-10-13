const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  const array = str.split("");
  const newArray = array.map((o) => o + `\n`);
  console.log(newArray.join(""));
});

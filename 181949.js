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
  const array = [...str].map((o) =>
    o.match(new RegExp(/^[A-Z]/)) ? o.toLowerCase() : o.toUpperCase()
  );
  console.log(array.join(""));
});

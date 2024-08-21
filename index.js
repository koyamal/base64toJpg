const fs = require('fs');
const readline = require('readline');

const rs = fs.createReadStream('images/base64.txt');
const rl = readline.createInterface({
  input: rs,
});

const line_counter = ((i = 0) => () => ++i)();
rl.on('line', (lineString, lineno = line_counter()) => {
  const base64Str = lineString.replace("data:image/jpeg;base64,","");
  fs.promises.writeFile(`images/${lineno}.jpg`, base64Str, { encoding: "base64" });
});
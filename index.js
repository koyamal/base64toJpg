const fs = require('fs');
const readline = require('readline');

const headText = process.argv[2];

fs.mkdir(`images/${headText}`, (err) => {
  if(err) {
    console.log(err);
    return;
  }
});

const rs = fs.createReadStream(`images/${headText}.txt`);
const rl = readline.createInterface({
  input: rs,
});

const line_counter = ((i = 0) => {
  return () => {
    return ++i;
  }
})();

rl.on('line', (lineString, lineno = line_counter()) => {
  const base64Str = lineString.replace("data:image/jpeg;base64,","");
  fs.promises.writeFile(`images/${headText}_${lineno}.jpg`, base64Str, { encoding: "base64" });
});
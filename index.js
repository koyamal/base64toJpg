const fs = require('fs');
const readline = require('readline');

const rs = fs.createReadStream('images/base64.txt');
const rl = readline.createInterface({
  //読み込みたいストリームの設定
    input: rs,
  });

  const line_counter = ((i = 0) => () => ++i)();
  rl.on('line', (lineString, lineno = line_counter()) => {
    //wsに一行ずつ書き込む
    console.log(lineString[0]);
    const base64Str = lineString.replace("data:image/jpeg;base64,","");
    fs.promises.writeFile(`images/${lineno}.jpg`, base64Str, { encoding: "base64" });
  });
// fs.readFile("base64.txt", )
// const inputBase64 = argv[1];
// const base64Str = inputBase64.replace("data:image/jpeg;base64,","");

// fs.promises.writeFile("test.jpeg", base64Str, { encoding: "base64" });
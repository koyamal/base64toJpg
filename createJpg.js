const fs = require('fs');
const readline = require('readline');

const headText = process.argv[2];

if(!headText) {
  console.log("入力エラー: README.mdをご確認し、再度実行してください。");
  return;
}

const createJpg = async () => {
  fs.mkdir(`images/${headText}`, (err) => {
    if(err) {
      console.log(err);
      return;
    }

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
      fs.promises.writeFile(`images/${headText}/${headText}_${lineno}.jpg`, base64Str, { encoding: "base64" });
    });

    console.log("完了しました。");
  });
};

createJpg();
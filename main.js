const fs = require('node:fs/promises');
const readline = require('readline');

const headText = process.argv[2];

// 引数がない場合は終了する。
if (!headText) {
  console.log("コマンドライン引数を与えてください。詳しくはREADME.mdをご確認ください。");
  return;
}

// Jpgファイルを作成する関数
const createJpg = async () => {
  await fs.mkdir(`images/${headText}`);

  const fd = await fs.open(`images/${headText}.txt`);

  const stream = fd.createReadStream();

  const rl = readline.createInterface({
    input: stream,
  });

  const line_counter = ((i = 0) => {
    return () => {
      return ++i;
    }
  })();

  rl.on('line', async (lineString, lineno = line_counter()) => {
    const base64Str = lineString.replace("data:image/jpeg;base64,","");
    await fs.writeFile(`images/${headText}/${headText}_${lineno}.jpg`, base64Str, { encoding: "base64" });
  });
  
  console.log("完了しました。");
};

createJpg();
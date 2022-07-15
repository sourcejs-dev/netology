const fs = require("fs").promises;
const path = require("path");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).option("--file", {
  alias: "-f",
  type: "string",
}).argv;

const app = async (data) => {
  try {
    const { file } = data;
    if (!file)
      throw Error("Введите файл для логирования ввида: -f/--file example");

    const dir = `${path.join(__dirname)}/${file}.txt`;

    await fs.access(dir, fs.F_OK).catch((e) => {
      throw Error("Файл не найден");
    });

    const dataFile = await fs
      .readFile(dir, "utf-8")
      .then((res) => res.trim().split(`\n\n`));
    const countGames = dataFile.length;
    let countSuccessGame = 0;
    let countFailGame = 0;

    dataFile.forEach((item) => {
      const status = item.split("\n")[0].split(" ").pop();
      status === "Выиграно" ? (countSuccessGame += 1) : (countFailGame += 1);
    });

    console.log(`
      Всего партий: ${countGames}
      Выигрышных: ${countSuccessGame}
      Проигрышных: ${countFailGame}
      % выигранных партий: ${
        countSuccessGame / ((countSuccessGame + countFailGame) / 100)
      } 
    `);
  } catch (e) {
    console.log(`Приложение сломалось с ошибкой: ${e.stack}`);
    process.exit(1);
  }
};

app(argv);

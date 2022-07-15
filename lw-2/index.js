const fs = require("fs").promises;
const path = require("path");
const { default: readline } = require("readline-promise");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).option("--file", {
  alias: "-f",
  type: "string",
}).argv;
const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});
const getNumber = () => {
  const data = [1, 2];
  const result = data[Math.floor(Math.random() * data.length)];

  return result;
};

const app = async (argv) => {
  try {
    const { file } = argv;

    if (!file)
      throw Error("Введите файл для логирования ввида: -f/--file example");

    const dir = `${path.join(__dirname)}/${file}.txt`;

    // Есть ли файл
    await fs.access(dir, fs.F_OK).catch((e) => {
      fs.writeFile(dir, "", "utf-8");
    });

    let logs = "";
    let statusGame = null;
    let statusTerminal = true;
    let value = null;
    let randomValue = getNumber();

    while (statusTerminal) {
      value = await rlp.questionAsync("1 или 2:").then((res) => Number(res));

      if (!Number.isInteger(value) || (value !== 1 && value !== 2)) {
        console.log("Пожалуйста введите цифру 1 или 2");
      } else {
        if (value === randomValue) {
          statusGame = false;
          statusTerminal = false;
          logs = `Статус партий: Выиграно\nДата: ${new Date().toISOString()}\n\n`;
          console.log("Правильно! Игра завершена");
          await fs.appendFile(dir, logs, "utf-8");
        } else {
          randomValue = getNumber();
          logs = `Статус партий: Проиграно\nДата: ${new Date().toISOString()}\n\n`;
          console.log("Неправильно! Попробуй еще раз!");
          await fs.appendFile(dir, logs, "utf-8");
        }
      }
    }

    process.exit(1);
  } catch (e) {
    console.log(`Приложение сломалось с ошибкой: ${e.stack}`);
    process.exit(1);
  }
};

app(argv);

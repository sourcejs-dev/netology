const http = require("http");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const config = require("./config");

const argv = yargs(hideBin(process.argv)).option("--city", {
  alias: "-c",
  type: "string",
}).argv;

try {
  if (!config.API_KEY || config.API_KEY.length === 0)
    throw Error("Не указана Апи ключ в файле config.js");

  const api = `http://api.weatherstack.com/current?access_key=${config.API_KEY}`;
  const { city } = argv;
  if (!city) throw Error("Укажите пожалуйста город через -c/--city name");

  http
    .get(`${api}&query=${city}`, (res) => {
      const { statusCode } = res;
      if (statusCode !== 200) {
        console.log(`statusCode: ${statusCode}`);
        return;
      }

      res.setEncoding("utf8");
      let rowData = "";
      res.on("data", (chunk) => (rowData += chunk));
      res.on("end", () => {
        const data = JSON.parse(rowData);
        const { error } = data;

        if (error) {
          const { code } = error;
          switch (code) {
            case 615:
              console.error("Неизвестный город");
              return;

            default:
              console.error(info);
              return;
          }
        }

        const { country, name } = data.location;
        const {
          temperature,
          wind_speed: windSpeed,
          wind_degree: windDegree,
          wind_dir: windDir,
          humidity,
          cloudcover,
        } = data.current;

        const template = `
        Страна: ${country}, Город: ${name}
        Температура: ${temperature}
        Скорость ветра: ${windSpeed} км/ч
        Градусы ветра: ${windDegree}
        Направление ветра: ${windDir}
        `;

        console.log(template);
      });
    })
    .on("error", (err) => {
      console.log(`Ошибка: ${err.message}`);
    });
} catch (e) {
  console.log(`Приложение сломалось с ошибкой: ${e.stack}`);
  process.exit(1);
}

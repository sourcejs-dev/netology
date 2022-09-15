const moment = require("moment");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv))
  .option("--year", {
    alias: "-y",
    type: "number",
  })
  .option("--month", {
    alias: "-m",
    type: "number",
  })
  .option("--date", {
    alias: "-d",
    type: "number",
  }).argv;
const date = moment();
const getDateByArgs = (prefix, name, value) => {
  if (!prefix || !name || !value) throw Error("Некорректные параметры");
  if (!Number.isInteger(value))
    throw Error("Параметр value должен быть целым числом");

  if (prefix === "add") {
    switch (name) {
      case "year":
        return date.add(value, "years").format("YYYY-MM-DD");
      case "month":
        return date.add(value, "months").format("YYYY-MM-DD");
      case "date":
        return date.add(value, "days").format("YYYY-MM-DD");
    }
  }

  switch (name) {
    case "year":
      return date.subtract(value, "years").format("YYYY-MM-DD");
    case "month":
      return date.subtract(value, "months").format("YYYY-MM-DD");
    case "date":
      return date.subtract(value, "days").format("YYYY-MM-DD");
  }
};
const app = (data) => {
  const prefix = data["_"].length > 0 ? argv["_"][0] : false;

  if (
    Object.keys(data).includes("year") ||
    Object.keys(data).includes("month") ||
    Object.keys(data).includes("date")
  ) {
    Object.keys(data).forEach((item) => {
      switch (item) {
        case "year":
          console.log(
            prefix
              ? getDateByArgs(prefix, item, data[item])
              : date.format("YYYY")
          );
          break;
        case "month":
          console.log(
            prefix
              ? getDateByArgs(prefix, item, data[item])
              : date.format("MMMM")
          );
          break;
        case "date":
          console.log(
            prefix ? getDateByArgs(prefix, item, data[item]) : date.format("DD")
          );
          break;
      }
    });

    return true;
  }

  console.log(`Текущая дата: ${date.format("YYYY-MM-DD")}`);
};

app(argv);

const reader = require("readline-sync");

const app = async () => {
  const number = Math.floor(Math.random() * 100);
  const getMessage = (value) => {
    const item = Number(value);
    if (!Number.isInteger(item))
      return { message: "Пожалуйста введите целое число", status: true };

    if (item > number) return { message: "Меньше", status: true };
    if (item < number) return { message: "Больше", status: true };

    return { message: `Ты угадал число!🥳 Это было: ${number}`, status: false };
  };

  let status = true;

  console.log("Загадано число в диапазоне от 0 до 100");
  while (status) {
    const value = reader.question("Number: ");
    const data = getMessage(value);
    const { message } = data;

    console.log(message);

    data.status === status ? true : (status = false);
  }

  console.log("Игра завершена");
};

app();

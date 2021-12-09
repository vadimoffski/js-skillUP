//Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

let str1 = "Proin sociis natoque et magnis parturient montes mus";
let str2 = "Donec orci lectus aliquam est magnis";

const calculateEngravingPrice = function (message, pricePerWord) {
  let len = message.split(" ").length;
  let price = pricePerWord * len;
  console.log(price + "$");
};

calculateEngravingPrice(str1, 10);

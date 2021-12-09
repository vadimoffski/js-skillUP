//Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

let str1 = "The quick brown fox jumped over the lazy dog";
let str2 = "Google do a roll";
let str3 = "May the force be with you";

const findLongestWord = function (string) {
  let array = string.split(" ");
  let bigWord = "";
  for (let word of array) {
    if (word.length > bigWord.length) bigWord = word;
  }
  return bigWord;
};

console.log(findLongestWord(str3));

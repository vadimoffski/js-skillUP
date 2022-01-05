/*Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.
Добавь классу следующий функционал:
Геттер value - возвращает текущее значение поля _value
Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='
*/

class StringBuilder {
  constructor(...string) {
    this.string = string;
  }
  get value() {
    return this.string.join("");
  }
  append(str) {
    this.string.push(str);
  }
  prepend(str) {
    this.string.unshift(str);
  }
  pad(str) {
    this.string.unshift(str);
    this.string.push(str);
  }
}

const builder = new StringBuilder(".");
builder.append("^");
console.log(builder.value); // '.^'
builder.prepend("^");
console.log(builder.value); // '^.^'
builder.pad("=");
console.log(builder.value); // '=^.^='

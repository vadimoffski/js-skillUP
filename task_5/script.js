/*
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/
let input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

class CreateText {
  constructor(input, output) {
    this.input = input;
    this.output = output;
  }
  onChange = (event) => {
    event.target.value
      ? (this.output.textContent = event.target.value)
      : (this.output.textContent = "незнакомец");
  };
  addListeners = () => {
    this.input.addEventListener("input", this.onChange);
  };
}

let myName = new CreateText(input, output);
myName.addListeners();

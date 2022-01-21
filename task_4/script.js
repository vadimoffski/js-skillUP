/*
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/
const textValue = document.querySelector("#value");
const counter = document.querySelector("#counter");
let counterValue = 0;

class Calculator {
  constructor(value, counter, text) {
    this.value = value;
    this.counter = counter;
    this.text = text;
  }
  increment = (event) => {
    if (event.target.nodeName !== "BUTTON") {
      return;
    }
    if (event.target.dataset.action === "increment") {
      this.value += 1;
      this.text.textContent = this.value;
    }
  };
  decrement = (event) => {
    if (event.target.nodeName !== "BUTTON") {
      return;
    }
    if (event.target.dataset.action === "decrement") {
      this.value -= 1;
      this.text.textContent = this.value;
    }
  };
  addListeners = () => {
    this.counter.addEventListener("click", this.increment);
    this.counter.addEventListener("click", this.decrement);
  };
}

let myCounter = new Calculator(counterValue, counter, textValue);
myCounter.addListeners();

// const increment = (event) => {
//   let btn = event.target.dataset;
//   if (btn.action === "increment") {
//     counterValue += 1;
//     span.textContent = counterValue;
//   }
// };
// const decrement = (event) => {
//   let btn = event.target.dataset;
//   if (btn.action === "decrement") {
//     counterValue -= 1;
//     span.textContent = counterValue;
//   }
// };

// counter.addEventListener("click", increment);
// counter.addEventListener("click", decrement);

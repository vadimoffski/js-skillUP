/*
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
*/
const inputRef = document.querySelector("#validation-input");
class inputValidation {
  constructor(input) {
    this.input = input;
  }
  onBlur = (event) => {
    if (event.target.value.length === Number(event.target.dataset.length)) {
      event.target.classList.add("valid");
      event.target.classList.remove("invalid");
    } else {
      event.target.classList.remove("valid");
      event.target.classList.add("invalid");
    }
  };
  addListener = () => {
    this.input.addEventListener("blur", this.onBlur);
  };
}

let myInput = new inputValidation(inputRef);
myInput.addListener();

// const onBlur = (event) => {
//   if (event.target.value.length === Number(event.target.dataset.length)) {
//     event.target.classList.add("valid");
//     event.target.classList.remove("invalid");
//   } else {
//     event.target.classList.remove("valid");
//     event.target.classList.add("invalid");
//   }
// };

// input.addEventListener("blur", onBlur);

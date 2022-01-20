import { keys } from "./keys.js";
let display = document.querySelector(".key");
let _num = document.querySelector(".key_number");
let _text = document.querySelector(".display_text");
let _key = document.querySelector("._key-num");
let _location = document.querySelector("._location");
let _which = document.querySelector("._which");
let _code = document.querySelector("._code");

const showDisplay = (event) => {
  _text.style.display = "none";
  display.style.display = "flex";
  let key = event.which || event.keyCode;
  _num.textContent = key;
  _which.textContent = key;
  _key.textContent = event.key;
  if (event.key === " ") {
    _key.textContent = "(Space character)";
  }
  _location.textContent = event.location;
  _code.textContent = event.code;
};

document.addEventListener("keydown", showDisplay);

import "./scss/style.scss";
import menu from "./js/menu.json";
import handleBarMenu from "./templates/menu.handlebars";
import localStorage from "./js/localStorage.js";
import { theme, setClassesLight, setClassesDark } from "./js/theme.js";
import refs from "./js/refs.js";

const { body, themeSwitchToggle, jsMenu } = refs;
const { LIGHT, DARK } = theme;
const { savedTheme } = localStorage;

let markup = handleBarMenu(menu);
refs.jsMenu.innerHTML = markup;

const swtitchToggle = () => {
  themeSwitchToggle.checked
    ? setClassesDark(body, LIGHT, DARK)
    : setClassesLight(body, LIGHT, DARK);
};

const memorizeTheme = () => {
  savedTheme === DARK
    ? ((themeSwitchToggle.checked = true), setClassesDark(body, LIGHT, DARK))
    : window.localStorage.setItem("theme", JSON.stringify(LIGHT));
};

window.addEventListener("load", memorizeTheme);
themeSwitchToggle.addEventListener("change", swtitchToggle);

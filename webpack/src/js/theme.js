export const theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

export const setClassesLight = (body, LIGHT, DARK) => {
  window.localStorage.setItem("theme", JSON.stringify(LIGHT));
  body.classList.add(LIGHT);
  body.classList.remove(DARK);
};

export const setClassesDark = (body, LIGHT, DARK) => {
  window.localStorage.setItem("theme", JSON.stringify(DARK));
  body.classList.add(DARK);
  body.classList.remove(LIGHT);
};

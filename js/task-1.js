const colors = ["red", "green", "violet", "gray", "blue", "yellow"];
const buttons = document.querySelector(".buttons");
let intervalId;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setTimer = (delay) => {
  intervalId = setInterval(() => {
    let random = randomIntegerFromInterval(0, 5);
    document.body.style.backgroundColor = colors[random];
  }, delay);
};

const setButton = (event) => {
  if (event.target.nodeName !== "BUTTON") return;
  const [currentAction, currentBtn, startBtn] = [
    event.target.dataset.action,
    event.target,
    event.currentTarget.querySelector("[data-action='start']"),
  ];
  if (currentAction === "start") {
    return (
      currentBtn.classList.add("disabled"),
      (currentBtn.disabled = true),
      setTimer(1000)
    );
  }
  if (currentAction === "stop") {
    return (
      startBtn.classList.remove("disabled"),
      (startBtn.disabled = false),
      clearInterval(intervalId)
    );
  }
};

buttons.addEventListener("click", setButton);

// const setText = (days, hours, minutes, seconds) => {
//   const values = document.querySelectorAll(".value");
//   values.forEach((value) => {
//     const data = value.dataset.value;
//     if (data === "days") value.textContent = days;
//     if (data === "hours") value.textContent = hours;
//     if (data === "mins") value.textContent = minutes;
//     if (data === "secs") value.textContent = seconds;
//   });
// };
// const setTimer = (promotionDate) => {
//   let promitionTimerId = setInterval(() => {
//     let dist = promotionDate - Date.now();
//     let days = Math.floor(dist / 1000 / 60 / 60 / 24);
//     let hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((dist % (1000 * 60)) / 1000);
//     setText(days, hours, minutes, seconds);
//     if (dist < 0) {
//       clearInterval(promitionTimerId);
//     }
//   }, 1000);
// };
// setTimer(promotion);

class Timer {
  constructor(promotion, values) {
    this.promotion = promotion;
    this.values = values;
  }
  setText = (days, hours, minutes, seconds) => {
    this.values.forEach((value) => {
      const data = value.dataset.value;
      if (data === "days") value.textContent = days;
      if (data === "hours") value.textContent = hours;
      if (data === "mins") value.textContent = minutes;
      if (data === "secs") value.textContent = seconds;
    });
  };
  setTimer = () => {
    let promitionTimerId = setInterval(() => {
      let dist = this.promotion - Date.now();
      let days = Math.floor(dist / 1000 / 60 / 60 / 24);
      let hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((dist % (1000 * 60)) / 1000);
      this.setText(days, hours, minutes, seconds);
      if (dist < 0) {
        clearInterval(promitionTimerId);
      }
    }, 1000);
  };
}

let date = new Date("December 26, 2022 00:00:00");
const values = document.querySelectorAll(".value");

let birthday = new Timer(date, values);
birthday.setTimer();

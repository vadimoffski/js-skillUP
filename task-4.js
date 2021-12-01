let credits = 35000;
let pricePerDroid = 3000;
let notEnough = "Недостаточно средств на счету!";

let input = Number(prompt("Введите количество дроидов: "));

if (input) {
  let totalPrice = input * pricePerDroid;
  let balance = credits - totalPrice;
  totalPrice > credits
    ? alert(notEnough)
    : alert(
        `Вы купили ${input} дроидов, на счету осталось ${balance} кредитов.`
      );
} else {
  alert("Отменено пользователем!");
}

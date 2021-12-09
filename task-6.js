let total = 0;

for (let i = 0; true; i++) {
  let input = prompt("Ввести число: ");
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else if (input) {
    total += Number(input);
  } else {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
}

const total = 100;
let ordered = 50;
// ordered = 20;
// ordered = 80;
// ordered = 100;
// ordered = 180;

let lackOfProduct = "На складе недостаточно твоаров!";
let available = "Заказ оформлен, с вами свяжется менеджер!";

if (total < ordered) {
  console.log(lackOfProduct);
} else {
  console.log(available);
}

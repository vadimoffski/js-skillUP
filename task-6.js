//Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).
//Вызовы функции для проверки работоспособности твоей реализации.

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = (allProdcuts, productName) => {
  for (let { name, price, quantity } of allProdcuts) {
    if (name === productName) {
      console.log(price * quantity);
    }
  }
  // return allProdcuts
  //   .filter((el) => el.name === productName)
  //   .forEach((el) => {
  //     console.log(el.price * el.quantity);
  //   });
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
calculateTotalPrice(products, "Радар"); // 5200

calculateTotalPrice(products, "Дроид"); // 2800

import users from "./users.js";

//Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = (users) => {
  return users.map(({ balance }) => balance).reduce((acc, el) => acc + el);
};
console.log(calculateTotalBalance(users)); // 20916

import users from "./users.js";

const getUserWithEmail = (users, email) => {
  return users.filter((item) => item.email === email)[0];
};
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
